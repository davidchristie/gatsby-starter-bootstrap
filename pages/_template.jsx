import { config } from 'config'
import 'highlight.js'
import 'node_modules/animate.css/animate.css'
import 'node_modules/font-awesome/scss/font-awesome.scss'
import PropTypes from 'prop-types'
import React from 'react'
import 'static/scss/gatsrap.scss'

import SiteNavi from '../components/SiteNavi'

class Template extends React.Component {
  componentDidMount () {
    const WOW = require('wowjs')
    this.wow = new WOW.WOW()
    this.wow.init()
  }

  componentDidUpdate () {
    this.wow.sync()
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <SiteNavi title={config.siteTitle} {...this.props} />
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
