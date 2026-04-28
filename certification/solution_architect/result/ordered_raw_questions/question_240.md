## Exam Professional Cloud Architect topic 1 question 242 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 242
Topic #: 1

[All Professional Cloud Architect Questions]

Your company uses a custom-built application running on a Compute Engine virtual machine (VM). This application processes real-time sales data and writes it to a zonal Persistent Disk. A recent internal audit requires that you implement a backup and recovery plan to protect against zonal failures. Your company has a strict policy that all backup data must be retained for at least 90 days and stored in a separate project with limited access. You need to implement a fully automated backup solution that meets these requirements with minimal operational overhead. What should you do? 
Suggested Answer: D 🗳️ 

A. Write a script to create daily backups of the Persistent Disk. Copy the backups to a different zone and apply a label to each snapshot to indicate the deletion date.

B. Use gcloud commands to create snapshots of the Persistent Disk. Store the snapshots in a regional Cloud Storage bucket and configure a lifecycle rule to delete objects older than 90 days.

C. Create a snapshot schedule to automatically create Persistent Disk snapshots and use a script to move and store them in a multi-regional Cloud Storage bucket.

D. Use the Backup and Disaster Recovery (DR) service to create a backup plan. Configure the backup plan to take daily snapshots and store them in a backup vault with a 90-day retention policy.

**Answer: D**

**Timestamp: Feb. 12, 2026, 3:53 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/383611-exam-professional-cloud-architect-topic-1-question-242/)

----------------------------------------