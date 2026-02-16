pipeline{
 agent any
 triggers{
    pollSCM('* * * * *')
 }
 stages{
    stage('checkout'){
        steps{
         git url: 'https://github.com/Naresh1770/nodejs-cicd-app.git',
             branch: 'main'
        }
    }
    stage('install dependencies'){
        steps{
            sh 'npm install'
        }
    }
     stage('Run tests'){
        steps{
            sh 'npm test'
        }
    }
     stage('Build docker image'){
        steps{
            sh 'docker image build -t nodejs:latest'
        }
    }
     stage('deploy'){
        steps{
            sh '''
           docker rm -f nodejs || true
           docker run -d -p 3000:3000 --name nodejs-cicd nodejs:latest
            '''
        }
    }
 }
   post{
        success{
            echo 'Nodejs-cicd Pipeline is Completed successfully '
        }
        failure{
            echo 'Pipeline failed'
        }
    }
 }