import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '../../components/DashboardPage'

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />)
  expect(wrapper).toMatchSnapshot()
  /*
  const renderer = new ReactShallowRenderer()
  renderer.render(<Header />)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
  */
})
