#### 🎯 1. 출제의도
* 이 문제는 실행 중인 Compute Engine VM의 영구 디스크(Persistent Disk) 용량이 부족할 때, 서비스 중단 시간(Downtime)을 최소화하면서 디스크와 파일 시스템을 온라인으로 확장하는 능력을 평가합니다.

#### 📝 2. 지문 해석 및 핵심 영문법/어휘
**[질문 원문 전체]**
```text
A production database virtual machine
on Google Compute Engine has an ext4-formatted
persistent disk for data files.

The database is about to run out of storage space.

How can you remediate the problem
with the least amount of downtime?
```

**[한글 해석]**
```text
Google Compute Engine의 프로덕션 데이터베이스
가상 머신에 데이터 파일용 ext4 형식의
영구 디스크가 있습니다.

데이터베이스의 저장 공간이 거의 다 떨어지려 합니다.

가동 중단 시간을 최소화하면서
문제를 어떻게 해결할 수 있습니까?
```

A. In the Cloud Platform Console, increase the size of the persistent disk and use the resize2fs command in Linux.
- (해석: 클라우드 플랫폼 콘솔에서 영구 디스크의 크기를 늘리고 Linux에서 resize2fs 명령어를 사용합니다.)

B. Shut down the virtual machine, use the Cloud Platform Console to increase the persistent disk size, then restart the virtual machine
- (해석: 가상 머신을 종료하고, 클라우드 플랫폼 콘솔을 사용하여 영구 디스크 크기를 늘린 다음, 가상 머신을 재시작합니다.)

C. In the Cloud Platform Console, increase the size of the persistent disk and verify the new space is ready to use with the fdisk command in Linux
- (해석: 클라우드 플랫폼 콘솔에서 영구 디스크의 크기를 늘리고 Linux에서 fdisk 명령어로 새 공간을 사용할 준비가 되었는지 확인합니다.)

D. In the Cloud Platform Console, create a new persistent disk attached to the virtual machine, format and mount it, and configure the database service to move the files to the new disk
- (해석: 클라우드 플랫폼 콘솔에서 가상 머신에 연결된 새 영구 디스크를 생성하고, 포맷 및 마운트한 다음, 파일을 새 디스크로 이동하도록 데이터베이스 서비스를 구성합니다.)

E. In the Cloud Platform Console, create a snapshot of the persistent disk restore the snapshot to a new larger disk, unmount the old disk, mount the new disk and restart the database service
- (해석: 클라우드 플랫폼 콘솔에서 영구 디스크의 스냅샷을 생성하고 스냅샷을 더 큰 새 디스크로 복원한 다음, 기존 디스크를 마운트 해제하고 새 디스크를 마운트한 후 데이터베이스 서비스를 재시작합니다.)

**[문장별 끊어 읽기 및 해석]**
* **A production database virtual machine / on Google Compute Engine / has an ext4-formatted persistent disk / for data files.**
  * (해석) 프로덕션 데이터베이스 가상 머신에 / Google Compute Engine에서 실행되는 / ext4 형식의 영구 디스크가 있습니다 / 데이터 파일용으로.
* **The database / is about to run out / of storage space.**
  * (해석) 데이터베이스가 / 거의 소진될 위기에 처해 있습니다 / 저장 공간을.
* **How can you remediate / the problem / with the least amount of downtime?**
  * (해석) 어떻게 해결할 수 있습니까 / 문제를 / 최소한의 다운타임으로?

**[핵심 어휘 및 구문]**
* **ext4**: (명사) Linux 시스템의 표준 저널링 파일 시스템 중 하나입니다.
* **be about to**: (숙어) 막 ~하려 하다, ~하기 직전이다.
* **run out of**: (숙어) ~이 바닥나다, 소진되다.
* **remediate**: (동사) 개선하다, 바로잡다. 문제를 해결하는 행위입니다.
* **least amount of downtime**: (명사구) 최소한의 다운타임(서비스 중단 시간).
* **resize2fs**: (명사/명령어) ext2/ext3/ext4 파일 시스템의 크기를 조정하는 Linux 명령어입니다.

#### ✅ 3. 정답 및 문제 해설
* **정답: A (In the Console, increase disk size and use resize2fs command)**
* **해설**:
  * GCP의 **Persistent Disk**는 인스턴스가 실행 중인 상태에서도 디스크 크기를 온라인으로 늘릴 수 있는 **'Live Resizing'** 기능을 지원합니다.
  * 따라서 VM을 종료할 필요가 전혀 없으며, 콘솔이나 gcloud 명령어로 디스크 크기를 먼저 늘린 후, Linux 내부에서 `resize2fs` 명령어를 사용하여 파일 시스템에 추가된 용량을 인식시켜 주면 중단 시간 없이 확장이 완료됩니다.
* **오답 분석**:
  * **B, D, E**: VM을 끄거나(`Shut down`), 디스크를 새로 만들고 마운트를 해제하는 과정에서 필연적으로 데이터베이스 서비스가 중단(Downtime)되므로 "최소한의 다운타임" 조건에 부합하지 않습니다.
  * **C**: `fdisk`는 파티션 테이블을 조작하는 명령어일 뿐, 실제 파일 시스템 용량을 늘려주지 못합니다.

#### 🧠 4. 핵심 개념 다지기
* **Online Disk Resizing (온라인 디스크 크기 조정)**:
  * **개념**: 서비스 중단 없이 스토리지 용량을 동적으로 확장하는 기술입니다.
  * **문제 내 쓰임**: 가동 중인 프로덕션 DB의 가용성을 유지하기 위해 아키텍트가 반드시 활용해야 하는 핵심 운영 기술입니다.
```
