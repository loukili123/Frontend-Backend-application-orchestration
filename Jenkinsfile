pipeline {
    agent any

    stages {
		stage('Creating release') {
          steps {

			withCredentials([usernamePassword(credentialsId: '99838eeb-727b-4918-a323-a392fd8b532a', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
				echo "username is $GIT_PASSWORD"
				echo "username is $GIT_USERNAME"
			}

          }
        }
    } 
}