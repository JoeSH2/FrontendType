import React, { FC } from 'react'
import style from './Footer.module.scss'
import { Container } from '../../../shared/ui/Container/Container'

export const Footer: FC = () => {
  return (
    <footer className={style.Footer}>
      <Container>
        <div className={style.wrapper}>
          <h1>Footer</h1>
          <ul className={style.user}>
            <li>Danila Kuzin</li>
            <li>TG: @dksspkuz</li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
