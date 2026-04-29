#### 🎯 1. 출제의도
* 온프레미스에서 GCP로 애플리케이션을 마이그레이션할 때, 사용자 경험을 저해하지 않고 강력한 보안 요구사항을 충족하는 인증 전략을 선택하는 능력을 평가합니다. 특히 기존 ID 관리 시스템과의 통합 방안에 대한 이해를 묻습니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your customer is moving an existing corporate application to Google Cloud Platform from an on-premises data center. The business owners require minimal user disruption. There are strict security team requirements for storing passwords.What authentication strategy should they use?
```

**[한글 해석]**
```text
귀사의 고객은 기존 기업 애플리케이션을 온프레미스 데이터 센터에서 Google Cloud Platform으로 이전하고 있습니다.
비즈니스 소유자는 최소한의 사용자 중단을 요구합니다.
비밀번호 저장에 대한 엄격한 보안 팀 요구사항이 있습니다.
어떤 인증 전략을 사용해야 할까요?
```

Suggested Answer: B 🗳️

A. Use G Suite Password Sync to replicate passwords into Google
- (해석: G Suite 비밀번호 동기화를 사용하여 비밀번호를 Google로 복제합니다.)

B. Federate authentication via SAML 2.0 to the existing Identity Provider
- (해석: SAML 2.0을 통해 기존 ID 공급자에게 인증을 페더레이션합니다.)

C. Provision users in Google using the Google Cloud Directory Sync tool
- (해석: Google Cloud Directory Sync 도구를 사용하여 Google에 사용자를 프로비저닝합니다.)

D. Ask users to set their Google password to match their corporate password
- (해석: 사용자에게 Google 비밀번호를 기업 비밀번호와 일치시키도록 요청합니다.)

**[문장별 끊어 읽기 및 해석]**
* **Your customer is moving / an existing corporate application / to Google Cloud Platform / from an on-premises data center.**
  * (해석) 귀사의 고객은 이전하고 있습니다 / 기존 기업 애플리케이션을 / Google Cloud Platform으로 / 온프레미스 데이터 센터에서.
* **The business owners require / minimal user disruption.**
  * (해석) 비즈니스 소유자는 요구합니다 / 최소한의 사용자 중단을.
* **There are strict security team requirements / for storing passwords.**
  * (해석) 엄격한 보안 팀 요구사항이 있습니다 / 비밀번호 저장에 대한.
* **What authentication strategy / should they use?**
  * (해석) 어떤 인증 전략을 / 그들이 사용해야 할까요?
* **A. Use G Suite Password Sync / to replicate passwords / into Google**
  * (해석) G Suite 비밀번호 동기화를 사용합니다 / 비밀번호를 복제하기 위해 / Google로.
* **B. Federate authentication / via SAML 2.0 / to the existing Identity Provider**
  * (해석) 인증을 페더레이션합니다 / SAML 2.0을 통해 / 기존 ID 공급자에게.
* **C. Provision users / in Google / using the Google Cloud Directory Sync tool**
  * (해석) Google에 사용자를 프로비저닝합니다 / Google Cloud Directory Sync 도구를 사용하여.
* **D. Ask users / to set their Google password / to match their corporate password**
  * (해석) 사용자에게 요청합니다 / 그들의 Google 비밀번호를 설정하도록 / 그들의 기업 비밀번호와 일치시키도록.

**[핵심 어휘 및 구문]**
*   **moving (an application)**: (동명사/현재분사) 이전하는, 옮기는. IT 문맥에서는 시스템, 애플리케이션, 데이터를 한 환경에서 다른 환경으로 옮기는 마이그레이션을 의미합니다.
*   **on-premises data center**: (명사) 온프레미스 데이터 센터. 기업 자체 시설 내에 물리적으로 위치한 데이터 센터를 지칭합니다.
*   **require**: (동사) 요구하다. 특정 조건이나 필요성을 명시할 때 사용됩니다.
*   **minimal disruption**: (형용사 + 명사) 최소한의 중단. 사용자나 서비스에 미치는 영향을 최소화해야 한다는 비즈니스 요구사항을 나타냅니다.
*   **strict requirements**: (형용사 + 명사) 엄격한 요구사항. 특히 보안, 규정 준수와 관련된 매우 중요한 조건들을 의미합니다.
*   **storing passwords**: (동명사 구) 비밀번호 저장. 데이터 보안 및 규정 준수에서 매우 민감한 부분으로, 안전한 저장 방식이 중요합니다.
*   **authentication strategy**: (명사) 인증 전략. 사용자 또는 시스템의 신원을 확인하는 방법에 대한 전체적인 접근 방식입니다.
*   **replicate**: (동사) 복제하다. 데이터를 다른 시스템이나 위치에 동일하게 만드는 것을 의미합니다.
*   **federate**: (동사) 페더레이션하다. 여러 시스템 간에 ID 정보를 공유하여 단일 로그인(SSO) 환경을 구축하는 것을 의미합니다.
*   **Identity Provider (IdP)**: (명사) ID 공급자. 사용자 인증을 수행하고 신원 정보를 서비스 제공자에게 제공하는 시스템입니다.
*   **provision users**: (동사 + 명사) 사용자를 프로비저닝하다. 시스템에 사용자 계정을 생성하고 필요한 권한을 할당하는 과정을 의미합니다.
*   **match**: (동사) 일치시키다. 두 개 이상의 항목이 동일하거나 서로 대응하도록 만드는 것을 의미합니다.

#### ✅ 3. 정답 및 문제 해설
*   **정답: B (Federate authentication via SAML 2.0 to the existing Identity Provider)**
*   **해설**:
    *   문제의 핵심 요구사항은 '최소한의 사용자 중단(minimal user disruption)'과 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항(strict security team requirements for storing passwords)'입니다.
    *   인증 페더레이션은 사용자의 신원 정보를 온프레미스에 있는 기존 ID 공급자(예: Active Directory)가 관리하고, GCP와 같은 클라우드 서비스는 이 ID 공급자로부터 인증 결과를 신뢰하여 사용자를 승인하는 방식입니다. SAML 2.0은 이러한 페더레이션 인증을 위한 표준 프로토콜입니다.
    *   이 방식은 사용자가 기존 온프레미스 자격 증명으로 클라우드 서비스에 접근할 수 있게 하여, 새로운 비밀번호를 만들거나 기억할 필요가 없어 사용자 중단을 최소화합니다.
    *   또한, 비밀번호는 온프레미스 ID 공급자에만 저장되므로 GCP에 비밀번호를 직접 저장할 필요가 없어 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항'을 충족시킬 수 있습니다. 이는 클라우드 환경으로의 민감한 정보 유출 위험을 줄여 보안을 강화하는 가장 좋은 방법입니다.

*   **오답 분석**:
    *   **A. Use G Suite Password Sync to replicate passwords into Google**:
        *   이 옵션은 온프레미스 비밀번호를 Google Cloud (G Suite)로 '복제'하는 것을 제안합니다. 이는 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항'을 직접적으로 위반할 가능성이 높습니다. 보안 팀은 클라우드 환경에 민감한 비밀번호가 직접 복제되는 것을 원치 않을 것입니다. 비밀번호의 복제는 공격 표면을 넓히고 보안 위험을 증가시킵니다.
    *   **C. Provision users in Google using the Google Cloud Directory Sync tool**:
        *   Google Cloud Directory Sync (GCDS)는 온프레미스 디렉토리(예: Active Directory)에서 사용자 및 그룹 정보를 Google Cloud ID로 '동기화'하는 도구입니다. 하지만 GCDS는 일반적으로 비밀번호를 동기화하지 않고, 사용자 속성 및 계정 상태만 동기화합니다. 만약 비밀번호 동기화 옵션을 사용한다면 A와 동일하게 보안 요구사항을 위반할 위험이 있습니다. 사용자 계정을 클라우드에 프로비저닝하는 것은 좋지만, 인증 자체는 기존 ID 공급자를 통해 페더레이션하는 것이 보안 및 사용자 경험 측면에서 더 우수합니다. 이 옵션만으로는 사용자 인증이 어떻게 이루어질지에 대한 완전한 해결책을 제시하지 못합니다.
    *   **D. Ask users to set their Google password to match their corporate password**:
        *   이것은 최악의 보안 관행 중 하나입니다. 사용자에게 동일한 비밀번호를 여러 시스템에 사용하도록 요구하는 것은 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항'을 위반할 뿐만 아니라, '최소한의 사용자 중단' 요구사항도 충족시키지 못합니다. 사용자에게 새로운 비밀번호를 설정하게 하는 것은 중단을 유발하며, 비밀번호 재사용은 한 곳에서 비밀번호가 유출될 경우 모든 시스템의 보안이 위험해지는 심각한 보안 취약점을 만듭니다.

#### 🧠 4. 핵심 개념 다지기
*   **인증 페더레이션 (Authentication Federation)**:
    *   **개념**: 사용자의 인증이 한 시스템(ID 공급자)에서 이루어지고, 다른 시스템(서비스 공급자)이 이 인증 결과를 신뢰하여 사용자에게 리소스 접근 권한을 부여하는 프로세스입니다. 이를 통해 사용자는 여러 서비스에 대해 단일 로그인(SSO) 경험을 얻을 수 있습니다.
    *   **문제 내 쓰임**: 이 문제에서는 온프레미스에 존재하는 'existing Identity Provider'를 통해 사용자 인증을 계속 수행하고, GCP 애플리케이션은 이 IdP의 인증 결과를 신뢰하도록 연동하는 방식입니다. 이는 사용자가 GCP 앱에 접근할 때 기존 기업 자격 증명을 사용하여 로그인하므로 'minimal user disruption'을 달성하고, 비밀번호가 온프레미스에만 저장되어 'strict security team requirements for storing passwords'를 충족시킵니다.
    *   **특징 및 제약사항**: 단일 로그인(SSO)을 가능하게 하여 사용자 편의성을 높이고, ID 관리를 중앙 집중화하여 관리 오버헤드를 줄입니다. 또한, 비밀번호가 서비스 공급자에 저장되지 않으므로 보안 위험을 최소화할 수 있습니다. 주요 표준 프로토콜로는 SAML, OAuth, OpenID Connect 등이 있습니다. 초기 설정 및 통합 복잡성이 있을 수 있지만, 장기적으로는 이점을 제공합니다.

*   **SAML 2.0 (Security Assertion Markup Language 2.0)**:
    *   **개념**: 도메인 간에 사용자 인증 및 권한 부여 데이터를 교환하기 위한 XML 기반의 개방형 표준입니다. 주로 웹 기반 SSO(Single Sign-On)를 구현하는 데 사용됩니다.
    *   **문제 내 쓰임**: 문제의 정답인 B 옵션에서 언급된 것처럼, SAML 2.0은 온프레미스 '기존 ID 공급자'와 GCP 간에 인증 정보를 안전하게 교환하는 메커니즘으로 사용됩니다. 이를 통해 GCP는 온프레미스 IdP가 인증한 사용자의 신원을 신뢰하고 접근을 허용합니다.
    *   **특징 및 제약사항**: 업계 표준이며 널리 지원됩니다. 브라우저 기반 SSO 시나리오에 적합하며, 보안 및 확장성이 뛰어납니다. 복잡한 설정이 필요할 수 있으며, 최신 API 기반 인증 흐름에는 OpenID Connect가 더 선호되기도 하지만, 기존 엔터프라이즈 환경에서는 여전히 강력한 옵션입니다.

*   **Google Cloud Directory Sync (GCDS)**:
    *   **개념**: 온프레미스 디렉토리 서비스(예: Microsoft Active Directory 또는 OpenLDAP)의 사용자, 그룹, 연락처 등의 데이터를 Google Cloud Identity 또는 Google Workspace 계정으로 동기화하는 Google에서 제공하는 도구입니다.
    *   **문제 내 쓰임**: C 옵션에서 제시된 GCDS는 사용자 계정을 Google에 생성하고 관리하는 데 사용되지만, 기본적으로는 비밀번호를 동기화하지 않고 사용자 속성 및 계정 상태를 동기화하는 데 중점을 둡니다. 인증 자체보다는 사용자 프로비저닝에 가깝습니다. 이 문제의 '비밀번호 저장에 대한 엄격한 보안 요구사항'을 직접적으로 해결하기 어렵고, 페더레이션 방식이 더 적합합니다.
    *   **특징 및 제약사항**: 기존 ID 시스템의 데이터를 Google 환경으로 가져오는 데 유용하며, 수동으로 계정을 생성할 필요를 없애 관리 효율성을 높입니다. 그러나 비밀번호 동기화는 제한적이거나 권장되지 않으며, 사용자 인증의 최종적인 책임은 여전히 온프레미스 IdP에 있거나 Google 자체 인증을 사용해야 합니다.

*   **비밀번호 보안 (Password Security)**:
    *   **개념**: 비밀번호의 생성, 저장, 전송 및 관리에 관련된 일련의 보안 관행 및 기술입니다. 여기에는 강력한 비밀번호 정책, 안전한 저장(해싱, 솔팅), 재사용 금지, 유출 방지 등이 포함됩니다.
    *   **문제 내 쓰임**: 'strict security team requirements for storing passwords'는 비밀번호가 안전하게 관리되어야 함을 강조합니다. 정답인 페더레이션 방식은 비밀번호가 온프레미스 IdP에만 유지되므로, 클라우드 환경으로의 민감한 정보 노출을 최소화하여 이 요구사항을 충족시킵니다. 오답들은 비밀번호를 복제하거나 재사용하게 하여 이 보안 요구사항을 위반하는 문제가 있습니다.
    *   **특징 및 제약사항**: 비밀번호는 가장 일반적인 인증 수단이므로, 그 보안은 전체 시스템의 보안에 결정적인 영향을 미칩니다. 안전하지 않은 비밀번호 저장이나 재사용은 심각한 보안 취약점을 초래합니다. 이상적으로는 비밀번호 없이 인증하는 방식(예: 생체 인식, FIDO2)이 가장 안전하지만, 현실에서는 비밀번호 관리의 보안을 최우선으로 고려해야 합니다.#### 🎯 1. 출제의도
* 온프레미스에서 GCP로 애플리케이션을 마이그레이션할 때, 사용자 경험을 저해하지 않고 강력한 보안 요구사항을 충족하는 인증 전략을 선택하는 능력을 평가합니다. 특히 기존 ID 관리 시스템과의 통합 방안에 대한 이해를 묻습니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your customer is moving an existing corporate application to Google Cloud Platform from an on-premises data center. The business owners require minimal user disruption. There are strict security team requirements for storing passwords.What authentication strategy should they use?
```

