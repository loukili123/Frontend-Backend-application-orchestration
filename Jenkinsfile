pipeline {
    agent any

    stages {
        stage('satrt deploying') {
          steps {
            bat "docker-compose up --build"
          }
        }
    } 
}