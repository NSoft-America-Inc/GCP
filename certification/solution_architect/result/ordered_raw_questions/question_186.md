## Exam Professional Cloud Architect topic 1 question 186 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 186
Topic #: 1

[All Professional Cloud Architect Questions]

Your company uses Google Kubernetes Engine (GKE) as a platform for all workloads. Your company has a single large GKE cluster that contains batch, stateful, and stateless workloads. The GKE cluster is configured with a single node pool with 200 nodes. Your company needs to reduce the cost of this cluster but does not want to compromise availability. What should you do? 
Suggested Answer: C 🗳️ 

A. Create a second GKE cluster for the batch workloads only. Allocate the 200 original nodes across both clusters.

B. Configure CPU and memory limits on the namespaces in the cluster. Configure all Pods to have a CPU and memory limits.

C. Configure a HorizontalPodAutoscaler for all stateless workloads and for all compatible stateful workloads. Configure the cluster to use node auto scaling.

D. Change the node pool to use preemptible VMs.

**Answer: C**

**Timestamp: Sept. 3, 2022, 11:50 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/79736-exam-professional-cloud-architect-topic-1-question-186/)

----------------------------------------