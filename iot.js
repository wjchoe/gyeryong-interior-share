function iot(){return `<h1>IoT 구성 및 조명·배선</h1><p class="mut">조명·스위치·센서 위치와 배선 구성입니다. 도면을 누르면 전체 화면으로 열려 확대·이동할 수 있습니다. 순서: 조명 기구 종류표 → E-04-2 배선 평면도 → E-04 배선 계통도 → 구역별 설명.</p><h2 class="grp" id="fixtures">조명 기구 종류표 — 배선 도면을 읽기 전에</h2><p>도면의 기호가 어떤 등인지, 전원이 어떻게 들어가는지 정리한 표입니다. W는 제안값이고, 실제 제품·타공 크기·결선은 제품 선정 후 확정합니다.</p><div class="tblw"><table><thead><tr><th>종류</th><th>도면 기호</th><th>위치 · 수량</th><th>사양(제안)</th><th>전원 방식</th><th>조작</th></tr></thead><tbody><tr><td>다운라이트 (전체)</td><td>⊙ 점선 원 DL = 구역</td><td>거실 메인·보조 · 주방 · 복도 · I-서재 메인·간접 · I-서재 확장부 · 장 구역 · 화장대 — <b>개수·위치는 현장에서 결정</b>, 도면은 채널별 구역만</td><td>컨버터 일체형 220V 매입 다운라이트(제안: 주방 15W급 · 그 외 7~10W급)</td><td>스위치·릴레이 220V → 등 직결(별도 컨버터·SMPS 없음)</td><td>스위치 on/off만 — <b>디밍·색온도 조절 없음</b></td></tr><tr><td>복도 COB 다운라이트</td><td>⊙</td><td>복도 벽쪽 1 · 욕실B 서측벽 그림 비춤</td><td>COB 집중형 7W급 · 컨버터 일체형</td><td>복도 T2 ch2 220V → 등</td><td>안방 H2 4번(무선) · 야간 동선등</td></tr><tr><td>메인 천장등</td><td>⊗</td><td>G·H 각 1 / 안방 1 / 현관(센서등) · 발코니 B1·B2 / 욕실A·B</td><td>G·H 40W · 안방 50W · 현관·발코니 15W · 욕실 15~20W(방습)</td><td>컨버터 내장 일체형 · 220V 직결</td><td>스위치 on/off · 현관은 센서등(스위치 없음) · 발코니는 재실 센서</td></tr><tr><td>라인등 (24V)</td><td>━</td><td>주방 창 왼쪽 → 코너 → 수전까지 한 줄(상부장 하부)</td><td>24V 정전압 LED 바</td><td>주방 H2 ch2 → SMPS 24V 60W(상부장 위) → 라인등</td><td>주방 H2 2번(1번 누를 때 같이 켜짐)</td></tr><tr><td>펜던트</td><td>◉</td><td>식탁 위 1 · 거실 확장부 1 · G-침실 창 오른쪽 끝 아래 1</td><td>15W급 · 컨버터 내장</td><td>220V 직결</td><td>식탁 = 주방 H2 3번 · 거실 확장부 = S1 Plus 터치2 · G-침실 = H2 2번</td></tr><tr><td>벽등</td><td>◒</td><td>욕실A 세면대 위 1 · 욕실B 세면대 위 동측벽 1 · 안방 가벽 중앙 아래 1</td><td>7W급 · 욕실은 방습형</td><td>220V 직결</td><td>욕실A·B H2 2번 · 안방 H2 2번</td></tr><tr><td>실링팬 · 환풍기</td><td>팬 · ⊞</td><td>실링팬 2(거실·I-서재) · 욕실 환풍기 2</td><td>—</td><td>220V 직결</td><td>거실 S1 Plus 터치1 · I-서재 H2 3번 · 욕실 H2 3번</td></tr></tbody></table></div><div style="border-left:4px solid #888;background:#f7f7f4;padding:10px 14px;margin:0 0 18px;font-size:14px;line-height:1.7"><b>컨버터 일체형 기준</b> — 다운라이트는 모두 컨버터가 등 안에 들어 있는 220V 제품으로 정했습니다. 스위치 릴레이에서 등으로 바로 가므로 별도 컨버터·SMPS·LED 드라이버가 없고, 디밍과 색온도 조절은 하지 않습니다(on/off만). 24V가 남은 곳은 주방 라인등(SMPS 상부장 위) 하나입니다.</div>
<p class="tools"><b>출력:</b> <a href="assets/print/조명배선도_세트.pdf?v=${V}" target="_blank" rel="noopener">조명 배선도 세트 PDF (A3 3쪽: E-04-2 · E-04 2쪽)</a> — 열어서 인쇄하면 A3 한 장에 한 도면씩 맞춰 나옵니다. A4로 인쇄할 때는 "용지에 맞춤"을 고르세요.</p><h2 class="grp" id="e04b">E-04-2 조명 배선 평면도</h2><p>E-04 계통도를 평면 위에 그린 배선 평면도입니다. 분전함 전원선은 생략하고 <b>각 방 스위치 → 등 연결만</b> 그렸습니다. 다운라이트는 개수·위치를 현장에서 정하므로 채널별 구역(점선 원 DL)으로만 표시했습니다. 선은 스위치에서 방 안쪽으로 먼저 들어간 뒤 채널마다 다른 레인으로 그려 겹치지 않게 했고, 무선 버튼과 짝지어진 등은 점선(복도 2곳 · 화장대)으로 이었습니다. 복도 T2는 상시 220V 입력이 필요합니다. 1구 스위치(옷방·확장부·장 구역·발코니·현관 일괄)는 Sonoff ZBM5입니다.</p><div class="plan sheet"><div class="wrap"><img class="zimg" src="assets/iot/plan-wiring-plan-e04b.svg?v=${V}" alt="E-04-2 조명 배선 평면도"></div></div><div class="tools"><a href="assets/iot/plan-wiring-plan-e04b.svg?v=${V}" target="_blank" rel="noopener">새 창에서 원본 열기</a> · <a href="assets/print/E-04-2_조명배선평면도.pdf?v=${V}" target="_blank" rel="noopener">PDF 출력(A3)</a></div><h2 class="grp" id="e04">E-04 조명 배선 계통도</h2><p>분전함 차단기(전등1·전등2) → 스마트 스위치·릴레이 → 등기구 연결을 회로별로 정리한 계통도입니다. 유선(릴레이) 버튼과 무선 버튼(M3 로컬 자동화)을 구분해 그렸고, 중성선·상시 전원·24V 구간(주방 라인등만)·전기 시공 요구사항을 함께 적었습니다. 실제 배선 경로와 차단기 번호는 전기 업체가 설계합니다.</p><div class="plan sheet"><div class="wrap"><img class="zimg" src="assets/iot/plan-wiring-e04.svg?v=${V}" alt="E-04 조명 배선 계통도"></div></div><div class="tools"><a href="assets/iot/plan-wiring-e04.svg?v=${V}" target="_blank" rel="noopener">새 창에서 원본 열기</a> · <a href="assets/print/E-04_조명배선계통도.pdf?v=${V}" target="_blank" rel="noopener">PDF 출력(A3)</a></div><h2 class="grp" id="wiring-zones">구역별 배선 설명 — 전기가 가는 길 / 버튼 신호가 가는 길</h2>
<p class="cap">읽는 법 — 유선 = 스위치 릴레이가 전기를 직접 끊고 넣음(허브 없이도 동작) · 무선 = 신호만 보냄(M3 로컬 자동화 필요) · 다운라이트는 컨버터 일체형 220V(디밍 없음) · SMPS = 220V → 24V 변환(주방 라인등만) · 같은 회로의 등기구는 병렬 접속 · 1구 = Sonoff ZBM5(Zigbee → HA).</p>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">거실 (L1 · S1 Plus)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등1 220V → 거실 H1 2구 (릴레이 2채널)
                     ├── 1번: 유선 → 거실 메인 다운라이트 (개수 현장 결정)
                     └── 2번: 유선 → 거실 보조 다운라이트 (개수 현장 결정)

분전함 전등1 220V 상시 L·N → S1 Plus (2연 박스)
                     ├── 터치1: 유선(릴레이) → 거실 실링팬 on/off
                     ├── 터치2: 유선(릴레이) → 거실 확장부 펜던트 on/off
                     └── 화면: 장면·현관 응대 (M3 기기 표시 범위 시험)

※ 다운라이트는 컨버터 일체형 220V — 거실 SMPS·LED 드라이버·H2 디머 없음, 디밍·색온도 조절 없음</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">복도 (AL T2)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">① 전기 공급

분전함 전등1 · 220V 상시전원 (벽 스위치 거치지 않음)
        │
        ▼
  Aqara T2 듀얼 릴레이 — 복도 천장 점검구
        ├── ch1 → 복도 다운라이트 (왼쪽, 팬트리 문 피해서)
        └── ch2 → 복도 COB 다운라이트 (벽쪽, 욕실B 서측벽 그림 비춤)

② 조작 (벽 버튼은 모두 무선)

주방 H2 4번 ──무선──▶ M3 ──▶ T2 ch1 (복도 다운라이트)
안방 H2 4번 ──무선──▶ M3 ──▶ T2 ch2 (복도 COB · 야간 동선등)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">주방 (K1·K2·K3)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등1 220V → 주방 H2 4버튼·3채널 (주방 우측벽 아래쪽 끝, 복도 쪽)
                     ├── ch1: 유선 → 주방 다운라이트 (개수 현장 결정)
                     ├── ch2: 유선 → SMPS 24V 60W(상부장 위) → 주방 라인등(24V)
                     ├── ch3: 유선 → 식탁 펜던트
                     └── 4번: 무선 → M3 → 복도 T2 ch1 (복도 다운라이트)

M3 자동화: ch1이 켜지면 ch2도 켜짐 / ch1이 꺼지면 ch2도 꺼짐
ch2 버튼은 라인등만 단독 on/off</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">G-침실 · H-옷방 (G·H)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">G-침실: 분전함 전등2 220V → H2 2버튼·2채널 (문 옆)
                     ├── ch1: 유선 → 메인 천장등
                     └── ch2: 유선 → 펜던트 (북측창 오른쪽 끝 아래)

H-옷방: 분전함 전등2 220V → Sonoff ZBM5 1구 (입구 옆, 문 없음)
                     └── ch1: 유선 → 메인 천장등</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">I-서재 (I) · 확장부 (IX)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → I-서재 H2 4버튼·3채널 (I-서재 문 옆)
                     ├── ch1: 유선 → 메인 다운라이트 (개수 현장 결정)
                     ├── ch2: 유선 → 간접 다운라이트 (개수 현장 결정)
                     ├── ch3: 유선 → 실링팬 전원 on/off (방 중심)
                     └── 4번: 무선 → 여분 (비워 둠)

분전함 전등2 220V → 확장부 Sonoff ZBM5 1구 (확장부 안쪽 벽, 입구 옆 가벽)
                     └── ch1: 유선 → 확장부 다운라이트 (개수 현장 결정)

확장부 재실 센서 ──무선──▶ M3 ──▶ 확장부 스위치 ch1 (자동 점등·지연 소등)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">안방 (F) · 화장대 · 장 구역 (D1)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → 안방 H2 4버튼·3채널 (안방 문 옆)
                     ├── ch1: 유선 → 메인 천장등
                     ├── ch2: 유선 → 가벽 벽등 (가벽 중앙 아래, 침대 쪽)
                     ├── ch3: 유선 → 화장대 등(미확정)
                     └── 4번: 무선 → M3 → 복도 T2 ch2 (복도 COB)

욕실B H2 4번 ──무선──▶ M3 ──▶ 안방 ch3 릴레이 (화장대 등(미확정)) — T2·HA 불필요
→ 화장대 등은 안방 3번(유선)·욕실B 4번(무선) 두 곳에서 켬

분전함 전등2 220V → 장 구역 Sonoff ZBM5 1구 (왼쪽 가벽 안쪽 면)
                     └── ch1: 유선 → 장 구역 다운라이트 (개수 현장 결정)
※ 장 구역 라인등·SMPS·LED 제어기·재실 센서는 없앰</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">욕실A (BA)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → 욕실A H2 4버튼·3채널 (욕실 문 옆, 복도 쪽)
                     ├── ch1: 유선 → 메인등 (방습)
                     ├── ch2: 유선 → 보조 벽등 (세면대 위 동측벽, 방습형 220V)
                     ├── ch3: 유선 → 환풍기
                     └── 4번: 무선 → 여분

재실 센서 ──무선──▶ M3 ──▶ 조명·환풍기 자동화(예정)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">욕실B · 안방 욕실 (BB)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">분전함 전등2 220V → 욕실B H2 4버튼·3채널 (욕실 문 옆, 안방 쪽)
                     ├── ch1: 유선 → 메인등 (방습)
                     ├── ch2: 유선 → 보조 벽등 (세면대 위 동측벽, 방습형 220V)
                     ├── ch3: 유선 → 환풍기
                     └── 4번: 무선 → M3 → 안방 ch3 (화장대 등(미확정))

재실 센서 ──무선──▶ M3 ──▶ 조명·환풍기 자동화(예정)</pre></details>
<details open style="margin:.6rem 0"><summary style="font-weight:600;cursor:pointer">현관 (E1) · 발코니 (B1·B2)</summary><pre style="white-space:pre;overflow-x:auto;font-size:13px;line-height:1.55;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;margin:.4rem 0 0">현관: 분전함 전등1 220V 상시 → 현관 센서등(센서 내장형) — 벽 스위치 없음, 감지 점등·지연 소등
현관 일괄 스위치(남쪽 벽 중문 옆): Sonoff ZBM5 1구 · 릴레이 분리 — 누르면 HA가 전체 소등 (등 연결 없음)

발코니: 분전함 220V → Sonoff ZBM5 1구
                └── 1번: 유선 → 발코니등 (창고 안 등 없음)
  · B1 안방 앞 발코니 출입부 / B2 주방 안쪽 벽(발코니 문 D07 옆)

발코니 재실 센서 ──무선──▶ M3 ──▶ 1번 릴레이 자동 점등·지연 소등</pre></details>
<h2 class="grp" id="wiring-precheck">배관·타공 전 확인</h2><ol><li><b>실링팬·환풍기 릴레이 직결</b> — 거실 팬 = S1 Plus 터치1, 서재 팬·욕실 환풍기 = H2 ch3. 팬 모델별로 전원 복구 시 다시 도는지, 상시 전원이 필요한지, 릴레이가 모터 기동 부하를 허용하는지(H2 10A는 저항 부하 기준) 확인. 주방 K2 SMPS 60W의 돌입 전류도 H2 ch2 허용 범위 확인. H2 매립 박스 깊이 54mm 이상.</li><li><b>다운라이트 방식·타공</b> — 도면은 컨버터 일체형 기준. 천장 여유 35mm라 등 모델을 먼저 정하고 등·스프링·커넥터까지 넣어 보는 시험 후 타공. 컨버터 분리형(예: 앞서 본 28mm COB)을 쓰면 컨버터가 타공구로 들어가고 나중에 다시 뺄 수 있어야 함. 거실·서재는 팬 날개 회전 범위를 피해 등 위치를 잡고, 거실 보조만 켤 때와 메인·보조 모두 켤 때 밝기를 제품 lm·배광으로 확인.</li><li><b>복도 수동 점등</b> — 복도 일반등·COB 모두 무선 버튼 + 천장 점검구 T2라, 허브가 멈추면 벽에서 켤 방법이 없음(정전 복구 시 릴레이 OFF 설정). 복도 일반등 한 회로를 현관·중문 근처에서 수동으로 켤 방법을 전기팀과 결정 필요.</li><li><b>주방 K2 재실 센서 규칙</b> — 평면도에 센서가 있으나 동작이 미정. 예: 메인 꺼짐·어두울 때만 K2 자동 점등, 수동으로 켠 경우 자동 소등 여부.</li><li><b>거실 월패널</b> — S1 Plus는 벽매립형(릴레이 2채널) 기준, H1 2구와 맞붙여 매립. 소파·문 위치로 조작 위치를 먼저 정하고 실제 제품 브래킷으로 박스 위치 확정.</li><li><b>축척</b> — 출력 PDF는 A3에 맞춰 확대·축소되므로 E-04-2는 ‘축척 없음 · 기입 치수 기준’.</li></ol>
`;}
