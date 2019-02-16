import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducers from '../reducers/auth'
import newsReducers from '../reducers/news'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducers,
      news: newsReducers
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

