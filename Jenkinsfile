pipeline{
 agent any
 triggers{
    pollSCM('* * * * *')
 }
 tools {
    nodejs "Node18"
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
            sh 'docker image build -t nodejs:latest .'
        }
    }
     stage('deploy'){
        steps{
            sh '''
           docker rm -f nodejs-cicd || true
           docker run -d -p 3000:3000 --name nodejs-cicd nodejs:latest
            '''
        }
    }
    stage('Upload Artifact to s3'){
        steps{
            sh '/usr/local/bin/aws s3 cp app.zip s3://naresh-node-bucket/'
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