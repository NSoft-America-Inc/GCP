## Exam Professional Cloud Architect topic 1 question 101 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 101
Topic #: 1

[All Professional Cloud Architect Questions]

Your company is building a new architecture to support its data-centric business focus. You are responsible for setting up the network. Your company's mobile and web-facing applications will be deployed on-premises, and all data analysis will be conducted in GCP. The plan is to process and load 7 years of archived .csv files totaling 900 TB of data and then continue loading 10 TB of data daily. You currently have an existing 100-MB internet connection.What actions will meet your company's needs? 
Suggested Answer: B 🗳️ 

A. Compress and upload both archived files and files uploaded daily using the gsutil ג€"m option.

B. Lease a Transfer Appliance, upload archived files to it, and send it to Google to transfer archived data to Cloud Storage. Establish a connection with Google using a Dedicated Interconnect or Direct Peering connection and use it to upload files daily.

C. Lease a Transfer Appliance, upload archived files to it, and send it to Google to transfer archived data to Cloud Storage. Establish one Cloud VPN Tunnel to VPC networks over the public internet, and compress and upload files daily using the gsutil ג€"m option.

D. Lease a Transfer Appliance, upload archived files to it, and send it to Google to transfer archived data to Cloud Storage. Establish a Cloud VPN Tunnel to VPC networks over the public internet, and compress and upload files daily.

**Answer: B**

**Timestamp: Oct. 9, 2019, 6:42 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/6306-exam-professional-cloud-architect-topic-1-question-101/)

----------------------------------------