**[한글 해석]**
```text
귀사의 고객은 기존 기업 애플리케이션을 온프레미스 데이터 센터에서 Google Cloud Platform으로 이전하고 있습니다.
비즈니스 소유자는 최소한의 사용자 중단을 요구합니다.
비밀번호 저장에 대한 엄격한 보안 팀 요구사항이 있습니다.
어떤 인증 전략을 사용해야 할까요?
```

Suggested Answer: B 🗳️

A. Use G Suite Password Sync to replicate passwords into Google
- (해석: G Suite 비밀번호 동기화를 사용하여 비밀번호를 Google로 복제합니다.)

B. Federate authentication via SAML 2.0 to the existing Identity Provider
- (해석: SAML 2.0을 통해 기존 ID 공급자에게 인증을 페더레이션합니다.)

C. Provision users in Google using the Google Cloud Directory Sync tool
- (해석: Google Cloud Directory Sync 도구를 사용하여 Google에 사용자를 프로비저닝합니다.)

D. Ask users to set their Google password to match their corporate password
- (해석: 사용자에게 Google 비밀번호를 기업 비밀번호와 일치시키도록 요청합니다.)

**[문장별 끊어 읽기 및 해석]**
*   **Your customer is moving / an existing corporate application / to Google Cloud Platform / from an on-premises data center.**
    *   (해석) 귀사의 고객은 이전하고 있습니다 / 기존 기업 애플리케이션을 / Google Cloud Platform으로 / 온프레미스 데이터 센터에서.
