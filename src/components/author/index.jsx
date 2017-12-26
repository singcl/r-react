// import React from 'react'
// 要么把React import进来，要么把这个规则disable掉
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import List from './List.jsx'

class Author extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { match } = this.props

    return (
      <div>
        <Route
          exact
          path={`${match.url}`}
          render={() => <List fetch={{ url: '/api/authorlist' }} />}
        />
      </div>
    )
  }
}

Author.propTypes = {
  match: PropTypes.object.isRequired
}

export default Author
