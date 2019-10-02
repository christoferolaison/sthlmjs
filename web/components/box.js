// @flow

import * as React from 'react'

type BoxT = {
  alignItems?: string,
  background?: string,
  children: React.Node,
  flexDirection?: string,
  height?: number | string,
  justifyContent?: string,
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
  width?: number | string,
}

export function Box({
  height,
  width,
  background,
  flexDirection,
  alignItems,
  justifyContent,
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
  ...rest
}: BoxT) {
  return (
    <div
      style={{
        display: 'flex',
        height,
        width,
        background,
        flexDirection,
        alignItems,
        justifyContent,
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
      }}
      {...rest}
    />
  )
}
