## Exam Professional Cloud Architect topic 1 question 210 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 210
Topic #: 1

[All Professional Cloud Architect Questions]

You are designing the storage architecture for a financial analytics platform. The platform ingests and stores terabytes of transactional data daily, which is used for both real-time fraud detection and long-term historical analysis. Transaction data from the last 30 days must be accessible with very low latency for the fraud detection engine. Data older than 30 days is accessed infrequently for quarterly reports, where retrieval times of a few seconds are acceptable. All data must be retained for five years to meet compliance regulations. You need to design a solution as cost-effective as possible. What should you do? 
Suggested Answer: D 🗳️ 

A. Store all transaction data in a Cloud Storage bucket using the Standard storage class for the entire five-year retention period.

B. Ingest all data into BigQuery using time-partitioned tables, and rely on BigQuery’s automatic long-term storage pricing for data older than 90 days.

C. Configure a Cloud Storage bucket with an Object Lifecycle Management policy to transition data from the Standard class to the Archive class after 30 days.

D. Configure a Cloud Storage bucket with an Object Lifecycle Management policy to transition data from the Standard class to the Coldline class after 30 days.

**Answer: D**

**Timestamp: Dec. 22, 2025, 3:06 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381819-exam-professional-cloud-architect-topic-1-question-210/)

----------------------------------------