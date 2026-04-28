## Exam Professional Cloud Architect topic 1 question 167 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 167
Topic #: 1

[All Professional Cloud Architect Questions]

You want to enable your running Google Kubernetes Engine cluster to scale as demand for your application changes.What should you do? 
Suggested Answer: C 🗳️ 

A. Add additional nodes to your Kubernetes Engine cluster using the following command: gcloud container clusters resize CLUSTER_Name ג€" -size 10

B. Add a tag to the instances in the cluster with the following command: gcloud compute instances add-tags INSTANCE - -tags enable- autoscaling max-nodes-10

C. Update the existing Kubernetes Engine cluster with the following command: gcloud alpha container clusters update mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10

D. Create a new Kubernetes Engine cluster with the following command: gcloud alpha container clusters create mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10 and redeploy your application

**Answer: C**

**Timestamp: Oct. 23, 2019, 3:15 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7073-exam-professional-cloud-architect-topic-1-question-167/)

----------------------------------------