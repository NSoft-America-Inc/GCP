#### 🎯 1. 출제의도
* 이 문제는 Google Compute Engine(GCE) VM에서 실행되는 애플리케이션이 다른 GCP 서비스(예: BigQuery)와 안전하게 통신할 수 있도록 인증 및 권한(IAM)을 구성하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
You write a Python script to connect to Google BigQuery
from a Google Compute Engine virtual machine.

The script is printing errors that it cannot connect
to BigQuery.

What should you do to fix the script?
```

**[한글 해석]**
```text
Google Compute Engine 가상 머신에서
Google BigQuery에 연결하기 위한
Python 스크립트를 작성했습니다.

스크립트가 BigQuery에 연결할 수 없다는
오류를 출력하고 있습니다.

스크립트를 수정하기 위해 무엇을 해야 합니까?
```

A. Install the latest BigQuery API client library for Python
- (해석: Python용 최신 BigQuery API 클라이언트 라이브러리를 설치합니다.)

B. Run your script on a new virtual machine with the BigQuery access scope enabled
- (해석: BigQuery 액세스 범위가 활성화된 새 가상 머신에서 스크립트를 실행합니다.)

C. Create a new service account with BigQuery access and execute your script with that user
- (해석: BigQuery 액세스 권한이 있는 새 서비스 계정을 만들고 해당 사용자로 스크립트를 실행합니다.)

D. Install the bq component for gcloud with the command gcloud components install bq.
- (해석: gcloud components install bq 명령어로 gcloud용 bq 구성 요소를 설치합니다.)

**[문장별 끊어 읽기 및 해석]**
* **You write a Python script / to connect to Google BigQuery / from a Google Compute Engine virtual machine.**
  * (해석) 당신은 Python 스크립트를 작성합니다 / Google BigQuery에 연결하기 위한 / Google Compute Engine 가상 머신에서.
* **The script is printing errors / that it cannot connect / to BigQuery.**
  * (해석) 스크립트가 오류를 출력하고 있습니다 / 연결할 수 없다는 / BigQuery에.
* **What should you do / to fix the script?**
  * (해석) 무엇을 해야 합니까 / 스크립트를 고치기 위해?

**[핵심 어휘 및 구문]**
* **Compute Engine**: (명사) GCP에서 제공하는 IaaS 기반 가상 머신 서비스입니다.
* **virtual machine (VM)**: (명사) 가상 머신.
* **print error**: (동사구) 에러를 출력하다.
* **access scope**: (명사구) 액세스 범위. 이전 방식의 VM 권한 제어 방식입니다.
* **service account**: (명사구) 서비스 계정. 애플리케이션이나 가상 머신 등 '사람이 아닌 엔티티'에 부여되는 ID 및 권한입니다.
* **execute**: (동사) 실행하다. 프로그램이나 스크립트를 동작시키는 것입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: C (Create a new service account with BigQuery access)**
* **해설**:
  * GCP 리소스(VM 등)에서 다른 GCP 서비스(BigQuery)에 접근할 때 가장 안전하고 권장되는 방법은 **서비스 계정(Service Account)**을 사용하는 것입니다.
  * 연결 오류가 발생하는 주된 원인은 VM 내부의 스크립트가 BigQuery에 접근할 수 있는 적절한 IAM 권한을 가지고 있지 않기 때문입니다.
  * 따라서 필요한 권한(예: BigQuery Data Viewer, BigQuery Job User 등)이 부여된 서비스 계정을 생성하고, 이를 VM에 할당하거나 스크립트 실행 인증 정보로 활용해야 합니다.
* **오답 분석**:
  * **A**: 연결 오류(Connection/Authentication error)는 라이브러리 버전 문제보다 권한 부족일 가능성이 훨씬 높습니다.
  * **B**: Access Scope는 레거시 방식이며, 권한 변경을 위해 새 VM을 만드는 것은 비효율적입니다. 현재는 서비스 계정의 IAM 역할을 통해 권한을 제어하는 것이 모범 사례입니다.
  * **D**: `bq`는 명령줄 도구로, Python 스크립트 내부의 클라이언트 라이브러리 연결 오류를 직접적으로 해결해 주지 못합니다.

#### 🧠 4. 핵심 개념 다지기
* **GCP Service Account (서비스 계정)**:
  * **개념**: 애플리케이션 및 가상 워크로드용 특수 계정으로, 비밀번호 대신 키 또는 메타데이터 서버를 통해 인증합니다.
  * **문제 내 쓰임**: VM 상의 Python 스크립트에 BigQuery 접근 권한을 안전하게 부여하는 수단으로 사용됩니다.
```
