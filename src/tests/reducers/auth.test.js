import React from 'react'
import authReducers from '../../reducers/auth'

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '232qeqwe'
  }
  const state = authReducers({},action)
  expect(state.uid).toBe(action.uid)
})

test('should set uid for logout', () => {
  const action = {
    type: 'LOGOUT' 
  } 
  const state = authReducers({uid: 'anything'},action)
  expect(state).toEqual({})
})
