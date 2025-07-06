pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "learnsphere"
        DOCKER_IMAGE_BACKEND = "sandeep1818/learnsphere-backend"
        DOCKER_IMAGE_FRONTEND = "sandeep1818/learnsphere-frontend"
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

        stage('Push Images to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    // Login to Docker Hub
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'

                    // Tag and push backend image
                    sh 'docker tag learnsphere-backend $DOCKER_IMAGE_BACKEND'
                    sh 'docker push $DOCKER_IMAGE_BACKEND'

                    // Tag and push frontend image
                    sh 'docker tag learnsphere-frontend $DOCKER_IMAGE_FRONTEND'
                    sh 'docker push $DOCKER_IMAGE_FRONTEND'

                    // Logout
                    sh 'docker logout'
                }
            }
        }
    }

    post {
        always {
            echo "✅ Pipeline finished."
        }
        failure {
            echo "❌ Pipeline failed."
        }
    }
}
