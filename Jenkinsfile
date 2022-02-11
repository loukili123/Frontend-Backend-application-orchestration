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
				bat ''' git checkout dev
						git tag -a tagName -m "coco"
						git merge dev
						git commit -am "Merged dev branch to master"
						git push origin master
					'''
			}

          }
        }
    } 
}