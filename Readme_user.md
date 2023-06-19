## Todo next

https://vueschool.io/articles/vuejs-tutorials/how-to-structure-a-large-scale-vue-js-application/

- Hide fetch api as utils
- use DefineModel in TodoItem to avoid event boiler plate.
- pinia stores as modules
- deploy git->AWS

### For fetch hide: 
- the methods are typed, but no example of client->call.
https://dev.to/simonireilly/fetch-with-typescript-for-better-http-api-clients-2d71
- unsuccessful api calls
https://javascript.plainenglish.io/handling-unsuccessful-calls-of-fetch-api-7eef551b74c8
- fetch 
https://www.carlrippon.com/fetch-with-async-await-and-typescript/

### Create HttpClient typescript class
- Convert fetch-util to HttpClient typed class - DONE
### Check on Faker, uuid4

# Check on : Springboot-vue3 should refresh path http://localhost:8080/todo
- https://www.bezkoder.com/integrate-vue-spring-boot/
- remove history from Router
- DONE: http://localhost:8080/#/todo

# Check on: vitest on TodoCreator, ContactsFind
- https://codingpr.com/test-your-vue-3-app-with-vitest-and-vue-test-utils/
- use async in test

Check on : vite app deploy in github pages
https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane
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