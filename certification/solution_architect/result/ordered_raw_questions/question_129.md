## Exam Professional Cloud Architect topic 1 question 129 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 129
Topic #: 1

[All Professional Cloud Architect Questions]

You are developing an application using different microservices that should remain internal to the cluster. You want to be able to configure each microservice with a specific number of replicas. You also want to be able to address a specific microservice from any other microservice in a uniform way, regardless of the number of replicas the microservice scales to. You need to implement this solution on Google Kubernetes Engine. What should you do? 
Suggested Answer: A 🗳️ 

A. Deploy each microservice as a Deployment. Expose the Deployment in the cluster using a Service, and use the Service DNS name to address it from other microservices within the cluster.

B. Deploy each microservice as a Deployment. Expose the Deployment in the cluster using an Ingress, and use the Ingress IP address to address the Deployment from other microservices within the cluster.

C. Deploy each microservice as a Pod. Expose the Pod in the cluster using a Service, and use the Service DNS name to address the microservice from other microservices within the cluster.

D. Deploy each microservice as a Pod. Expose the Pod in the cluster using an Ingress, and use the Ingress IP address name to address the Pod from other microservices within the cluster.

**Answer: A**

**Timestamp: July 8, 2021, 5:11 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/57424-exam-professional-cloud-architect-topic-1-question-129/)

----------------------------------------