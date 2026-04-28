## Exam Professional Cloud Architect topic 1 question 237 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 237
Topic #: 1

[All Professional Cloud Architect Questions]

A large healthcare provider's primary electronic health record (EHR) application runs on Compute Engine instances with a Cloud SQL for PostgreSQL database, all located in the us-west1 region. A new regulatory mandate requires you to implement and document a business continuity plan (BCP). This plan must ensure that the EHR application can be fully recovered and operational in a different geographical region with a recovery time objective (RTO) of two hours and a recovery point objective (RPO) of 15 minutes. You need to design a disaster recovery strategy that meets these strict BCP requirements. What should you do? 
Suggested Answer: A 🗳️ 

A. Deploy active managed instance groups (MIGs) in both us-west1 and us-east1, fronted by a global external HTTP(S) Load Balancer. For the database, use a cross-region read replica in us-east1, and rely on load balancer health checks to automatically fail over all traffic during an outage.

B. Use Terraform to define the application’s compute infrastructure. During a disaster, configure the Cloud SQL database in us-west1 to use a cross-region read replica in us-east1, build the environment in us-east1, and promote the replica.

C. Take daily snapshots of the Compute Engine disks and Cloud SQL database. Copy these snapshots to a Cloud Storage bucket in us-east1. During a disaster, manually restore the virtual machines (VMs) and database from the latest snapshots

D. Deploy a regional MIG in us-west1 for high availability, and rely on the Google Cloud SLA to ensure the region remains online.

**Answer: A**

**Timestamp: Feb. 12, 2026, 3:53 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/383620-exam-professional-cloud-architect-topic-1-question-237/)

----------------------------------------