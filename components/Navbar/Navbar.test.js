import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from './Navbar'

it('renders with errors', () => {
  renderer.create(<Navbar />)
})

it('matches render snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON()
  expect(tree).toMatchSnapshot()
})
