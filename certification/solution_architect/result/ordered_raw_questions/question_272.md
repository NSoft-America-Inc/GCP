## Exam Professional Cloud Architect topic 4 question 6 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 6
Topic #: 4

[All Professional Cloud Architect Questions]

For this question, refer to the EHR Healthcare case study. In the past, configuration errors put public IP addresses on backend servers that should not have been accessible from the Internet. You need to ensure that no one can put external IP addresses on backend Compute Engine instances and that external IP addresses can only be configured on frontend Compute Engine instances. What should you do? 
Suggested Answer: A 🗳️ 

A. Create an Organizational Policy with a constraint to allow external IP addresses only on the frontend Compute Engine instances.

B. Revoke the compute.networkAdmin role from all users in the project with front end instances.

C. Create an Identity and Access Management (IAM) policy that maps the IT staff to the compute.networkAdmin role for the organization.

D. Create a custom Identity and Access Management (IAM) role named GCE_FRONTEND with the compute.addresses.create permission.

**Answer: A**

**Timestamp: Aug. 23, 2021, 6:24 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60407-exam-professional-cloud-architect-topic-4-question-6/)

----------------------------------------