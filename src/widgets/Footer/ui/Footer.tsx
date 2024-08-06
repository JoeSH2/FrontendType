import React, { FC } from 'react'
import style from './Footer.module.scss'
import { Container } from '../../../shared/ui/Container/Container'

export const Footer: FC = () => {
  return (
    <footer className={style.Footer}>
      <Container>
        <div className={style.wrapper}>
          <h1>Footer</h1>
          <div className={style.user}>
            Info
            <p>Danila Kuzin, TG: @dksspkuz</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
