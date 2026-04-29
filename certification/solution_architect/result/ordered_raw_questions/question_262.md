## Exam Professional Cloud Architect topic 3 question 2 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 2
Topic #: 3

[All Professional Cloud Architect Questions]

For this question, refer to the Helicopter Racing League (HRL) case study. Recently HRL started a new regional racing league in Cape Town, South Africa. In an effort to give customers in Cape Town a better user experience, HRL has partnered with the Content Delivery Network provider, Fastly. HRL needs to allow traffic coming from all of the Fastly IP address ranges into their Virtual Private Cloud network (VPC network). You are a member of the HRL security team and you need to configure the update that will allow only the Fastly IP address ranges through the External HTTP(S) load balancer. Which command should you use?

### Options
**A.**
```bash
gcloud compute security-policies rules update 1000 \
  --security-policy from-fastly \
  --src-ip-ranges * \
  --action "allow"
```

**B.**
```bash
gcloud compute firewall rules update sourceiplist-fastly \
  --priority 1000 \
  --allow tcp:443
```

**C.**
```bash
gcloud compute firewall rules update hlr-policy \
  --priority 1000 \
  --target-tags=sourceiplist-fastly \
  --allow tcp:443
```

**D.**
```bash
gcloud compute security-policies rules update 1000 \
  --security-policy hlr-policy \
  --expression "evaluatePreconfiguredExpr('sourceiplist-fastly')" \
  --action "allow"
``` 
Suggested Answer: A Reference:https://cloud.google.com/load-balancing/docs/https 

**Answer: A**

**Timestamp: Dec. 28, 2021, 8:14 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/68709-exam-professional-cloud-architect-topic-3-question-2/)

----------------------------------------