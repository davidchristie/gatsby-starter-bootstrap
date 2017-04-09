import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import access from 'safe-access'

class SiteIndex extends React.Component {
  description (body) {
    var test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  more (body, path) {
    if (body.match('<!--more-->')) {
      return (
        <Link className='readmore' to={prefixLink(path)}>
          <span className='btn btn-outline-danger btn-block'>MORE</span>
        </Link>
      )
    }
  }

  render () {
    const pageLinks = []

    // Sort pages.
    const sortedPages = sortBy(
      this.props.route.pages,
      page => access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (
        access(page, 'file.ext') === 'md' &&
        access(page, 'data.layout') === 'post'
      ) {
        const title = access(page, 'data.title') || page.path
        const description =
          access(page, 'data.description') ||
          access(page, 'data.body')
        const datePublished = access(page, 'data.date')
        const categories = access(page, 'data.categories')

        const category = []
        for (const i in categories) {
          const c = categories[i]
          category.push(
            <span className='badge badge-danger' key={i}>{c}</span>
          )
        }

        pageLinks.push(
          <div className='article-wrap' key={page.path}>
            <div className='page-header'>
              <Link
                style={{textDecoration: 'none'}}
                to={prefixLink(page.path)}
              >
                <h1>{ title }</h1>
                <time
                  dateTime={moment(datePublished).format('MMMM D, YYYY')}
                >
                  {moment(datePublished).format('YYYY/MM/DD')}
                </time>
              </Link>
              { category }
            </div>
            <div
              className='page-content'
              dangerouslySetInnerHTML={{__html: this.description(description)}}
            />
            {this.more(description, page.path)}
          </div>
        )
      }
    })

    return (
      <DocumentTitle title={config.siteTitle}>
        <div className='container'>
          <div className='articles col-md-12'>
            {pageLinks}
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

SiteIndex.propTypes = {
  route: PropTypes.object
}

export default SiteIndex
