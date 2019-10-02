// @flow

import axios from 'axios'

export type UserT = {
  email: string,
  id: string,
  token: string,
}

export function fetchUser(token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return axios.get<{}, UserT>('http://localhost:5001', {
    headers,
  })
}

export function login(email: string, password: string) {
  return axios.post<{}, UserT>('http://localhost:5001', {
    email,
    password,
  })
}

export const TOKEN_KEY = 'token'

export function setToken(token: string) {
  const { localStorage } = window
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken(): string | null {
  const { localStorage } = window
  return localStorage.getItem(TOKEN_KEY)
}

export function removeToken() {
  const { localStorage } = window
  localStorage.removeItem(TOKEN_KEY)
}
