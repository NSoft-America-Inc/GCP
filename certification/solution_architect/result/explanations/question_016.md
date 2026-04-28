#### 🎯 1. 출제의도
* 이 문제는 대규모 웹사이트의 클릭스트림 데이터 스트리밍 환경에서, 높은 초당 쓰기 처리량(bursts)과 향후 데이터 분석을 모두 수용할 수 있는 최적의 GCP 스토리지 솔루션을 선택하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
You have been asked to select the storage system
for the click-data of your company's
large portfolio of websites.

This data is streamed in from a custom website
analytics package at a typical rate of
6,000 clicks per minute.

With bursts of up to 8,500 clicks per second.
It must have been stored for future analysis
by your data science and user experience teams.

Which storage infrastructure should you choose?
```

**[한글 해석]**
```text
귀사의 대규모 웹사이트 포트폴리오의
클릭 데이터를 위한 저장 시스템을
선택하라는 요청을 받았습니다.

이 데이터는 분당 평균 6,000회의 클릭
비율로 사용자 정의 웹사이트 분석
패키지에서 스트리밍됩니다.

초당 최대 8,500회 클릭의 폭증이 있습니다.
이 데이터는 데이터 과학 및 사용자 경험 팀의
미래 분석을 위해 저장되어야 합니다.

어떤 저장 인프라를 선택해야 합니까?
```

A. Google Cloud SQL
- (해석: Google Cloud SQL)

B. Google Cloud Bigtable
- (해석: Google Cloud Bigtable)

C. Google Cloud Storage
- (해석: Google Cloud Storage)

D. Google Cloud Datastore
- (해석: Google Cloud Datastore)

**[문장별 끊어 읽기 및 해석]**
* **You have been asked to select / the storage system / for the click-data / of your company's large portfolio of websites.**
  * (해석) 당신은 선택하도록 요청받았습니다 / 저장 시스템을 / 클릭 데이터를 위한 / 당신 회사의 대규모 웹사이트 포트폴리오의.
* **This data is streamed in / from a custom website analytics package / at a typical rate of 6,000 clicks per minute. / With bursts of up to 8,500 clicks per second.**
  * (해석) 이 데이터는 스트리밍되어 들어옵니다 / 사용자 정의 웹사이트 분석 패키지로부터 / 분당 평균 6,000 클릭의 속도로. / 초당 최대 8,500 클릭의 폭증과 함께.
* **It must have been stored / for future analysis / by your data science and user experience teams. / Which storage infrastructure should you choose?**
  * (해석) 이것은 저장되어야 합니다 / 미래의 분석을 위해 / 당신의 데이터 과학 및 사용자 경험 팀에 의한. / 어떤 저장 인프라를 선택해야 합니까?

**[핵심 어휘 및 구문]**
* **streamed in**: (구동사) 스트리밍 방식으로 유입되다.
* **typical rate**: (명사구) 일반적인 속도/비율.
* **bursts**: (명사) 단기간의 트래픽 폭증.
* **click-data (clickstream)**: (명사) 사용자가 웹사이트를 클릭한 기록 데이터.

#### ✅ 3. 정답 및 문제 해설
* **정답: B (Google Cloud Bigtable)**
* **해설**:
  - 초당 최대 8,500 클릭(`8,500 clicks per second`)과 같은 대규모 동시 쓰기 폭증(burst)을 수용하려면 매우 높은 I/O 처리량이 필요합니다.
  - **Google Cloud Bigtable**은 대규모 NoSQL 와이드 컬럼 스토어로, 뛰어난 읽기/쓰기 성능과 매우 짧은 지연 시간(Single-digit millisecond latency)을 제공하도록 설계되었습니다. 대규모 클릭스트림, IoT 데이터, 시계열 데이터 저장에 최적의 솔루션입니다.
* **오답 분석**:
  - **A. Cloud SQL**: 관계형 데이터베이스는 초당 수천 건의 쓰기를 일관되게 처리하기에 적합하지 않으며, 쓰기 병목 현상이 발생하기 쉽습니다.
  - **C. Cloud Storage**: 객체 스토리지로서 일괄 데이터(Batch data) 분석에는 훌륭하지만, 초당 수천 건의 고밀도 스트리밍 유입을 직접적으로 받아 쓰기에는 I/O 지연 및 API 호출 비용이 큽니다.
  - **D. Cloud Datastore (Firestore)**: NoSQL이지만 일반적인 애플리케이션 트랜잭션용으로 설계되었으며, 빅데이터/분석 수준의 초당 쓰기 처리량은 Bigtable에 크게 못 미칩니다.

#### 🧠 4. 핵심 개념 다지기
* **Cloud Bigtable의 적합한 유스케이스**:
  - 웹사이트/앱의 클릭스트림(Clickstream) 및 이벤트 로그
  - 대규모 시계열(Time-Series) 데이터
  - 금융 시장 및 거래 추적 데이터
  - 사물인터넷(IoT) 센서 데이터