*   **The business owners require / minimal user disruption.**
    *   (해석) 비즈니스 소유자는 요구합니다 / 최소한의 사용자 중단을.
*   **There are strict security team requirements / for storing passwords.**
    *   (해석) 엄격한 보안 팀 요구사항이 있습니다 / 비밀번호 저장에 대한.
*   **What authentication strategy / should they use?**
    *   (해석) 어떤 인증 전략을 / 그들이 사용해야 할까요?
*   **A. Use G Suite Password Sync / to replicate passwords / into Google**
    *   (해석) G Suite 비밀번호 동기화를 사용합니다 / 비밀번호를 복제하기 위해 / Google로.
*   **B. Federate authentication / via SAML 2.0 / to the existing Identity Provider**
    *   (해석) 인증을 페더레이션합니다 / SAML 2.0을 통해 / 기존 ID 공급자에게.
*   **C. Provision users / in Google / using the Google Cloud Directory Sync tool**
    *   (해석) Google에 사용자를 프로비저닝합니다 / Google Cloud Directory Sync 도구를 사용하여.
*   **D. Ask users / to set their Google password / to match their corporate password**
    *   (해석) 사용자에게 요청합니다 / 그들의 Google 비밀번호를 설정하도록 / 그들의 기업 비밀번호와 일치시키도록.

