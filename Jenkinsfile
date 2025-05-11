pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token') 
        VERCEL_ORG_ID = 'your-org-id'              
        VERCEL_PROJECT_ID = 'your-project-id'      
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your/repo.git', branch: 'main'
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
