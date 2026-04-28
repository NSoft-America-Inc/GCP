#### 🎯 1. 출제의도
* 이 문제는 온프레미스 환경에서 GCP로 기업 애플리케이션을 마이그레이션할 때, 비밀번호 보안 요구사항을 준수하면서 사용자 불편을 최소화하는 하이브리드 인증 전략(Authentication Strategy) 설계 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your customer is moving an existing corporate application
to Google Cloud Platform from an on-premises data center.

The business owners require minimal user disruption.

There are strict security team requirements
for storing passwords.

What authentication strategy should they use?
```

**[한글 해석]**
```text
고객이 기존의 기업용 애플리케이션을
온프레미스 데이터 센터에서 Google Cloud Platform으로
이전하고 있습니다.

비즈니스 소유자는 사용자 서비스 중단을
최소화할 것을 요구합니다.

비밀번호 저장에 대한 보안 팀의 엄격한
요구사항이 있습니다.

그들은 어떤 인증 전략을 사용해야 합니까?
```

A. Use G Suite Password Sync to replicate passwords into Google
- (해석: 비밀번호를 Google에 복제하기 위해 G Suite Password Sync를 사용합니다.)

B. Federate authentication via SAML 2.0 to the existing Identity Provider
- (해석: SAML 2.0을 통해 기존 ID 공급자(Identity Provider)로 인증을 연동합니다.)

C. Provision users in Google using the Google Cloud Directory Sync tool
- (해석: Google Cloud Directory Sync 도구를 사용하여 Google에 사용자를 프로비저닝합니다.)

D. Ask users to set their Google password to match their corporate password
- (해석: 사용자에게 Google 비밀번호를 회사 비밀번호와 일치하도록 설정하도록 요청합니다.)

**[문장별 끊어 읽기 및 해석]**
* **Your customer is moving / an existing corporate application / to Google Cloud Platform / from an on-premises data center.**
  * (해석) 당신의 고객은 이전하고 있습니다 / 기존 기업용 애플리케이션을 / Google Cloud Platform으로 / 온프레미스 데이터 센터에서.
* **The business owners / require / minimal user disruption.**
  * (해석) 비즈니스 소유자들은 / 요구합니다 / 최소한의 사용자 중단을.
* **There are strict security team requirements / for storing passwords.**
  * (해석) 엄격한 보안 팀 요구사항이 있습니다 / 비밀번호 저장에 대한.
* **What authentication strategy / should they use?**
  * (해석) 어떤 인증 전략을 / 그들은 사용해야 합니까?

**[핵심 어휘 및 구문]**
* **corporate application**: (명사구) 기업용 애플리케이션.
* **minimal disruption**: (명사구) 최소한의 중단/불편. 사용자 환경 변화를 최소화함을 의미합니다.
* **strict requirements**: (명사구) 엄격한 요구사항. 반드시 준수해야 하는 제약 조건입니다.
* **authentication strategy**: (명사구) 인증 전략. 사용자의 신원을 확인하는 방법론입니다.
* **federate authentication**: (동사구) 연동 인증. 외부 시스템의 인증 결과를 신뢰하여 로그인시키는 방식입니다.
* **SAML 2.0**: (명사) 보안 어설션 마크업 언어. 인증 정보를 교환하기 위한 XML 기반 표준입니다.
* **Identity Provider (IdP)**: (명사구) ID 공급자. 사용자의 자격 증명을 확인하고 인증을 수행하는 중앙 시스템입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: B (Federate authentication via SAML 2.0 to the existing Identity Provider)**
* **해설**:
  * 고객의 핵심 제약 조건은 **1) 비밀번호 저장에 대한 엄격한 보안(GCP에 비밀번호를 저장하거나 복제하고 싶지 않음)**, **2) 사용자 불편 최소화(기존 로그인 경험 유지)**입니다.
  * **SAML 2.0 기반의 연동 인증(Federation)**을 사용하면, 사용자가 GCP 서비스에 접근할 때 인증 요청을 기업 내부의 기존 ID 공급자(IdP, 예: Active Directory, Okta 등)로 리다이렉트합니다.
  * 실제 인증은 사내 시스템에서 이루어지며, GCP는 인증 성공 여부(토큰)만 전달받으므로 **비밀번호가 GCP에 저장되지 않아** 보안 요구사항을 완벽히 충족합니다. 또한 사용자는 기존 계정으로 Single Sign-On(SSO)을 할 수 있어 불편이 최소화됩니다.
* **오답 분석**:
  * **A**: Password Sync는 비밀번호 해시를 Google 서버로 복제(Replicate)하므로, 비밀번호를 외부(GCP)에 저장하지 말라는 보안 규칙에 위배될 수 있습니다.
  * **C**: Directory Sync(GCDS)는 사용자 계정 목록(메타데이터)을 동기화하는 도구일 뿐, 비밀번호 인증 자체를 처리하는 솔루션이 아닙니다.
  * **D**: 보안성이 전혀 없으며 사용자에게 큰 불편을 초래합니다.

#### 🧠 4. 핵심 개념 다지기
* **Single Sign-On (SSO) & Federation (연동 인증)**:
  * **개념**: 한 번의 로그인으로 여러 독립된 시스템에 접근할 수 있게 해주는 기술입니다.
  * **문제 내 쓰임**: 기업 내부 보안 정책을 위반하지 않으면서 클라우드 리소스를 안전하게 이용하기 위한 필수적인 기업용 아키텍처 패턴입니다.
```
