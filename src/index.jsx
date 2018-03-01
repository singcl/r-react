// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
// 要么把React import进来，要么把react/react-in-jsx-scope这个规则disable掉
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('root'))

// DEV
module.hot && module.hot.accept() // eslint-disable-line no-unused-expressions
