## Exam Professional Cloud Architect topic 11 question 8 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 8
Topic #: 11

[All Professional Cloud Architect Questions]

As part of their new application experience, Dress4Wm allows customers to upload images of themselves.The customer has exclusive control over who may view these images.Customers should be able to upload images with minimal latency and also be shown their images quickly on the main application page when they log in.Which configuration should Dress4Win use? 
Suggested Answer: A 🗳️ 

A. Store image files in a Google Cloud Storage bucket. Use Google Cloud Datastore to maintain metadata that maps each customer's ID and their image files.

B. Store image files in a Google Cloud Storage bucket. Add custom metadata to the uploaded images in Cloud Storage that contains the customer's unique ID.

C. Use a distributed file system to store customers' images. As storage needs increase, add more persistent disks and/or nodes. Assign each customer a unique ID, which sets each file's owner attribute, ensuring privacy of images.

D. Use a distributed file system to store customers' images. As storage needs increase, add more persistent disks and/or nodes. Use a Google Cloud SQL database to maintain metadata that maps each customer's ID to their image files.

**Answer: A**

**Timestamp: Nov. 15, 2019, 11:18 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/8251-exam-professional-cloud-architect-topic-11-question-8/)

----------------------------------------