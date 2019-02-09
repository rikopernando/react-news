import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducers = (state = { count:0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count 
      }
    case 'RESET':
      return {
        count: 0 
      }
    default:
      return state;
  }
}

const store = createStore(countReducers)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy : 20}))

store.dispatch(incrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(resetCount({type: 'RESET'}))

store.dispatch(setCount({count: 1000}))

