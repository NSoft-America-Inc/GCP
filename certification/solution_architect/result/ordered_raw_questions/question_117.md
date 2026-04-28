## Exam Professional Cloud Architect topic 1 question 117 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 117
Topic #: 1

[All Professional Cloud Architect Questions]

Your company is designing its application landscape on Compute Engine. Whenever a zonal outage occurs, the application should be restored in another zone as quickly as possible with the latest application data. You need to design the solution to meet this requirement. What should you do? 
Suggested Answer: B 🗳️ 

A. Create a snapshot schedule for the disk containing the application data. Whenever a zonal outage occurs, use the latest snapshot to restore the disk in the same zone.

B. Configure the Compute Engine instances with an instance template for the application, and use a regional persistent disk for the application data. Whenever a zonal outage occurs, use the instance template to spin up the application in another zone in the same region. Use the regional persistent disk for the application data.

C. Create a snapshot schedule for the disk containing the application data. Whenever a zonal outage occurs, use the latest snapshot to restore the disk in another zone within the same region.

D. Configure the Compute Engine instances with an instance template for the application, and use a regional persistent disk for the application data. Whenever a zonal outage occurs, use the instance template to spin up the application in another region. Use the regional persistent disk for the application data.

**Answer: B**

**Timestamp: June 30, 2021, 5:36 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/56403-exam-professional-cloud-architect-topic-1-question-117/)

----------------------------------------