#### 🎯 1. 출제의도
* 이 문제는 Google App Engine과 같은 분산 환경에서 다중 인스턴스가 생성될 때 세션 관리(Session Management)가 올바르게 이루어지지 않아 발생하는 동기화 문제를 파악하고 해결하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
A news feed web service has the following code running
on Google App Engine.

During peak load, users report that they can see
news articles they already viewed.

What is the most likely cause of this problem?
```

**[한글 해석]**
```text
뉴스 피드 웹 서비스가 Google App Engine에서
다음 코드를 실행하고 있습니다.

최대 부하(Peak load) 동안, 사용자들은 이미 본
뉴스 기사가 다시 보인다고 보고합니다.

이 문제의 가장 가능성 높은 원인은 무엇입니까?
```

A. The session variable is local to just a single instance
- (해석: 세션 변수가 단일 인스턴스에만 로컬로 저장되어 있습니다.)

B. The session variable is being overwritten in Cloud Datastore
- (해석: 세션 변수가 Cloud Datastore에서 덮어써지고 있습니다.)

C. The URL of the API needs to be modified to prevent caching
- (해석: 캐싱을 방지하기 위해 API의 URL을 수정해야 합니다.)

D. The HTTP Expires header needs to be set to -1 stop caching
- (해석: 캐싱을 중지하기 위해 HTTP Expires 헤더를 -1로 설정해야 합니다.)

**[문장별 끊어 읽기 및 해석]**
* **A news feed web service / has the following code running / on Google App Engine.**
  * (해석) 뉴스 피드 웹 서비스가 / 다음 코드를 실행하고 있습니다 / Google App Engine에서.
* **During peak load, / users report / that they can see / news articles / they already viewed.**
  * (해석) 최대 부하 동안, / 사용자들이 보고합니다 / 볼 수 있다고 / 뉴스 기사들을 / 그들이 이미 보았던.
* **What is / the most likely cause / of this problem?**
  * (해석) 무엇입니까 / 가장 가능성 높은 원인은 / 이 문제의?

**[핵심 어휘 및 구문]**
* **news feed**: (명사) 뉴스 피드. 지속적으로 업데이트되는 뉴스 콘텐츠 스트림입니다.
* **peak load**: (명사구) 최대 부하. 시스템에 가장 많은 트래픽이 몰리는 시점입니다.
* **report**: (동사) 보고하다, 알리다. 사용자가 겪은 버그나 문제를 기술 지원에 알리는 것입니다.
* **already viewed**: (형용사구) 이미 조회한. 사용자가 이전에 읽은 상태를 나타냅니다.
* **most likely cause**: (명사구) 가장 유력한 원인.
* **session variable**: (명사구) 세션 변수. 사용자별 상태 정보를 저장하는 변수입니다.
* **local to**: (숙어) ~에 국한된. 특정 범위나 공간 내에서만 유효함을 의미합니다.
* **overwrite**: (동사) 덮어쓰다. 기존 데이터를 지우고 새 데이터로 대체하는 것입니다.
* **prevent caching**: (동사구) 캐싱을 방지하다. 데이터가 임시 저장소에 저장되어 재사용되는 것을 막는 것입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: A (The session variable is local to just a single instance)**
* **해설**:
  * App Engine은 서버리스 플랫폼으로, "Peak load(최대 부하)"가 발생하면 트래픽 처리를 위해 자동으로 여러 개의 인스턴스를 확장(Scaling Out)합니다.
  * 만약 사용자의 세션 정보(예: 읽은 기사 목록)가 특정 인스턴스의 로컬 메모리에만 저장(`local to just a single instance`)되어 있다면, 다음 요청이 부하 분산에 의해 다른 인스턴스로 전달될 때 해당 인스턴스는 사용자의 이전 활동 기록을 알지 못합니다.
  * 따라서 사용자는 다른 인스턴스에 접속할 때마다 이미 본 기사를 다시 보게 되는 현상이 발생합니다. 이를 해결하려면 세션을 Redis(Memorystore)나 Cloud Datastore와 같은 외부 공유 저장소에 저장하는 '무상태(Stateless)' 아키텍처를 구현해야 합니다.
* **오답 분석**:
  * **B**: Datastore에 세션이 저장되고 있다면 데이터가 공유되므로 인스턴스가 늘어나도 동일한 상태가 유지됩니다. 덮어쓰기 오류가 발생할 수는 있지만, 가장 유력한 기본 원인은 공유 세션의 부재입니다.
  * **C, D**: 캐싱 문제로 인해 발생할 수도 있지만, 문제의 맥락("이미 본 기사가 보인다")은 사용자의 고유 상태(State)가 유지되지 않는 세션 동기화 실패에 더 가깝습니다.

#### 🧠 4. 핵심 개념 다지기
* **Shared Session (공유 세션)**:
  * **개념**: 분산 시스템에서 여러 서버 인스턴스가 공통으로 접근할 수 있는 중앙 세션 저장소입니다.
  * **문제 내 쓰임**: 인스턴스가 유동적으로 변하는 클라우드 환경에서 사용자 경험의 일관성을 유지하기 위해 반드시 필요한 설계 요소입니다.
```
