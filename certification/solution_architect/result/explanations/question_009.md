#### 🎯 1. 출제의도
* 이 문제는 GCP HTTP(S) 부하 분산기(Load Balancer)와 인스턴스 그룹을 연동할 때, 헬스 체크(Health Check) 실패로 인해 인스턴스가 무한 재시작되는 현상의 원인을 파악하고 방화벽 규칙을 통해 이를 해결하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
You set up an autoscaling instance group
to serve web traffic for an upcoming launch.

After configuring the instance group as a backend service
to an HTTP(S) load balancer, you notice that virtual
machine (VM) instances are being terminated and
re-launched every minute.

The instances do not have a public IP address.
You have verified the appropriate web response is coming
from each instance using the curl command.

You want to ensure the backend is configured correctly.
What should you do?
```

**[한글 해석]**
```text
다가오는 출시를 위해 웹 트래픽을 처리할
오토스케일링 인스턴스 그룹을 설정했습니다.

인스턴스 그룹을 HTTP(S) 부하 분산기의
백엔드 서비스로 구성한 후, 가상 머신(VM)
인스턴스가 매분 종료되고 다시 시작되는 것을
확인했습니다.

인스턴스에는 공인 IP 주소가 없습니다.
curl 명령어를 사용하여 각 인스턴스에서 적절한
웹 응답이 오고 있음을 확인했습니다.

백엔드가 올바르게 구성되었는지 확인하고 싶습니다.
당신은 무엇을 해야 합니까?
```

A. Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.
- (해석: HTTP/HTTPS의 소스 트래픽이 부하 분산기에 도달할 수 있도록 방화벽 규칙이 존재하는지 확인합니다.)

B. Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.
- (해석: 각 인스턴스에 공인 IP를 할당하고 부하 분산기가 인스턴스 공인 IP에 도달할 수 있도록 방화벽 규칙을 구성합니다.)

C. Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.
- (해석: 부하 분산기 헬스 체크가 인스턴스 그룹의 인스턴스에 도달할 수 있도록 방화벽 규칙이 존재하는지 확인합니다.)

D. Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination.
- (해석: 각 인스턴스에 부하 분산기의 이름으로 태그를 생성합니다. 부하 분산기 이름을 소스로 하고 인스턴스 태그를 대상으로 하는 방화벽 규칙을 구성합니다.)

**[문장별 끊어 읽기 및 해석]**
* **You set up / an autoscaling instance group / to serve web traffic / for an upcoming launch.**
  * (해석) 당신은 설정했습니다 / 오토스케일링 인스턴스 그룹을 / 웹 트래픽을 처리하기 위해 / 다가오는 출시를 위한.
* **After configuring the instance group / as a backend service / to an HTTP(S) load balancer,**
  * (해석) 인스턴스 그룹을 구성한 후 / 백엔드 서비스로 / HTTP(S) 부하 분산기에 연결된,
* **you notice / that virtual machine (VM) instances / are being terminated and re-launched / every minute.**
  * (해석) 당신은 알아차렸습니다 / VM 인스턴스들이 / 종료되고 다시 시작되고 있다는 것을 / 매분마다.
* **The instances / do not have / a public IP address.**
  * (해석) 인스턴스들은 / 가지고 있지 않습니다 / 공인 IP 주소를.
* **You have verified / the appropriate web response / is coming from each instance / using the curl command.**
  * (해석) 당신은 확인했습니다 / 적절한 웹 응답이 / 각 인스턴스로부터 오고 있음을 / curl 명령어를 사용하여.

**[핵심 어휘 및 구문]**
* **autoscaling**: (명사/형용사) 오토스케일링. 트래픽에 따라 인스턴스 수를 자동으로 늘리거나 줄이는 기능입니다.
* **backend service**: (명사구) 백엔드 서비스. 로드 밸런서가 트래픽을 전달하는 대상 그룹입니다.
* **terminate**: (동사) 종료하다, 중단시키다.
* **re-launch**: (동사) 다시 시작하다, 재기동하다.
* **verify**: (동사) 검증하다, 확인하다.
* **health check**: (명사구) 헬스 체크, 상태 확인. 서버가 정상 작동 중인지 주기적으로 확인하는 기능입니다.
* **firewall rule**: (명사구) 방화벽 규칙. 네트워크 트래픽의 출입을 제어하는 규칙입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: C (Ensure that a firewall rule exists to allow load balancer health checks to reach the instances)**
* **해설**:
  * VM 인스턴스가 매분 종료되고 재생성(`terminated and re-launched every minute`)되는 현상은 **자동 복구(Auto-healing)** 기능이 작동하고 있음을 의미합니다. 부하 분산기가 인스턴스를 'Unhealthy' 상태로 판단하여 계속해서 교체하는 것입니다.
  * `curl`을 통해 내부적으로 웹 응답이 정상임을 확인했으므로, 원인은 **로드 밸런서의 헬스 체크 신호가 인스턴스에 도달하지 못하고 있기 때문**입니다.
  * GCP의 HTTP(S) 부하 분산기 헬스 체크는 특정 IP 대역(`130.211.0.0/22`, `35.191.0.0/16`)에서 전송되므로, 이 대역의 트래픽이 인스턴스의 웹 포트(예: 80, 8080)로 들어올 수 있도록 허용하는 방화벽 규칙을 명시적으로 추가해야 합니다.
* **오답 분석**:
  * **A**: 사용자가 부하 분산기에 접근하는 방화벽은 이미 열려있거나 부하 분산기 자체의 설정 문제입니다. 인스턴스 재시작과는 무관합니다.
  * **B**: GCP 부하 분산기는 내부 IP를 통해 백엔드 인스턴스와 통신하므로 공인 IP 할당은 불필요하며 보안상 좋지 않습니다.
  * **D**: 부하 분산기의 이름은 방화벽 규칙의 소스로 사용할 수 없습니다. 방화벽 규칙의 소스는 IP 대역이나 네트워크 태그여야 합니다.

#### 🧠 4. 핵심 개념 다지기
* **GCP Load Balancer Health Check IP Ranges (헬스 체크 IP 대역)**:
  * **개념**: GCP 로드 밸런서가 백엔드의 상태를 점검하기 위해 사용하는 고정된 IP 주소 범위입니다.
  * **문제 내 쓰임**: `130.211.0.0/22` 및 `35.191.0.0/16` 대역을 방화벽 소스 IP로 허용해 주어야 헬스 체크가 성공하고 인스턴스가 정상 유지됩니다.
```
