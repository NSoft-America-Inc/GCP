#### 🎯 1. 출제의도
* 이 문제는 API 버전 관리를 위해 기존 SSL 및 DNS 레코드를 유지하면서 새로운 API와 이전 API를 동시에 서비스하는 아키텍처를 설계하는 능력을 평가합니다. 특히, GCP의 부하 분산기(Load Balancer) 기능을 활용한 트래픽 라우팅 전략에 대한 이해를 묻고 있습니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your company has decided to make a major revision of their API
in order to create better experiences for their developers.

They need to keep the old version of the API available and deployable,
while allowing new customers and testers to try out the new API.

They want to keep the same SSL and DNS records in place
to serve both APIs.

What should they do?
```

**[한글 해석]**
```text
귀사는 개발자들에게 더 나은 경험을 제공하기 위해
API를 대대적으로 개편하기로 결정했습니다.

새로운 고객과 테스터들이 새로운 API를 시험해 볼 수 있도록 하면서도,
이전 버전의 API는 계속 사용할 수 있고 배포 가능하도록 유지해야 합니다.

두 API를 모두 서비스하기 위해
동일한 SSL 및 DNS 레코드를 유지하기를 원합니다.

이들은 무엇을 해야 할까요?
```

A. Configure a new load balancer for the new version of the API
- (해석: 새 버전의 API를 위해 새로운 부하 분산기를 구성합니다.)

B. Reconfigure old clients to use a new endpoint for the new API
- (해석: 이전 클라이언트가 새 API를 위해 새로운 엔드포인트를 사용하도록 재구성합니다.)

C. Have the old API forward traffic to the new API based on the path
- (해석: 이전 API가 경로에 따라 새 API로 트래픽을 전달하도록 합니다.)

D. Use separate backend pools for each API path behind the load balancer
- (해석: 부하 분산기 뒤에서 각 API 경로에 대해 별도의 백엔드 풀을 사용합니다.)

**[문장별 끊어 읽기 및 해석]**
* **Your company / has decided to make / a major revision / of their API / in order to create / better experiences / for their developers.**
  * (해석) 귀사는 / 만들기로 결정했습니다 / 주요 개정을 / 그들의 API에 / 만들기 위해 / 더 나은 경험을 / 그들의 개발자들을 위한.
* **They need to keep / the old version of the API / available and deployable, / while allowing / new customers and testers / to try out / the new API.**
  * (해석) 그들은 유지해야 합니다 / 이전 버전의 API를 / 사용 가능하고 배포 가능하도록, / 허용하면서 / 새로운 고객과 테스터들이 / 시험해 보도록 / 새로운 API를.
* **They want to keep / the same SSL and DNS records / in place / to serve / both APIs.**
  * (해석) 그들은 유지하기를 원합니다 / 동일한 SSL 및 DNS 레코드를 / 그대로 / 서비스하기 위해 / 두 API를 모두.
* **What should they do?**
  * (해석) 그들은 무엇을 해야 할까요?

**[핵심 어휘 및 구문]**
* **decide to make**: (동사구) ~하기로 결정하다. IT 프로젝트에서 주요 변경사항을 계획할 때 자주 사용되는 표현입니다.
* **major revision**: (명사구) 주요 개정, 대대적인 수정. 기존 시스템이나 코드베이스에 상당한 변화가 있음을 의미합니다.
* **in order to**: (숙어) ~하기 위하여. 목적을 나타낼 때 사용됩니다.
* **available**: (형용사) 사용 가능한. 서비스나 리소스가 접근 가능하고 작동 중임을 나타냅니다.
* **deployable**: (형용사) 배포 가능한. 소프트웨어나 서비스가 실제 환경에 설치 및 실행될 수 있음을 의미합니다.
* **allowing**: (동사) 허용하다. 특정 행동이나 접근을 가능하게 할 때 쓰입니다.
* **try out**: (구동사) 시험해 보다, 시도해 보다. 새로운 기능이나 제품을 테스트할 때 사용합니다.
* **keep in place**: (숙어) 그대로 유지하다, 보존하다. 변경 없이 현재 상태를 유지한다는 의미입니다.
* **serve**: (동사) 서비스를 제공하다, 응답하다. 서버가 클라이언트 요청에 응답하여 데이터를 제공하는 행위를 의미합니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: D (Use separate backend pools for each API path behind the load balancer)**
* **해설**:
  * 이 문제는 "동일한 SSL 및 DNS 레코드를 유지하면서" 새 API와 이전 API를 모두 서비스해야 한다는 핵심 요구사항을 제시합니다. 이는 단일 진입점(Single Entry Point)을 통해 트래픽을 라우팅해야 함을 의미합니다.
  * GCP의 부하 분산기는 단일 IP 주소와 포트(동일한 SSL/DNS)로 들어오는 트래픽을 다양한 백엔드 서비스 또는 백엔드 풀로 조건부(예: URL 경로, 호스트 헤더 등) 라우팅할 수 있는 기능을 제공합니다.
  * `Use separate backend pools for each API path behind the load balancer`는 이러한 요구사항을 가장 정확하게 충족합니다. 부하 분산기(Load Balancer)를 사용하여 `api.example.com/v1/*`로 들어오는 요청은 이전 API를 처리하는 백엔드 풀로 보내고, `api.example.com/v2/*`로 들어오는 요청은 새 API를 처리하는 백엔드 풀로 보낼 수 있습니다.
  * 이를 통해 기존 고객은 영향을 받지 않고 이전 API에 계속 접근할 수 있으며, 새로운 고객이나 테스터는 동일한 도메인 아래의 다른 경로를 통해 새 API를 시험해 볼 수 있습니다. SSL 인증서와 DNS 레코드는 부하 분산기 레벨에서 관리되므로 변경할 필요가 없습니다.

* **오답 분석**:
  * **A. Configure a new load balancer for the new version of the API**: 이 옵션은 "동일한 SSL 및 DNS 레코드를 유지"하라는 문제의 핵심 제약 조건을 위반합니다. 새 부하 분산기를 구성하면 새로운 DNS 레코드 또는 추가적인 복잡한 DNS 라우팅 설정이 필요하게 되어, 문제의 요구사항을 충족시키지 못합니다.
  * **B. Reconfigure old clients to use a new endpoint for the new API**: 이 옵션은 "이전 버전의 API를 계속 사용할 수 있고 배포 가능하도록 유지"하고 "새로운 고객과 테스터들이 새로운 API를 시험해 보도록" 하는 문제의 의도를 벗어납니다. 기존 클라이언트를 재구성하는 것은 대규모 환경에서 매우 어렵고 비용이 많이 들며, 기존 사용자 경험에 부정적인 영향을 미칠 수 있습니다. 또한, 기존 API의 접근성을 유지한다는 요구사항도 제대로 해결하지 못합니다.
  * **C. Have the old API forward traffic to the new API based on the path**: 이 방식은 몇 가지 문제를 야기합니다. 첫째, 이전 API 애플리케이션 자체가 라우팅 로직을 가지게 되어 애플리케이션의 복잡성을 증가시키고, 부하 분산기의 역할(트래픽 관리)이 이중화됩니다. 둘째, 이전 API가 다운되거나 과부하 상태가 되면 새로운 API로의 트래픽 전달에도 영향을 미칠 수 있어 단일 실패 지점(Single Point of Failure)이 될 수 있습니다. 셋째, 부하 분산기가 제공하는 고급 트래픽 관리(헬스 체크, 자동 확장 등) 이점을 제대로 활용할 수 없습니다.

#### 🧠 4. 핵심 개념 다지기
* **GCP HTTP(S) Load Balancer (GCP HTTP(S) 부하 분산기)**:
  * **개념**: GCP HTTP(S) 부하 분산기는 전역적으로 분산된 웹 트래픽을 관리하고, 요청을 가장 적합한 백엔드 인스턴스로 라우팅하는 데 사용되는 완전 관리형 서비스입니다. SSL/TLS 오프로딩, 경로 기반 라우팅, 호스트 기반 라우팅, 가중치 기반 트래픽 분할 등 고급 트래픽 관리 기능을 제공합니다.
  * **문제 내 쓰임**: 이 문제에서 HTTP(S) 부하 분산기는 "동일한 SSL 및 DNS 레코드"를 유지하면서 "새 API와 이전 API" 두 가지 버전을 모두 서비스하는 단일 진입점 역할을 합니다. 특히, 경로 기반 라우팅 규칙(URL Map)을 사용하여 `/v1` 경로로 들어오는 요청은 이전 API의 백엔드 풀로, `/v2` 경로로 들어오는 요청은 새 API의 백엔드 풀로 전달함으로써, 두 API 버전을 동시에 안정적으로 운영할 수 있게 합니다.
  * **특징 및 제약사항**: 전역 부하 분산이 가능하여 사용자에게 가장 가까운 백엔드로 트래픽을 보낼 수 있고, 자동 확장을 지원하여 트래픽 증가에 유연하게 대응합니다. SSL 인증서를 부하 분산기에서 중앙 집중식으로 관리할 수 있어 백엔드 인스턴스에서는 SSL 처리가 필요 없습니다.

* **API Versioning (API 버전 관리)**:
  * **개념**: API 버전 관리는 API를 변경할 때 기존 클라이언트의 호환성을 깨지 않고 새로운 기능을 도입하거나 기존 기능을 수정하는 방법입니다. 일반적으로 URL 경로(예: `/v1`, `/v2`), 커스텀 헤더, 또는 쿼리 파라미터 등을 통해 버전을 구분합니다.
  * **문제 내 쓰임**: 문제의 핵심 요구사항 중 하나는 "이전 버전의 API는 계속 사용할 수 있고 배포 가능하도록 유지"하면서 "새로운 API"를 도입하는 것입니다. 이는 API 버전 관리가 필요하다는 것을 명확히 보여줍니다. 부하 분산기를 통한 경로 기반 라우팅은 API 버전 관리를 구현하는 효과적인 방법 중 하나로 활용됩니다.
  * **특징 및 제약사항**: 적절한 API 버전 관리는 클라이언트의 점진적인 마이그레이션을 지원하고, 서비스 중단을 최소화하며, 개발자 경험을 향상시킵니다. 그러나 너무 많은 버전이 동시에 유지되면 관리 복잡성이 증가할 수 있습니다.
