## Exam Professional Cloud Architect topic 1 question 32 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 32
Topic #: 1

[All Professional Cloud Architect Questions]

You have created several pre-emptible Linux virtual machine instances using Google Compute Engine. You want to properly shut down your application before the virtual machines are preempted.What should you do? 
Suggested Answer: C 🗳️ 

A. Create a shutdown script named k99.shutdown in the /etc/rc.6.d/ directory

B. Create a shutdown script registered as a xinetd service in Linux and configure a Stackdriver endpoint check to call the service

C. Create a shutdown script and use it as the value for a new metadata entry with the key shutdown-script in the Cloud Platform Console when you create the new virtual machine instance

D. Create a shutdown script, registered as a xinetd service in Linux, and use the gcloud compute instances add-metadata command to specify the service URL as the value for a new metadata entry with the key shutdown-script-url

**Answer: C**

**Timestamp: Oct. 25, 2019, 3:11 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7202-exam-professional-cloud-architect-topic-1-question-32/)

----------------------------------------