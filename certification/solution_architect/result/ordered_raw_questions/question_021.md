## Exam Professional Cloud Architect topic 1 question 21 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 21
Topic #: 1

[All Professional Cloud Architect Questions]

Your company's user-feedback portal comprises a standard LAMP stack replicated across two zones. It is deployed in the us-central1 region and uses autoscaled managed instance groups on all layers, except the database. Currently, only a small group of select customers have access to the portal. The portal meets a99,99% availability SLA under these conditions. However next quarter, your company will be making the portal available to all users, including unauthenticated users. You need to develop a resiliency testing strategy to ensure the system maintains the SLA once they introduce additional user load.What should you do? 
Suggested Answer: B 🗳️ 

A. Capture existing users input, and replay captured user load until autoscale is triggered on all layers. At the same time, terminate all resources in one of the zones

B. Create synthetic random user input, replay synthetic load until autoscale logic is triggered on at least one layer, and introduce ג€chaosג€ to the system by terminating random resources on both zones

C. Expose the new system to a larger group of users, and increase group size each day until autoscale logic is triggered on all layers. At the same time, terminate random resources on both zones

D. Capture existing users input, and replay captured user load until resource utilization crosses 80%. Also, derive estimated number of users based on existing user's usage of the app, and deploy enough resources to handle 200% of expected load

**Answer: B**

**Timestamp: Oct. 24, 2019, 1:54 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7128-exam-professional-cloud-architect-topic-1-question-21/)

----------------------------------------