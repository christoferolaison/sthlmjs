// @flow

import * as React from 'react'
import { systemFont } from '@skapa/system-font'

export type TextT = {
  'data-testid'?: string,
  children: React.Node,
  color?: number | string,
  fontSize?: number,
  fontWeight?: string,
  margin?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  marginTop?: number,
  padding?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingTop?: number,
  textAlign?: string,
}

export function Text({
  fontSize,
  color,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  textAlign,
  fontWeight,
  ...rest
}: TextT) {
  return (
    <span
      style={{
        display: 'block',
        fontFamily: systemFont,
        fontSize,
        color,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        textAlign,
        fontWeight,
      }}
      {...rest}
    />
  )
}
