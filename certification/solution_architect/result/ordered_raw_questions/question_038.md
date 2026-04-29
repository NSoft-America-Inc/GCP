## Exam Professional Cloud Architect topic 1 question 38 discussion

Actual exam question from

Google's
Professional Cloud Architect

Question #: 38
Topic #: 1

[All Professional Cloud Architect Questions]

You deploy your custom Java application to Google App Engine. It fails to deploy and gives you the following stack trace.

### Stack Trace
```text
java.lang.SecurityException: SHA1 digest error for com/Altostrat/CloakedServlet.class
	at com.google.appengine.runtime.Request.process-d36f818a24b8cf1d (Request.java)
	at sun.security.util.ManifestEntryVerifier.verify(ManifestEntryVerifier.java:210)
	at java.util.jar.JarVerifier.processEntry(JarVerifier.java:218)
	at java.util.jar.JarVerifier.update(JarVerifier.java:205)
	at java.util.jar.JarVerifiersVerifierStream.read(JarVerifier.java:428)
	at sun.misc.Resource.getBytes(Resource.java:124)
	at java.net.URL.ClassLoader.defineClass(URLClassLoader.java:273)
	at sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:616)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:266)
```

What should you do? 
Suggested Answer: B 🗳️ 

A. Upload missing JAR files and redeploy your application.

B. Digitally sign all of your JAR files and redeploy your application

C. Recompile the CLoakedServlet class using and MD5 hash instead of SHA1

**Answer: B**

**Timestamp: Oct. 25, 2019, 7:02 p.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/google/view/7209-exam-professional-cloud-architect-topic-1-question-38/)

----------------------------------------