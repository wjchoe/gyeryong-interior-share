function iot(){return `<h1>IoT 구성 및 조명·배선</h1><p class="mut">조명·스위치·센서 위치와 배선 구성입니다. 도면을 누르면 전체 화면으로 열려 확대·이동할 수 있습니다. 순서: 조명 기구 종류표 → E-04-2 배선 평면도 → E-04 배선 계통도 → 구역별 설명.</p><h2 class="grp" id="fixtures">조명 기구 종류표 — 배선 도면을 읽기 전에</h2><p>도면의 기호가 어떤 등인지, 전원이 어떻게 들어가는지 정리한 표입니다. W·lm은 제안값이고, 실제 제품·타공 크기·결선은 제품 선정 후 확정합니다.</p><div class="tblw"><table><thead><tr><th>종류</th><th>도면 기호</th><th>위치 · 수량</th><th>사양(제안)</th><th>전원 방식</th><th>조작</th></tr></thead><tbody><tr><td>거실 다운라이트</td><td>⊙ (A1~A4·B1~B4)</td><td>거실 8개 · 2×4 바둑판, A·B 교차</td><td>24V DC 정전압 색온도(CCT) 매입 다운라이트 · 10W·900lm급·확산 · 매입 깊이 30mm 안팎(천장 낮음) · 3선(공통+ / WW 전구색 / CW 주백색)</td><td>등마다 컨버터 없음 · 상시 220V → SMPS 24V 150W → Aqara LED 제어기(A = ch1, B = ch2) → 등</td><td>H2 디머 노브(무선): 누름 on/off · 돌림 = 켜진 채널만 디밍 · 두 번 = A 단독. 밝기·색온도는 LED 제어기가 조절(PWM)</td></tr><tr><td>일반 다운라이트 (220V)</td><td>⊙</td><td>주방 4 · 복도 2 · I-서재 메인 4 · G/H/안방 간접 각 2 · I-서재 간접 2 · I-서재 확장부 2 · 화장대 1 · 발코니 창고 1</td><td>주방 15W·1,300lm 확산 / I-서재 메인·복도·화장대 10W·900lm / 방 간접 7W·600lm 집중(I-서재는 3~5W 전구색) / 확장부 7W 확산 / 창고 7W</td><td>컨버터 세트(컨버터는 등 옆 천장 속) · 스위치·릴레이 220V → 컨버터 → 등</td><td>스위치·릴레이 on/off (디밍 없음)</td></tr><tr><td>복도 COB 다운라이트</td><td>⊙</td><td>복도 1 · 욕실B 서측벽 그림 비춤(벽에서 약 300)</td><td>COB 집중형 7W·500lm급</td><td>복도 T2 ch1 220V → 컨버터 → 등</td><td>안방 H2 4번(무선) · 야간 동선등</td></tr><tr><td>메인 천장등</td><td>⊗</td><td>G·H 각 1 / 안방 1 / 현관(센서등) · 발코니 B1·B2 / 욕실A·B</td><td>G·H 40W·4,000lm · 안방 50W·5,000lm · 현관·발코니 15W · 욕실A 20W·욕실B 15W(방습)</td><td>컨버터 내장 일체형 LED 천장등 · 220V 직결</td><td>스위치 on/off · 현관은 센서등(스위치 없음) · 발코니는 재실 센서</td></tr><tr><td>라인등 (24V)</td><td>━</td><td>주방 창 왼쪽 → 코너 → 수전까지 한 줄(상부장 하부) · 안방 장 구역 가벽 쪽</td><td>24V 정전압 LED 바/라인 10W·900lm급(구간 길이로 산정)</td><td>주방: SMPS 24V 60W(상부장 위) · 안방 장 구역: SMPS + Aqara LED 제어기</td><td>주방 H2 2번(1번 누를 때 같이 켜짐) · 안방 장 구역 재실 센서</td></tr><tr><td>펜던트</td><td>◉</td><td>식탁 위 1 · 거실 확장부 1</td><td>15W·1,200lm급·집중 · 컨버터 내장</td><td>식탁: 주방 H2 ch3 · 거실 확장부: I-서재 확장부 T2 ch2 — 220V 직결</td><td>주방 H2 3번 · 거실 S1 Plus 1번(무선)</td></tr><tr><td>벽등</td><td>◒</td><td>욕실A 세면대 위 1 · 욕실B 변기 위 1</td><td>7W·600lm급 · 방습형</td><td>욕실 H2 ch2 220V 직결</td><td>욕실A·B H2 2번</td></tr><tr><td>실링팬 · 환풍기</td><td>팬 · ⊞</td><td>실링팬 2(거실·I-서재) · 욕실 환풍기 2</td><td>—</td><td>220V 직결</td><td>거실 H1 2구 1번 · I-서재 H2 3번 · 욕실 H2 3번</td></tr></tbody></table></div><div style="border-left:4px solid #888;background:#f7f7f4;padding:10px 14px;margin:0 0 18px;font-size:14px;line-height:1.7"><b>컨버터란?</b> LED는 220V로 바로 켜지지 않아 220V를 저전압 직류로 바꾸는 장치가 필요합니다. 일반 다운라이트는 컨버터 세트로 오고, 전기는 <b>스위치 → 컨버터 → 등</b> 순서로 갑니다. 평면도에는 등만 그리고, 이 순서는 E-04 계통도에 그렸습니다. 메인 천장등·펜던트는 컨버터가 등 안에 들어 있습니다.<br><b>거실 다운라이트에는 컨버터가 없습니다.</b> 등마다 컨버터를 다는 대신, 천장 점검구의 SMPS 하나가 220V를 24V로 바꾸고 Aqara LED 제어기가 8개 등을 A/B 두 묶음으로 나눠 밝기와 색온도를 조절합니다. 그래서 거실 등은 ‘24V 정전압 입력, 컨버터 없음’ 제품이어야 하고, 220V용 다운라이트나 정전류 모듈은 쓸 수 없습니다.</div>
<p class="tools"><b>출력:</b> <a href="assets/print/조명배선도_세트.pdf?v=${V}" target="_blank" rel="noopener">조명 배선도 세트 PDF (A3 3쪽: E-04-2 · E-04 2쪽)</a> — 열어서 인쇄하면 A3 한 장에 한 도면씩 맞춰 나옵니다. A4로 인쇄할 때는 "용지에 맞춤"을 고르세요.</p><h2 class="grp" id="e04b">E-04-2 조명 배선 평면도</h2><p>E-04 계통도를 평면 위에 그린 배선 평면도입니다. 분전함(현관 신발장 안 12시 벽 — 그 칸은 선반 없이 점검 공간)에서 복도 천장 간선(빨강 = 전등1, 파랑 = 전등2)이 각 스위치·릴레이·SMPS로 갈라집니다. 거실·안방 장 구역은 상시 220V → SMPS → 24V → LED 제어기 → 조명 순서이고, 거실 A1~A4 / B1~B4도 다른 방처럼 등에서 등으로 이어 그렸습니다. 같은 선에 이어진 등은 모두 병렬 연결입니다(등 단자에서 다음 등으로 넘김). 220V 다운라이트의 컨버터는 평면도에 따로 그리지 않습니다(전기 순서는 E-04 계통도: 스위치 → 컨버터 → 등). 선은 연결 관계(개념)이고 실제 배관·심수·전선 굵기는 전기 업체가 설계합니다. 버튼 동작 규칙·전기 시공 요구사항은 E-04 하단 표를 따릅니다.</p><div class="plan sheet"><div class="wrap"><img class="zimg" src="assets/iot/plan-wiring-plan-e04b.svg?v=${V}" alt="E-04-2 조명 배선 평면도"></div></div><div class="tools"><a href="assets/iot/plan-wiring-plan-e04b.svg?v=${V}" target="_blank" rel="noopener">새 창에서 원본 열기</a> · <a href="assets/print/E-04-2_조명배선평면도.pdf?v=${V}" target="_blank" rel="noopener">PDF 출력(A3)</a></div><h2 class="grp" id="e04">E-04 조명 배선 계통도</h2><p>분전함 차단기(전등1·전등2) → 스마트 스위치·릴레이·LED 제어기 → 등기구 연결을 회로별로 정리한 계통도입니다. 중성선 필요 여부, SMPS·컨버터 위치, 24V 라인 구간, 배선 주의사항(1.5sq 연선·220V/24V 분리 배관·돌입 전류)을 함께 적었습니다. 실제 배선 경로와 차단기 번호는 전기 업체가 설계합니다.</p><div class="plan sheet"><div class="wrap"><img class="zimg" src="assets/iot/plan-wiring-e04.svg?v=${V}" alt="E-04 조명 배선 계통도"></div></div><div class="tools"><a href="assets/iot/plan-wiring-e04.svg?v=${V}" target="_blank" rel="noopener">새 창에서 원본 열기</a> · <a href="assets/print/E-04_조명배선계통도.pdf?v=${V}" target="_blank" rel="noopener">PDF 출력(A3)</a></div><h2 class="grp" id="wiring-zones">구역별 배선 설명 — 전기가 가는 길 / 버튼 신호가 가는 길</h2>
<p class="cap">읽는 법 — 유선 = 스위치 릴레이가 전기를 직접 끊고 넣음(허브 없이도 동작) · 무선 = 신호만 보냄(M3 로컬 자동화 필요) · 컨버터 = 220V를 LED용 저전압 직류로 바꾸는 장치(다운라이트 컨버터 세트, 등 옆 천장 속에 둠) · SMPS = 220V → 24V 변환. 같은 회로의 등기구는 병렬 접속. 무선 경로는 실물 시험(H2 노브·디커플·M3 자동화) 후 최종 확정.</p>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">거실 (L1·L2)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">① 조명에 전기를 공급하는 경로

분전함 전등1 · 220V 상시전원 (스위치를 거치지 않음)
        │
        ▼
  SMPS 24V 150W  — 거실 천장 점검구
  220V AC → 24V DC 변환
        │  24V
        ▼
  Aqara LED 제어기 1개 (듀얼 색온도 모드)
        ├── A 출력(ch1) → A1·A2·A3·A4 병렬 연결
        └── B 출력(ch2) → B1·B2·B3·B4 병렬 연결

각 그룹은 공통+ · WW(전구색) · CW(주백색) 3심 배선
※ 실제 단자명·극성은 선정 제품 결선도 기준
※ 등기구 = 24V 정전압 CCT 다운라이트(등마다 컨버터 없음)

② 벽에서 조작하는 경로 (조명 전원은 끊지 않음)

H2 디머 노브 ──무선──▶ M3 ──무선──▶ LED 제어기
 (L·N만 연결,                          ├── A그룹 제어
  부하 단자 비움)                       └── B그룹 제어
   · 누름   = A/B 채널 on/off
   · 두 번  = A 단독 장면
   · 돌림   = 켜진 채널만 디밍

③ 거실 패널 H1 2구

분전함 전등1 220V → H1 2구
                     ├── 1번: 유선 출력 → 실링팬 전원 on/off
                     └── 2번: 무선(디커플) → M3 → A 단독 장면
                              (ch2 출력 단자는 비움)

④ S1 Plus 월패드 (같은 월패널, 2연 박스)

분전함 전등1 220V 상시 L·N → S1 Plus
                         ├── 1번: 무선(디커플) → M3 → I-서재 확장부 T2 ch2 → 거실 확장부 펜던트 on/off
                         ├── 화면·무선 버튼 → M3 → 거실 A/B·장면·현관 응대
                         └── 릴레이 출력: 미결선(부하 연결 안 함)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">복도 (AL T2)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">① 전기 공급

분전함 전등1 · 220V 상시전원
        │
        ▼
  Aqara T2 듀얼 릴레이 — 복도 천장 점검구
        ├── ch1 → 컨버터 → 복도 COB 다운라이트 1 (욕실B 서측벽 그림 비춤)
        └── ch2 → 컨버터 → 복도 다운라이트 2

② 조작 (벽 버튼은 모두 무선)

주방 H2 4번 ──무선──▶ M3 ──▶ T2 ch2 (복도 다운라이트)
안방 H2 4번 ──무선──▶ M3 ──▶ T2 ch1 (복도 COB · 야간 동선등)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">주방 (K1·K2·K3)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등1 220V → 주방 H2 4버튼·3채널 (주방 좌측벽 아래쪽 끝, 복도 쪽)
                     ├── ch1: 유선 → 컨버터 ×4 → 주방 다운라이트 4
                     ├── ch2: 유선 → SMPS 24V 60W(상부장 위) → 주방 라인등(24V, 창 왼쪽 → 코너 → 수전까지)
                     ├── ch3: 유선 → 식탁 펜던트
                     └── 4번: 무선 → M3 → 복도 T2 ch2 (복도 다운라이트)

M3 자동화: ch1이 켜지면 ch2도 켜짐 / ch1이 꺼지면 ch2도 꺼짐
ch2 버튼은 라인등만 단독 on/off</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">G-침실 · H-옷방 (G·H)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → H2 2버튼·2채널 (G 문 옆 / H 입구 옆 — H-옷방은 문 없음)
                     ├── ch1: 유선 → 메인 천장등 (컨버터 내장)
                     └── ch2: 유선 → 컨버터 → 간접 다운라이트 2 (창가 북측벽 쪽)

※ 간접등은 on/off만 됨(디밍 안 됨)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">I-서재 (I) · 확장부 (IX)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → I-서재 H2 4버튼·3채널 (I-서재 문 옆)
                     ├── ch1: 유선 → 컨버터 ×4 → 메인 다운라이트 4 (메인 천장등은 실링팬과 간섭돼 삭제)
                     ├── ch2: 유선 → 컨버터 → 간접 다운라이트 2 (동측벽 · 3~5W 전구색 고정 밝기)
                     ├── ch3: 유선 → 실링팬 전원 on/off (방 중심)
                     └── 4번: 무선 → M3 → 확장부 T2 릴레이 ch1 (확장부 다운라이트 on/off)

분전함 전등2 220V 상시 → 확장부 천장 점검구 Aqara T2 릴레이 (벽 스위치 없음)
                     ├── ch1: 유선 → 컨버터 → 확장부 다운라이트 2
                     └── ch2: 유선(막음 가벽 넘어) → 거실 확장부 펜던트 — 거실 S1 Plus 1번(무선)으로 on/off

확장부 재실 센서 ──무선──▶ M3 ──▶ T2 ch1 (들어가면 켜짐, 비면 꺼짐)
I-서재 H2 4번 ──무선──▶ M3 ──▶ T2 ch1 (수동 on/off)
※ M3가 멈추면 센서·4번 모두 멈춤 — 확장부에 벽 스위치 없음</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">안방 (F) · 화장대</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → 안방 H2 4버튼·3채널 (안방 문 옆)
                     ├── ch1: 유선 → 메인 천장등
                     ├── ch2: 유선 → 컨버터 → 간접 다운라이트 2 (침대 발치)
                     ├── ch3: 유선 → 컨버터 → 화장대 다운라이트
                     └── 4번: 무선 → M3 → 복도 T2 ch1 (복도 COB)

욕실B H2 4번 ──무선──▶ M3 ──▶ 안방 ch3 (화장대 다운라이트)
→ 화장대 등은 안방 3번(유선)·욕실B 4번(무선) 두 곳에서 켬</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">욕실A (BA)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → 욕실A H2 4버튼·3채널 (욕실 문 옆, 복도 쪽)
                     ├── ch1: 유선 → 메인등 (방습)
                     ├── ch2: 유선 → 보조 벽등 (세면대 위 동측벽, 방습형 220V)
                     ├── ch3: 유선 → 환풍기
                     └── 4번: 무선 → 여분

재실 센서 ──무선──▶ M3 ──▶ 조명·환풍기 자동화(예정)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">욕실B · 안방 욕실 (BB)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → 욕실B H2 4버튼·3채널 (욕실 문 옆, 안방 쪽)
                     ├── ch1: 유선 → 메인등 (방습)
                     ├── ch2: 유선 → 보조 벽등 (변기 위 북측벽, 방습형 220V)
                     ├── ch3: 유선 → 환풍기
                     └── 4번: 무선 → M3 → 안방 ch3 (화장대 다운라이트)

재실 센서 ──무선──▶ M3 ──▶ 조명·환풍기 자동화(예정)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">안방 장 구역 (D1)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">① 전기 공급 (벽 스위치 없음)

분전함 전등2 · 220V 상시전원
        │
        ▼
  SMPS 24V — 장 구역 상부 점검 공간 (가벽~우측 벽 1,300)
        │  24V
        ▼
  Aqara LED 제어기 → 장 구역 라인등 (24V)

② 조작

재실 센서 ──무선──▶ M3 ──▶ LED 제어기 on/off (들어가면 켜짐, 나가면 꺼짐)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">현관 (E1) · 발코니 (B1·B2)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">현관: 분전함 전등1 220V 상시 → 현관 센서등(센서 내장형) — 벽 스위치 없음, 감지 점등·지연 소등

발코니: 분전함 220V → H2 2버튼·1채널
                ├── 1번: 유선 → 발코니등(B1은 창고 다운라이트 포함 — 다운라이트는 컨버터 경유)
                └── 2번: 무선 → 여분 (나중에 장면 연결)

발코니 재실 센서 ──무선──▶ M3 ──▶ 1번 릴레이 자동 점등·지연 소등</pre></details>
`;}
