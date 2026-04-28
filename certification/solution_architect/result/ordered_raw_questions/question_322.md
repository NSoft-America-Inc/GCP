## Exam Professional Cloud Architect topic 11 question 6 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 6
Topic #: 11

[All Professional Cloud Architect Questions]

Dress4Win has asked you for advice on how to migrate their on-premises MySQL deployment to the cloud.They want to minimize downtime and performance impact to their on-premises solution during the migration.Which approach should you recommend? 
Suggested Answer: B 🗳️ 

A. Create a dump of the on-premises MySQL master server, and then shut it down, upload it to the cloud environment, and load into a new MySQL cluster.

B. Setup a MySQL replica server/slave in the cloud environment, and configure it for asynchronous replication from the MySQL master server on-premises until cutover.

C. Create a new MySQL cluster in the cloud, configure applications to begin writing to both on premises and cloud MySQL masters, and destroy the original cluster at cutover.

D. Create a dump of the MySQL replica server into the cloud environment, load it into: Google Cloud Datastore, and configure applications to read/write to Cloud Datastore at cutover.

**Answer: B**

**Timestamp: Nov. 27, 2019, 4:46 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/9198-exam-professional-cloud-architect-topic-11-question-6/)

----------------------------------------