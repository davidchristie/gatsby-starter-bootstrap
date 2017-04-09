import { config } from 'config'
import ReactGA from 'react-ga'

ReactGA.initialize(config.googleAnalyticsId)

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname)
}
