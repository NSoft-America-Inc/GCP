#### 🎯 1. 출제의도
* 이 문제는 온프레미스에서 GCP로 개발 환경을 마이그레이션할 때, 리소스의 상태 유지(State Persistence)와 재무 부서를 위한 비용 가시성(Cost Visibility)을 동시에 만족하는 아키텍처 설계 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
To reduce costs, the Director of Engineering has required
all developers to move their development infrastructure
resources from on-premises virtual machines(VMs)
to Google Cloud Platform.

These resources go through multiple start/stop events
during the day and require state to persist.

You have been asked to design the process of running
a development environment in Google Cloud while providing
cost visibility to the finance department.

Which two steps should you take? (Choose two.)
```

**[한글 해석]**
```text
비용을 절감하기 위해, 엔지니어링 디렉터는
모든 개발자가 개발 인프라 리소스를 온프레미스
가상 머신(VM)에서 Google Cloud Platform으로
이전하도록 요구했습니다.

이러한 리소스는 하루 동안 여러 번 시작/중지
이벤트를 거치며 상태가 유지되어야 합니다.

재무 부서에 비용 가시성을 제공하면서 Google Cloud에서
개발 환경을 실행하는 프로세스를 설계하라는
요청을 받았습니다.

어떤 두 가지 단계를 수행해야 합니까?
(2개를 선택하세요.)
```

A. Use the --no-auto-delete flag on all persistent disks and stop the VM
- (해석: 모든 영구 디스크에 --no-auto-delete 플래그를 사용하고 VM을 중지합니다.)

B. Use the --auto-delete flag on all persistent disks and terminate the VM
- (해석: 모든 영구 디스크에 --auto-delete 플래그를 사용하고 VM을 종료합니다.)

C. Apply VM CPU utilization label and include it in the BigQuery billing export
- (해석: VM CPU 사용량 라벨을 적용하고 이를 BigQuery 결제 내보내기에 포함합니다.)

D. Use Google BigQuery billing export and labels to associate cost to groups
- (해석: 비용을 그룹과 연결하기 위해 Google BigQuery 결제 내보내기 및 라벨을 사용합니다.)

E. Store all state into local SSD, snapshot the persistent disks, and terminate the VM
- (해석: 모든 상태를 로컬 SSD에 저장하고, 영구 디스크의 스냅샷을 찍고, VM을 종료합니다.)

F. Store all state in Google Cloud Storage, snapshot the persistent disks, and terminate the VM
- (해석: 모든 상태를 Google Cloud Storage에 저장하고, 영구 디스크의 스냅샷을 찍고, VM을 종료합니다.)

**[문장별 끊어 읽기 및 해석]**
* **To reduce costs, / the Director of Engineering / has required all developers / to move their development infrastructure resources / from on-premises virtual machines(VMs) / to Google Cloud Platform.**
  * (해석) 비용을 줄이기 위해, / 엔지니어링 디렉터는 / 모든 개발자에게 요구했습니다 / 개발 인프라 리소스를 이전하도록 / 온프레미스 가상 머신에서 / Google Cloud Platform으로.
* **These resources / go through multiple start/stop events / during the day / and require state to persist.**
  * (해석) 이러한 리소스들은 / 여러 번의 시작/중지 이벤트를 거치며 / 하루 동안 / 상태가 유지될 필요가 있습니다.
* **You have been asked / to design the process / of running a development environment / in Google Cloud / while providing cost visibility / to the finance department.**
  * (해석) 당신은 요청받았습니다 / 프로세스를 설계하도록 / 개발 환경을 실행하는 / Google Cloud에서 / 비용 가시성을 제공하면서 / 재무 부서에.
* **Which two steps / should you take? / (Choose two.)**
  * (해석) 어떤 두 가지 단계를 / 취해야 합니까? / (2개를 선택하세요.)

**[핵심 어휘 및 구문]**
* **infrastructure resources**: (명사구) 인프라 리소스. VM, 스토리지 등 시스템 구성 요소들입니다.
* **on-premises**: (명사/형용사) 온프레미스. 자체 데이터 센터나 사내에 서버를 직접 구축해 운영하는 방식입니다.
* **start/stop events**: (명사구) 시작/중지 이벤트. 비용 절감을 위해 사용하지 않을 때 VM을 끄는 행위입니다.
* **persist**: (동사) 지속되다, 유지되다. 데이터가 사라지지 않고 영구적으로 저장됨을 의미합니다.
* **cost visibility**: (명사구) 비용 가시성. 어디서 비용이 얼마나 발생하는지 투명하게 파악할 수 있는 상태입니다.
* **persistent disk**: (명사구) 영구 디스크. VM 인스턴스와 독립적으로 데이터를 영구 저장하는 블록 스토리지입니다.
* **auto-delete flag**: (명사구) 자동 삭제 플래그. VM 삭제 시 연결된 디스크도 함께 삭제할지 여부를 결정하는 옵션입니다.
* **billing export**: (명사구) 결제 데이터 내보내기. 클라우드 사용 비용 상세 내역을 분석 도구로 전송하는 기능입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: A, D (Use --no-auto-delete flag and stop VM, Use BigQuery billing export and labels)**
* **해설**:
  * 문제에는 두 가지 핵심 요구사항이 있습니다: 1) 하루 중 빈번한 시작/중지에도 데이터(State)가 유지되어야 함, 2) 재무 부서에 비용 가시성을 제공해야 함.
  * **A (상태 유지)**: VM을 'Terminate(종료/삭제)'하는 대신 'Stop(중지)'해야 리소스가 완전히 삭제되지 않습니다. 또한, 혹시 모를 삭제에 대비해 Persistent Disk가 자동으로 지워지지 않도록 `--no-auto-delete` 플래그를 설정하는 것이 안전합니다.
  * **D (비용 가시성)**: GCP에서 부서별, 프로젝트별 비용을 정확히 추적(Cost Allocation)하는 표준 방법은 리소스에 `Labels(라벨)`을 지정하고, 이를 `BigQuery Billing Export(결제 데이터 내보내기)`를 통해 분석하는 것입니다.
* **오답 분석**:
  * **B**: VM을 Terminate(종료 및 리소스 삭제)하고 `--auto-delete`를 쓰면 데이터가 모두 사라집니다.
  * **C**: VM CPU 사용량 라벨이라는 개념은 존재하지 않으며 결제 분석에 사용되지 않습니다.
  * **E**: 로컬 SSD는 임시 스토리지이므로 VM이 중지되거나 종료되면 데이터가 소실됩니다.

#### 🧠 4. 핵심 개념 다지기
* **Persistent Disk Lifecycle (영구 디스크 수명 주기)**:
  * **개념**: Compute Engine VM에 연결되는 내구성 있는 스토리지로, VM의 생성/삭제와 별개로 생존할 수 있습니다.
  * **문제 내 쓰임**: 개발자의 작업 상태를 안전하게 보존하기 위한 핵심 컴포넌트로 활용됩니다.
```
