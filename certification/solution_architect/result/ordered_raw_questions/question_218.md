## Exam Professional Cloud Architect topic 1 question 218 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 218
Topic #: 1

[All Professional Cloud Architect Questions]

You are deploying a critical application with a stateless, containerized frontend on Cloud Run and a Cloud SQL for PostgreSQL backend. The application experiences unpredictable traffic spikes, and the business requires the ability to immediately roll back a failed deployment to the last known good state. You need to apply a deployment strategy that aligns with Site Reliability Engineering (SRE) principles for both the application code and the database schema updates, while meeting the business's requirements. What should you do? 
Suggested Answer: C 🗳️ 

A. Package the database schema migration script within the container to be executed on every container startup before the application process begins.

B. Configure the CI/CD pipeline to use the :latest container tag for deployments, with database schema changes applied manually as needed.

C. Separate CI/CD pipelines for database schema migrations from application deployments. When deploying a new Cloud Run revision, use gradual traffic split.

D. Use a single CI/CD pipeline that first applies database schema changes and then deploys the new Cloud Run revision.

**Answer: C**

**Timestamp: Dec. 22, 2025, 3:06 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381817-exam-professional-cloud-architect-topic-1-question-218/)

----------------------------------------