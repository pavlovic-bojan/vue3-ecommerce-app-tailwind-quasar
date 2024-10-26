#  Quasar App (vue3-ecommerce-app-tailwind-quasar)
This repository is the result of my independent project to train certain things in VUE 3 Front End Development.

The goal of the project is to clone the design of the web store [REMIKS](https://remiks.com/) for the purpose of learning front-end development.

I spent 30 days on the realization of setup this project.

Side information: To use the application in a special environment the author accepts no responsibility if you cause damage to third parties.

## Images of project appearance
***
In the root of the project itself, there is an image folder in which you have images of how the project looks and a short 2 minutes demo.mp4 video of how the project works.

### A list of technologies used within the project
***
A list of technologies used within the project:
* [macOS Sonoma](https://support.apple.com/en-us/HT214032): macOS Sonoma Version 14.1.2 (23B92)
* [Visual Studio Code](https://code.visualstudio.com/): Version: 1.85.0 (Universal) Electron: 25.9.7 ElectronBuildId: 25551756 Chromium: 114.0.5735.289 Node.js: 18.15.0 V8: 11.4.183.29-electron.0
* [Axios](https://www.npmjs.com/package/axios): Version 1.6.3
* [json-server](https://www.npmjs.com/package/json-server): Version 4.8.3 
* [Pinia](https://www.npmjs.com/package/pinia): Version 2.0.11
* [Quasar](https://quasar.dev/): Version 2.6.0
* [Vue](https://vuejs.org/about/releases): Version 3.0.0
* [vue-router](https://router.vuejs.org/): Version 4.0.0

Feel free to copy the project from this repository into your IDEA run the project, and make sure to give your feedback.

## Collaboration
***
This is my personal project which I upgrade with new things and scenarios from time to time and I do not accept any collaboration
> Please do not change the code. 
> I am available for any questions.

#  How To Cloning and Setup Project

## Install the dependencies
```bash
yarn
# or
npm install
```
## Start api json server
```bash
cd api
json-server --watch data.json
```

## Start Project in the web browser
```bash
yarn
# or
npm run dev
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
