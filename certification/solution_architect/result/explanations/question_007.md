#### 🎯 1. 출제의도
* 개발 인프라 자원의 비용을 절감하면서도 VM의 상태를 유지하고, 재무 부서에 비용 가시성을 제공하기 위한 Google Cloud Platform(GCP) 환경 설계 방안을 묻는 문제입니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
To reduce costs, the Director of Engineering has required all developers to move their development infrastructure resources from on-premises virtual machines(VMs) to Google Cloud Platform. These resources go through multiple start/stop events during the day and require state to persist. You have been asked to design the process of running a development environment in Google Cloud while providing cost visibility to the finance department.Which two steps should you take? (Choose two.)
```

**[한글 해석]**
```text
비용 절감을 위해 엔지니어링 이사(Director of Engineering)는 모든 개발자에게 개발 인프라 리소스를 온프레미스 가상 머신(VM)에서 Google Cloud Platform으로 이전하도록 요구했습니다.
이러한 리소스는 하루 동안 여러 번의 시작/중지 이벤트를 겪으며, 상태가 영구적으로 유지되어야 합니다.
귀하는 재무 부서에 비용 가시성을 제공하면서 Google Cloud에서 개발 환경을 실행하는 프로세스를 설계하도록 요청받았습니다.
어떤 두 가지 단계를 수행해야 합니까? (두 가지를 선택하세요.)
```

Suggested Answer: AD 🗳️

A. Use the - -no-auto-delete flag on all persistent disks and stop the VM
- (해석: 모든 영구 디스크에 `--no-auto-delete` 플래그를 사용하고 VM을 중지합니다.)

B. Use the - -auto-delete flag on all persistent disks and terminate the VM
- (해석: 모든 영구 디스크에 `--auto-delete` 플래그를 사용하고 VM을 종료합니다.)

C. Apply VM CPU utilization label and include it in the BigQuery billing export
- (해석: VM CPU 사용량 라벨을 적용하고 BigQuery 결제 내보내기에 포함합니다.)

D. Use Google BigQuery billing export and labels to associate cost to groups
- (해석: Google BigQuery 결제 내보내기 및 라벨을 사용하여 비용을 그룹에 연결합니다.)

E. Store all state into local SSD, snapshot the persistent disks, and terminate the VM
- (해석: 모든 상태를 로컬 SSD에 저장하고, 영구 디스크를 스냅샷하고, VM을 종료합니다.)

F. Store all state in Google Cloud Storage, snapshot the persistent disks, and terminate the VM
- (해석: 모든 상태를 Google Cloud Storage에 저장하고, 영구 디스크를 스냅샷하고, VM을 종료합니다.)

**[문장별 끊어 읽기 및 해석]**
* **To reduce costs, / the Director of Engineering / has required all developers / to move their development infrastructure resources / from on-premises virtual machines(VMs) / to Google Cloud Platform.**
  * (해석) 비용을 절감하기 위해 / 엔지니어링 이사가 / 모든 개발자에게 요구했습니다 / 그들의 개발 인프라 리소스를 이전하도록 / 온프레미스 가상 머신(VM)에서 / Google Cloud Platform으로.
* **These resources / go through multiple start/stop events / during the day / and require state to persist.**
  * (해석) 이러한 리소스는 / 여러 번의 시작/중지 이벤트를 겪으며 / 하루 동안 / 상태가 영구적으로 유지되어야 합니다.
* **You have been asked / to design the process / of running a development environment / in Google Cloud / while providing cost visibility / to the finance department.**
  * (해석) 당신은 요청받았습니다 / 프로세스를 설계하도록 / 개발 환경을 실행하는 / Google Cloud에서 / 비용 가시성을 제공하면서 / 재무 부서에.
* **Which two steps / should you take? / (Choose two.)**
  * (해석) 어떤 두 가지 단계를 / 수행해야 합니까? / (두 가지를 선택하세요.)
* **A. Use the - -no-auto-delete flag / on all persistent disks / and stop the VM**
  * (해석) `--no-auto-delete` 플래그를 사용하고 / 모든 영구 디스크에 / VM을 중지합니다.
* **B. Use the - -auto-delete flag / on all persistent disks / and terminate the VM**
  * (해석) `--auto-delete` 플래그를 사용하고 / 모든 영구 디스크에 / VM을 종료합니다.
* **C. Apply VM CPU utilization label / and include it / in the BigQuery billing export**
  * (해석) VM CPU 사용량 라벨을 적용하고 / 그것을 포함합니다 / BigQuery 결제 내보내기에.
* **D. Use Google BigQuery billing export / and labels / to associate cost to groups**
  * (해석) Google BigQuery 결제 내보내기 / 및 라벨을 사용하여 / 비용을 그룹에 연결합니다.
* **E. Store all state / into local SSD, / snapshot the persistent disks, / and terminate the VM**
  * (해석) 모든 상태를 저장하고 / 로컬 SSD에 / 영구 디스크를 스냅샷하고 / VM을 종료합니다.
* **F. Store all state / in Google Cloud Storage, / snapshot the persistent disks, / and terminate the VM**
  * (해석) 모든 상태를 저장하고 / Google Cloud Storage에 / 영구 디스크를 스냅샷하고 / VM을 종료합니다.

**[핵심 어휘 및 구문]**
* **reduce**: (동사) 줄이다, 감소시키다. IT 문맥에서는 비용, 리소스 사용량, 복잡성 등을 낮출 때 사용.
* **require**: (동사) 요구하다, 필요로 하다. 특정 조건이나 기능이 반드시 충족되어야 함을 나타냄.
* **on-premises**: (형용사) 온프레미스(사내에 직접 설치하여 운영하는). 클라우드 환경과 대비되는 개념.
* **go through**: (구동사) 겪다, 경험하다. 특정 과정이나 이벤트를 거친다는 의미.
* **persist**: (동사) 지속되다, 영구적으로 유지되다. 데이터나 상태가 휘발성 메모리가 아닌 영구 저장소에 보존되는 것을 의미.
* **design the process**: (구문) 프로세스를 설계하다. 특정 목표를 달성하기 위한 절차나 워크플로우를 계획하고 구성하는 것.
* **development environment**: (명사) 개발 환경. 소프트웨어 개발에 필요한 도구, 라이브러리, 서버 등이 갖춰진 작업 공간.
* **cost visibility**: (명사) 비용 가시성. 클라우드 자원 사용에 따른 비용을 명확하게 파악하고 추적할 수 있는 능력.
* **finance department**: (명사) 재무 부서. 회사의 재정 관리 및 회계 업무를 담당하는 부서.
* **- -no-auto-delete flag**: (기술 용어) `--no-auto-delete` 플래그. VM 인스턴스 삭제 시 연결된 영구 디스크가 자동으로 삭제되는 것을 방지하는 옵션.
* **persistent disks**: (명사) 영구 디스크. GCP VM에 연결되어 데이터를 저장하는 블록 스토리지. VM 수명과 독립적으로 존재 가능.
* **stop the VM**: (구문) VM을 중지하다. VM의 컴퓨팅 리소스는 해제되지만, 디스크 상태는 유지되어 비용을 절감하는 방식 (스토리지 비용은 발생).
* **terminate the VM**: (구문) VM을 종료하다. VM 인스턴스와 (일반적으로) 연결된 디스크까지 모두 삭제하여 모든 컴퓨팅 및 스토리지 비용을 중단하는 방식.
* **CPU utilization**: (명사) CPU 사용률. 특정 기간 동안 CPU가 얼마나 활성화되었는지를 측정하는 지표.
* **label**: (명사) 라벨. GCP 리소스에 추가하는 키-값 쌍 메타데이터. 비용 할당 및 관리에 유용하게 사용.
* **BigQuery billing export**: (기술 용어) BigQuery 결제 내보내기. GCP 결제 데이터를 BigQuery로 내보내 상세 분석할 수 있게 하는 기능.
* **associate cost to groups**: (구문) 비용을 그룹에 연결하다. 특정 프로젝트, 팀 또는 부서별로 비용을 할당하여 추적하는 것.
* **local SSD**: (기술 용어) 로컬 SSD. VM에 물리적으로 연결된 고성능 임시 스토리지. VM과 수명이 같으며, VM 종료 시 데이터가 손실됨.
* **snapshot**: (동사/명사) 스냅샷. 영구 디스크의 특정 시점 이미지를 생성하는 것. 백업 및 복원에 사용.
* **Cloud Storage**: (기술 용어) 클라우드 스토리지. GCP의 객체 스토리지 서비스. 비정형 데이터를 저장하고 전역적으로 액세스 가능.

#### ✅ 3. 정답 및 문제 해설
* **정답: A. Use the - -no-auto-delete flag on all persistent disks and stop the VM & D. Use Google BigQuery billing export and labels to associate cost to groups**
* **해설**:
  * **A. VM 중지 및 영구 디스크 보존**: 문제에서 "리소스는 하루 동안 여러 번의 시작/중지 이벤트를 겪으며, 상태가 영구적으로 유지되어야 합니다(`require state to persist`)"고 명시되어 있습니다. VM을 중지(`stop the VM`)하면 컴퓨팅 비용은 발생하지 않지만(CPU, 메모리 등), 연결된 영구 디스크는 계속 유지됩니다. 이때 `--no-auto-delete` 플래그를 사용하면 VM 인스턴스를 삭제하더라도 영구 디스크가 독립적으로 보존되어 개발 환경의 상태를 유지할 수 있습니다. 이는 "비용 절감"과 "상태 유지"라는 두 가지 요구사항을 동시에 만족시키는 효과적인 방법입니다. VM을 중지하고 필요할 때 다시 시작하면 컴퓨팅 비용을 절감하면서 개발 상태를 그대로 유지할 수 있습니다.
  * **D. BigQuery 결제 내보내기 및 라벨 사용**: 문제에서 "재무 부서에 비용 가시성을 제공하면서(`providing cost visibility to the finance department`)"라는 요구사항이 있습니다. Google BigQuery 결제 내보내기를 사용하면 GCP의 상세 결제 데이터를 BigQuery로 가져와 강력한 분석 기능을 활용할 수 있습니다. 여기에 라벨(`labels`)을 사용하여 개발 환경 리소스에 `environment:dev`, `team:finance_app` 등과 같이 키-값 쌍으로 메타데이터를 태그하면, 재무 부서에서 특정 그룹(팀, 프로젝트 등)별로 비용을 손쉽게 분류하고 분석하여 비용 가시성을 확보할 수 있습니다.

* **오답 분석**:
  * **B. Use the - -auto-delete flag on all persistent disks and terminate the VM**: 이 옵션은 VM을 종료(`terminate the VM`)하고 `--auto-delete` 플래그를 사용하므로, VM과 함께 영구 디스크까지 자동으로 삭제됩니다. 이는 "상태가 영구적으로 유지되어야 합니다(`require state to persist`)"라는 문제의 핵심 요구사항을 위반합니다. 매번 개발 환경을 처음부터 다시 설정해야 하므로 비효율적이며, 비용 절감 효과는 크지만 개발 생산성을 저해합니다.
  * **C. Apply VM CPU utilization label and include it in the BigQuery billing export**: VM CPU 사용량은 라벨링될 수 있는 메트릭이 아니며, 라벨은 리소스 자체에 적용되는 메타데이터입니다. CPU 사용률은 모니터링 메트릭으로 BigQuery 결제 내보내기에 직접 포함되지 않습니다. 비용 가시성을 높이는 데에는 도움이 되지 않으며, 문제의 핵심인 상태 유지와도 관련이 없습니다.
  * **E. Store all state into local SSD, snapshot the persistent disks, and terminate the VM**: 로컬 SSD는 VM에 물리적으로 연결된 임시 저장소로, VM이 종료(`terminate the VM`)되면 데이터가 손실됩니다. 따라서 "상태가 영구적으로 유지되어야 합니다"라는 요구사항을 충족할 수 없습니다. 영구 디스크를 스냅샷하는 것은 데이터 백업에는 유용하지만, 매번 VM을 종료하고 새로 생성하는 과정에서 개발 환경을 복구하는 오버헤드가 발생하며, 로컬 SSD의 데이터는 복구되지 않습니다.
  * **F. Store all state in Google Cloud Storage, snapshot the persistent disks, and terminate the VM**: Google Cloud Storage는 객체 스토리지로, VM의 운영체제나 애플리케이션 상태를 직접 저장하고 부팅하는 데 적합하지 않습니다. 스냅샷은 영구 디스크의 상태를 저장하지만, 매번 VM을 종료하고 새로 만드는 것은 "하루 동안 여러 번의 시작/중지 이벤트를 겪는" 개발 환경에 비효율적입니다. "상태 유지"는 가능할 수 있으나, VM 재시작 시 매번 스냅샷에서 새 디스크를 만들고 연결하는 과정은 복잡하고 비용 효율적이지 않습니다.

#### 🧠 4. 핵심 개념 다지기
*   **Persistent Disk (영구 디스크)**:
    *   **개념**: GCP의 Compute Engine에서 가상 머신(VM)에 연결하여 사용하는 내구성이 뛰어난 네트워크 스토리지입니다. VM의 수명과 독립적으로 존재할 수 있으며, HDD 또는 SSD 기반의 다양한 유형이 있습니다.
    *   **문제 내 쓰임**: 개발 환경 VM의 "상태를 영구적으로 유지"하는 핵심적인 저장소로 활용됩니다. VM이 중지되더라도 디스크는 계속 존재하므로, 개발자가 작업한 내용이 사라지지 않고 다음 시작 시 그대로 로드됩니다. `no-auto-delete` 플래그는 VM 삭제 시에도 디스크를 보존하여 이러한 상태 유지를 더욱 확실히 합니다.
    *   **특징 및 제약사항**: 고가용성과 내구성을 제공하며, VM과 분리하여 관리할 수 있습니다. 하지만 VM이 중지되어도 디스크에 대한 스토리지 비용은 계속 발생합니다.

*   **VM Instance Lifecycle (VM 인스턴스 수명 주기)**:
    *   **개념**: Compute Engine VM 인스턴스의 생성, 시작, 중지, 종료, 삭제 등 다양한 상태 변화를 의미합니다. 각 상태마다 자원 할당 및 비용 청구 방식이 달라집니다.
    *   **문제 내 쓰임**: 문제에서 "하루 동안 여러 번의 시작/중지 이벤트를 겪는" 개발 환경의 특성을 고려해야 합니다. VM을 단순히 "종료(terminate)"하면 상태가 사라지므로, "중지(stop)"하여 컴퓨팅 자원은 해제하고 디스크는 유지함으로써 비용을 절감하면서 상태를 보존합니다.
    *   **특징 및 제약사항**: `Stopped` 상태의 VM은 컴퓨팅(CPU, Memory) 비용이 발생하지 않지만, `Persistent Disk` 및 `Static IP` 등 연결된 자원에 대한 비용은 계속 청구됩니다. `Terminated` (혹은 `Deleted`) 상태의 VM은 모든 관련 자원(디스크 포함, `auto-delete` 플래그에 따라)이 해제되어 비용 청구가 중단됩니다.

*   **BigQuery Billing Export (BigQuery 결제 내보내기)**:
    *   **개념**: GCP의 상세 결제 데이터를 Google BigQuery 데이터셋으로 자동 내보내는 기능입니다. 이를 통해 사용자는 강력한 SQL 쿼리 및 분석 도구를 활용하여 비용을 심층적으로 분석하고 시각화할 수 있습니다.
    *   **문제 내 쓰임**: "재무 부서에 비용 가시성을 제공"하는 핵심 도구입니다. BigQuery로 내보내진 상세 결제 데이터를 바탕으로 특정 팀, 프로젝트, 개발 환경별 비용을 분석하여 재무 부서의 요구사항을 충족시킬 수 있습니다.
    *   **특징 및 제약사항**: 상세한 비용 분석이 가능하며, 사용자 정의 보고서를 만들 수 있습니다. 초기 설정이 필요하며, BigQuery 사용에 따른 비용이 발생할 수 있습니다.

*   **Labels (라벨)**:
    *   **개념**: GCP 리소스에 할당할 수 있는 키-값 쌍의 메타데이터입니다. 프로젝트, 환경, 팀, 소유자 등 다양한 기준으로 리소스를 분류하고 관리하는 데 사용됩니다.
    *   **문제 내 쓰임**: BigQuery 결제 내보내기와 함께 사용하여 "비용을 그룹에 연결"하는 데 필수적입니다. 개발 환경 VM에 `env:dev`, `team:frontend`, `project:new_feature` 와 같은 라벨을 붙이면, BigQuery에서 이 라벨을 기준으로 비용을 필터링하고 집계하여 특정 그룹의 비용을 파악할 수 있습니다.
    *   **특징 및 제약사항**: 유연한 리소스 분류 및 비용 할당을 가능하게 합니다. 일관된 라벨링 정책을 유지하는 것이 중요하며, 특정 리소스 유형에 따라 라벨링 지원 여부가 다를 수 있습니다.