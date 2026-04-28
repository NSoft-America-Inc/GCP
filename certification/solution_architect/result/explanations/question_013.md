#### 🎯 1. 출제의도
* 이 문제는 운영 환경에 배포된 애플리케이션에 성능 장애가 발생했을 때, 비즈니스 연속성을 보장하면서 원인을 분석하는 올바른 인시던트 대응 프로세스(Incident Response Process)를 알고 있는지 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
Your customer is receiving reports
that their recently updated Google App Engine application
is taking approximately 30 seconds to load
for some of their users.

This behavior was not reported before the update.

What strategy should you take?
```

**[한글 해석]**
```text
고객이 최근 업데이트된 Google App Engine 애플리케이션이
일부 사용자에게 로드되는 데 약 30초가
걸린다는 보고를 받고 있습니다.

이러한 현상은 업데이트 전에는 보고되지 않았습니다.

당신은 어떤 전략을 취해야 합니까?
```

A. Work with your ISP to diagnose the problem
- (해석: ISP와 협력하여 문제를 진단합니다.)

B. Open a support ticket to ask for network capture and flow data to diagnose the problem, then roll back your application
- (해석: 문제를 진단하기 위해 네트워크 캡처 및 플로우 데이터를 요청하는 지원 티켓을 연 다음, 애플리케이션을 롤백합니다.)

C. Roll back to an earlier known good release initially, then use Stackdriver Trace and Logging to diagnose the problem in a development/test/staging environment
- (해석: 먼저 알려진 이전의 정상 릴리스로 롤백한 다음, 개발/테스트/스테이징 환경에서 Stackdriver Trace 및 Logging을 사용하여 문제를 진단합니다.)

D. Roll back to an earlier known good release, then push the release again at a quieter period to investigate. Then use Stackdriver Trace and Logging to diagnose the problem
- (해석: 알려진 이전의 정상 릴리스로 롤백한 다음, 조용한 시간대에 릴리스를 다시 푸시하여 조사합니다. 그런 다음 Stackdriver Trace 및 Logging을 사용하여 문제를 진단합니다.)

**[문장별 끊어 읽기 및 해석]**
* **Your customer is receiving reports / that their recently updated Google App Engine application / is taking approximately 30 seconds to load / for some of their users.**
  * (해석) 고객은 보고를 받고 있습니다 / 최근 업데이트된 Google App Engine 애플리케이션이 / 로드하는 데 약 30초가 걸린다는 / 그들의 사용자 중 일부에게.
* **This behavior / was not reported / before the update.**
  * (해석) 이 현상은 / 보고되지 않았습니다 / 업데이트 전에는.
* **What strategy / should you take?**
  * (해석) 어떤 전략을 / 당신은 취해야 합니까?

**[핵심 어휘 및 구문]**
* **approximately**: (부사) 대략, 약.
* **behavior**: (명사) 동작, 현상. 시스템이 보여주는 반응이나 상태를 뜻합니다.
* **strategy**: (명사) 전략.
* **roll back**: (구동사) 롤백하다, 이전 상태로 되돌리다. 장애 발생 시 가장 빠른 복구 방법입니다.
* **known good release**: (명사구) 정상 작동이 확인된 릴리스.
* **diagnose**: (동사) 진단하다. 문제의 원인을 파악하는 것입니다.
* **Stackdriver Trace**: (명사) 분산 추적 시스템. 마이크로서비스 환경에서 요청의 지연 시간(Latency)을 분석하는 GCP 도구입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: C (Roll back to an earlier known good release initially)**
* **해설**:
  * 운영 중인 서비스에서 "로드에 30초가 걸린다"는 것은 심각한 성능 저하(장애) 상황입니다.
  * 장애 대응의 최우선 순위는 **'사용자 불편 해소 및 서비스 정상화'**입니다. 따라서 원인을 찾기 전에 먼저 정상 작동하던 이전 버전으로 즉시 롤백(`Roll back initially`)해야 합니다.
  * 이후, 다시 장애를 유발할 수 있는 프로덕션 환경이 아닌 **개발/테스트/스테이징 환경**에서 로그(`Logging`)와 추적(`Trace`) 도구를 사용해 성능 병목 지점을 진단하는 것이 올바른 문제 해결 절차입니다.
* **오답 분석**:
  * **A, B**: 원인 진단에 너무 많은 시간이 소요되어 사용자 장애 시간이 길어집니다.
  * **D**: 조용한 시간대(`quieter period`)라고 하더라도 검증되지 않은 문제 코드를 프로덕션에 다시 배포하는 것은 위험하며, 장애를 재발시키는 잘못된 행동입니다.

#### 🧠 4. 핵심 개념 다지기
* **Incident Management (인시던트 관리)**:
  * **개념**: IT 서비스의 중단을 최소화하고 신속하게 정상 상태로 복구하기 위한 프로세스입니다.
  * **문제 내 쓰임**: '선 복구(Rollback) 후 원인 분석(Debugging in Staging)'이라는 표준 인시던트 대응 원칙이 적용됩니다.
```
