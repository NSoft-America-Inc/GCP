## Exam Professional Cloud Architect topic 1 question 214 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 214
Topic #: 1

[All Professional Cloud Architect Questions]

You are designing the network architecture for a public-facing, containerized web application deployed on Cloud Run. All incoming traffic must be inspected by a Cloud Armor web application firewall (WAF) before reaching the application You plan to use an Application Load Balancer, which will have the Cloud Armor policy attached. You must ensure that all public requests pass through the load balancer and any attempt to access the Cloud Run service directly through its default *.run.app URL is blocked. What should you do? 
Suggested Answer: C 🗳️ 

A. Enable Identity-Aware Proxy (IAP) directly on the Cloud Run service to intercept and validate all incoming requests

B. Create a DNS entry to route traffic to Cloud Armor. Configure Cloud Armor to deny traffic from unknown IP addresses

C. Set the Cloud Run ingress to Allow internal traffic and Cloud Load Balancing, and use a serverless NEG backend on the load balancer

D. Configure a VPC firewall rule with a high priority to deny all traffic that does not originate from the load balancer

**Answer: C**

**Timestamp: Dec. 22, 2025, 3:06 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381821-exam-professional-cloud-architect-topic-1-question-214/)

----------------------------------------