import React, { FC, ReactNode } from 'react'
import style from './Container.module.scss'

export enum ContainerSize {
  S = 960,
  M = 1080,
  L = 1200,
}

interface ContainerProps {
  children: ReactNode
  width?: ContainerSize
}

export const Container: FC<ContainerProps> = (props) => {
  const { width = ContainerSize.S, children } = props

  const styleOptions = {
    width: width,
  }

  return (
    <div style={styleOptions} className={style.Container}>
      {children}
    </div>
  )
}
