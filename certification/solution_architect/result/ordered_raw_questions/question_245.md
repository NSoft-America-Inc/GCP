## Exam Professional Cloud Architect topic 1 question 254 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 254
Topic #: 1

[All Professional Cloud Architect Questions]

You are designing a central, automated infrastructure deployment process for your organization using Terraform and Cloud Build. The security team prohibits the use of long-lived, static service account keys in any CI/CD pipeline. Additionally, while developers can propose infrastructure changes for peer review, they must not have permissions to directly apply changes in the production project. You need to design a secure and automated workflow for applying Terraform changes that meets the security team's requirements and ensures proper governance. What should you do? 
Suggested Answer: B 🗳️ 

A. Configure the Cloud Build pipeline to use service account impersonation. Set up a trigger that automatically runs terraform apply when a pull request is merged.

B. Use service account impersonation in Cloud Build. Configure the pipeline to run terraform plan on pull requests, and require manual approval before running terraform apply.

C. Configure the pipeline to only run terraform plan. After a pull request is approved, have an authorized developer run terraform apply from a secured workstation.

D. Create a privileged service account and store its JSON key in Secret Manager. Configure the Cloud Build pipeline to fetch this key during execution to authenticate Terraform.

**Answer: B**

**Timestamp: Feb. 12, 2026, 3:54 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/383629-exam-professional-cloud-architect-topic-1-question-254/)

----------------------------------------