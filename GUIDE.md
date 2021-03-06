# virus-invest 사용법
일반 운영측을 위해.

## 실시간 모의 투자 시스템 (live-investment-tool)

#### 설명
- virus-invest 는 `데모데이를 위한 실시간 모의 투자 시스템` 입니다.
- 웹 기반이기 때문에, 참가자들에게 별도의 앱 설치를 요구하지 않으며, 모바일로도 사용 가능합니다.
- 행사의 참가자들은 부여받은 `key` 값을 사용하여 시스템에 로그인하고, 주어진 투자금(1000만원)을 5팀에 분배하여 투자합니다.
- 행사의 참가자들과 주최 측은 결과를 실시간으로 확인할 수 있습니다.

#### 특징
- 참가자는 주어진 투자금(1000만원)을 5팀에게 `모두` 분배하여야 합니다. 즉, 투자액의 총합은 정확히 1000만원이어야 합니다.
- 중복 투표를 막기 위해, 개개인에게 `key` 값을 부여합니다. 이는 랜덤한 문자열이며, 인당 하나씩 지급되어야 합니다. 때문에, 행사 시작 전 발급되는 명찰 뒤에 넣어놓는게 좋습니다.

#### 접속
http://invest.virus.network/

#### 준비
- 개발자에게 행사 별로 다른 150여 개의 `key` 값을 받습니다. 운영측은 이를 참가자들의 명찰 뒷면에 미리 적어놓고, 참가자에게 인당 하나씩 배분합니다.
- 운영 측은 별도의 `key` 값을 갖고 있어, 혹시 문제가 발생할 경우 해당 사용자에게 별도의 `key` 값을 부여합니다.

#### 사용
- 데모데이가 시작되면, 참가자들에게 투자 링크와 사용법을 소개합니다.
- 참가자는 `이름` 과 부여 받은 `key` 값을 입력합니다. 이 때, 본 시스템은 참가자가 입력한 `key` 값이 사전 등록된 값인지를 확인합니다. `이름` 과 상관 없이, `key` 값이 사전 등록된 값이면(유효한 값이면), 정상적으로 로그인이 완료됩니다.
- 로그인에 성공할 시 `로그인 성공!` 알림이 뜨며, 투자 창이 활성화됩니다.
- 참가자는 5팀에 투자금을 배분한 뒤 `투자` 버튼을 클릭합니다. 그러면 투자가 완료됩니다.
- 참가자와 운영측은 모두 http://invest.virus.network/result 에서 실시간 결과를 확인할 수 있습니다. 위의 페이지를 메인 스크린에 띄워놓는다면, 실시간 투표에 대한 긴장감을 유지할 수 있습니다.

#### 관리
- http://invest.virus.network/list 페이지에 들어가면 어떤 `key` 를 받은 누가 어느 팀에 얼마를 투표했는지를 확인할 수 있고, <<<<< 삭제 >>>>> 할 수 있습니다.
- 즉, 이는 관리자 페이지이며, 참가자들에게 위의 링크는 공유되면 절대 안됩니다.
- 혹시 참가자가 투표 결과 번복을 원하여, 삭제 후 재접속을 원하는 경우에만 이를 사용합니다.
- 삭제를 하면 해당 `key` 값은 다시 사용할 수 있습니다.

#### 기본 안내
시스템에 접속한 모든 참가자들은 다음과 같은 안내문이 적힌 팝업 창을 확인할 수 있습니다.

```
1. 이름과 디렉터로부터 받은 key 값을 정확히 입력 후, 로그인 해주세요.
정확히 입력하였는데도 "등록되지 않은 사용자입니다!" 라는 메세지가 나오면 디렉터에게 알려주세요!
2. 로그인 완료 시 개인 당 1000만원의 투자금이 주어집니다.
1000만원을 5팀에 모두 분배하신 후, 투자 버튼을 눌러주세요.
투자금의 단위는 만원입니다. 즉, 투자금의 총합이 정확히 1000이 되어야 합니다.
3. 실시간 결과는 다음의 링크에서 확인하실 수 있습니다.
4. 기타 문제 발생 시 디렉터에게 알려주세요!

본 프로그램은 청년 창업 문화 확산을 위해 바이러스 네트워크가 제작하였습니다.
```

