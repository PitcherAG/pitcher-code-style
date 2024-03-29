# pitcher-code-style

Code style guide for JavaScript &amp; Vue projects, eslint rule package

#### npm package name: @pitcher/eslint-config

## Table Of Contents

- [Using Eslint Configuration](#eslint-config)
- [Using Eslint Configuration with ES5](#eslint-config-es5)
- [IDE Configurations](#ide-config)
  - [VS Code](#ide-config)
  - [IntelliJ](#ide-config)
- [Code Style](#code-style)
  - [Project Structure](#project-structure)
  - [Naming Conventions](#naming-conventions)
  - [Vue Code Style](#vue-code-style)
  - [JS Code Style](#js-code-style)
  - [CSS Code Style](#css-code-style)

<div id="eslint-config" />

## Using Eslint Configuration

There are multiple ways to apply pitcher-code-style to your project.

### Option 1: Automatic installation for Vue projects

If you want to apply ESLint configuration to a Vue project, this way might be the easiest way for you.

> **NOTE:** If your project is not a Vue project, this option will **NOT** work.

#### Steps

1. Open command line in the root of your project
2. Run `vue add @pitcher/pitcherify`
3. Check `code-style - Pitcher ESLint config` option with space, press Enter
4. It will automatically install all needed packages and create configuration files

### Option 2: Manual installation

This option might consume a bit more time than Option 1, but you have freedom to apply these settings to plain JavaScript projects as well.

#### Steps

0. Make sure you have installed:
   - `eslint` version `>=7.14.0`
   - `prettier` version `>=1.19.1` (works with 2+ as well)
   - `babel-eslint` version `>=10.1.0"`
   - `eslint-plugin-vue` version `>=7.8.0`
   - `eslint-plugin-prettier` version `>=3.1.4`
   - `@vue/eslint-config-prettier` version `>=6.0.0`
1. Install package with: `npm install -D @pitcher/eslint-config`
2. In your `.eslintrc.js` or `.eslintrc.json` file add
   - for Vue projects: replace extends with `extends: ["@pitcher"]` or `extends: ["@pitcher/eslint-config/vue"]`
   - for plain JavaScript projects: replace extends with `extends: ["@pitcher/eslint-config/javascript"]`
   - for using essential rules only: replace extends with `extends: ["@pitcher/eslint-config/essential"]`
   - for ES5 based projects (without Vue) check the instructions [here](#eslint-config-es5)
3. Replace the content of `prettier.config.js` with

```js
module.exports = require('@pitcher/eslint-config/prettier.config')
```

> **NOTE:** By default the package exports **Vue** configuration. So using `extends: ["@pitcher"]` would work in most cases even for plain JavaScript projects.

#### Command to install

```
npm install -D eslint@7.14.0 prettier@1.19.1 babel-eslint@10.1.0 eslint-plugin-vue@7.8.0 eslint-plugin-prettier@3.1.4 @vue/eslint-config-prettier@6.0.0
```

#### Example .eslintrc.js file

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@pitcher'],
  parserOptions: {
    parser: 'babel-eslint',
  },
}
```

#### Example prettier.config.js file

```js
module.exports = require('@pitcher/eslint-config/prettier.config')
```

<br />


<div id="eslint-config-es5" />

## Using Eslint Configuration with ES5

Pitcher Code Style package even includes an ESLint & Prettier configuration for ES5 projects. Installation and usage of the configuration differs a little bit than ES6 based projects.

### Installation

To use the ESLint configuration with your ES5 based projects, follow the steps below:

1. Open command line in the root of your project
2. If your project does not have `package.json` file, create it with the command below first:

```bash
npm init --yes
```

3. Run the command below:

```
npm install -D eslint@7.14.0 prettier@1.19.1 @pitcher/eslint-config eslint-plugin-prettier@3.1.4
```

4. Create a file named `.eslintrc.js` in your project root and copy the code below and paste into the new created file

```js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['prettier'],
  extends: ['@pitcher/eslint-config/es5'],
  // file/folder names to ignore linting
  ignorePatterns: ['**/*.min.js', '**/bootstrap*', '**/jquery*', '**/kendo*', 'node_modules'],
}
```

5. Create a file named `prettier.config.json` in your project root and copy the code below and paste into the new created file

```js
module.exports = require('@pitcher/eslint-config/prettier.config.es5')
```

6. Add the script below to `"scripts"` section in your `package.json`, and add the file/folder path you want to lint
```json
"scripts": {
  "lint": "eslint YOUR_FILE_PATH_TO_LINT --fix"
},
```

#### Linting path examples:
- `eslint src/js/pitcher.js` - lints only `pitcher.js` file
- `eslint src/js/` - lints everyting under `src/js` folder
- `eslint src/**/*.js` - lints all the `*.js` files that is under `src` folder

<br />

> TIP
If you dont want ESLint to fix the errors/warnings automatically but just to see the current code problems you can use `--fix-dry-run` argument to execute a dry run.

<br />

---

<br />
  
<div id="ide-config" />

## IDE Configurations

### VSCode

To use pre-defined VSCode settings/extensions/snippets:

1. Download [Settings Sync extension](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) in VSCode
2. Fork the gist [here](https://gist.github.com/elibolonur/65543882140d65ff8d5fce366f8a2996)
3. Copy forked Gist ID (found in browser url after forking, remember it should be your gist, not the one you forked!)
4. Add it to Settings Sync settings to download the settings (cmd + shift + P in VS code, write Sync: Download, the download option should appear)
5. After download, check your VSCode settings (open VSCode settings as json) to see if the Gist ID is correct. It might be uncorrect as after the download it might still have the ID before the fork.

### IntelliJ

To use pre-defined IntelliJ code style configuration:

1. Use `config/code-style.jetbrains.xml` file
2. Follow the guide [here](https://www.jetbrains.com/help/idea/copying-code-style-settings.html) to import settings

<br />

---

<br />

<div id="code-style" />

## Code Style

Style rules that are presented here are based on best-practices in JavaScript ecosystem. Most of the rules here are enforced through eslint and it is strongly recommended to follow. Some of the rules might not apply depending on your project size.

<div id="project-structure" />

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

<div id="naming-conventions" />

### Naming Conventions for Components/Views and structure

#### Components

- File names in general (.vue, .js, .html etc.), should be written in **PascalCase** or **camelCase**
- Every component should always contain `name` property written in **PascalCase**
- If a component has more than 1 file, they should be contained in the same folder e.g. `components/list` folder contains `List.vue`, `ListItem.vue`, `ListHeader.vue`

**Example**

```
├─ components/
│  ├── Card.vue
│  ├── Footer.vue
│  └── List/
│      ├── List.vue
│      ├── ListHeader.vue
│      └── ListItem.vue
```

#### Views

- File name should be written in **PascalCase** or **camelCase** and should contain `.view` suffix e.g. `AppLogin.view.vue`, `AppList.view.vue`
- Every view should always contain `name` property written in **PascalCase** e.g. `name: 'AppLogin'`
- Depending on your project size, if you have your views and routes next to each other, they should be contained in a catalog e.g. `views/AppLogin` folder contains `AppLogin.view.vue` and `AppLogin.route.js`

**Example (small projects)**

```
├─ views/
│  ├── Home.view.vue
│  ├── Login.view.vue
│  └── etc.
```

**Example (mid/large projects, where views and their routes are contained together)**

```
├─ views/
│  │
│  ├── home
│  │   ├── Home.view.vue
│  │   └── Home.router.js
│  │
│  ├── login
│  │   ├── Login.view.vue
│  │   └── Login.router.js
│  │
│  └── etc.
```

<div id="vue-code-style" />

### Vue

#### ESLint rules

All Vue related eslint rules are provided by [eslint-plugin-vue](https://eslint.vuejs.org/rules/). We take `plugin:vue/vue3-strongly-recommended` set as a base and on the top of it we have a couple of custom rules. These rules exist in `vue.js`. We also have `prettier` plugin installed which helps us to lint/format vue files.

#### Using shorthands

Use always shorthands when using template bindings. The reason for this is to keep template part clean and readable

**Closing tags**
Use always self closing tag when applicable

```html
<!-- ✗ BAD -->
<i class="fa fa-times"></i>

<!-- ✓ GOOD -->
<i class="fa fa-times" />
```

**Props/Data**

```html
<!-- ✗ BAD -->
<input v-bind:value="value" />

<!-- ✓ GOOD -->
<input :value="value" />
```

**Events**

```html
<!-- ✗ BAD -->
<input v-on:click="handleClick" />

<!-- ✓ GOOD -->
<input @click="handleClick" />
```

**Named slots**

```html
<!-- ✗ BAD -->
<template v-slot:header></template>

<!-- ✓ GOOD -->
<template #header></template>
```

<div id="js-code-style" />

### JavaScript

To be updated

#### ESLint rules

For JavaScript linting we do use `eslint:recommended` set as a base. A couple of custom rules on the top of recommended set exist in `javascript.js`. We also have `prettier` plugin installed which helps us to lint/format javascript files.

<div id="css-code-style" />

### CSS

#### Methodology

When applicable/needed, you can use BEM methodology to get a clear understanding of your html. If BEM is not applicable/needed, do follow the naming conventions below.

#### Naming rules

It is required to use `kebab-case` when adding classes to your elements. This helps us to separate variables and css classes when reading the code, also provides us more readable/maintainable code on scss/less part.

**Example**

```html
<!-- ✗ BAD -->
<template>
  <div class="testParent">
    <span class="testChild"></span>
  </div>
</template>

<style lang="scss">
  .testParent {
    background-color: red;
  }
  .testChild {
    color: white;
  }
</style>

<!-- ✓ GOOD -->
<template>
  <div class="test-parent">
    <span class="test-child"></span>
  </div>
</template>

<style lang="scss">
  .test-parent {
    background-color: red;

    .test-child {
      color: white;
    }
  }
</style>

<!-- ✓✓ EVEN BETTER with BEM -->
<template>
  <div class="test">
    <span class="test__header"></span>
    <span class="test__subheader"></span>
  </div>
</template>

<style lang="scss">
  .test {
    background-color: red;

    &__header {
      color: white;
    }

    &__subheader {
      color: grey;
    }
  }
</style>
```

## To do

- [ ] Add code style rules for JS, Vue, CSS under `README.md` with visual examples
