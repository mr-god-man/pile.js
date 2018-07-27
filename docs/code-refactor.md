---
title: 重构方案
category: 重构
publishDate: 2018-07-26
tags:
  - 重构
---

### react兼容性考虑

1. 以react16.x为重构版本，不考虑兼容以前的，比如react15.x系列等
2. 以后，随着react发版，更新pile.js。比如react17发布，有不兼容的api，需要调整代码，跟紧react版本发布

### 采用的开源技术

#### 代码依赖库

1. [recompose](https://github.com/acdlite/recompose)
2. [styled-components](https://github.com/styled-components)

#### 测试

1. [enzyme](https://github.com/airbnb/enzyme): a testing utility for React
2. [jest](https://github.com/facebook/jest) : a test runner
3. [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json): to convert Enzyme wrappers for Jest snapshot matcher

#### 代码质量规范

1. [airbnb:javascript](https://github.com/airbnb/javascript)
2. [airbnb:css-in-javascript](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
3. [flow](https://github.com/facebook/flow)
4. 文件名命名：采用camel命名，注意：组件首字母大小，其他文件首字母小写

#### 打包

1. [rollup](https://github.com/rollup/rollup)

#### doc

1. 采用`markdown`格式编写
2. 使用[bushing](https://github.com/benjycui/bisheng) 将`.md`文件转为`SPA`页面

#### 杂项

1. 文件目录方式
2. icon采用svg格式
3. 探索：无障碍设计
4. [markdown](https://github.com/eslint/eslint-plugin-markdown)

#### 编辑器插件

统一使用`sublime text 3`，便于团队协同,如需使用其他编辑器，可参考各自官网下载相关插件

1. [flow](https://flow.org/en/docs/editors/sublime-text/)
2. [eslint](https://eslint.org/docs/user-guide/integrations#editors)

#### 参考

1. [styled-components](https://github.com/styled-components)
2. [awesome-styled-components](https://github.com/styled-components/awesome-styled-components)
3. [recompose](https://github.com/acdlite/recompose)
4. [ant-design](https://github.com/ant-design/ant-design/)
5. [element](https://github.com/ElemeFE/element)
6. [mint-ui](https://github.com/ElemeFE/mint-ui)
7. [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
8. [reactstrap](https://github.com/reactstrap/reactstrap)
