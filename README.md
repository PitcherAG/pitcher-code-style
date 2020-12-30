# pitcher-code-style
Code style guide for JavaScript &amp; Vue projects, eslint rule package

#### npm package name: @pitcher/eslint-config  
  

## Using Eslint Configuration
0. Make sure you have installed: 
    - `eslint` version `>=7.14.0`
    - `prettier` version `>=1.19.1` (works with 2+ as well)
    - `babel-eslint` version `>=10.1.0"`
    - `eslint-plugin-vue` version `>=7.1.0`
    - `eslint-plugin-prettier` version `>=3.1.4`
    - `@vue/eslint-config-prettier` version `>=6.0.0`
1. Install package with: `npm install -D @pitcher/eslint-config`
2. In your `.eslintrc.js` or `.eslintrc.json` file add
    - for Vue projects: `extends: ["@pitcher"]` or `extends: ["@pitcher/eslint-config/vue"]`
    - for plain JavaScript projects: `extends: ["@pitcher/eslint-config/javascript"]`
3. Delete `prettier.config.js` if you have it in your project as it is already included in pitcher eslint config
  
**NOTE:** By default the package exports **Vue** configuration. So using `extends: ["@pitcher"]` would work in most cases even for plain JavaScript projects. 

#### Command to install
```
npm install -D eslint@7.14.0 prettier@1.19.1 babel-eslint@10.1.0 eslint-plugin-vue@7.1.0 eslint-plugin-prettier@3.1.4 @vue/eslint-config-prettier@6.0.0
```
 
#### Example .eslintrc.js file
```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@pitcher'],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
```

## IDE Configurations

### VSCode
To use pre-defined VSCode settings/extensions/snippets: 
1. Download [Settings Sync extension](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) in VSCode
2. Fork the gist [here](https://gist.github.com/elibolonur/65543882140d65ff8d5fce366f8a2996)
3. Copy forked Gist ID (found in browser url after forking)
4. Use it in Settings Sync settings to download the settings
5. After download, check your VSCode settings (open VSCode settings as json) to see if the Gist ID is correct. It might be uncorrect as after the download it might still have the ID before the fork.

## Code Style
Style rules that are presented here are based on best-practices in JavaScript ecosystem. Most of the rules here are enforced through eslint and it is strongly recommended to follow. Some of the rules might not apply depending on your project size. 

### Project structure
```
├── locale/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── store/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── .env
├── gettext.config.js
├── ti-web-config.json
```

#### Details about files and folder
- **locale/** ─ contains po translation files that are generated with `gettext`
- **public/** ─ public folder that contains `index.html` etc. JS/CSS files are injected to `index.html` automatically when you build your project
- **assets** ─ where you put any assets that are imported into your components
- **components** ─ all the components of the projects that are **NOT** the main views
- **router** ─ all the routes of your project. If your project is large, you might consider to keep your routes under same folder with its view
- **store** ─ where Vuex or any other state management related stuff is kept. 
- **views** ─ to make the project faster to read we separate the components that are designed as a page/routed, and put them in this folder. The components that are routed are more than a component since they represent pages and they have routes.
- **App.vue** ─ root component of your vue application
- **main.js** ─ starting point of your application
- **.env** ─ environment variables, you can separate your env variables with .env.development .env.production etc.
- **gettext.config.js** ─ configuration file for `gettext`
- **ti-web-config.json** ─ configuration file for `ti-web`. This file is used to fetch local db & simulate ti environment to be able to run the project on a browser

### Naming Conventions for Components/Views and structure
#### Components
- File name should be written in **kebab-case**
- Every component should always contain `name` property written in **kebab-case**
- If a component has more than 1 file, they should be contained in the same folder e.g. `components/list` folder contains `list.vue`, `list-item.vue`, `list-header.vue`

** Example **
```
├─ components/
│  ├── card.vue
│  ├── footer.vue
│  └── list/
│      ├── list.vue
│      ├── list-header.vue
│      └── list-item.vue
```

#### Views
- File name should be written in **kebab-case** and should contain `.view` suffix e.g. `app-login.view.vue`, `app-list.view.vue`
- Every view should always contain `name` property written in **kebab-case** e.g. `name: 'app-login'`
- Depending on your project size, if you have your views and routes next to each other, they should be contained in a catalog e.g. `views/app-login` folder contains `app-login.view.vue` and `app-login.route.js`

**Example (small projects)**
```
├─ views/
│  ├── home.view.vue
│  ├── login.view.vue
│  └── etc.
```

**Example (mid/large projects, where views and their routes are contained together)**
```
├─ views/
│  │
│  ├── home
│  │   ├── home.view.vue
│  │   └── home.router.js
│  │
│  ├── login
│  │   ├── login.view.vue
│  │   └── login.router.js
│  │
│  └── etc.
```


### JavaScript

### CSS


## To do
- [x] Add configuration files, split Vue and plain JavaScript
- [ ] Add IDE specific configurations (VSCode, IntelliJ)
- [ ] Add code style rules for JS, Vue, CSS under `README.md` with visual examples
- [ ] Add rules for component naming, vue essentials with visual examples


