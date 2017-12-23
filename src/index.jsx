import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('root'))

// DEV
module.hot && module.hot.accept() // eslint-disable-line no-unused-expressions
