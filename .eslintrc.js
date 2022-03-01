// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: [
//     'plugin:vue/essential',
//     '@vue/standard'
//   ],
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
//   }
// }
module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": "plugin:vue/essential",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "parser":'babel-eslint',
  },
  "plugins": [
      "vue"
  ],
  "rules": {
      "generator-star-spacing": "off",
      "no-tabs":"off",
      "no-unused-vars":"off",
      "no-console":"off",
      "no-irregular-whitespace":"off",
      "no-debugger": "off"
  }
};
