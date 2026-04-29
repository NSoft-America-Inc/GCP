#### 🎯 1. 출제의도
* 이 문제는 HTTP(S) 부하 분산기(Load Balancer)와 연결된 자동 확장 인스턴스 그룹(Autoscaling Instance Group)에서 VM 인스턴스가 지속적으로 재시작되는 상황을 통해, GCP 부하 분산기의 헬스 체크(Health Check)와 방화벽 규칙(Firewall Rule) 설정의 중요성을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
You set up an autoscaling instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address.You have verified the appropriate web response is coming from each instance using the curl command. You want to ensure the backend is configured correctly.What should you do?
```

**[한글 해석]**
```text
다가오는 출시를 위해 웹 트래픽을 처리하도록 자동 확장 인스턴스 그룹을 설정했습니다.
HTTP(S) 부하 분산기의 백엔드 서비스로 인스턴스 그룹을 구성한 후, 가상 머신(VM) 인스턴스가 매분 종료되고 다시 시작되는 것을 확인했습니다.
인스턴스에는 공개 IP 주소가 없습니다.
curl 명령어를 사용하여 각 인스턴스에서 적절한 웹 응답이 오고 있음을 확인했습니다.
백엔드가 올바르게 구성되었는지 확인하고 싶습니다.
무엇을 해야 할까요?
```

Suggested Answer: C 🗳️

A. Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.
- (해석: HTTP/HTTPS 소스 트래픽이 부하 분산기에 도달하도록 허용하는 방화벽 규칙이 존재하는지 확인합니다.)

B. Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.
- (해석: 각 인스턴스에 공개 IP를 할당하고 부하 분산기가 인스턴스의 공개 IP에 도달하도록 허용하는 방화벽 규칙을 구성합니다.)

C. Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.
- (해석: 부하 분산기 헬스 체크가 인스턴스 그룹 내 인스턴스에 도달하도록 허용하는 방화벽 규칙이 존재하는지 확인합니다.)

D. Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination.
- (해석: 각 인스턴스에 부하 분산기의 이름으로 태그를 생성합니다. 부하 분산기 이름을 소스로, 인스턴스 태그를 대상으로 하는 방화벽 규칙을 구성합니다.)

**[문장별 끊어 읽기 및 해석]**
* You set up / an autoscaling instance group / to serve web traffic / for an upcoming launch.
  * (해석) 당신은 설정했습니다 / 자동 확장 인스턴스 그룹을 / 웹 트래픽을 처리하도록 / 다가오는 출시를 위해.
* After configuring the instance group / as a backend service / to an HTTP(S) load balancer,
  * (해석) 인스턴스 그룹을 구성한 후에 / 백엔드 서비스로 / HTTP(S) 부하 분산기에,
* you notice that / virtual machine (VM) instances / are being terminated and re-launched / every minute.
  * (해석) 당신은 알아차렸습니다 / 가상 머신 (VM) 인스턴스들이 / 종료되고 다시 시작되는 것을 / 매분.
* The instances / do not have a public IP address.
  * (해석) 그 인스턴스들은 / 공개 IP 주소를 가지고 있지 않습니다.
* You have verified / the appropriate web response / is coming from each instance / using the curl command.
  * (해석) 당신은 확인했습니다 / 적절한 웹 응답이 / 각 인스턴스에서 오고 있음을 / curl 명령어를 사용하여.
* You want to ensure / the backend / is configured correctly.
  * (해석) 당신은 확인하고 싶습니다 / 백엔드가 / 올바르게 구성되었는지.
* What should you do?
  * (해석) 무엇을 해야 합니까?
* A. Ensure that / a firewall rules exists / to allow source traffic on HTTP/HTTPS / to reach the load balancer.
  * (해석) 확인합니다 / 방화벽 규칙이 존재하는지 / HTTP/HTTPS 소스 트래픽을 허용하도록 / 부하 분산기에 도달하는.
* B. Assign a public IP / to each instance / and configure a firewall rule / to allow the load balancer / to reach the instance public IP.
  * (해석) 공개 IP를 할당하고 / 각 인스턴스에 / 방화벽 규칙을 구성합니다 / 부하 분산기가 / 인스턴스의 공개 IP에 도달하도록 허용하는.
* C. Ensure that / a firewall rule exists / to allow load balancer health checks / to reach the instances / in the instance group.
  * (해석) 확인합니다 / 방화벽 규칙이 존재하는지 / 부하 분산기 헬스 체크가 허용되도록 / 인스턴스에 도달하는 / 인스턴스 그룹 내의.
* D. Create a tag / on each instance / with the name of the load balancer.
  * (해석) 태그를 생성합니다 / 각 인스턴스에 / 부하 분산기의 이름으로.
* Configure a firewall rule / with the name of the load balancer / as the source / and the instance tag / as the destination.
  * (해석) 방화벽 규칙을 구성합니다 / 부하 분산기의 이름으로 / 소스로 / 그리고 인스턴스 태그를 / 대상으로.

**[핵심 어휘 및 구문]**
* **set up**: (구동사) 설치하다, 구성하다. [IT 문맥에서 시스템이나 서비스를 초기 설정하는 것을 의미]
* **autoscaling instance group**: (명사구) 자동 확장 인스턴스 그룹. [클라우드에서 트래픽에 따라 자동으로 VM 인스턴스 수를 조절하는 서비스]
* **serve**: (동사) (요청을) 처리하다, 제공하다. [웹 서비스가 사용자 요청에 응답하는 행위]
* **upcoming launch**: (명사구) 다가오는 출시. [제품이나 서비스의 배포가 임박한 상태]
* **configure**: (동사) 구성하다, 설정하다. [시스템 또는 소프트웨어의 동작 방식을 정의하는 것]
* **backend service**: (명사구) 백엔드 서비스. [부하 분산기 뒤에서 실제 트래픽을 처리하는 서비스 집합]
* **load balancer**: (명사구) 부하 분산기. [들어오는 네트워크 트래픽을 여러 서버에 분산하여 처리하는 서비스]
* **notice**: (동사) 알아차리다, 인지하다. [특정 현상이나 문제점을 발견하는 것]
* **terminate**: (동사) 종료하다, 중단하다. [VM 인스턴스가 실행을 멈추고 삭제되는 것]
* **re-launch**: (동사) 다시 시작하다. [종료된 VM 인스턴스가 새로 생성되어 다시 시작되는 것]
* **public IP address**: (명사구) 공개 IP 주소. [인터넷에서 직접 접근 가능한 IP 주소]
* **verify**: (동사) 확인하다, 검증하다. [어떤 사실이나 상태가 맞는지 증명하는 것]
* **appropriate**: (형용사) 적절한, 알맞은. [주어진 상황이나 목적에 부합하는]
* **web response**: (명사구) 웹 응답. [웹 서버가 클라이언트 요청에 대해 반환하는 데이터]
* **correctly**: (부사) 올바르게, 정확하게. [오류 없이 제대로 동작하는 방식]
* **firewall rule**: (명사구) 방화벽 규칙. [네트워크 트래픽의 허용 또는 차단을 정의하는 규칙]
* **health check**: (명사구) 헬스 체크. [시스템 또는 서비스의 정상 작동 여부를 주기적으로 확인하는 기능]
* **reach**: (동사) 도달하다. [네트워크 연결이 성공적으로 이루어지는 것]
* **source traffic**: (명사구) 소스 트래픽. [특정 출발지에서 시작되는 네트워크 트래픽]
* **destination**: (명사) 목적지. [네트워크 트래픽이 최종적으로 도달해야 하는 곳]

#### ✅ 3. 정답 및 문제 해설
*   **정답: C (Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.)**
*   **해설**:
    *   문제 상황은 자동 확장 인스턴스 그룹의 VM 인스턴스가 매분 종료되고 다시 시작되는 것입니다. 이는 전형적인 "헬스 체크 실패"로 인한 인스턴스 재시작 패턴입니다. 자동 확장 인스턴스 그룹은 헬스 체크를 사용하여 인스턴스의 상태를 모니터링하고, 비정상으로 판단된 인스턴스를 자동으로 종료하고 새로운 인스턴스를 시작합니다.
    *   사용자가 `curl` 명령어를 통해 각 인스턴스에서 웹 응답이 오는 것을 확인했음에도 불구하고 문제가 발생한다는 것은, 애플리케이션 자체는 정상 작동하지만, 부하 분산기나 인스턴스 그룹이 인스턴스의 상태를 올바르게 확인할 수 없다는 것을 의미합니다.
    *   이러한 상황의 가장 흔한 원인은 부하 분산기의 헬스 체크 프로브 트래픽이 인스턴스에 도달하는 것을 방화벽이 차단하고 있기 때문입니다. 헬스 체크 트래픽은 특정 IP 범위(GCP의 경우 `130.211.0.0/22` 및 `35.191.0.0/16`)에서 발생하며, 이 트래픽이 인스턴스의 헬스 체크 포트에 도달할 수 있도록 방화벽 규칙을 명시적으로 허용해야 합니다. 인스턴스에 공개 IP가 없으므로 내부 통신에 대한 방화벽 규칙이 필수적입니다.

*   **오답 분석**:
    *   **A. Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.**
        *   이 보기는 HTTP/HTTPS 트래픽이 *부하 분산기*에 도달하도록 허용하는 방화벽 규칙을 언급합니다. 부하 분산기 자체에 대한 외부 트래픽 허용은 일반적인 설정이지만, 문제의 핵심은 부하 분산기가 *백엔드 인스턴스*의 상태를 확인할 수 없다는 것입니다. 사용자 트래픽이 부하 분산기에 도달하는 것은 인스턴스 재시작 문제와 직접적인 관련이 없습니다. 부하 분산기는 헬스 체크 트래픽을 인스턴스에 직접 보내기 때문에, 인스턴스로 향하는 헬스 체크 트래픽을 허용하는 규칙이 필요합니다.
    *   **B. Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.**
        *   이 보기는 두 가지 측면에서 오답입니다. 첫째, 문제에서 인스턴스에 공개 IP 주소가 없다고 명시했고, 일반적으로 백엔드 인스턴스에는 보안 및 비용 절감을 위해 공개 IP를 할당하지 않는 것이 모범 사례입니다. 부하 분산기는 인스턴스의 내부 IP 주소를 통해 통신합니다. 둘째, 공개 IP를 할당하더라도 부하 분산기의 헬스 체크 트래픽이 해당 공개 IP로 도달하도록 하는 방화벽 규칙은 필요한 조치이지만, 공개 IP 할당 자체가 문제 해결을 위한 필수적이고 올바른 첫 단계는 아닙니다. 또한, 부하 분산기가 인스턴스에 도달하는 것은 내부 IP를 통해서도 가능하므로 공개 IP는 불필요합니다.
    *   **D. Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination.**
        *   이 보기는 방화벽 규칙의 태그 사용법을 잘못 이해하고 있습니다. 방화벽 규칙에서 소스(source)는 트래픽이 *어디서부터* 오는지 명시하는 것이고, 대상(destination)은 트래픽이 *어디로* 가는지 명시하는 것입니다. 부하 분산기의 "이름"은 방화벽 규칙의 소스가 될 수 없으며, 헬스 체크 트래픽의 소스는 특정 GCP 내부 IP 범위입니다. 인스턴스에 태그를 지정하여 방화벽 규칙의 대상으로 사용하는 것은 올바른 패턴이지만, 소스를 부하 분산기 이름으로 하는 것은 틀린 접근 방식입니다.

#### 🧠 4. 핵심 개념 다지기
*   **GCP HTTP(S) Load Balancer Health Checks**:
    *   **개념**: GCP HTTP(S) 부하 분산기는 백엔드 서비스에 연결된 인스턴스 그룹 내의 각 VM 인스턴스의 상태를 지속적으로 모니터링하기 위해 헬스 체크를 사용합니다. 헬스 체크는 주기적으로 인스턴스의 특정 포트(예: HTTP 80, HTTPS 443)로 요청을 보내어 응답을 확인합니다. 정의된 응답 임계값을 만족하지 못하면 해당 인스턴스는 비정상(unhealthy)으로 간주됩니다.
    *   **문제 내 쓰임**: 이 문제에서 VM 인스턴스가 매분 종료되고 다시 시작되는 것은, 헬스 체크가 인스턴스를 비정상으로 판단하여 인스턴스 그룹이 자동으로 인스턴스를 교체(복구)하는 동작입니다. 이는 헬스 체크 프로브가 인스턴스에 도달하지 못해 발생하는 문제입니다. 인스턴스 자체는 웹 요청에 응답할 수 있지만, 헬스 체크 트래픽은 도달하지 못하는 상황입니다.
    *   **특징 및 제약사항**: GCP 헬스 체크 프로브는 특정 내부 IP 주소 범위(`130.211.0.0/22` 및 `35.191.0.0/16`)에서 발생합니다. 따라서 이 IP 범위에서 오는 트래픽이 백엔드 인스턴스의 헬스 체크 포트(예: HTTP 80)에 접근할 수 있도록 방화벽 규칙을 구성해야 합니다. 방화벽 규칙의 방향은 'Ingress'여야 하며, 대상은 인스턴스 그룹의 VM 인스턴스(일반적으로 네트워크 태그 사용)로, 프로토콜 및 포트(예: tcp:80)를 지정해야 합니다.
*   **Autoscaling Instance Group**:
    *   **개념**: 자동 확장 인스턴스 그룹은 애플리케이션의 부하에 따라 VM 인스턴스의 수를 자동으로 조절하여 가용성과 성능을 유지합니다. 이 그룹은 헬스 체크를 통해 인스턴스의 건강 상태를 파악하고, 비정상 인스턴스를 자동으로 교체하는 자가 복구(self-healing) 기능을 제공합니다.
    *   **문제 내 쓰임**: 문제에서 인스턴스들이 지속적으로 종료되고 재시작되는 현상은 자동 확장 인스턴스 그룹의 자가 복구 기능이 작동하는 것을 보여줍니다. 인스턴스 그룹이 헬스 체크를 통해 인스턴스가 '건강하지 않다'고 판단했기 때문에 인스턴스를 계속해서 교체하고 있는 것입니다. 이는 헬스 체크 자체가 실패하고 있음을 나타냅니다.
    *   **특징 및 제약사항**: 자동 확장 인스턴스 그룹이 올바르게 작동하려면, 연결된 헬스 체크가 정확해야 합니다. 헬스 체크가 인스턴스에 도달하지 못하면, 그룹은 정상적인 인스턴스조차 비정상으로 간주하여 불필요한 종료 및 재시작을 반복하게 되어 서비스 불안정 및 비용 증가를 초래할 수 있습니다.
*   **GCP Firewall Rules**:
    *   **개념**: GCP 방화벽 규칙은 Virtual Private Cloud(VPC) 네트워크 내에서 VM 인스턴스 간 또는 외부 네트워크와 VM 인스턴스 간의 트래픽 흐름을 제어합니다. 특정 프로토콜과 포트를 통한 특정 IP 범위의 트래픽을 허용하거나 차단할 수 있습니다.
    *   **문제 내 쓰임**: 이 문제의 근본적인 원인은 부하 분산기 헬스 체크 프로브 트래픽이 인스턴스에 도달하는 것을 방화벽 규칙이 차단하고 있기 때문입니다. 인스턴스에는 공개 IP가 없으므로, 내부적으로 헬스 체크 트래픽이 도달할 수 있도록 명시적인 방화벽 규칙 설정이 필수적입니다.
    *   **특징 및 제약사항**: 방화벽 규칙은 네트워크 수준에서 작동하며, 들어오는(Ingress) 또는 나가는(Egress) 트래픽에 적용됩니다. 규칙은 소스 IP 범위(source IP ranges), 대상 태그(target tags), 프로토콜 및 포트(protocols and ports)를 사용하여 매우 세밀하게 제어할 수 있습니다. 특히 GCP 헬스 체크를 위해서는 소스 IP 범위로 `130.211.0.0/22` 및 `35.191.0.0/16`를 지정하고, 대상 태그로 백엔드 인스턴스에 적용된 태그를 사용하며, 헬스 체크가 사용하는 포트와 프로토콜(예: TCP 80, TCP 443)을 허용하는 규칙을 생성해야 합니다.