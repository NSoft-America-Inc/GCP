## Exam Professional Cloud Architect topic 1 question 121 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 121
Topic #: 1

[All Professional Cloud Architect Questions]

You need to deploy an application on Google Cloud that must run on a Debian Linux environment. The application requires extensive configuration in order to operate correctly. You want to ensure that you can install Debian distribution updates with minimal manual intervention whenever they become available. What should you do? 
Suggested Answer: B 🗳️ 

A. Create a Compute Engine instance template using the most recent Debian image. Create an instance from this template, and install and configure the application as part of the startup script. Repeat this process whenever a new Google-managed Debian image becomes available.

B. Create a Debian-based Compute Engine instance, install and configure the application, and use OS patch management to install available updates.

C. Create an instance with the latest available Debian image. Connect to the instance via SSH, and install and configure the application on the instance. Repeat this process whenever a new Google-managed Debian image becomes available.

D. Create a Docker container with Debian as the base image. Install and configure the application as part of the Docker image creation process. Host the container on Google Kubernetes Engine and restart the container whenever a new update is available.

**Answer: B**

**Timestamp: July 6, 2021, 11:20 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/57270-exam-professional-cloud-architect-topic-1-question-121/)

----------------------------------------