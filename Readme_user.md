
## Todo next

https://vueschool.io/articles/vuejs-tutorials/how-to-structure-a-large-scale-vue-js-application/

- Hide fetch api as utils
- use DefineModel in TodoItem to avoid event boiler plate.
- pinia stores as modules
- deploy git->AWS

# Check aws-amplify deploy
https://sandbox.amplifyapp.com/test/de9cdf80-25de-40e2-a71b-932bb762f22b
```sh
curl -sL https://aws-amplify.github.io/amplify-cli/install-win -o install.cmd && install.cmd
# https://ui.docs.amplify.aws/vue/getting-started/installation
npm i -S -D @aws-amplify/ui-vue aws-amplify

# Vite troubleshooting: https://ui.docs.amplify.aws/vue/getting-started/troubleshooting

# configure backend: https://ui.docs.amplify.aws/vue/connected-components/authenticator#quick-start
npm install -g @aws-amplify/cli@latest

# Setup
amplify configure

# init for this project -  This creates src/aws-exports.js
amplify init 



# Access key: AKIA5EM6TYGFNSDXCGJC
# Secret Access key: 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


#" to create a backend API and then "amplify push" to deploy everything


amplify add auth

amplify add api
amplify push

amplify update auth

http://localhost:5173/contactsfind-ui/
https://anborg.github.io/contactsfind-ui/

https://localhost:8080/
https://wdnvmhba710:8082/

http://localhost:1573/contactsfind-ui/signout/


```

### Logs: amplify configure
```sh
amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  us-east-1
Follow the instructions at
https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli

to complete the user creation in the AWS console
https://console.aws.amazon.com/iamv2/home#/users/create
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  default

Successfully set up the new user.
```
### amplify init logs
```sh
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project contactsfind
The following configuration will be applied:

Project information
| Name: contactsfind
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: vue
| Source Directory Path: src
| Distribution Directory Path: dist
| Build Command: npm.cmd run-script build
| Start Command: npm.cmd run-script serve

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use demo-frontend-app
Adding backend environment dev to AWS Amplify app: d1xygz08f36x2x

Deployment completed.
Deploying root stack contactsfind [ ====================-------------------- ] 2/4
        amplify-contactsfind-dev-1623… AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Mon Ju   
        DeploymentBucket               AWS::S3::Bucket                CREATE_IN_PROGRESS             Mon Ju   
        UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Mon Ju   
        AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Mon Ju   

? Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) »
√ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · no
Deployment state saved successfully.
√ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything
```

### logs: amplify push
```sh
amplify push
√ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬──────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name        │ Operation │ Provider plugin   │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Auth     │ contactsfindab2cf049 │ Create    │ awscloudformation │
└──────────┴──────────────────────┴───────────┴───────────────────┘
√ Are you sure you want to continue? (Y/n) · yes

Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying resources into dev environment. This will take a few minutes. ⠹
Deploying resources into dev environment. This will take a few minutes. ⠸
Deploying resources into dev environment. This will take a few minutes. ⠼
Deploying resources into dev environment. This will take a few minutes. ⠴
Deploying resources into dev environment. This will take a few minutes. ⠦
Deploying resources into dev environment. This will take a few minutes. ⠧
Deploying resources into dev environment. This will take a few minutes. ⠇
Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying root stack contactsfind [ ---------------------------------------- ] 0/2
        amplify-contactsfind-dev-1623… AWS::CloudFormation::Stack     UPDATE_IN_PROGRESS             Mon Ju
Deploying resources into dev environment. This will take a few minutes. ⠋
Deploying root stack contactsfind [ ---------------------------------------- ] 0/2
        amplify-contactsfind-dev-1623… AWS::CloudFormation::Stack     UPDATE_IN_PROGRESS             Mon Ju
Deploying resources into dev environment. This will take a few minutes. ⠙
Deploying root stack contactsfind [ ---------------------------------------- ] 0/2
        amplify-contactsfind-dev-1623… AWS::CloudFormation::Stack     UPDATE_IN_PROGRESS             Mon Ju
Deployment completed.
Deploying root stack contactsfind [ ---------------------------------------- ] 0/2
        amplify-contactsfind-dev-1623… AWS::CloudFormation::Stack     UPDATE_IN_PROGRESS             Mon Ju
        authcontactsfindab2cf049       AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Mon Ju
Deployed auth contactsfindab2cf049 [ ======================================== ] 22/22
        UserPool                       AWS::Cognito::UserPool         CREATE_COMPLETE                Mon Ju
        UserPoolClient                 AWS::Cognito::UserPoolClient   CREATE_COMPLETE                Mon Ju
        UserPoolClientWeb              AWS::Cognito::UserPoolClient   CREATE_COMPLETE                Mon Ju
        UserPoolClientRole             AWS::IAM::Role                 CREATE_COMPLETE                Mon Ju
        HostedUICustomResource         AWS::Lambda::Function          CREATE_COMPLETE                Mon Ju
        UserPoolClientLambda           AWS::Lambda::Function          CREATE_COMPLETE                Mon Ju
        HostedUIProvidersCustomResour… AWS::Lambda::Function          CREATE_COMPLETE                Mon Ju
        HostedUICustomResourcePolicy   AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        UserPoolClientLambdaPolicy     AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        HostedUIProvidersCustomResour… AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        HostedUICustomResourceLogPoli… AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        UserPoolClientLogPolicy        AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        HostedUIProvidersCustomResour… AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        HostedUICustomResourceInputs   Custom::LambdaCallout          CREATE_COMPLETE                Mon Ju
        UserPoolClientInputs           Custom::LambdaCallout          CREATE_COMPLETE                Mon Ju
        HostedUIProvidersCustomResour… Custom::LambdaCallout          CREATE_COMPLETE                Mon Ju
        IdentityPool                   AWS::Cognito::IdentityPool     CREATE_COMPLETE                Mon Ju
        OAuthCustomResource            AWS::Lambda::Function          CREATE_COMPLETE                Mon Ju
        IdentityPoolRoleMap            AWS::Cognito::IdentityPoolRol… CREATE_COMPLETE                Mon Ju
        OAuthCustomResourcePolicy      AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        OAuthCustomResourceLogPolicy   AWS::IAM::Policy               CREATE_COMPLETE                Mon Ju
        OAuthCustomResourceInputs      Custom::LambdaCallout          CREATE_COMPLETE                Mon Ju

Deployment state saved successfully.

Hosted UI Endpoint: https://contactsfindab2cf049-ab2cf049-dev.auth.us-east-1.amazoncognito.com/
Test Your Hosted UI Endpoint: https://contactsfindab2cf049-ab2cf049-dev.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=6d8h5c7n3k16sik1pbpqtrf5pa&redirect_uri=http://localhost:1573/contactsfind-ui/

```

