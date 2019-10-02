// @flow

import * as React from 'react'
import { systemFont } from '@skapa/system-font'

type InputT = {
  'data-testid'?: string,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder: string,
  type?: string,
  value: string,
}

export function Input(props: InputT) {
  return (
    <input
      style={{
        fontFamily: systemFont,
        height: 40,
        width: '100%',
        maxWidth: '100%',
        background: '#FFFFFF',
        color: '#222222',
        border: '1px solid #222222',
        textIndent: 10,
        boxSizing: 'border-box',
      }}
      {...props}
    />
  )
}
