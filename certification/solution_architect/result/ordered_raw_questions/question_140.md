## Exam Professional Cloud Architect topic 1 question 140 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 140
Topic #: 1

[All Professional Cloud Architect Questions]

Your company has a Kubernetes application that pulls messages from Pub/Sub and stores them in Filestore. Because the application is simple, it was deployed as a single pod. The infrastructure team has analyzed Pub/Sub metrics and discovered that the application cannot process the messages in real time. Most of them wait for minutes before being processed. You need to scale the elaboration process that is I/O-intensive. What should you do? 
Suggested Answer: D 🗳️ 

A. Use kubectl autoscale deployment APP_NAME --max 6 --min 2 --cpu-percent 50 to configure Kubernetes autoscaling deployment.

B. Configure a Kubernetes autoscaling deployment based on the subscription/push_request_latencies metric.

C. Use the --enable-autoscaling flag when you create the Kubernetes cluster.

D. Configure a Kubernetes autoscaling deployment based on the subscription/num_undelivered_messages metric.

**Answer: D**

**Timestamp: Aug. 23, 2021, 3:13 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60396-exam-professional-cloud-architect-topic-1-question-140/)

----------------------------------------