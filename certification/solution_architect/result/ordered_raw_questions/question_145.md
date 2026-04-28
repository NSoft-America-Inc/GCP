## Exam Professional Cloud Architect topic 1 question 145 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 145
Topic #: 1

[All Professional Cloud Architect Questions]

Your company has an application running as a Deployment in a Google Kubernetes Engine (GKE) cluster. You have separate clusters for development, staging, and production. You have discovered that the team is able to deploy a Docker image to the production cluster without first testing the deployment in development and then staging. You want to allow the team to have autonomy but want to prevent this from happening. You want a Google Cloud solution that can be implemented quickly with minimal effort. What should you do? 
Suggested Answer: C 🗳️ 

A. Configure a Kubernetes lifecycle hook to prevent the container from starting if it is not approved for usage in the given environment.

B. Implement a corporate policy to prevent teams from deploying Docker images to an environment unless the Docker image was tested in an earlier environment.

C. Configure binary authorization policies for the development, staging, and production clusters. Create attestations as part of the continuous integration pipeline.

D. Create a Kubernetes admissions controller to prevent the container from starting if it is not approved for usage in the given environment.

**Answer: C**

**Timestamp: Aug. 24, 2021, 5:10 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60438-exam-professional-cloud-architect-topic-1-question-145/)

----------------------------------------