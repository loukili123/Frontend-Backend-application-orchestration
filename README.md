Instructions
Create a simple web NodeJS application consisting of a frontend and a backend. The application simply counts the number of times the page has been accessed by the current user.
The application is to be Dockerized, so that requires 2 docker containers that need to communicate with each other: one for the frontend and one for the backend. Remember that you can use the available Node docker image on the Docker hub. Since the 2 containers need to communicate, make sure to use the Docker Compose to facilitate deployment.
The code must also contain an integration test, that tests the communication between the frontend and backend. This test will be later ran on release.
Code Assistance (click on the code if you want to copy it)
To save the page number using expressJS without needing a database connection, initialize your nodeJS application as follows:
 
And to use it in responding to user requests:
 
Version Control
Create a github repo, and save the application there. Make sure to add the Dockerfile and docker-compose.yml files, in addition to the Jenkinsfile (for the steps below). Create a dev branch, from which all the code in development will be placed. Also create a release branch, to which the code to be tested will be added when building and releasing (in the next step).
Orchestration
The application is to be orchestrated using Jenkins: the dockerization, testing and releasing processes.  Write the necessary Groovy code in a Jenkinsfile to create a pipeline that organizes the Docker image creation, building, and testing of your application. Ideally, we would want Jenkins to create a release branch, save the code there, and then run the tests. But due to the limitations currently in place, Your pipeline is to simply build the docker images, run the test, and then put the code on the release branch. The pipeline ends when the tests have passed, and the code have been placed on the release branch after.

Your project deliverable is in the form of a link to your github repo, and a screenshot of your Jenkins build configurations, the build success screen, and the console output on build success.
