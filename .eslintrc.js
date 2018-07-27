 module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",// 使用非默认的 babel-eslint 作为代码解析器. 这样 eslint 就能识别 babel 语法的代码
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-one-expression-per-line": 0,
    },
    "env": {
      "jest": true
    }
};

