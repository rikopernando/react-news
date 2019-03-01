import React from 'react'
import { shallow } from 'enzyme'
import { NewsListItem } from '../../components/NewsListItem'
import news from '../fixtures/news'

test('should rendered NewsListItem correctyly', () => {
  const wrapper = shallow(<NewsListItem {...news[1]} />)
  expect(wrapper).toMatchSnapshot()
})
