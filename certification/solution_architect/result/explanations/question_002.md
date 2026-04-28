#### 🎯 1. 출제의도
* 이 문제는 수 페타바이트 규모의 대용량 데이터를 클라우드로 마이그레이션할 때, 데이터의 상시 가용성을 보장하고 SQL에만 익숙한 분석가들이 쉽게 접근할 수 있는 최적의 스토리지 서비스를 선택하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your company plans to migrate a multi-petabyte data set
to the cloud.

The data set must be available 24hrs a day.

Your business analysts have experience only with using
a SQL interface.

How should you store the data to optimize it
for ease of analysis?
```

**[한글 해석]**
```text
귀사는 수 페타바이트 규모의 데이터 세트를
클라우드로 마이그레이션할 계획입니다.

데이터 세트는 하루 24시간 내내 사용할 수 있어야 합니다.

비즈니스 분석가들은 SQL 인터페이스만 사용해 본
경험이 있습니다.

분석의 용이성을 위해 데이터를 어떻게 저장하고
최적화해야 할까요?
```

A. Load data into Google BigQuery
- (해석: 데이터를 Google BigQuery에 로드합니다.)

B. Insert data into Google Cloud SQL
- (해석: 데이터를 Google Cloud SQL에 삽입합니다.)

C. Put flat files into Google Cloud Storage
- (해석: 플랫 파일을 Google Cloud Storage에 저장합니다.)

D. Stream data into Google Cloud Datastore
- (해석: 데이터를 Google Cloud Datastore로 스트리밍합니다.)

**[문장별 끊어 읽기 및 해석]**
* **Your company plans to migrate / a multi-petabyte data set / to the cloud.**
  * (해석) 귀사는 마이그레이션할 계획입니다 / 수 페타바이트 규모의 데이터 세트를 / 클라우드로.
* **The data set / must be available / 24hrs a day.**
  * (해석) 데이터 세트는 / 사용할 수 있어야 합니다 / 하루 24시간 내내.
* **Your business analysts / have experience / only with using / a SQL interface.**
  * (해석) 비즈니스 분석가들은 / 경험이 있습니다 / 사용하는 것에만 / SQL 인터페이스를.
* **How should you store / the data / to optimize it / for ease of analysis?**
  * (해석) 어떻게 저장해야 할까요 / 데이터를 / 최적화하기 위해 / 분석의 용이성을 위해?

**[핵심 어휘 및 구문]**
* **migrate**: (동사) 마이그레이션하다, 이전하다. 온프레미스에서 클라우드로 데이터를 옮길 때 주로 씁니다.
* **multi-petabyte**: (형용사) 수 페타바이트 규모의. 매우 방대한 데이터 크기를 나타냅니다.
* **available**: (형용사) 사용 가능한. 시스템이나 데이터가 상시 접근 가능함을 의미합니다.
* **analyst**: (명사) 분석가. 비즈니스 데이터를 분석하여 인사이트를 도출하는 전문가입니다.
* **interface**: (명사) 인터페이스. 사용자가 시스템과 상호작용하는 수단입니다.
* **store**: (동사) 저장하다. 데이터를 영구적으로 보관하는 행위입니다.
* **optimize**: (동사) 최적화하다. 성능이나 효율성을 극대화하는 작업입니다.
* **ease of analysis**: (명사구) 분석의 용이성. 데이터를 분석하기 쉬운 상태를 의미합니다.
* **flat file**: (명사) 플랫 파일. 구조화되지 않은 일반 텍스트 파일(예: CSV, TXT)입니다.
* **stream**: (동사) 스트리밍하다. 데이터를 실시간으로 연속해서 전송하는 방식입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: A (Load data into Google BigQuery)**
* **해설**:
  * 문제에서 "수 페타바이트 규모(multi-petabyte data set)"의 초대용량 데이터와 "SQL 인터페이스"만을 다룰 수 있는 분석가들이라는 두 가지 핵심 제약 조건을 제시하고 있습니다.
  * Google BigQuery는 페타바이트급 이상의 대용량 데이터에 대해 표준 SQL 쿼리를 지원하는 완전 관리형 엔터프라이즈 데이터 웨어하우스입니다. 따라서 분석가들이 기존 지식을 활용해 쉽게 대용량 데이터를 분석할 수 있는 최적의 솔루션입니다.
* **오답 분석**:
  * **B. Insert data into Google Cloud SQL**: Cloud SQL은 관계형 데이터베이스(MySQL, PostgreSQL 등)를 지원하지만, 페타바이트 규모의 데이터를 저장하고 분석하기에는 적합하지 않으며 용량 한계에 도달할 수 있습니다.
  * **C. Put flat files into Google Cloud Storage**: Cloud Storage는 객체 스토리지로 대용량 파일 저장이 가능하지만, 파일 자체로는 SQL 인터페이스를 통한 직접적인 쿼리 분석이 불가능합니다.
  * **D. Stream data into Google Cloud Datastore**: Datastore(현재 Firestore)는 NoSQL 문서 데이터베이스로, 페타바이트급 데이터 분석보다는 실시간 트랜잭션 처리에 적합하며 SQL 인터페이스를 지원하지 않습니다.

#### 🧠 4. 핵심 개념 다지기
* **Google BigQuery**:
  * **개념**: 서버리스 구조의 고도로 확장 가능한 클라우드 데이터 웨어하우스입니다.
  * **문제 내 쓰임**: 페타바이트급 데이터 저장과 SQL 기반의 빠른 분석을 동시에 만족하는 유일한 정답 후보입니다.
  * **특징 및 제약사항**: 대규모 병렬 처리 아키텍처를 사용하여 빠른 속도를 제공하지만, 실시간 트랜잭션 처리(OLTP)에는 적합하지 않습니다.
