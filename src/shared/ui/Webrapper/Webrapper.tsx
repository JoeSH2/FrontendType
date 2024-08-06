import React, { FC, ReactNode, useEffect } from 'react'
import style from './Webrapper.module.scss'
import { Container } from '../Container/Container'

interface WebrapperProps {
  children: ReactNode
}

export const Webrapper: FC<WebrapperProps> = (props) => {
  const { children } = props

  return (
    <div className={style.Webrapper}>
      <Container>{children}</Container>
    </div>
  )
}
