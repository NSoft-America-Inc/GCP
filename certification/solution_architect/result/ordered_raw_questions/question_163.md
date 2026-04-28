## Exam Professional Cloud Architect topic 1 question 163 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 163
Topic #: 1

[All Professional Cloud Architect Questions]

Your company runs several databases on a single MySQL instance. They need to take backups of a specific database at regular intervals. The backup activity needs to complete as quickly as possible and cannot be allowed to impact disk performance.How should you configure the storage? 
Suggested Answer: B 🗳️ 

A. Configure a cron job to use the gcloud tool to take regular backups using persistent disk snapshots.

B. Mount a Local SSD volume as the backup location. After the backup is complete, use gsutil to move the backup to Google Cloud Storage.

C. Use gcsfise to mount a Google Cloud Storage bucket as a volume directly on the instance and write backups to the mounted location using mysqldump.

D. Mount additional persistent disk volumes onto each virtual machine (VM) instance in a RAID10 array and use LVM to create snapshots to send to Cloud Storage

**Answer: B**

**Timestamp: Oct. 22, 2019, 7:28 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7020-exam-professional-cloud-architect-topic-1-question-163/)

----------------------------------------