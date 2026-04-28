## Exam Professional Cloud Architect topic 1 question 190 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 190
Topic #: 1

[All Professional Cloud Architect Questions]

You have a Compute Engine application that you want to autoscale when total memory usage exceeds 80%. You have installed the Cloud Monitoring agent and configured the autoscaling policy as follows:✑ Metric identifier: agent.googleapis.com/memory/percent_used✑ Filter: metric.label.state = 'used'✑ Target utilization level: 80✑ Target type: GAUGEYou observe that the application does not scale under high load. You want to resolve this. What should you do? 
Suggested Answer: C 🗳️ 

A. Change the Target type to DELTA_PER_MINUTE.

B. Change the Metric identifier to agent.googleapis.com/memory/bytes_used.

C. Change the filter to metric.label.state = 'used' AND metric.label.state = 'buffered' AND metric.label.state = 'cached' AND metric.label.state = 'slab'.

D. Change the filter to metric.label.state = 'free' and the Target utilization to 20.

**Answer: C**

**Timestamp: Sept. 4, 2022, 12:59 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/80040-exam-professional-cloud-architect-topic-1-question-190/)

----------------------------------------