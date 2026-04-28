## Exam Professional Cloud Architect topic 1 question 181 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 181
Topic #: 1

[All Professional Cloud Architect Questions]

You have a Compute Engine managed instance group that adds and removes Compute Engine instances from the group in response to the load on your application. The instances have a shutdown script that removes REDIS database entries associated with the instance. You see that many database entries have not been removed, and you suspect that the shutdown script is the problem. You need to ensure that the commands in the shutdown script are run reliably every time an instance is shut down. You create a Cloud Function to remove the database entries. What should you do next? 
Suggested Answer: C 🗳️ 

A. Modify the shutdown script to wait for 30 seconds before triggering the Cloud Function.

B. Do not use the Cloud Function. Modify the shutdown script to restart if it has not completed in 30 seconds.

C. Set up a Cloud Monitoring sink that triggers the Cloud Function after an instance removal log message arrives in Cloud Logging.

D. Modify the shutdown script to wait for 30 seconds and then publish a message to a Pub/Sub queue.

**Answer: C**

**Timestamp: Sept. 4, 2022, 12:39 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/80034-exam-professional-cloud-architect-topic-1-question-181/)

----------------------------------------