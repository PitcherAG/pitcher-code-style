# pitcher-code-style
Code style guide for JavaScript &amp; Vue projects, eslint rule package

#### npm package name: @pitcher/eslint-config  
  

## Using Eslint Configuration
0. Make sure you have installed: 
    - `eslint` version `>=7.14.0`
    - `eslint-plugin-vue` version `>=7.1.0`
1. Install package with: `npm install @pitcher/eslint-config`
2. In your `.eslintrc.js` or `.eslintrc.json` file add
    - for Vue projects: `extends: ["@pitcher"]` or `extends: ["@pitcher/eslint-config/vue"]`
    - for plain JavaScript projects: `extends: ["@pitcher/eslint-config/javascript"]`
  
**NOTE:** By default the package exports **Vue** configuration. So using `extends: ["@pitcher"]` would work in most cases even for plain JavaScript projects.

## Code Style

### Project structure

### Naming Conventions for Components/Views

### JavaScript

### CSS


## To do
- [x] Add configuration files, split Vue and plain JavaScript
- [ ] Add code style rules for JS, Vue, CSS under `README.md` with visual examples
- [ ] Add rules for component naming, vue essentials with visual examples