**[핵심 어휘 및 구문]**
*   **moving (an application)**: (동명사/현재분사) 이전하는, 옮기는. IT 문맥에서는 시스템, 애플리케이션, 데이터를 한 환경에서 다른 환경으로 옮기는 마이그레이션을 의미합니다.
*   **on-premises data center**: (명사) 온프레미스 데이터 센터. 기업 자체 시설 내에 물리적으로 위치한 데이터 센터를 지칭합니다.
*   **require**: (동사) 요구하다. 특정 조건이나 필요성을 명시할 때 사용됩니다.
*   **minimal disruption**: (형용사 + 명사) 최소한의 중단. 사용자나 서비스에 미치는 영향을 최소화해야 한다는 비즈니스 요구사항을 나타냅니다.
*   **strict requirements**: (형용사 + 명사) 엄격한 요구사항. 특히 보안, 규정 준수와 관련된 매우 중요한 조건들을 의미합니다.
*   **storing passwords**: (동명사 구) 비밀번호 저장. 데이터 보안 및 규정 준수에서 매우 민감한 부분으로, 안전한 저장 방식이 중요합니다.
*   **authentication strategy**: (명사) 인증 전략. 사용자 또는 시스템의 신원을 확인하는 방법에 대한 전체적인 접근 방식입니다.
*   **replicate**: (동사) 복제하다. 데이터를 다른 시스템이나 위치에 동일하게 만드는 것을 의미합니다.
*   **federate**: (동사) 페더레이션하다. 여러 시스템 간에 ID 정보를 공유하여 단일 로그인(SSO) 환경을 구축하는 것을 의미합니다.
*   **Identity Provider (IdP)**: (명사) ID 공급자. 사용자 인증을 수행하고 신원 정보를 서비스 제공자에게 제공하는 시스템입니다.
*   **provision users**: (동사 + 명사) 사용자를 프로비저닝하다. 시스템에 사용자 계정을 생성하고 필요한 권한을 할당하는 과정을 의미합니다.
*   **match**: (동사) 일치시키다. 두 개 이상의 항목이 동일하거나 서로 대응하도록 만드는 것을 의미합니다.

