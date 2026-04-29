## Exam Professional Cloud Architect topic 1 question 4 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 4
Topic #: 1

[All Professional Cloud Architect Questions]

A news feed web service has the following code running on Google App Engine. During peak load, users report that they can see news articles they already viewed.

### Application Code (Python)
```python
import news
from flask import Flask, redirect, request
from flask.ext.api import status
from google.appengine.api import users

app = Flask(__name__)
sessions = {}

@app.route("/")
def homepage():
    user = users.get_current_user()
    if not user:
        return "Invalid login", status.HTTP_401_UNAUTHORIZED

    if user not in sessions:
        sessions[user] = {"viewed": []}

    news_articles = news.get_new_news(user, sessions[user]["viewed"])
    sessions[user]["viewed"] += [n["id"] for n in news_articles]

    return news.render(news_articles)

if __name__ == "__main__":
    app.run()
```

What is the most likely cause of this problem? 
Suggested Answer: A 🗳️ 

A. The session variable is local to just a single instance

B. The session variable is being overwritten in Cloud Datastore

C. The URL of the API needs to be modified to prevent caching

D. The HTTP Expires header needs to be set to -1 stop caching

**Answer: A**

**Timestamp: Oct. 23, 2019, 7:30 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7085-exam-professional-cloud-architect-topic-1-question-4/)

----------------------------------------