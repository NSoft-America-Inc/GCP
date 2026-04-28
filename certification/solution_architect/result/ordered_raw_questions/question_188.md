## Exam Professional Cloud Architect topic 1 question 188 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 188
Topic #: 1

[All Professional Cloud Architect Questions]

Your company and one of its partners each have a Google Cloud project in separate organizations. Your company's project (prj-a) runs in Virtual Private Cloud(vpc-a). The partner's project (prj-b) runs in vpc-b. There are two instances running on vpc-a and one instance running on vpc-b. Subnets defined in both VPCs are not overlapping. You need to ensure that all instances communicate with each other via internal IPs, minimizing latency and maximizing throughput. What should you do? 
Suggested Answer: A 🗳️ 

A. Set up a network peering between vpc-a and vpc-b.

B. Set up a VPN between vpc-a and vpc-b using Cloud VPN.

C. Configure IAP TCP forwarding on the instance in vpc-b, and then launch the following gcloud command from one of the instances in vpc-a gcloud: gcloud compute start-iap-tunnel INSTANCE_NAME_IN_VPC_8 22 \ --local-host-port=localhost:22

D. 1. Create an additional instance in vpc-a. 2. Create an additional instance in vpc-b. 3. Install OpenVPN in newly created instances. 4. Configure a VPN tunnel between vpc-a and vpc-b with the help of OpenVPN.

**Answer: A**

**Timestamp: Sept. 4, 2022, 10:35 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/80000-exam-professional-cloud-architect-topic-1-question-188/)

----------------------------------------