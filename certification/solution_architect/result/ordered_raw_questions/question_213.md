## Exam Professional Cloud Architect topic 1 question 213 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 213
Topic #: 1

[All Professional Cloud Architect Questions]

Your organization uses separate Google Cloud projects for shared services, development, testing, and production.• The shared services project hosts your private CI/CD runners and a central Artifact Registry• The development, testing, and production projects host the GKE clusters where applications are deployed.You need to design an architecture that allows the CI/CD runners to connect to the GKE clusters and the clusters to pull images from Artifact Registry, all using private IP addresses. However, direct network traffic between the development, testing, and production environments must be strictly prohibited. What should you do? 
Suggested Answer: A 🗳️ 

A. Create a separate VPC in each of the four projects. Connect each environment's VPC to the shared services VPC through VPC Network Peering.

B. Expose the resources in the shared services project using an external load balancer. Implement a firewall rule to limit access.

C. Create a separate VPC in each project. Use VPC Network Peering to create a full mesh, connecting every VPC directly to every other VPC.

D. Configure the shared services project as a Shared VPC host. Create a single VPC in this host project and attach the environment projects as service projects.

**Answer: A**

**Timestamp: Dec. 22, 2025, 3:06 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381820-exam-professional-cloud-architect-topic-1-question-213/)

----------------------------------------