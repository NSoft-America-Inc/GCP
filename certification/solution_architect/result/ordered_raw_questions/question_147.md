## Exam Professional Cloud Architect topic 1 question 147 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 147
Topic #: 1

[All Professional Cloud Architect Questions]

Your company has an enterprise application running on Compute Engine that requires high availability and high performance. The application has been deployed on two instances in two zones in the same region in active-passive mode. The application writes data to a persistent disk. In the case of a single zone outage, that data should be immediately made available to the other instance in the other zone. You want to maximize performance while minimizing downtime and data loss.What should you do? 
Suggested Answer: C 🗳️ 

A. 1. Attach a persistent SSD disk to the first instance. 2. Create a snapshot every hour. 3. In case of a zone outage, recreate a persistent SSD disk in the second instance where data is coming from the created snapshot.

B. 1. Create a Cloud Storage bucket. 2. Mount the bucket into the first instance with gcs-fuse. 3. In case of a zone outage, mount the Cloud Storage bucket to the second instance with gcs-fuse.

C. 1. Attach a regional SSD persistent disk to the first instance. 2. In case of a zone outage, force-attach the disk to the other instance.

D. 1. Attach a local SSD to the first instance disk. 2. Execute an rsync command every hour where the target is a persistent SSD disk attached to the second instance. 3. In case of a zone outage, use the second instance.

**Answer: C**

**Timestamp: Aug. 25, 2021, 8:25 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60583-exam-professional-cloud-architect-topic-1-question-147/)

----------------------------------------