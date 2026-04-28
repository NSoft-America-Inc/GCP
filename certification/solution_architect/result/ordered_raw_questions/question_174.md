## Exam Professional Cloud Architect topic 1 question 174 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 174
Topic #: 1

[All Professional Cloud Architect Questions]

You are working with a data warehousing team that performs data analysis. The team needs to process data from external partners, but the data contains personally identifiable information (PII). You need to process and store the data without storing any of the PIIE data. What should you do? 
Suggested Answer: A 🗳️ 

A. Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery.

B. Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, store all non-PII data in BigQuery and store all PII data in a Cloud Storage bucket that has a retention policy set.

C. Ask the external partners to upload all data on Cloud Storage. Configure Bucket Lock for the bucket. Create a Dataflow pipeline to read the data from the bucket. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery.

D. Ask the external partners to import all data in your BigQuery dataset. Create a dataflow pipeline to copy the data into a new table. As part of the Dataflow bucket, skip all data in columns that have PII data

**Answer: A**

**Timestamp: Dec. 28, 2021, 3:27 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/68685-exam-professional-cloud-architect-topic-1-question-174/)

----------------------------------------