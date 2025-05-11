pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token') 
        VERCEL_ORG_ID = team_9EhzQMuj28UnnaXfcPoss0Pq
        VERCEL_PROJECT_ID = prj_R1EhLYkMbpit67rCbKujwB0mHN3k
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/DavuKX/jenkins-pipeline', branch: 'main'
            }
        }

        stage('Install Vercel CLI') {
            steps {
                sh 'npm install -g vercel'
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
