## Exam Professional Cloud Architect topic 10 question 4 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 4
Topic #: 10

[All Professional Cloud Architect Questions]

For this question, refer to the TerramEarth case study. TerramEarth has a legacy web application that you cannot migrate to cloud. However, you still want to build a cloud-native way to monitor the application. If the application goes down, you want the URL to point to a "Site is unavailable" page as soon as possible. You also want your Ops team to receive a notification for the issue. You need to build a reliable solution for minimum cost. What should you do? 
Suggested Answer: C 🗳️ 

A. Create a scheduled job in Cloud Run to invoke a container every minute. The container will check the application URL. If the application is down, switch the URL to the "Site is unavailable" page, and notify the Ops team.

B. Create a cron job on a Compute Engine VM that runs every minute. The cron job invokes a Python program to check the application URL. If the application is down, switch the URL to the "Site is unavailable" page, and notify the Ops team.

C. Create a Cloud Monitoring uptime check to validate the application URL. If it fails, put a message in a Pub/Sub queue that triggers a Cloud Function to switch the URL to the "Site is unavailable" page, and notify the Ops team.

D. Use Cloud Error Reporting to check the application URL. If the application is down, switch the URL to the "Site is unavailable" page, and notify the Ops team.

**Answer: C**

**Timestamp: Aug. 25, 2021, 2:09 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60562-exam-professional-cloud-architect-topic-10-question-4/)

----------------------------------------