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
            bat """
            cd ${server} 
			""".stripIndent().trim()
			bat "npm install"
			bat "npm test"
          }
        }
		stage('Creating release') {
          steps {
            echo "comming"
          }
        }
    } 
}