#### 🎯 1. 출제의도
* 이 문제는 운영 환경 배포 시 발생하는 오류와 계획되지 않은 롤백(Rollback)을 최소화하기 위한 고급 배포 전략 및 아키텍처 개선 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
You need to reduce the number of unplanned rollbacks
of erroneous production deployments in your company's
web hosting platform.

Improvement to the QA/Test processes accomplished
an 80% reduction.

Which additional two approaches can you take
to further reduce the rollbacks? (Choose two.)
```

**[한글 해석]**
```text
귀사의 웹 호스팅 플랫폼에서 잘못된 운영 배포로 인한
계획되지 않은 롤백 횟수를 줄여야 합니다.

QA/테스트 프로세스 개선을 통해 80%의 감소를
달성했습니다.

롤백을 더욱 줄이기 위해 취할 수 있는
추가적인 두 가지 접근 방식은 무엇입니까?
(2개를 선택하세요.)
```

A. Introduce a green-blue deployment model
- (해석: Blue-Green 배포 모델을 도입합니다.)

B. Replace the QA environment with canary releases
- (해석: QA 환경을 Canary 릴리스로 대체합니다.)

C. Fragment the monolithic platform into microservices
- (해석: 모놀리식 플랫폼을 마이크로서비스로 분할합니다.)

D. Reduce the platform's dependency on relational database systems
- (해석: 플랫폼의 관계형 데이터베이스 시스템에 대한 의존도를 줄입니다.)

E. Replace the platform's relational database systems with a NoSQL database
- (해석: 플랫폼의 관계형 데이터베이스 시스템을 NoSQL 데이터베이스로 교체합니다.)

**[문장별 끊어 읽기 및 해석]**
* **You need to reduce / the number of unplanned rollbacks / of erroneous production deployments / in your company's web hosting platform.**
  * (해석) 당신은 줄여야 합니다 / 계획되지 않은 롤백의 수를 / 잘못된 운영 배포의 / 귀사의 웹 호스팅 플랫폼에서.
* **Improvement to the QA/Test processes / accomplished / an 80% reduction.**
  * (해석) QA/테스트 프로세스 개선이 / 달성했습니다 / 80%의 감소를.
* **Which additional two approaches / can you take / to further reduce / the rollbacks? / (Choose two.)**
  * (해석) 어떤 추가적인 두 가지 접근 방식을 / 취할 수 있습니까 / 롤백을 더 줄이기 위해? / (2개를 선택하세요.)

**[핵심 어휘 및 구문]**
* **unplanned rollback**: (명사구) 계획되지 않은 롤백. 배포 실패로 인해 이전 버전으로 긴급 복구하는 상황입니다.
* **erroneous**: (형용사) 잘못된, 에러가 있는.
* **production deployment**: (명사구) 운영 환경 배포. 실제 사용자에게 서비스를 제공하는 환경에 코드를 반영하는 것입니다.
* **web hosting platform**: (명사) 웹 호스팅 플랫폼.
* **accomplish**: (동사) 성취하다, 달성하다.
* **further reduce**: (동사구) 더욱 줄이다. 이미 개선된 상태에서 추가적인 개선을 도모함을 나타냅니다.
* **blue-green deployment**: (명사구) 블루-그린 배포. 두 개의 동일한 환경을 구성하여 무중단 배포를 구현하는 방식입니다.
* **canary release**: (명사구) 카나리 릴리스. 일부 사용자에게만 새 버전을 먼저 노출하여 안정성을 검증하는 배포 방식입니다.
* **monolithic**: (형용사) 모놀리식의. 모든 기능이 하나의 거대한 애플리케이션으로 결합된 아키텍처입니다.
* **microservices**: (명사) 마이크로서비스. 작고 독립적으로 배포 가능한 서비스들로 시스템을 구성하는 아키텍처입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: A, C (Green-blue deployment, Fragment into microservices)**
* **해설**:
  * QA 프로세스 개선(테스트 강화) 외에 배포 안정성을 높이고 롤백의 영향을 최소화하는 아키텍처 및 배포 전략을 찾아야 합니다.
  * **A (Blue-Green Deployment)**: 기존 버전(Blue)과 새 버전(Green) 환경을 병렬로 유지합니다. 새 버전 배포 후 문제가 발견되면 트래픽 스위칭만으로 즉시 이전 버전으로 롤백할 수 있어 서비스 중단 시간을 최소화하고 계획되지 않은 긴급 롤백의 위험을 크게 낮춥니다.
  * **C (Microservices)**: 시스템을 작은 단위의 마이크로서비스로 분할하면, 특정 서비스 배포 시 오류가 발생하더라도 전체 시스템을 롤백할 필요 없이 해당 서비스만 롤백하면 됩니다. 이는 폭포수 효과(Blast Radius)를 줄여 전체적인 롤백 부담을 경감시킵니다.
* **오답 분석**:
  * **B**: Canary 릴리스는 훌륭한 배포 전략이지만, QA 환경을 "대체"하는 것은 위험합니다. QA 환경에서의 내부 검증이 완료된 후 운영 환경에서 Canary를 진행해야 합니다.
  * **D, E**: 데이터베이스 유형 변경이나 의존도 감소는 애플리케이션의 배포 오류 및 롤백 감소와 직접적인 연관이 없습니다.

#### 🧠 4. 핵심 개념 다지기
* **Blue-Green Deployment (블루-그린 배포)**:
  * **개념**: 두 개의 동일한 프로덕션 환경을 두고, 하나는 활성(Active), 하나는 대기(Idle) 상태로 운영하며 로드 밸런서를 통해 트래픽을 전환하는 무중단 배포 방식입니다.
  * **문제 내 쓰임**: 배포 실패 시 즉각적이고 안전한 롤백을 가능하게 하여 운영 안정성을 극대화합니다.
```
