import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setNews, startSetNews } from '../../actions/news'
import news from '../fixtures/news'

const createMockStore = configureMockStore([thunk])
let originalTimeout

beforeEach(() => {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
})

test('should set news action object with data', () => {
  const action = setNews(news)
  expect(action).toEqual({
    type: 'SET_NEWS',
    news
  })
})

/*
test('should fetch news data from API', (done) => {
  const store = createMockStore()
  store.dispatch(startSetNews()).then(() => {
    const action = store.getActions()
    expect(action[0]).toEqual({
      type: 'SET_NEWS',
      news
    })
    done()
  })
})
*/
