// @flow

import * as React from 'react'

import { Text, type TextT } from './text'

export function Heading(props: TextT) {
  return <Text {...props} fontWeight="bold" fontSize={30} />
}
