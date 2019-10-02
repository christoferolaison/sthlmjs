// @flow

import { setToken, TOKEN_KEY } from '.'

afterEach(() => {
  window.localStorage.removeItem(TOKEN_KEY)
})

test('unit: should save token in localstorage', () => {
  const token = '123456-jhgfds-1234567-bgvfcdx'
  setToken(token)
  expect(window.localStorage.getItem(TOKEN_KEY)).toBe(token)
})
