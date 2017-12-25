// import React from 'react'
// 要么把React import进来，要么把这个规则disable掉
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<div>分类列表</div>)
  }
}

Category.propTypes = {}

Category.defaultProps = {}

export default Category
