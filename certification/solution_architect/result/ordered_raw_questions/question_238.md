## Exam Professional Cloud Architect topic 1 question 240 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 240
Topic #: 1

[All Professional Cloud Architect Questions]

A retail company s most critical application is its online payment processing system. The business has a requirement that the system must be able to survive a complete zonal outage while minimizing cost. You need a design solution that can handle a zonal failure. What should you do? 
Suggested Answer: B 🗳️ 

A. Deploy the application in an active-active configuration using managed instance groups (MIGs) in two different regions, fronted by a global external HTTP(S) Load Balancer and backed by a multi-regional database like Spanner.

B. Deploy the application on a regional MIG to provide high availability across multiple zones in the primary region.

C. Configure the regional MIG to use only Spot VMs to aggressively minimize operational costs while maintaining high availability.

D. Deploy the application on Compute Engine instances across multiple regions, and rely on daily snapshots for recovery to achieve the lowest possible cost.

**Answer: B**

**Timestamp: Feb. 12, 2026, 3:52 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/383603-exam-professional-cloud-architect-topic-1-question-240/)

----------------------------------------