// @flow

import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import {
  render,
  fireEvent,
  wait,
} from '@testing-library/react'
// the actual mock is located in the __mocks__ folder
import axios from 'axios'

import { Login } from '../components/login'

afterEach(() => {
  window.localStorage.removeItem('token')
})

test('integration: login flow', async () => {
  // Arrange
  const onSuccess = jest.fn()
  const email = 'hej@hej.se'
  const password = 'qwerty'
  const token = '1245.53234.2345.sdfg'
  const user = {
    data: { email, token, id: 1 },
  }
  axios.post.mockImplementationOnce(() =>
    Promise.resolve(user),
  )
  const { getByPlaceholderText, getByTestId } = render(
    <Login onSuccess={onSuccess} />,
  )

  // Act
  const emailInput = getByPlaceholderText(/Email/)
  const passwordInput = getByPlaceholderText(/Password/)
  const submitButton = getByTestId('login-button')

  fireEvent.change(emailInput, { target: { value: email } })
  fireEvent.change(passwordInput, {
    target: { value: password },
  })
  fireEvent.click(submitButton)

  // wait a tick for our mocked promise
  await wait()

  // assert
  expect(axios.post).toHaveBeenCalledTimes(1)
  expect(axios.post).toHaveBeenCalledWith(
    'http://localhost:5001',
    {
      email,
      password,
    },
  )

  expect(window.localStorage.getItem('token')).toBe(token)
})
