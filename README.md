# Bank-of-React Project
This is the main repository for the Bank of React Project.

## Project-Overview



## Team Members
- **Abdulla Saleh** - GitHub: @Galactic-Avenger
- **Khandakar Wahiduzzaman** - GitHub: @KhandakarWahiduzzaman
- **Leo Chen** - GitHub: @lc6003

  

### Live Link 
[Website link](https://Galactic-Avenger.github.io/Bank-of-React/)





----------
### 1. Use the following commands to install dependencies and run the application

- First, run this command to install dependencies: ```npm install```
- Next, run this command to start the React application: ```npm start```

**Note: This application uses React Router version 5 and should be compatible with later versions of React Router. If you encounter problems with a later version of React Router, you can specifically install React Router version 5 using the following commands:** 
```
npm install react-router-dom@5.3.0 react-router@5.2.1
npm install react-scripts@latest --legacy-peer-deps 
``` 
**Afterward, you can run the ```npm start``` command to start the React application.**

----------
### 2. Set up and deploy a React application to GitHub Pages

#### 1. Create a React Application
1. If you don't already have an existing React application on your local machine, you can create a new React application (e.g., "my-react-app").
    Optionally, you can clone the "bank-of-react-starter-code" repository to your local machine and re-name it "my-react-app."
2. Start a terminal (e.g., Git Bash) on your local machine.
3. Go to the "my-react-app" folder.
4. All the following steps are performed inside the "my-react-app" folder. 

#### 2. Add "basename" to Router Tag in "App.js" File
1. In the `App.js` file, located inside the `src` folder, make sure that you add the `basename` path in the `<Router>` tag using the format: `<Router basename="/[repository name]">`
2. For the "my-react-app" application, it should be: `<Router basename="/my-react-app">`

#### 3. Install "gh-pages" Package
1. Install the `gh-pages` package on your local machine by entering the following command in the terminal: `npm install gh-pages --save-dev`
2. The installation automatically adds the `gh-pages` version number in the "dependencies" section of the `package.json` file.

#### 4. Add "homepage" Property in "package.json" File
1. In the `package.json` file, add a `homepage` property using the format: `https://[your GitHub username].github.io/[repository name]`
2. For the "my-react-app" application, it should be:`"homepage": "https://[your GitHub username].github.io/my-react-app/",` 
    ```
    {
    "name": "bank-of-react",
    "version": "0.1.0",
    "homepage": "https://[your GitHub username].github.io/my-react-app/",
    ...
    }
    ```

#### 5. Add Deployment Scripts in "package.json" File
1. In the `package.json` file, add `predeploy` and `deploy` properties to the "scripts" section as follows:
    ```
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    ...
    ```

#### 6. Add "remote" to Local Repository Pointing to GitHub Repository
1. Add a `remote` to the local repository by entering the following command in the terminal, using the format: `git remote add origin https://github.com/[your GitHub username]/[repository name].git`
2. For the "my-react-app" application, it should be:`git remote add origin https://github.com/[your GitHub username]/my-react-app.git` 

#### 7. Deploy React Application to GitHub Pages
1. Deploy the "my-react-app" application to GitHub Pages by entering the following command in the terminal: `npm run deploy`
2. Open a web browser, go to the following address to see your React application on GitHub Pages: `https://[your GitHub username].github.io/my-react-app/` 

<br/>

## Common Errors You May Encounter
### Error: ERR_OSSL_EVP_UNSUPPORTED
This error indicates that your application uses an algorithm or key size not supported by OpenSSL 3.0.
#### Solution: 
1. If you use *Windows or Linux*, in the `package.json` file, set the "scripts" attributes as follows:

```
  "scripts": {
  "start": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start", 
  "build": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build", 
  ...
    },
```

2. If you use *Mac OSX or Linux*, include the following command in the `~/.bash_profile` or `~/.bashrc` file.

```
  export NODE_OPTIONS=--openssl-legacy-provider
```

### Error: React Router Compatibility Issues When Running "npm start" Command
You may encounter React Router compatibility issues when running the `npm start` command because this application uses React Router version 5. 
#### Solution: 
Install React Router version 5 and run the application using the following commands in the specified order: 

```
  npm install
  npm install react-router-dom@5.3.0 react-router@5.2.1 
  npm install react-scripts@latest --legacy-peer-deps 
  npm start
```

