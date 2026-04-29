#### 🎯 1. 출제의도
*   민감한 신용카드 거래 데이터를 처리하면서 PCI DSS(Payment Card Industry Data Security Standard) 규정 준수 범위를 최소화하고, 동시에 거래 데이터 분석 능력을 유지하는 아키텍처 설계 방법을 묻는 문제입니다. 토큰화를 통한 민감 데이터 격리가 핵심 솔루션입니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your application needs to process credit card transactions. You want the smallest scope of Payment Card Industry (PCI) compliance without compromising the ability to analyze transactional data and trends relating to which payment methods are used.How should you design your architecture?
```

**[한글 해석]**
```text
귀하의 애플리케이션은 신용카드 거래를 처리해야 합니다.
사용되는 결제 수단과 관련된 거래 데이터 및 추세를 분석하는 능력을 저해하지 않으면서
PCI(Payment Card Industry) 규정 준수 범위를 최소화하려고 합니다.
귀하는 아키텍처를 어떻게 설계해야 합니까?
```

Suggested Answer: A 🗳️

A. Create a tokenizer service and store only tokenized data
- (해석: 토큰화 서비스를 생성하고 토큰화된 데이터만 저장하십시오.)

B. Create separate projects that only process credit card data
- (해석: 신용카드 데이터만 처리하는 별도의 프로젝트를 생성하십시오.)

C. Create separate subnetworks and isolate the components that process credit card data
- (해석: 별도의 서브네트워크를 생성하고 신용카드 데이터를 처리하는 구성 요소를 격리하십시오.)

D. Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data
- (해석: PCI 데이터를 처리하는 모든 가상 머신(VM)에 레이블을 지정하여 감사 발견 단계를 간소화하십시오.)

E. Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor
- (해석: Google BigQuery로 로깅 내보내기를 활성화하고 ACL 및 뷰를 사용하여 감사자와 공유되는 데이터 범위를 지정하십시오.)

**[문장별 끊어 읽기 및 해석]**
*   **Your application / needs to process / credit card transactions.**
    *   (해석) 귀하의 애플리케이션은 / 처리해야 합니다 / 신용카드 거래를.
*   **You want / the smallest scope / of Payment Card Industry (PCI) compliance / without compromising / the ability / to analyze transactional data and trends / relating to which payment methods are used.**
    *   (해석) 귀하는 원합니다 / 가장 작은 범위의 / PCI(Payment Card Industry) 규정 준수를 / 손상시키지 않고 / 능력을 / 거래 데이터 및 추세를 분석할 / 어떤 결제 수단이 사용되는지와 관련된.
*   **How should you design / your architecture?**
    *   (해석) 어떻게 설계해야 합니까 / 귀하의 아키텍처를?
*   **A. Create / a tokenizer service / and store / only tokenized data**
    *   (해석) 생성하고 / 토큰화 서비스를 / 저장하십시오 / 토큰화된 데이터만.
*   **B. Create / separate projects / that only process / credit card data**
    *   (해석) 생성하십시오 / 별도의 프로젝트를 / 처리하는 / 신용카드 데이터만.
*   **C. Create / separate subnetworks / and isolate / the components / that process / credit card data**
    *   (해석) 생성하십시오 / 별도의 서브네트워크를 / 그리고 격리하십시오 / 구성 요소를 / 처리하는 / 신용카드 데이터를.
*   **D. Streamline / the audit discovery phase / by labeling / all of the virtual machines (VMs) / that process / PCI data**
    *   (해석) 간소화하십시오 / 감사 발견 단계를 / 레이블링하여 / 모든 가상 머신(VM)을 / 처리하는 / PCI 데이터를.
*   **E. Enable / Logging export / to Google BigQuery / and use / ACLs and views / to scope / the data / shared with the auditor**
    *   (해석) 활성화하십시오 / 로깅 내보내기를 / Google BigQuery로 / 그리고 사용하십시오 / ACL과 뷰를 / 범위를 지정하기 위해 / 데이터를 / 감사자와 공유되는.

**[핵심 어휘 및 구문]**
*   **process**: (동사) 처리하다. 컴퓨터 과학에서는 데이터를 조작하거나 변환하는 행위를 지칭.
*   **transaction**: (명사) 거래, 트랜잭션. 일련의 작업을 하나의 논리적 단위로 묶어 처리하는 것.
*   **scope**: (명사) 범위, 영역. 여기서는 PCI DSS 규정 준수가 적용되는 시스템과 환경의 크기를 의미.
*   **compliance**: (명사) 규정 준수. 특정 표준, 규칙 또는 법률을 따르는 것.
*   **compromise**: (동사) 손상시키다, 위태롭게 하다. 여기서는 분석 능력에 부정적인 영향을 미 미치지 않아야 함을 의미.
*   **ability**: (명사) 능력. 특정 작업을 수행할 수 있는 역량.
*   **analyze**: (동사) 분석하다. 데이터를 조사하여 패턴, 관계 및 의미를 파악하는 것.
*   **trends**: (명사) 추세, 경향. 시간이 지남에 따라 나타나는 데이터의 일반적인 방향.
*   **relating to**: (~와) 관련된. 특정 주제나 항목과의 연관성을 나타냄.
*   **tokenizer service**: (명사) 토큰화 서비스. 민감한 데이터를 고유한 비민감 토큰으로 변환하는 전문 시스템.
*   **tokenized data**: (명사) 토큰화된 데이터. 원본 민감 데이터가 비민감 토큰으로 대체된 형태의 데이터.
*   **separate**: (형용사) 별개의, 분리된. 독립적으로 존재하거나 운영되는 것을 의미.
*   **subnetworks**: (명사) 서브네트워크. 큰 네트워크를 작은 논리적 세그먼트로 나눈 것.
*   **isolate**: (동사) 격리하다, 분리하다. 다른 시스템이나 구성 요소로부터 독립적으로 유지하는 것.
*   **components**: (명사) 구성 요소. 시스템을 이루는 개별적인 부분.
*   **streamline**: (동사) 간소화하다, 능률화하다. 프로세스를 더 효율적이고 간단하게 만드는 것.
*   **audit discovery phase**: (명사) 감사 발견 단계. 감사가 수행되는 동안 관련 시스템과 데이터를 식별하고 수집하는 초기 단계.
*   **labeling**: (동명사) 레이블 지정. 리소스에 메타데이터 태그를 추가하여 식별 및 관리를 용이하게 하는 것.
*   **enable**: (동사) 활성화하다, 가능하게 하다. 특정 기능이나 서비스를 작동시키는 것.
*   **logging export**: (명사) 로깅 내보내기. 시스템 로그를 외부 저장소나 분석 서비스로 전송하는 기능.
*   **ACLs (Access Control Lists)**: (명사) 접근 제어 목록. 리소스에 대한 접근 권한을 정의하는 규칙 목록.
*   **views**: (명사) 뷰. 데이터베이스에서 하나 이상의 테이블에서 파생된 가상 테이블로, 특정 데이터 서브셋을 보여주는 데 사용.
*   **scope the data**: (구동사) 데이터의 범위를 지정하다. 특정 요구사항에 맞춰 보여주거나 접근할 수 있는 데이터의 양을 제한하는 것.

#### ✅ 3. 정답 및 문제 해설
*   **정답: A (Create a tokenizer service and store only tokenized data)**
*   **해설**:
    *   이 질문의 핵심은 PCI 규정 준수 범위를 '최소화'하면서도 '데이터 분석 능력'을 유지하는 것입니다. 토큰화(tokenization)는 민감한 신용카드 번호를 무의미한 고유 식별자(토큰)로 대체하는 과정입니다.
    *   토큰화 서비스를 도입하고 애플리케이션의 대부분 영역에서 원본 신용카드 데이터 대신 토큰화된 데이터만 저장하고 처리하게 되면, 원본 카드 데이터를 직접 다루는 시스템의 수를 획기적으로 줄일 수 있습니다.
    *   이렇게 되면 원본 민감 데이터를 처리하는 소수의 시스템(토큰화 서비스 자체와 민감 데이터 저장소)만이 엄격한 PCI DSS 규정 준수 범위에 포함되며, 토큰만 처리하는 나머지 시스템은 PCI 규정 준수 부담에서 크게 벗어나게 됩니다. 이는 "가장 작은 범위의 PCI 규정 준수"라는 요구사항을 충족합니다.
    *   또한, 토큰화된 데이터는 특정 거래와 연결될 수 있으므로, 어떤 결제 수단이 사용되었는지, 어떤 추세가 있는지 등을 분석하는 데 여전히 활용될 수 있습니다. 예를 들어, 토큰에는 결제 카드 유형(Visa, Mastercard 등)과 같은 비민감 정보가 포함될 수 있으며, 이를 통해 분석이 가능합니다. 이로써 "거래 데이터 및 추세를 분석하는 능력을 저해하지 않으면서"라는 요구사항도 충족합니다.

*   **오답 분석**:
    *   **B: Create separate projects that only process credit card data (신용카드 데이터만 처리하는 별도의 프로젝트를 생성하십시오.)**: 프로젝트를 분리하는 것은 훌륭한 보안 및 관리 프랙티스이지만, 이것만으로는 PCI 규정 준수 범위를 *실질적으로* 최소화하지 못합니다. 해당 별도 프로젝트 내의 모든 시스템과, 이 프로젝트와 통신하여 민감 데이터를 주고받는 모든 시스템은 여전히 PCI 범위에 포함됩니다. 민감 데이터가 여전히 애플리케이션의 여러 부분에 걸쳐 직접 처리된다면, 규정 준수 범위는 크게 줄어들지 않습니다.
    *   **C: Create separate subnetworks and isolate the components that process credit card data (별도의 서브네트워크를 생성하고 신용카드 데이터를 처리하는 구성 요소를 격리하십시오.)**: 네트워크 수준에서 구성 요소를 격리하는 것은 보안을 강화하는 좋은 방법입니다. 하지만 이는 PCI 규정 준수 범위 내의 시스템을 안전하게 보호하는 데 도움이 될 뿐, PCI 규정 준수 범위 *자체를 축소하는* 근본적인 해결책은 아닙니다. 민감 데이터를 처리하는 모든 구성 요소는 여전히 PCI 범위에 속하며, 이러한 구성 요소와 상호작용하는 다른 시스템도 범위에 포함될 수 있습니다.
    *   **D: Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data (PCI 데이터를 처리하는 모든 가상 머신(VM)에 레이블을 지정하여 감사 발견 단계를 간소화하십시오.)**: VM에 레이블을 지정하는 것은 자산 관리 및 감사 시 식별을 용이하게 하는 운영상의 편의를 제공합니다. 그러나 이는 PCI 규정 준수 *범위를 축소하거나* 데이터 분석 능력을 개선하는 아키텍처 설계와는 직접적인 관련이 없습니다. 이는 사후 감사 프로세스를 돕는 것이지, 사전적인 보안 아키텍처 변경이 아닙니다.
    *   **E: Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor (Google BigQuery로 로깅 내보내기를 활성화하고 ACL 및 뷰를 사용하여 감사자와 공유되는 데이터 범위를 지정하십시오.)**: 이 옵션은 로깅 및 감사 보고에 초점을 맞추고 있습니다. BigQuery로 로그를 내보내고 ACL 및 뷰를 사용하는 것은 감사 데이터를 효과적으로 관리하고 공유하는 데 유용할 수 있지만, 질문의 핵심 요구사항인 "신용카드 거래 처리" 및 "PCI 규정 준수 범위 최소화"와는 거리가 니다. 민감한 *거래 데이터 자체*를 어떻게 처리하여 규정 준수 범위를 줄일지에 대한 솔루션이 아닙니다.

#### 🧠 4. 핵심 개념 다지기
*   **PCI DSS (Payment Card Industry Data Security Standard) 규정 준수**:
    *   **개념**: 신용카드 소유자 정보를 안전하게 보호하기 위한 일련의 보안 표준입니다. 신용카드 정보를 저장, 처리 또는 전송하는 모든 조직은 이 표준을 준수해야 합니다.
    *   **문제 내 쓰임**: 이 문제의 가장 중요한 제약 조건으로, 애플리케이션이 신용카드 거래를 처리하므로 PCI DSS 규정 준수가 필수적이며, 이 준수 '범위'를 최소화하는 것이 목표입니다.
    *   **특징 및 제약사항**: PCI DSS는 매우 엄격하며