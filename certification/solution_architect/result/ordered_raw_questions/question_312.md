## Exam Professional Cloud Architect topic 10 question 2 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 2
Topic #: 10

[All Professional Cloud Architect Questions]

For this question, refer to the TerramEarth case study. You have broken down a legacy monolithic application into a few containerized RESTful microservices.You want to run those microservices on Cloud Run. You also want to make sure the services are highly available with low latency to your customers. What should you do? 
Suggested Answer: B 🗳️ 

A. Deploy Cloud Run services to multiple availability zones. Create Cloud Endpoints that point to the services. Create a global HTTP(S) Load Balancing instance and attach the Cloud Endpoints to its backend.

B. Deploy Cloud Run services to multiple regions. Create serverless network endpoint groups pointing to the services. Add the serverless NEGs to a backend service that is used by a global HTTP(S) Load Balancing instance.

C. Deploy Cloud Run services to multiple regions. In Cloud DNS, create a latency-based DNS name that points to the services.

D. Deploy Cloud Run services to multiple availability zones. Create a TCP/IP global load balancer. Add the Cloud Run Endpoints to its backend service.

**Answer: B**

**Timestamp: Aug. 24, 2021, 3:57 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60525-exam-professional-cloud-architect-topic-10-question-2/)

----------------------------------------