#!/usr/bin/env python3
"""조명 배선도 출력용 PDF 생성 (A3, 여백 10mm, 도면 비율 유지·가운데 정렬).

사용: python3 tools/make_print.py   (저장소 루트에서)
결과: assets/print/*.pdf  — E-01, E-04-2, E-04(2쪽), 세트
"""
import re, subprocess, tempfile, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "assets/iot"
OUT = ROOT / "assets/print"
MM = 72 / 25.4  # pt per mm
A3 = (420, 297)  # landscape mm
MARGIN = 10

# (출력 파일, 원본 svg, 방향, 세로 분할 수)
SHEETS = [
    ("E-01_조명평면도.pdf", "plan-lighting-e01.svg", "landscape", 1),
    ("E-04-2_조명배선평면도.pdf", "plan-wiring-plan-e04b.svg", "portrait", 1),
    ("E-04_조명배선계통도.pdf", "plan-wiring-e04.svg", "portrait", 2),
]


def viewbox(svg):
    m = re.search(r'viewBox="([-\d.\s]+)"', svg)
    return [float(v) for v in m.group(1).split()]


def render(svg_text, vb, orient, out_pdf):
    pw, ph = A3 if orient == "landscape" else A3[::-1]
    x, y, w, h = vb
    s = re.sub(r'viewBox="[^"]*"', f'viewBox="{x} {y} {w} {h}"', svg_text, count=1)
    s = re.sub(r'(<svg[^>]*?)\swidth="[^"]*"', r"\1", s, count=1)
    s = re.sub(r'(<svg[^>]*?)\sheight="[^"]*"', r"\1", s, count=1)
    s = s.replace("<svg", f'<svg width="{w}" height="{h}"', 1)
    aw, ah = pw - 2 * MARGIN, ph - 2 * MARGIN
    k = min(aw / w, ah / h)
    dw, dh = w * k, h * k
    left, top = (pw - dw) / 2, (ph - dh) / 2
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False) as t:
        t.write(s)
    subprocess.run([
        "rsvg-convert", "-f", "pdf", "-b", "white",
        "--page-width", f"{pw}mm", "--page-height", f"{ph}mm",
        "-w", f"{dw:.2f}mm", "-h", f"{dh:.2f}mm",
        "--left", f"{left:.2f}mm", "--top", f"{top:.2f}mm",
        "-o", str(out_pdf), t.name], check=True)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    made = []
    with tempfile.TemporaryDirectory() as tmp:
        for name, src, orient, parts in SHEETS:
            svg = (SRC / src).read_text(encoding="utf-8")
            x, y, w, h = viewbox(svg)
            pages = []
            for i in range(parts):
                ph = h / parts
                ov = 40 if parts > 1 else 0  # 쪽 경계 겹침
                y0 = y + i * ph - (ov if i else 0)
                hh = ph + (ov if i else 0) + (ov if i < parts - 1 else 0)
                p = pathlib.Path(tmp) / f"{src}-{i}.pdf"
                render(svg, (x, y0, w, hh), orient, p)
                pages.append(str(p))
            out = OUT / name
            subprocess.run(["pdfunite", *pages, str(out)] if len(pages) > 1
                           else ["cp", pages[0], str(out)], check=True)
            made.append(str(out))
    subprocess.run(["pdfunite", *made, str(OUT / "조명배선도_세트.pdf")], check=True)
    print("ok:", *[pathlib.Path(m).name for m in made], "조명배선도_세트.pdf")


if __name__ == "__main__":
    main()
