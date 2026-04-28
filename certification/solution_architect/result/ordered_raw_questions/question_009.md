## Exam Professional Cloud Architect topic 1 question 9 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 9
Topic #: 1

[All Professional Cloud Architect Questions]

You set up an autoscaling instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address.You have verified the appropriate web response is coming from each instance using the curl command. You want to ensure the backend is configured correctly.What should you do? 
Suggested Answer: C 🗳️ 

A. Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.

B. Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.

C. Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.

D. Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination.

**Answer: C**

**Timestamp: Oct. 24, 2019, 2:12 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7130-exam-professional-cloud-architect-topic-1-question-9/)

----------------------------------------