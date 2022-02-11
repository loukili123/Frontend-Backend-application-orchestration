pipeline {
    agent any

    stages {
        stage('Building and running docker images') {
          steps {
            bat "docker-compose build -d"
          }
        }
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
		stage('Running Docker image') {
          steps {
            bat "docker-compose up -d"
          }
        }
		stage('Creating release') {
          steps {

			withCredentials([usernamePassword(credentialsId: '99838eeb-727b-4918-a323-a392fd8b532a', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
				bat'''
					git checkout dev
					git tag this-very-version
					git push origin this-very-version
				'''
			}

          }
        }
    } 
}