## 개발자
[@PJunhyuk](https://github.com/PJunhyuk) in [@virus-lab](https://github.com/virus-lab)

## login_key list

#### 강원 스타트업 파티

- 총 200개
- 모든 `key` 는 `virus` 후에 `5자리 수` 가 오는 형식입니다.
- 양 쪽에 "" 와 , 는 무시하세요.

```
"virus00000",
"virus83683",
"virus93670",
"virus12558",
"virus14830",
"virus12992",
"virus40552",
"virus21158",
"virus54791",
"virus60193",
"virus64032",
"virus42756",
"virus50256",
"virus58206",
"virus51854",
"virus34957",
"virus07323",
"virus06432",
"virus91230",
"virus22813",
"virus37315",
"virus51103",
"virus94064",
"virus13833",
"virus74268",
"virus32773",
"virus77025",
"virus36867",
"virus79309",
"virus01333",
"virus62673",
"virus81019",
"virus74911",
"virus66974",
"virus73196",
"virus84759",
"virus14591",
"virus66806",
"virus39044",
"virus78631",
"virus56420",
"virus29004",
"virus94140",
"virus61430",
"virus37959",
"virus08795",
"virus09910",
"virus28424",
"virus50239",
"virus56933",
"virus88798",
"virus78894",
"virus43364",
"virus00299",
"virus92637",
"virus11203",
"virus24929",
"virus95283",
"virus57164",
"virus99977",
"virus63404",
"virus39310",
"virus89892",
"virus59006",
"virus92764",
"virus41116",
"virus27582",
"virus44885",
"virus34739",
"virus85969",
"virus70586",
"virus71873",
"virus49199",
"virus68014",
"virus95289",
"virus98055",
"virus69236",
"virus72184",
"virus60297",
"virus21433",
"virus29780",
"virus64194",
"virus26771",
"virus41777",
"virus57212",
"virus89450",
"virus61451",
"virus35304",
"virus84681",
"virus15044",
"virus16134",
"virus23890",
"virus45019",
"virus96595",
"virus84554",
"virus60681",
"virus50388",
"virus43667",
"virus49156",
"virus94718",
"virus12740",
"virus39556",
"virus19301",
"virus84913",
"virus80671",
"virus51002",
"virus66211",
"virus47569",
"virus39932",
"virus43190",
"virus68407",
"virus53084",
"virus52268",
"virus85302",
"virus78069",
"virus75658",
"virus69919",
"virus76903",
"virus65576",
"virus94411",
"virus59906",
"virus06181",
"virus02512",
"virus04085",
"virus05060",
"virus32521",
"virus63479",
"virus01234",
"virus79610",
"virus58590",
"virus28045",
"virus62915",
"virus23757",
"virus05561",
"virus50206",
"virus30460",
"virus64831",
"virus18235",
"virus76619",
"virus66341",
"virus88365",
"virus24880",
"virus90160",
"virus16204",
"virus89186",
"virus78518",
"virus61444",
"virus05179",
"virus91962",
"virus38351",
"virus23422",
"virus81142",
"virus32943",
"virus08549",
"virus39777",
"virus46980",
"virus20243",
"virus62125",
"virus26483",
"virus37870",
"virus95172",
"virus05003",
"virus46755",
"virus34381",
"virus39252",
"virus38935",
"virus62276",
"virus32731",
"virus83035",
"virus67455",
"virus85310",
"virus74265",
"virus42298",
"virus57015",
"virus15455",
"virus75560",
"virus26967",
"virus98720",
"virus09922",
"virus64596",
"virus76819",
"virus45492",
"virus94139",
"virus05769",
"virus88488",
"virus15381",
"virus64512",
"virus08469",
"virus62131",
"virus33360",
"virus33540",
"virus87783",
"virus55715",
"virus57468",
"virus73659",
"virus67015",
"virus17376",
"virus49679",
"virus38777",
"virus24144",
"virus36940"
```
