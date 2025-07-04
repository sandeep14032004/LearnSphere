pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "learnsphere"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/sandeep14032004/LearnSphere.git'
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
                sh 'docker tag backend sandeep1818/learnsphere-backend'
                sh 'docker push sandeep1818/learnsphere-backend'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
