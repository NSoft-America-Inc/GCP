#### 🎯 1. 출제의도
* 이 문제는 온프레미스의 J2EE 애플리케이션을 클라우드로 마이그레이션할 때 고려해야 할 모범 사례(Best Practices)를 알고 있는지 평가합니다. 특히 클라우드 환경에서의 안정성, 자동화, 지속적 통합(CI) 및 모니터링 구축 능력을 묻고 있습니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
The operations manager asks you for a list of
recommended practices that she should consider
when migrating a J2EE application to the cloud.

Which three practices should you recommend?
(Choose three.)
```

**[한글 해석]**
```text
운영 관리자가 J2EE 애플리케이션을
클라우드로 마이그레이션할 때 고려해야 할
권장 사항 목록을 요청합니다.

어떤 세 가지 관행을 추천해야 합니까?
(3개를 선택하세요.)
```

A. Port the application code to run on Google App Engine
- (해석: 애플리케이션 코드를 Google App Engine에서 실행되도록 이식합니다.)

B. Integrate Cloud Dataflow into the application to capture real-time metrics
- (해석: 실시간 지표를 캡처하기 위해 애플리케이션에 Cloud Dataflow를 통합합니다.)

C. Instrument the application with a monitoring tool like Stackdriver Debugger
- (해석: Stackdriver Debugger와 같은 모니터링 도구를 사용하여 애플리케이션을 계측합니다.)

D. Select an automation framework to reliably provision the cloud infrastructure
- (해석: 클라우드 인프라를 안정적으로 프로비저닝하기 위해 자동화 프레임워크를 선택합니다.)

E. Deploy a continuous integration tool with automated testing in a staging environment
- (해석: 스테이징 환경에서 자동화된 테스트가 포함된 지속적 통합(CI) 도구를 배포합니다.)

F. Migrate from MySQL to a managed NoSQL database like Google Cloud Datastore or Bigtable
- (해석: MySQL에서 Google Cloud Datastore 또는 Bigtable과 같은 관리형 NoSQL 데이터베이스로 마이그레이션합니다.)

**[문장별 끊어 읽기 및 해석]**
* **The operations manager asks you / for a list of recommended practices / that she should consider / when migrating a J2EE application / to the cloud.**
  * (해석) 운영 관리자가 당신에게 요청합니다 / 권장 사항 목록을 / 그녀가 고려해야 할 / J2EE 애플리케이션을 마이그레이션할 때 / 클라우드로.
* **Which three practices / should you recommend? / (Choose three.)**
  * (해석) 어떤 세 가지 관행을 / 추천해야 합니까? / (3개를 선택하세요.)

**[핵심 어휘 및 구문]**
* **operations manager**: (명사구) 운영 관리자. 시스템의 안정적인 운영을 책임지는 직책입니다.
* **recommended practices**: (명사구) 권장 사항, 모범 사례(Best Practices).
* **migrate**: (동사) 마이그레이션하다, 이전하다.
* **J2EE**: (명사) Java 2 Enterprise Edition. 기업용 자바 애플리케이션 표준입니다.
* **port**: (동사) 이식하다. 소프트웨어를 다른 운영 환경에서 실행할 수 있도록 수정하는 것입니다.
* **instrument**: (동사) 계측하다. 모니터링을 위해 코드에 측정 도구를 심는 행위입니다.
* **provision**: (동사) 프로비저닝하다, 준비하다. 필요한 IT 인프라 자원을 할당하고 설정하는 것입니다.
* **automation framework**: (명사구) 자동화 프레임워크. Terraform 등 인프라를 코드로 관리(IaC)하는 도구를 의미합니다.
* **continuous integration (CI)**: (명사구) 지속적 통합. 코드 변경 사항을 자동으로 테스트하고 병합하는 개발 방식입니다.
* **staging environment**: (명사구) 스테이징 환경. 운영 환경과 유사하게 구성된 테스트 환경입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: C, D, E (Instrument with Stackdriver, Select automation framework, Deploy CI tool)**
* **해설**:
  * 온프레미스 J2EE 애플리케이션을 클라우드로 성공적으로 이전하기 위해서는 단순히 코드를 옮기는 것을 넘어 클라우드 네이티브의 장점을 활용할 수 있는 운영 체계를 구축해야 합니다.
  * **C**: 클라우드 환경에서 발생할 수 있는 문제를 빠르게 진단하고 모니터링하기 위해 Stackdriver(현재 Cloud Operations)와 같은 도구로 계측하는 것이 필수적입니다.
  * **D**: 클라우드 인프라는 수동 생성이 아닌 자동화 프레임워크(예: Terraform)를 통해 일관되고 안정적으로 프로비저닝(IaC)해야 합니다.
  * **E**: 지속적인 코드 변경과 배포가 안정적으로 이루어지도록 스테이징 환경에서 자동화된 테스트를 포함하는 CI 도구를 배포하는 것이 권장됩니다.
* **오답 분석**:
  * **A**: App Engine으로의 코드 이식은 대규모 J2EE 애플리케이션의 경우 아키텍처 변경이 너무 클 수 있어 즉각적인 마이그레이션 권장 사항으로는 적절하지 않습니다. (Lift and Shift나 Containerization이 우선될 수 있음)
  * **B**: Cloud Dataflow는 대규모 데이터 처리 파이프라인용이며, 일반적인 애플리케이션의 실시간 성능 지표 수집용으로는 오버스펙입니다.
  * **F**: 기존 MySQL(관계형)을 NoSQL로 무작정 전환하는 것은 애플리케이션 데이터 모델을 완전히 재설계해야 하므로 마이그레이션 초기 단계에서 권장되지 않습니다.

#### 🧠 4. 핵심 개념 다지기
* **Infrastructure as Code (IaC)**:
  * **개념**: 코드를 통해 인프라를 정의하고 프로비저닝하는 방식입니다.
  * **문제 내 쓰임**: 클라우드 인프라를 안정적으로 생성하기 위한 자동화 프레임워크 선택과 연결됩니다.
```
