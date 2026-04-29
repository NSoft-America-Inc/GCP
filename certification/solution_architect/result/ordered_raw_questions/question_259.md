## Exam Professional Cloud Architect topic 2 question 5 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 5
Topic #: 2

[All Professional Cloud Architect Questions]

The migration of JencoMart's application to Google Cloud Platform (GCP) is progressing too slowly. The infrastructure is shown in the diagram below. You want to maximize throughput.

### Infrastructure Diagram (Mermaid)
```mermaid
graph LR
    subgraph On-premises_infrastructure
        R1[Rack] -- |Connect| ER[Edge router]
        R2[Rack] -- |Connect| ER
        R3[Rack] -- |Connect| ER
    end

    ER -- |Encrypted Tunnel| VPN[Cloud VPN]

    subgraph Google_Cloud
        VPN --> G1[Managed group: VMs]
        VPN --> G2[Managed group: VMs]
        VPN --> CS[Cloud Storage]
    end
```

What are three potential bottlenecks? (Choose three.) 
Suggested Answer: ACF 🗳️ 

A. A single VPN tunnel, which limits throughput

B. A tier of Google Cloud Storage that is not suited for this task

C. A copy command that is not suited to operate over long distances

D. Fewer virtual machines (VMs) in GCP than on-premises machines

E. A separate storage layer outside the VMs, which is not suited for this task

F. Complicated internet connectivity between the on-premises infrastructure and GCP

**Answer: A**

**Timestamp: Oct. 17, 2019, 11:45 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/6708-exam-professional-cloud-architect-topic-2-question-5/)

----------------------------------------