#### ✅ 3. 정답 및 문제 해설
*   **정답: B (Federate authentication via SAML 2.0 to the existing Identity Provider)**
*   **해설**:
    *   문제의 핵심 요구사항은 '최소한의 사용자 중단(minimal user disruption)'과 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항(strict security team requirements for storing passwords)'입니다.
    *   인증 페더레이션은 사용자의 신원 정보를 온프레미스에 있는 기존 ID 공급자(예: Active Directory)가 관리하고, GCP와 같은 클라우드 서비스는 이 ID 공급자로부터 인증 결과를 신뢰하여 사용자를 승인하는 방식입니다. SAML 2.0은 이러한 페더레이션 인증을 위한 표준 프로토콜입니다.
    *   이 방식은 사용자가 기존 온프레미스 자격 증명으로 클라우드 서비스에 접근할 수 있게 하여, 새로운 비밀번호를 만들거나 기억할 필요가 없어 사용자 중단을 최소화합니다.
    *   또한, 비밀번호는 온프레미스 ID 공급자에만 저장되므로 GCP에 비밀번호를 직접 저장할 필요가 없어 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항'을 충족시킬 수 있습니다. 이는 클라우드 환경으로의 민감한 정보 유출 위험을 줄여 보안을 강화하는 가장 좋은 방법입니다.

