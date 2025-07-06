pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "learnsphere"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/sandeep14032004/LearnSphere.git'
            }
        }

        stage('Docker Compose Build') {
            steps {
                sh 'docker-compose -f docker-compose.yml build'
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Push Images') {
            steps {
                // Tag actual built images
                sh 'docker tag learnsphere-backend sandeep1818/learnsphere-backend'
                sh 'docker push sandeep1818/learnsphere-backend'

                sh 'docker tag learnsphere-frontend sandeep1818/learnsphere-frontend'
                sh 'docker push sandeep1818/learnsphere-frontend'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
