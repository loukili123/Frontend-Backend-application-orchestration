pipeline {
    agent any

    stages {
        stage('Building and running docker images') {
          steps {
            bat "docker-compose up --build -d"
          }
        }
		stage('Building and running Docker image') {
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
            echo "comming"
          }
        }
    } 
}