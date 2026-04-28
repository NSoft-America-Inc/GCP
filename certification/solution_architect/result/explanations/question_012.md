#### 🎯 1. 출제의도
* 이 문제는 배치(Batch) 처리와 스트리밍(Stream) 데이터 처리를 단일 파이프라인으로 통합하여 관리할 수 있는 최적의 클라우드 데이터 처리 기술을 선택하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your company has successfully migrated to the cloud
and wants to analyze their data stream
to optimize operations.

They do not have any existing code for this analysis,
so they are exploring all their options.

These options include a mix of batch and stream processing,
as they are running some hourly jobs and live-processing
some data as it comes in.

Which technology should they use for this?
```

**[한글 해석]**
```text
귀사는 성공적으로 클라우드로 마이그레이션했으며,
운영을 최적화하기 위해 데이터 스트림을
분석하고자 합니다.

이 분석을 위한 기존 코드가 없기 때문에,
모든 옵션을 탐색하고 있습니다.

이러한 옵션에는 배치 및 스트림 처리의 혼합이
포함되며, 일부 시간별 작업을 실행하고
데이터가 들어오는 대로 실시간으로 처리하기 때문입니다.

이를 위해 어떤 기술을 사용해야 합니까?
```

A. Google Cloud Dataproc
- (해석: Google Cloud Dataproc)

B. Google Cloud Dataflow
- (해석: Google Cloud Dataflow)

C. Google Container Engine with Bigtable
- (해석: Bigtable이 포함된 Google Container Engine)

D. Google Compute Engine with Google BigQuery
- (해석: Google BigQuery가 포함된 Google Compute Engine)

**[문장별 끊어 읽기 및 해석]**
* **Your company / has successfully migrated to the cloud / and wants to analyze their data stream / to optimize operations.**
  * (해석) 귀사는 / 클라우드로 성공적으로 마이그레이션했습니다 / 그리고 그들의 데이터 스트림을 분석하기를 원합니다 / 운영을 최적화하기 위해.
* **They do not have / any existing code / for this analysis, / so they are exploring all their options.**
  * (해석) 그들은 가지고 있지 않습니다 / 어떠한 기존 코드도 / 이 분석을 위한 / 그래서 그들은 그들의 모든 옵션을 탐색하고 있습니다.
* **These options include / a mix of batch and stream processing, / as they are running some hourly jobs / and live-processing some data / as it comes in.**
  * (해석) 이러한 옵션들은 포함합니다 / 배치 및 스트림 처리의 혼합을 / 그들이 몇 가지 시간별 작업을 실행하고 있기 때문에 / 그리고 일부 데이터를 실시간 처리하고 있기 때문에 / 데이터가 들어오는 대로.

**[핵심 어휘 및 구문]**
* **data stream**: (명사) 데이터 스트림. 연속적으로 흐르는 데이터의 흐름입니다.
* **existing code**: (명사구) 기존 코드. 레거시 시스템에서 사용하던 분석 스크립트 등을 의미합니다.
* **explore options**: (동사구) 옵션을 탐색하다.
* **batch processing**: (명사) 배치 처리. 대량의 데이터를 일정 시간마다 모아서 한 번에 처리하는 방식입니다.
* **stream processing**: (명사) 스트림 처리. 데이터가 생성되는 즉시 실시간으로 처리하는 방식입니다.
* **live-processing**: (명사/동사) 실시간 처리.

#### ✅ 3. 정답 및 문제 해설
* **정답: B (Google Cloud Dataflow)**
* **해설**:
  * 문제에서 요구하는 가장 결정적인 조건은 **"배치 처리(batch)와 스트림 처리(stream processing)의 혼합"**입니다.
  * **Google Cloud Dataflow**는 통합 데이터 처리 엔진인 **Apache Beam**을 기반으로 구축된 완전 관리형 서버리스 서비스입니다.
  * Apache Beam의 가장 큰 특징은 **동일한 프로그래밍 모델(코드)**을 사용하여 배치 데이터(시간별 작업 등)와 스트리밍 데이터(실시간 유입 데이터)를 모두 처리할 수 있다는 점입니다.
  * 기존 코드가 없는 상태에서 새로 시작하는 프로젝트이므로, 두 가지 처리 방식을 단일 도구로 아우를 수 있는 Dataflow가 최선의 선택입니다.
* **오답 분석**:
  * **A**: Cloud Dataproc은 오픈소스 빅데이터 생태계(Hadoop, Spark 등)를 위한 관리형 클러스터 서비스입니다. 기존에 Spark 코드가 있는 경우 유용하지만, 새로 구축하는 배치/스트림 혼합 환경에는 Dataflow가 더 현대적이고 서버리스에 적합합니다.
  * **C, D**: 인프라 관리 부담(IaaS, GKE 등)이 크며, 데이터 파이프라인 구축을 위한 전용 도구가 아닙니다.

#### 🧠 4. 핵심 개념 다지기
* **Unified Data Processing (통합 데이터 처리)**:
  * **개념**: 과거에는 배치 처리(Hadoop 등)와 실시간 스트리밍(Storm 등)을 위한 아키텍처(Lambda Architecture)를 따로 구성해야 했으나, 이를 하나로 통합한 개념입니다.
  * **문제 내 쓰임**: Dataflow가 이 통합 데이터 처리를 구현하는 핵심 도구로 작용합니다.
```