## Check on DefineModel in TodoItem
- Goal: should avoid emit-events.

## DONE Check  on : springboot webflux HTTPS default

### DONE For fetch hide: 
- the methods are typed, but no example of client->call.
https://dev.to/simonireilly/fetch-with-typescript-for-better-http-api-clients-2d71
- unsuccessful api calls
https://javascript.plainenglish.io/handling-unsuccessful-calls-of-fetch-api-7eef551b74c8
- fetch 
https://www.carlrippon.com/fetch-with-async-await-and-typescript/

### DONE Create HttpClient typescript class
- Convert fetch-util to HttpClient typed class - DONE

### Check on Faker, uuid4

# DONE Check on : Springboot-vue3 should refresh path http://localhost:8080/todo
- https://www.bezkoder.com/integrate-vue-spring-boot/
- remove history from Router
- DONE: http://localhost:8080/#/todo

# Check on: vitest on TodoCreator, ContactsFind
- https://codingpr.com/test-your-vue-3-app-with-vitest-and-vue-test-utils/
- use async in test

## Check on : vite app deploy in github-pages DONE
https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane
- add to vite.config.js /<REPO_NAME>/ e.g 
base:"/contactsfind-ui/",
  plugins: [....

```sh
npm run build
git add dist -f
git commit -m "Adding dist"
git subtree push --prefix dist origin gh-pages
```
```sh optional
npm install gh-pages --save-dev
gh-pages -d dist
```

# Check on : yarn enable
```sh
#Package mgr for yarn, available in nodejs
corepack enable
#Updating the global Yarn version
corepack prepare yarn@stable --activate

```

### Crate project

```cmd
npm init vue@latest
Need to install the following packages:
  create-vue@3.7.1
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

√ Project name: ... contactsfind-uits
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution? » Cypress
√ Add ESLint for code quality? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes

npm i -S uid 
npm i --save-dev @iconify/vue sass
npm i -S bootstrap
<!-- npm i -S faker uuid -->
npm i -S -D vitest
```

### Setup - linting

```sh
npm init vite@latest

#Prettier - code formatter
npm install --save-dev --save-exact prettier
echo {} > .prettierrc.json

#eslint - linter for vuejs
npm install --save-dev eslint eslint-plugin-vue

echo > .eslintrc.js

# Elint-config-disabler:  prettier to take care of / override some eslint rules
npm install eslint-config-prettier --save-dev

# typescript-eslint: An ESLint plugin which provides rules for TypeScript codebases.
npm install @typescript-eslint/eslint-plugin

# @typescript-eslint/parser: A parser which allows ESLint to lint TypeScript source code.
npm install @typescript-eslint/parser

# eslint-plugin-import: Tells ESLint how to resolve imports.
# eslint-plugin-jsx-a11y: Checks for accessiblity issues.
npm install eslint-plugin-import eslint-plugin-jsx-a11y
# Optional - eslint errors in borwser
npm install vite-plugin-eslint --save-dev

```

### Linting
```sh
npm run lint
```