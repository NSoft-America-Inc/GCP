## Exam Professional Cloud Architect topic 1 question 260 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 260
Topic #: 1

[All Professional Cloud Architect Questions]

A large, multinational corporation is migrating to Google Cloud. The company has several distinct business units: Finance, Marketing, and Research and Development (R&D). The central security team has mandated governance requirements for each business unit:• Finance: Must be restricted to deploying resources only in specific, compliant regions (us-central1 and europe-west2). Access to their projects must be tightly controlled by a dedicated finance-admins group.• Marketing: Needs separate environments for production and development, with different teams managing each environment.• R&D: Requires maximum flexibility to experiment with new services but must be completely isolated to prevent any impact on production systems.• Global Auditing: A central compliance team requires read-only access to view all resources across the entire company for auditing purposes.You need to design a resource hierarchy that enforces these security policies at scale according to the Google Cloud Well-Architected Framework while providing the correct level of autonomy for each business unit. What should you do? 
Suggested Answer: A 🗳️ 

A. Create a folder for each department under the root Organization node. Apply the resource location Organization Policy on the Finance folder. Within the Marketing folder, create separate projects for mktg-prod and mktg-dev. Grant the compliance team the roles/viewer role at the Organization level.

B. Place all projects directly under the Organization node. Use network tags and service accounts to enforce security boundaries between the different department workloads. Apply the resource location Organization Policy on the Finance project.

C. Create separate Google Cloud Organizations for each department (Finance, Marketing, and R&D). Grant the compliance team the roles/viewer role for each organization.

D. Create a single project for each department. Apply the resource location policy directly to the Finance project. Grant the compliance team the roles/browser role on each project individually.

**Answer: A**

**Timestamp: Feb. 12, 2026, 3:54 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/383628-exam-professional-cloud-architect-topic-1-question-260/)

----------------------------------------