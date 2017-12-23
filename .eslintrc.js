module.exports = {
  // http://eslint.cn/docs/user-guide/configuring
  "extends": ["airbnb"],
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
    "import/parser": "babel-eslint",
    "import/resolver": {
      "webpack": {
        // webpack 文件路径
        // check if imports actually resolve
        "config": "webpack.config.js"
      }
    }
  },
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
    // 强制无分号
    "semi": [2, "never"],
    "indent": ["error", 2],
    "comma-dangle": ["warn", "never"],
    "linebreak-style": 0
  }
}
