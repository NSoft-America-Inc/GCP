## Exam Professional Cloud Architect topic 1 question 86 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 86
Topic #: 1

[All Professional Cloud Architect Questions]

You have been engaged by your client to lead the migration of their application infrastructure to GCP. One of their current problems is that the on-premises high performance SAN is requiring frequent and expensive upgrades to keep up with the variety of workloads that are identified as follows: 20 TB of log archives retained for legal reasons; 500 GB of VM boot/data volumes and templates; 500 GB of image thumbnails; 200 GB of customer session state data that allows customers to restart sessions even if off-line for several days.Which of the following best reflects your recommendations for a cost-effective storage allocation? 
Suggested Answer: B 🗳️ 

A. Local SSD for customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.

B. Memcache backed by Cloud Datastore for the customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.

C. Memcache backed by Cloud SQL for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails.

D. Memcache backed by Persistent Disk SSD storage for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails.

**Answer: B**

**Timestamp: Oct. 30, 2019, 7:44 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7468-exam-professional-cloud-architect-topic-1-question-86/)

----------------------------------------