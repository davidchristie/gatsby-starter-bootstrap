import { config } from 'config'
import PropTypes from 'prop-types'
import React from 'react'
import DocumentTitle from 'react-document-title'

import SitePage from '../components/SitePage'
import SitePost from '../components/SitePost'

class MarkdownWrapper extends React.Component {
  render () {
    const {route} = this.props
    const post = route.page.data
    let layout, template
    layout = post.layout
    if (layout !== 'page') {
      template = <SitePost {...this.props} />
    } else {
      template = <SitePage {...this.props} />
    }
    return (
      <DocumentTitle title={`${post.title} - ${config.siteTitle}`}>
        { template }
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object
}

export default MarkdownWrapper
