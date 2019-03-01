import React from 'react'
import { shallow } from 'enzyme'
import { NewsList } from '../../components/NewsList'
import news from '../fixtures/news'

test("should rendered News with news data", () => {
  const wrapper = shallow(<NewsList news={news} />)
  expect(wrapper).toMatchSnapshot()
})
