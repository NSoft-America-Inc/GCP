#### 🎯 1. 출제의도
* 이 문제는 신용카드 결제 데이터를 처리하는 애플리케이션에서 PCI-DSS(신용카드 데이터 보안 표준) 규정 준수 범위를 최소화(Smallest Scope)하면서도 데이터 분석 기능을 유지하는 보안 아키텍처 설계 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your application needs to process credit card transactions.

You want the smallest scope of Payment Card Industry
(PCI) compliance without compromising the ability
to analyze transactional data and trends relating
to which payment methods are used.

How should you design your architecture?
```

**[한글 해석]**
```text
귀사의 애플리케이션은 신용카드 거래를
처리해야 합니다.

어떤 결제 수단이 사용되는지에 대한 거래 데이터와
트렌드를 분석하는 능력을 손상시키지 않으면서,
지불 카드 산업(PCI) 규정 준수 범위를
가장 작게 만들고 싶습니다.

아키텍처를 어떻게 설계해야 합니까?
```

A. Create a tokenizer service and store only tokenized data
- (해석: 토크나이저 서비스를 만들고 토큰화된 데이터만 저장합니다.)

B. Create separate projects that only process credit card data
- (해석: 신용카드 데이터만 처리하는 별도의 프로젝트를 만듭니다.)

C. Create separate subnetworks and isolate the components that process credit card data
- (해석: 별도의 서브네트워크를 만들고 신용카드 데이터를 처리하는 구성 요소를 격리합니다.)

D. Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data
- (해석: PCI 데이터를 처리하는 모든 가상 머신(VM)에 라벨을 지정하여 감사 검색 단계를 간소화합니다.)

E. Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor
- (해석: Google BigQuery로의 로깅 내보내기를 활성화하고 ACL 및 뷰를 사용하여 감사자와 공유되는 데이터의 범위를 지정합니다.)

**[문장별 끊어 읽기 및 해석]**
* **Your application needs to process / credit card transactions.**
  * (해석) 당신의 애플리케이션은 처리해야 합니다 / 신용카드 거래를.
* **You want the smallest scope / of Payment Card Industry (PCI) compliance / without compromising the ability / to analyze transactional data and trends / relating to which payment methods are used.**
  * (해석) 당신은 가장 작은 범위를 원합니다 / PCI 규정 준수의 / 능력을 손상시키지 않으면서 / 거래 데이터와 트렌드를 분석하는 / 어떤 결제 수단이 사용되는지와 관련된.
* **How should you design / your architecture?**
  * (해석) 어떻게 설계해야 합니까 / 당신의 아키텍처를?

**[핵심 어휘 및 구문]**
* **credit card transaction**: (명사구) 신용카드 거래.
* **compliance**: (명사) 규정 준수, 법적 부합성.
* **without compromising**: (숙어) ~을 손상시키지 않으면서.
* **payment method**: (명사구) 결제 수단. (예: Visa, Master 등)
* **tokenizer**: (명사) 토크나이저. 민감한 데이터를 고유 식별자인 토큰으로 변환하는 장치입니다.
* **tokenized data**: (명사구) 토큰화된 데이터.

#### ✅ 3. 정답 및 문제 해설
* **정답: A (Create a tokenizer service and store only tokenized data)**
* **해설**:
  * 신용카드 정보를 저장, 전송, 처리하는 모든 시스템은 엄격한 PCI-DSS 보안 표준을 준수해야 하며, 이는 막대한 감사 비용과 기술적 제약을 수반합니다.
  * PCI-DSS의 감사 범위를 줄이는(Descoping) 가장 효과적인 방법은 카드 번호(PAN)와 같은 민감 정보를 내부 시스템에 저장하지 않는 것입니다.
  * **토큰화(Tokenization)**는 카드 정보를 무작위 토큰으로 대체하는 기술입니다. 토큰화 서비스를 통해 결제 즉시 토큰으로 변환하고 시스템에는 **토큰화된 데이터만 저장(`store only tokenized data`)**하면, 해당 시스템은 PCI 감사 대상에서 제외되거나 범위가 대폭 축소됩니다. 동시에 토큰을 통해 결제 수단 분석 등의 트렌드 추적은 그대로 수행할 수 있습니다.
* **오답 분석**:
  * **B, C**: 프로젝트나 서브넷으로 격리하더라도 민감한 원본 카드 데이터가 해당 인프라에 존재하므로 PCI 감사 범위에 포함되며, 범위 축소 효과가 미미합니다.
  * **D, E**: 감사(Audit) 편의성을 높이는 방법일 뿐, 규정 준수 요구사항 자체의 범위를 물리적으로 줄여주지 못합니다.

#### 🧠 4. 핵심 개념 다지기
* **Tokenization (토큰화)**:
  * **개념**: 민감한 데이터 요소를 동일한 형식을 가졌으나 민감하지 않은 대용물(토큰)로 교체하는 프로세스입니다.
  * **문제 내 쓰임**: 규제(PCI-DSS) 준수 부담을 최소화하면서도 비즈니스 데이터 분석 기능을 유지하기 위한 아키텍처 기법으로 쓰입니다.
```
