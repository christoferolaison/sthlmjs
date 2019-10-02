// @flow

import * as React from 'react'

import { Box } from '../components/box'

type ContainerT = {
  children: React.Node,
}

export function Container(props: ContainerT) {
  return (
    <Box
      background="#222222"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...props}
    />
  )
}
