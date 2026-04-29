## Exam Professional Cloud Architect topic 1 question 22 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 22
Topic #: 1

[All Professional Cloud Architect Questions]

One of the developers on your team deployed their application in Google Container Engine with the Dockerfile below. They report that their application deployments are taking too long.

### Dockerfile
```dockerfile
FROM ubuntu:16.04

COPY . /src

RUN apt-get update && apt-get install -y python python-pip

RUN pip install -r requirements.txt
```

You want to optimize this Dockerfile for faster deployment times without adversely affecting the app's functionality. Which two actions should you take? (Choose two.) 
Suggested Answer: CE 🗳️ 

A. Remove Python after running pip

B. Remove dependencies from requirements.txt

C. Use a slimmed-down base image like Alpine Linux

D. Use larger machine types for your Google Container Engine node pools

E. Copy the source after he package dependencies (Python and pip) are installed

**Answer: C**

**Timestamp: June 3, 2021, 2:08 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/54406-exam-professional-cloud-architect-topic-1-question-22/)

----------------------------------------