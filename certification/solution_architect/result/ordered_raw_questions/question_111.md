## Exam Professional Cloud Architect topic 1 question 111 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 111
Topic #: 1

[All Professional Cloud Architect Questions]

Your company is running its application workloads on Compute Engine. The applications have been deployed in production, acceptance, and development environments. The production environment is business-critical and is used 24/7, while the acceptance and development environments are only critical during office hours. Your CFO has asked you to optimize these environments to achieve cost savings during idle times. What should you do? 
Suggested Answer: B 🗳️ 

A. Create a shell script that uses the gcloud command to change the machine type of the development and acceptance instances to a smaller machine type outside of office hours. Schedule the shell script on one of the production instances to automate the task.

B. Use Cloud Scheduler to trigger a Cloud Function that will stop the development and acceptance environments after office hours and start them just before office hours.

C. Deploy the development and acceptance applications on a managed instance group and enable autoscaling.

D. Use regular Compute Engine instances for the production environment, and use preemptible VMs for the acceptance and development environments.

**Answer: B**

**Timestamp: July 1, 2021, 8:48 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/56686-exam-professional-cloud-architect-topic-1-question-111/)

----------------------------------------