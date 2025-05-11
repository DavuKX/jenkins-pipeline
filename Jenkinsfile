pipeline {
    agent any

    tools {
        nodejs "Node 18"
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/DavuKX/jenkins-pipeline.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to Vercel') {
            steps {
                sh '''
                    npm install -g vercel
                    vercel --prod --token=$VERCEL_TOKEN
                '''
            }
        }
    }
}
