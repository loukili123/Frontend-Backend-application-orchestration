pipeline {
    agent any

    stages {
		stage('Testing api') {
          steps {
            bat '''
				CD server
				npm install
			'''
			bat '''
				CD server
				npm test
			'''
          }
        }
		stage('Creating release') {
          steps {

			withCredentials([usernamePassword(credentialsId: '99838eeb-727b-4918-a323-a392fd8b532a', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
				bat ''' git checkout release 
						git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/loukili123/Frontend-Backend-application-orchestration.git
					'''
			}

          }
        }
    } 
}