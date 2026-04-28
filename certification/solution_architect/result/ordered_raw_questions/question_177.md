## Exam Professional Cloud Architect topic 1 question 177 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 177
Topic #: 1

[All Professional Cloud Architect Questions]

Your company has just recently activated Cloud Identity to manage users. The Google Cloud Organization has been configured as well. The security team needs to secure projects that will be part of the Organization. They want to prohibit IAM users outside the domain from gaining permissions from now on. What should they do? 
Suggested Answer: A 🗳️ 

A. Configure an organization policy to restrict identities by domain.

B. Configure an organization policy to block creation of service accounts.

C. Configure Cloud Scheduler to trigger a Cloud Function every hour that removes all users that don't belong to the Cloud Identity domain from all projects.

D. Create a technical user (e.g., [email protected]), and give it the project owner role at root organization level. Write a bash script that: ג€¢ Lists all the IAM rules of all projects within the organization. ג€¢ Deletes all users that do not belong to the company domain. Create a Compute Engine instance in a project within the Organization and configure gcloud to be executed with technical user credentials. Configure a cron job that executes the bash script every hour.

**Answer: A**

**Timestamp: Dec. 28, 2021, 3:38 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/68690-exam-professional-cloud-architect-topic-1-question-177/)

----------------------------------------