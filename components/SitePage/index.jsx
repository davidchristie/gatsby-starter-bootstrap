import PropTypes from 'prop-types'
import React from 'react'

import './style.css'

class SitePage extends React.Component {
  render () {
    const {route} = this.props
    const post = route.page.data
    return (
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    )
  }
}

SitePage.propTypes = {
  post: PropTypes.object,
  pages: PropTypes.array
}

export default SitePage
