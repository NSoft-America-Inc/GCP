## Exam Professional Cloud Architect topic 1 question 104 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 104
Topic #: 1

[All Professional Cloud Architect Questions]

You need to deploy an application to Google Cloud. The application receives traffic via TCP and reads and writes data to the filesystem. The application does not support horizontal scaling. The application process requires full control over the data on the file system because concurrent access causes corruption. The business is willing to accept a downtime when an incident occurs, but the application must be available 24/7 to support their business operations. You need to design the architecture of this application on Google Cloud. What should you do? 
Suggested Answer: D 🗳️ 

A. Use a managed instance group with instances in multiple zones, use Cloud Filestore, and use an HTTP load balancer in front of the instances.

B. Use a managed instance group with instances in multiple zones, use Cloud Filestore, and use a network load balancer in front of the instances.

C. Use an unmanaged instance group with an active and standby instance in different zones, use a regional persistent disk, and use an HTTP load balancer in front of the instances.

D. Use an unmanaged instance group with an active and standby instance in different zones, use a regional persistent disk, and use a network load balancer in front of the instances.

**Answer: D**

**Timestamp: June 30, 2021, 3:24 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/56360-exam-professional-cloud-architect-topic-1-question-104/)

----------------------------------------