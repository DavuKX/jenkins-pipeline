pipeline {
    agent any

    environment {
        VERCEL_ORG_ID = credentials('vercel-org-id')
        VERCEL_PROJECT_ID = credentials('vercel-project-id')
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/DavuKX/jenkins-pipeline', branch: 'main'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                    vercel pull --yes --token=$VERCEL_TOKEN
                    vercel --prod --token=$VERCEL_TOKEN
                '''
            }
        }
    }
}
