import { prefixLink } from 'gatsby-helpers'
import PropTypes from 'prop-types'
import React from 'react'
import DocumentTitle from 'react-document-title'

const BUILD_TIME = new Date().getTime()

class Html extends React.Component {
  render () {
    const { body } = this.props
    const title = DocumentTitle.rewind()
    const jquery = <script src='https://code.jquery.com/jquery-3.1.1.slim.min.js' />
    const tether = <script src='https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js' />
    const bootstrap = <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js' />
    let css
    if (process.env.NODE_ENV === 'production') {
      /* eslint-disable import/no-webpack-loader-syntax */
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css')
          }}
        />
      )
      /* eslint-enable import/no-webpack-loader-syntax */
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0 maximum-scale=5.0'
          />
          <title>{title}</title>
          {css}
          {jquery}
          {tether}
          {bootstrap}
        </head>
        <body>
          <div
            id='react-mount'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string
}

export default Html
