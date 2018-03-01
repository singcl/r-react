module.exports = {
  // http://eslint.cn/docs/user-guide/configuring
  // https://github.com/evcohen/eslint-plugin-jsx-a11y
  // eslint-plugin-react插件如何引入：https://github.com/yannickcr/eslint-plugin-react
  "extends": ["airbnb", "plugin:jsx-a11y/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "settings": {
    // https://github.com/benmosher/eslint-plugin-import
    "import/parser": "babel-eslint",
    "import/resolver": {
      "webpack": {
        // webpack 文件路径
        // check if imports actually resolve
        "config": "webpack.config.js"
      }
    }
  },
  "plugins": ["jsx-a11y"],
  "rules": {
    // 允许js后缀
    // eslint-plugin-react
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": [0, {
      "ignorePureComponents": true
    }],
    // eslint-plugin-import
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": false,
      "peerDependencies": false
    }],
    "import/extensions": [".js", ".jsx"],
    // 强制无分号
    "semi": [2, "never"],
    "indent": ["error", 2],
    "comma-dangle": ["warn", "never"],
    "linebreak-style": 0,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ /*"Link"*/ ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }]
  }
}
