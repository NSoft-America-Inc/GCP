## Exam Professional Cloud Architect topic 1 question 99 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 99
Topic #: 1

[All Professional Cloud Architect Questions]

You are deploying a PHP App Engine Standard service with Cloud SQL as the backend. You want to minimize the number of queries to the database.What should you do? 
Suggested Answer: A 🗳️ 

A. Set the memcache service level to dedicated. Create a key from the hash of the query, and return database values from memcache before issuing a query to Cloud SQL.

B. Set the memcache service level to dedicated. Create a cron task that runs every minute to populate the cache with keys containing query results.

C. Set the memcache service level to shared. Create a cron task that runs every minute to save all expected queries to a key called ג€cached_queriesג€.

D. Set the memcache service level to shared. Create a key called ג€cached_queriesג€, and return database values from the key before using a query to Cloud SQL.

**Answer: A**

**Timestamp: Oct. 28, 2019, 4:18 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7377-exam-professional-cloud-architect-topic-1-question-99/)

----------------------------------------