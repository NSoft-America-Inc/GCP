#### 🎯 1. 출제의도
* 이 문제는 대규모 IoT 센서 데이터(시계열 데이터)의 고속 수집 및 분석 요구사항에 맞는 최적의 데이터베이스 유형을 선택할 수 있는지 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your company wants to track whether someone is present
in a meeting room reserved for a scheduled meeting.

There are 1000 meeting rooms across 5 offices
on 3 continents.

Each room is equipped with a motion sensor
that reports its status every second.

The data from the motion detector includes only
a sensor ID and several different discrete items
of information.

Analysts will use this data, together with information
about account owners and office locations.

Which database type should you use?
```

**[한글 해석]**
```text
귀사는 예정된 회의를 위해 예약된 회의실에
누군가가 있는지 여부를 추적하고자 합니다.

3개 대륙의 5개 사무실에 걸쳐
1,000개의 회의실이 있습니다.

각 회의실에는 매초 상태를 보고하는
모션 센서가 장착되어 있습니다.

모션 센서의 데이터에는 센서 ID와
몇 가지 서로 다른 불연속적인 정보만 포함됩니다.

분석가들은 계정 소유자 및 사무실 위치에 대한 정보와
함께 이 데이터를 사용할 것입니다.

어떤 데이터베이스 유형을 사용해야 합니까?
```

A. Flat file
- (해석: 플랫 파일)

B. NoSQL
- (해석: NoSQL)

C. Relational
- (해석: 관계형)

D. Blobstore
- (해석: Blob 스토어)

**[문장별 끊어 읽기 및 해석]**
* **Your company wants to track / whether someone is present / in a meeting room / reserved for a scheduled meeting.**
  * (해석) 귀사는 추적하기를 원합니다 / 누군가 있는지 여부를 / 회의실에 / 예정된 회의를 위해 예약된.
* **There are 1000 meeting rooms / across 5 offices / on 3 continents.**
  * (해석) 1,000개의 회의실이 있습니다 / 5개 사무실에 걸쳐 / 3개 대륙에 있는.
* **Each room is equipped with / a motion sensor / that reports its status / every second.**
  * (해석) 각 회의실에는 갖춰져 있습니다 / 모션 센서가 / 상태를 보고하는 / 매초.
* **The data from the motion detector / includes only a sensor ID / and several different discrete items / of information.**
  * (해석) 모션 센서로부터의 데이터는 / 센서 ID만 포함합니다 / 그리고 몇 가지 다른 불연속적인 항목들을 / 정보의.

**[핵심 어휘 및 구문]**
* **track**: (동사) 추적하다. 시간의 흐름에 따른 상태 변화를 기록하고 모니터링하는 것입니다.
* **be reserved for**: (숙어) ~을 위해 예약되다.
* **be equipped with**: (숙어) ~을 갖추고 있다, 장착되어 있다.
* **motion sensor**: (명사) 모션 센서, 움직임 감지기.
* **every second**: (부사구) 매초. 높은 빈도의 데이터 발생을 의미합니다.
* **discrete**: (형용사) 불연속적인, 별개의.
* **account owner**: (명사구) 계정 소유자.
* **database type**: (명사구) 데이터베이스 유형. (NoSQL, RDBMS 등)

#### ✅ 3. 정답 및 문제 해설
* **정답: B (NoSQL)**
* **해설**:
  * 문제의 핵심 제약 조건은 **1,000개의 회의실에서 매초 상태를 보고**한다는 점입니다. 즉, 초당 최소 1,000건의 쓰기(Write) 작업이 지속적으로 발생합니다.
  * 또한 데이터 구조는 센서 ID와 몇 가지 단순한 정보(`discrete items of information`)로 구성된 단순 키-값 형태나 시계열 데이터에 가깝습니다.
  * 이러한 고빈도, 대용량 쓰기 요구사항과 단순한 데이터 구조에는 수평적 확장이 용이하고 고속 쓰기에 최적화된 **NoSQL 데이터베이스**(GCP의 Cloud Bigtable 등)가 가장 적합합니다.
* **오답 분석**:
  * **A, D**: Flat file과 Blobstore(Cloud Storage)는 대량의 초당 트랜잭션을 실시간으로 처리하고 쿼리 분석을 지원하기에 적합하지 않은 객체 기반 스토리지입니다.
  * **C**: 관계형 데이터베이스(RDBMS)는 초당 수천 건의 지속적인 고속 쓰기 시 락(Lock) 및 성능 저하가 발생할 수 있으며, 확장에 비용이 많이 듭니다.

#### 🧠 4. 핵심 개념 다지기
* **Time-Series Data (시계열 데이터)**:
  * **개념**: 시간의 흐름에 따라 순차적으로 기록된 데이터의 배열입니다. (예: IoT 센서 데이터, 주식 차트 등)
  * **문제 내 쓰임**: 매초 보고되는 센서 데이터가 이에 해당하며, NoSQL(Cloud Bigtable)이 시계열 데이터 저장의 표준으로 쓰입니다.
```
