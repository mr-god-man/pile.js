---
title: button按钮
category: 组件
publishDate: 2018-07-27
tags:
  - components
  - button
---

mobile端按钮控件

---

基本用法

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>
    <Button color='primary'>Primary</Button>
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>
    <Button color='primary'>Primary</Button>
  </div>,
  mountNode
);
```

## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| showProp  | String   |  null      | 子级动画的类型，显示或隐藏。 [demo](http://react-component.github.io/animate/examples/hide-todo.html) |
| exclusive | Boolean  |  false     | 同时触发动画时，是否只允许只播放一个动画 |
| transitionName | String  |  null  | css 样式的名称, `fade`: enter: `fade-enter fade-enter-active` leave: `fade-leave fade-leave-active` |
| transitionAppear | Boolean | false | 是否支持开始出现的动画 |
| transitionEnter  | Boolean | true  | 是否支持进场的动画, 出场后的进场 |
| transitionLeave  | Boolean | true  | 是否支持出场的动画   |
| onEnd     | Func     |  true    | 动画结束后的回调, callBack(key: String, exists: Boolean); |
| animation | Object   | {}         |  使用第三方动画类来执行动画 |
| component | React.Element/String   | `span` | 需要替换的标签  |