*   **오답 분석**:
    *   **A. Use G Suite Password Sync to replicate passwords into Google**:
        *   이 옵션은 온프레미스 비밀번호를 Google Cloud (G Suite)로 '복제'하는 것을 제안합니다. 이는 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항'을 직접적으로 위반할 가능성이 높습니다. 보안 팀은 클라우드 환경에 민감한 비밀번호가 직접 복제되는 것을 원치 않을 것입니다. 비밀번호의 복제는 공격 표면을 넓히고 보안 위험을 증가시킵니다.
    *   **C. Provision users in Google using the Google Cloud Directory Sync tool**:
        *   Google Cloud Directory Sync (GCDS)는 온프레미스 디렉토리(예: Active Directory)에서 사용자 및 그룹 정보를 Google Cloud ID로 '동기화'하는 도구입니다. 하지만 GCDS는 일반적으로 비밀번호를 동기화하지 않고, 사용자 속성 및 계정 상태만 동기화합니다. 만약 비밀번호 동기화 옵션을 사용한다면 A와 동일하게 보안 요구사항을 위반할 위험이 있습니다. 사용자 계정을 클라우드에 프로비저닝하는 것은 좋지만, 인증 자체는 기존 ID 공급자를 통해 페더레이션하는 것이 보안 및 사용자 경험 측면에서 더 우수합니다. 이 옵션만으로는 사용자 인증이 어떻게 이루어질지에 대한 완전한 해결책을 제시하지 못합니다.
    *   **D. Ask users to set their Google password to match their corporate password**:
        *   이것은 최악의 보안 관행 중 하나입니다. 사용자에게 동일한 비밀번호를 여러 시스템에 사용하도록 요구하는 것은 '비밀번호 저장에 대한 엄격한 보안 팀 요구사항'을 위반할 뿐만 아니라, '최소한의 사용자 중단' 요구사항도 충족시키지 못합니다. 사용자에게 새로운 비밀번호를 설정하게 하는 것은 중단을 유발하며, 비밀번호 재사용은 한 곳에서 비밀번호가 유출될 경우 모든 시스템의 보안이 위험해지는 심각한 보안 취약점을 만듭니다.

#### 🧠 4. 핵심 개념 다지기
*   **인증 페더레이션 (Authentication Federation)**:
    *   **개념**: 사용자의 인증이 한 시스템(ID 공급자)에서 이루어지고, 다른 시스템(서비스 공급자)이 이 인증 결과를 신뢰하여 사용자에게 리소스 접근 권한을 부여하는 프로세스입니다. 이를 통해 사용자는 여러 서비스에 대해 단일 로그인(SSO) 경험을 얻을 수 있습니다.
    *   **문제 내 쓰임**: 이 문제에서는 온프레미스에 존재하는 'existing Identity Provider'를 통해 사용자 인증을 계속 수행하고, GCP 애플리케이션은 이 IdP의 인증 결과를 신뢰하도록 연동하는 방식입니다. 이는 사용자가 GCP 앱에 접근할 때 기존 기업 자격 증명을 사용하여 로그인하므로 'minimal user disruption'을 달성하고, 비밀번호가 온프레미스에만 저장되어 'strict security team requirements for storing passwords'를 충족시킵니다.
    *   **특징 및 제약사항**: 단일 로그인(SSO)을 가능하게 하여 사용자 편의성을 높이고, ID 관리를 중앙 집중화하여 관리 오버헤드를 줄입니다. 또한, 비밀번호가 서비스 공급자에 저장되지 않으므로 보안 위험을 최소화할 수 있습니다. 주요 표준 프로토콜로는 SAML, OAuth, OpenID Connect 등이 있습니다. 초기 설정 및 통합 복잡성이 있을 수 있지만, 장기적으로는 이점을 제공합니다.

