## Exam Professional Cloud Architect topic 3 question 1 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 1
Topic #: 3

[All Professional Cloud Architect Questions]

For this question, refer to the Helicopter Racing League (HRL) case study. Your team is in charge of creating a payment card data vault for card numbers used to bill tens of thousands of viewers, merchandise consumers, and season ticket holders. You need to implement a custom card tokenization service that meets the following requirements:* It must provide low latency at minimal cost.* It must be able to identify duplicate credit cards and must not store plaintext card numbers.* It should support annual key rotation.Which storage approach should you adopt for your tokenization service? 
Suggested Answer: B 🗳️ 

A. Store the card data in Secret Manager after running a query to identify duplicates.

B. Encrypt the card data with a deterministic algorithm stored in Firestore using Datastore mode.

C. Encrypt the card data with a deterministic algorithm and shard it across multiple Memorystore instances.

D. Use column-level encryption to store the data in Cloud SQL.

**Answer: B**

**Timestamp: Nov. 13, 2021, 2:09 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/65937-exam-professional-cloud-architect-topic-3-question-1/)

----------------------------------------