import { prefixLink } from 'gatsby-helpers'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router'

class PrefixedLink extends React.Component {
  render () {
    const { className, to } = this.props
    return (
      <Link className={className} to={prefixLink(to)}>
        {this.props.children}
      </Link>
    )
  }
}

PrefixedLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string
}

export default PrefixedLink
