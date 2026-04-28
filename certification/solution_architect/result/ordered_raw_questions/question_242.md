## Exam Professional Cloud Architect topic 1 question 250 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 250
Topic #: 1

[All Professional Cloud Architect Questions]

Your company has hired an external auditing firm to perform a compliance audit. Your company’s governance policy requires that external auditors be managed in a single Google Group that is granted temporary, read-only access to a Cloud Storage bucket named audit-evidence-bucket. Access must be traceable to the individual auditor's identity and be active only for the duration of the audit engagement, which runs the entire month of October. You need a secure access control strategy that avoids administrative overhead and complies with your company's governance policy. What should you do? 
Suggested Answer: A 🗳️ 

A. Apply an IAM policy binding that grants the roles/storage.objectViewer role to the Google Group. Configure this binding with a time-based IAM Condition that automatically grants access from October 1 to November 1.

B. Create a service account, and grant it the roles/storage.objectViewer role on the bucket. Generate and share Signed URLs for each object in the bucket with an expiration date of November 1.

C. Use Cloud Scheduler to run a Cloud Run functions script that adds the IAM binding of roles/storage.objectViewer to the Google Group on October 1 and another that removes the IAM binding on November 1.

D. Use Workforce Identity Federation to map the auditors’ group to the Google Group. Bind the roles/storage.objectViewer role to this Google Group. Configure a 1-month session duration on the provider.

**Answer: A**

**Timestamp: Feb. 12, 2026, 3:54 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/383625-exam-professional-cloud-architect-topic-1-question-250/)

----------------------------------------