// @flow

import * as React from 'react'

import { Box } from '../components/box'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { login, setToken, type UserT } from '../util'

type LoginT = {
  onSuccess: UserT => void,
}

export function Login({ onSuccess }: LoginT) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setLoading] = React.useState(false)

  return (
    <Box
      background="#FFFFFF"
      flexDirection="column"
      width={400}
      paddingTop={60}
      paddingBottom={60}
      paddingRight={20}
      paddingLeft={20}
    >
      <Heading textAlign="center" marginBottom={40}>
        Login to use this awesome app!
      </Heading>
      <form
        onSubmit={e => {
          e.preventDefault()
          setLoading(true)
          login(email, password).then(({ data: user }) => {
            setToken(user.token)

            onSuccess(user)
            setLoading(false)
          })
        }}
      >
        <Box marginBottom={20}>
          <Input
            data-testid="email-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Box>
        <Box marginBottom={20}>
          <Input
            data-testid="password-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button data-testid="login-button">
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
