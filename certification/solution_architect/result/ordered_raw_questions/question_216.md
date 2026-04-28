## Exam Professional Cloud Architect topic 1 question 216 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 216
Topic #: 1

[All Professional Cloud Architect Questions]

You are designing a new insurance claims processing application that will be deployed on Google Kubernetes Engine (GKE) Your company’s compliance team requires a complete and non-repudiable audit trail for all administrative actions from day one. Your application must capture who deploys a new container image, who modifies the GKE cluster's configuration, and who interacts with running pods or Kubernetes secrets using kubectl. What should you do? 
Suggested Answer: C 🗳️ 

A. Enable Binary Authorization on the GKE cluster, and create a policy that requires all deployed container images to be signed by a trusted attestor.

B. Deploy a DaemonSet to every node in the GKE cluster that runs a logging agent to collect and forward all container logs to Cloud Logging.

C. Enable GKE Audit Logging to send Kubernetes API server logs to Cloud Logging, and ensure Cloud Audit Logs are enabled for the project.

D. Activate the Security Command Center Premium tier to analyze GKE logs and detect threats, vulnerabilities, and misconfigurations in real time.

**Answer: C**

**Timestamp: Dec. 22, 2025, 3:06 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/381818-exam-professional-cloud-architect-topic-1-question-216/)

----------------------------------------