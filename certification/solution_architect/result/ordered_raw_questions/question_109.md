## Exam Professional Cloud Architect topic 1 question 109 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 109
Topic #: 1

[All Professional Cloud Architect Questions]

You are working at a sports association whose members range in age from 8 to 30. The association collects a large amount of health data, such as sustained injuries. You are storing this data in BigQuery. Current legislation requires you to delete such information upon request of the subject. You want to design a solution that can accommodate such a request. What should you do? 
Suggested Answer: A 🗳️ 

A. Use a unique identifier for each individual. Upon a deletion request, delete all rows from BigQuery with this identifier.

B. When ingesting new data in BigQuery, run the data through the Data Loss Prevention (DLP) API to identify any personal information. As part of the DLP scan, save the result to Data Catalog. Upon a deletion request, query Data Catalog to find the column with personal information.

C. Create a BigQuery view over the table that contains all data. Upon a deletion request, exclude the rows that affect the subject's data from this view. Use this view instead of the source table for all analysis tasks.

D. Use a unique identifier for each individual. Upon a deletion request, overwrite the column with the unique identifier with a salted SHA256 of its value.

**Answer: A**

**Timestamp: June 30, 2021, 4:12 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/56381-exam-professional-cloud-architect-topic-1-question-109/)

----------------------------------------