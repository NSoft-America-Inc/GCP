## Exam Professional Cloud Architect topic 1 question 212 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 212
Topic #: 1

[All Professional Cloud Architect Questions]

You are migrating a critical on-premises inventory management application to Google Cloud. The application is a monolith with a traditional relational database, and the immediate business goal is a rapid data center exit. The monolith is exposing an API to other business critical applications.The long-term vision is to modernize the application into globally distributed, cloud-native services to support the company’s expansion. You need to design the initial cloud architecture to ensure that future modernization causes the least possible disruption to other applications that depend on inventory data. The future modernization might require the API to change structure. What should you do? 
Suggested Answer: B 🗳️ 

A. Use Service Directory to register the monolith's endpoint, allowing dependent applications to look up its address and connect directly.

B. Implement a managed API facade with Apigee to handle all requests from dependent applications on behalf of the monolith’s backend.

C. Use an internal load balancer to provide a stable IP for dependent applications to connect directly to the monolith's native API.

D. Provide dependent applications with direct database access by creating secured SQL VIEWs on Cloud SQL for them to query.

**Answer: B**

**Timestamp: Dec. 22, 2025, 3:07 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381830-exam-professional-cloud-architect-topic-1-question-212/)

----------------------------------------