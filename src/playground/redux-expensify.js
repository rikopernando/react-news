import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//ADD EXPENSE
const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

//REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//SET TEXT FILTER
const setFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

//setStartDate 
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

//setEndDate 
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

const expensesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          } 
        }else{
          return expense
        } 
      })
    default:
      return state
  }
} 

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1 
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1 
    } 
  })
}

store.subscribe(() => {
  const state = store.getState()
  const visibleExpense = getVisibleExpense(state.expenses, state.filters)
  console.log(visibleExpense)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}))

/*
store.dispatch(removeExpense({ id: expenseTwo.expense.id }))
store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }))

*/

store.dispatch(sortByDate())
store.dispatch(sortByAmount())

//store.dispatch(setFilter('e'))
/*
store.dispatch(setStartDate(0))
store.dispatch(setEndDate(999))
store.dispatch(setStartDate())

*/
const demoState = {
  expense: [{
    id: 'faigwqiruqw',
    description: 'January Rent',
    note: 'This is the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}
