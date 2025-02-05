import React, { FC, ReactNode } from 'react'
import style from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
}

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props

  return <div className={style.Container}>{children}</div>
}
