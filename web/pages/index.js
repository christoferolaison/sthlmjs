// @flow

import * as React from 'react'

import { Heading } from '../components/heading'
import { Container } from '../components/container'
import { Button } from '../components/button'
import { Login } from '../components/login'
import { Box } from '../components/box'
import {
  fetchUser,
  getToken,
  removeToken,
  type UserT,
} from '../util'

function Index() {
  const [user, setUser] = React.useState<UserT | null>(null)
  const [isInitialzing, setInitialzing] = React.useState(
    true,
  )

  React.useEffect(() => {
    const token = getToken()
    if (token !== null) {
      console.log(token)
      fetchUser(token)
        .then(({ data: user }) => {
          console.log(user)
          setUser(user)
          setInitialzing(false)
        })
        .catch(() => {
          setInitialzing(false)
        })
    } else {
      setInitialzing(false)
    }
  }, [])

  if (isInitialzing) {
    return (
      <Container>
        <Heading color="#FFFFFF">Loading...</Heading>
      </Container>
    )
  }

  if (!user) {
    return (
      <Container>
        <Login onSuccess={user => setUser(user)} />
      </Container>
    )
  }

  return (
    <Container>
      <Box width={400} flexDirection="column">
        <Heading
          data-testid="greeting"
          color="#FFFFFF"
          marginBottom={20}
        >
          Welcome {user.email}!
        </Heading>
        <Button
          onClick={() => {
            removeToken()
            setUser(null)
          }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  )
}

export default Index