*   **SAML 2.0 (Security Assertion Markup Language 2.0)**:
    *   **개념**: 도메인 간에 사용자 인증 및 권한 부여 데이터를 교환하기 위한 XML 기반의 개방형 표준입니다. 주로 웹 기반 SSO(Single Sign-On)를 구현하는 데 사용됩니다.
    *   **문제 내 쓰임**: 문제의 정답인 B 옵션에서 언급된 것처럼, SAML 2.0은 온프레미스 '기존 ID 공급자'와 GCP 간에 인증 정보를 안전하게 교환하는 메커니즘으로 사용됩니다. 이를 통해 GCP는 온프레미스 IdP가 인증한 사용자의 신원을 신뢰하고 접근을 허용합니다.
    *   **특징 및 제약사항**: 업계 표준이며 널리 지원됩니다. 브라우저 기반 SSO 시나리오에 적합하며, 보안 및 확장성이 뛰어납니다. 복잡한 설정이 필요할 수 있으며, 최신 API 기반 인증 흐름에는 OpenID Connect가 더 선호되기도 하지만, 기존 엔터프라이즈 환경에서는 여전히 강력한 옵션입니다.

*   **Google Cloud Directory Sync (GCDS)**:
    *   **개념**: 온프레미스 디렉토리 서비스(예: Microsoft Active Directory 또는 OpenLDAP)의 사용자, 그룹, 연락처 등의 데이터를 Google Cloud Identity 또는 Google Workspace 계정으로 동기화하는 Google에서 제공하는 도구입니다.
    *   **문제 내 쓰임**: C 옵션에서 제시된 GCDS는 사용자 계정을 Google에 생성하고 관리하는 데 사용되지만, 기본적으로는 비밀번호를 동기화하지 않고 사용자 속성 및 계정 상태를 동기화하는 데 중점을 둡니다. 인증 자체보다는 사용자 프로비저닝에 가깝습니다. 이 문제의 '비밀번호 저장에 대한 엄격한 보안 요구사항'을 직접적으로 해결하기 어렵고, 페더레이션 방식이 더 적합합니다.
    *   **특징 및 제약사항**: 기존 ID 시스템의 데이터를 Google 환경으로 가져오는 데 유용하며, 수동으로 계정을 생성할 필요를 없애 관리 효율성을 높입니다. 그러나 비밀번호 동기화는 제한적이거나 권장되지 않으며, 사용자 인증의 최종적인 책임은 여전히 온프레미스 IdP에 있거나 Google 자체 인증을 사용해야 합니다.

*   **비밀번호 보안 (Password Security)**:
    *   **개념**: 비밀번호의 생성, 저장, 전송 및 관리에 관련된 일련의 보안 관행 및 기술입니다. 여기에는 강력한 비밀번호 정책, 안전한 저장(해싱, 솔팅), 재사용 금지, 유출 방지 등이 포함됩니다.
    *   **문제 내 쓰임**: 'strict security team requirements for storing passwords'는 비밀번호가 안전하게 관리되어야 함을 강조합니다. 정답인 페더레이션 방식은 비밀번호가 온프레미스 IdP에만 유지되므로, 클라우드 환경으로의 민감한 정보 노출을 최소화하여 이 요구사항을 충족시킵니다. 오답들은 비밀번호를 복제하거나 재사용하게 하여 이 보안 요구사항을 위반하는 문제가 있습니다.
    *   **특징 및 제약사항**: 비밀번호는 가장 일반적인 인증 수단이므로, 그 보안은 전체 시스템의 보안에 결정적인 영향을 미칩니다. 안전하지 않은 비밀번호 저장이나 재사용은 심각한 보안 취약점을 초래합니다. 이상적으로는 비밀번호 없이 인증하는 방식(예: 생체 인식, FIDO2)이 가장 안전하지만, 현실에서는 비밀번호 관리의 보안을 최우선으로 고려해야 합니다.