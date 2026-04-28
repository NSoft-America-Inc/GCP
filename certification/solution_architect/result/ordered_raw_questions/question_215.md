## Exam Professional Cloud Architect topic 1 question 215 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 215
Topic #: 1

[All Professional Cloud Architect Questions]

To improve governance and security, your organization has structured the Google Cloud environment using folders for different business units. Each business unit folder has subfolders for development, staging, and production environments, which must comply with internal security controls:• Production workloads must be protected from direct internet ingress by default unless explicitly tagged.• The application must be accessible to customers over HTTPS.You need to design a scalable and enforceable model that blocks internet ingress traffic to the production folders while selectively allowing direct HTTPS traffic to the necessary virtual machines. You must also ensure that individual project teams cannot overwrite these controls once they are implemented for all current and future production projects. What should you do? 
Suggested Answer: A 🗳️ 

A. At each production folder, apply a hierarchical firewall policy to deny all ingress except for HTTPS to tagged VMs.

B. Mandate the application teams to deploy a Terraform module to create VPC firewall rules in each project that deny ingress and allow HTTPS.

C. At the organization root, apply a hierarchical firewall policy to deny all ingress except for HTTPS to tagged VMs.

D. At each production folder, use an organization policy to block all external IPs and require teams to use external HTTPS load balancers.

**Answer: A**

**Timestamp: Dec. 22, 2025, 3:07 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381826-exam-professional-cloud-architect-topic-1-question-215/)

----------------------------------------