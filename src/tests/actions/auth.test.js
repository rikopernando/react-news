import React from 'react'
import { login, logout } from '../../actions/auth'

test('should be generate login object', () => {
  const uid = '213safasf'
  const state = login(uid)
  expect(state).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should be generate logout object', () => {
  const state = logout()
  expect(state).toEqual({
    type: 'LOGOUT' 
  })
})
