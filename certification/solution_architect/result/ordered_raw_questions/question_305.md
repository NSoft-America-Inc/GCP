## Exam Professional Cloud Architect topic 9 question 1 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 1
Topic #: 9

[All Professional Cloud Architect Questions]

For this question, refer to the TerramEarth case study. To be compliant with European GDPR regulation, TerramEarth is required to delete data generated from itsEuropean customers after a period of 36 months when it contains personal data. In the new architecture, this data will be stored in both Cloud Storage andBigQuery. What should you do? 
Suggested Answer: C 🗳️ 

A. Create a BigQuery table for the European data, and set the table retention period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months.

B. Create a BigQuery table for the European data, and set the table retention period to 36 months. For Cloud Storage, use gsutil to create a SetStorageClass to NONE action when with an Age condition of 36 months.

C. Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months.

D. Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to create a SetStorageClass to NONE action with an Age condition of 36 months.

**Answer: C**

**Timestamp: Oct. 12, 2019, 12:56 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/6489-exam-professional-cloud-architect-topic-9-question-1/)

----------------------------------------