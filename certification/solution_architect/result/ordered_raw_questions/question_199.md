## Exam Professional Cloud Architect topic 1 question 199 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 199
Topic #: 1

[All Professional Cloud Architect Questions]

You have a Compute Engine application that you want to autoscale when total memory usage exceeds 80%. You have installed the Cloud Monitoring agent and configured the autoscaling policy as follows:

### Autoscaling Configuration
*   **Metric identifier:** `agent.googleapis.com/memory/percent_used`
*   **Filter:** `metric.label.state = 'used'`
*   **Target utilization level:** `80`
*   **Target type:** `GAUGE`

You observe that the application does not scale under high load. You want to resolve this. What should you do? 
Suggested Answer: C 🗳️ 

A. Change the Target type to DELTA_PER_MINUTE.

B. Change the Metric identifier to agent.googleapis.com/memory/bytes_used.

C. Change the filter to metric.label.state = ‘used’.

D. Change the filter to metric.label.state = ‘free’ and the Target utilization to 20.

**Answer: C**

**Timestamp: Aug. 27, 2024, 7:09 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/146572-exam-professional-cloud-architect-topic-1-question-199/)

----------------------------------------