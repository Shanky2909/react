pipeline {
    agent: any

    stages{
        stage('Install'){
            steps{
                sh 'npm install'
            }

        }

        stage('Test'){
            steps{
                sh 'npm run test'
            }
        }

        stage('Build'){
            sh 'npm run build'
        }
    }
}