// import React from 'react'
// 要么把React import进来，要么把这个规则disable掉
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<div>书籍列表</div>)
  }
}

Book.propTypes = {}

Book.defaultProps = {}

export default Book
