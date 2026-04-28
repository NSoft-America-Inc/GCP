## Exam Professional Cloud Architect topic 10 question 5 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 5
Topic #: 10

[All Professional Cloud Architect Questions]

For this question, refer to the TerramEarth case study. You are building a microservice-based application for TerramEarth. The application is based on Docker containers. You want to follow Google-recommended practices to build the application continuously and store the build artifacts. What should you do? 
Suggested Answer: A 🗳️ 

A. Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build container images for each microservice, and tag them using the code commit hash. Push the images to the Container Registry.

B. Configure a trigger in Cloud Build for new source changes. The trigger invokes build jobs and build container images for the microservices. Tag the images with a version number, and push them to Cloud Storage.

C. Create a Scheduler job to check the repo every minute. For any new change, invoke Cloud Build to build container images for the microservices. Tag the images using the current timestamp, and push them to the Container Registry.

D. Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build one container image, and tag the image with the label 'latest.' Push the image to the Container Registry.

**Answer: A**

**Timestamp: Aug. 25, 2021, 2:20 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/60563-exam-professional-cloud-architect-topic-10-question-5/)

----------------------------------------