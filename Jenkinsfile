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
            bat '''
			git checkout dev
			git pull
			git push origin dev:release
			'''
          }
        }
    } 
}