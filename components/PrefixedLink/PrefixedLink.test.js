import React from 'react'
import renderer from 'react-test-renderer'

import PrefixedLink from './PrefixedLink'

it('renders with errors', () => {
  renderer.create(<PrefixedLink />)
})

it('matches render snapshot', () => {
  const tree = renderer.create(<PrefixedLink />).toJSON()
  expect(tree).toMatchSnapshot()
})
