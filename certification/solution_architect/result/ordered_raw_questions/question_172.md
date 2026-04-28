## Exam Professional Cloud Architect topic 1 question 172 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 172
Topic #: 1

[All Professional Cloud Architect Questions]

Your company has an application running on Compute Engine that allows users to play their favorite music. There are a fixed number of instances. Files are stored in Cloud Storage, and data is streamed directly to users. Users are reporting that they sometimes need to attempt to play popular songs multiple times before they are successful. You need to improve the performance of the application. What should you do? 
Suggested Answer: D 🗳️ 

A. 1. Mount the Cloud Storage bucket using gcsfuse on all backend Compute Engine instances. 2. Serve music files directly from the backend Compute Engine instance.

B. 1. Create a Cloud Filestore NFS volume and attach it to the backend Compute Engine instances. 2. Download popular songs in Cloud Filestore. 3. Serve music files directly from the backend Compute Engine instance.

C. 1. Copy popular songs into CloudSQL as a blob. 2. Update application code to retrieve data from CloudSQL when Cloud Storage is overloaded.

D. 1. Create a managed instance group with Compute Engine instances. 2. Create a global load balancer and configure it with two backends: ג—‹ Managed instance group ג—‹ Cloud Storage bucket 3. Enable Cloud CDN on the bucket backend.

**Answer: D**

**Timestamp: Dec. 28, 2021, 3:23 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/68683-exam-professional-cloud-architect-topic-1-question-172/)

----------------------------------------