// @flow

import * as React from 'react'
import { systemFont } from '@skapa/system-font'

type ButtonT = {
  'data-testid'?: string,
  children: React.Node,
  onClick?: (SyntheticEvent<HTMLButtonElement>) => void,
}

export function Button(props: ButtonT) {
  return (
    <button
      type="submit"
      style={{
        cursor: 'pointer',
        fontFamily: systemFont,
        fontSize: 16,
        height: 40,
        width: '100%',
        color: '#FFFFFF',
        background: '#222222',
      }}
      {...props}
    />
  )
}
