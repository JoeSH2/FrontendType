import React, { FC } from 'react'
import style from './Header.module.scss'
import { Container } from '../../../shared/ui/Container/Container'

export const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Container>
        <div className={style.wrapper}>
          <h1>FRONTENDTYPE</h1>
          <ul>
            <li>Danila Kuzin</li>
            <li>TG: @dksspkuz</li>
          </ul>
        </div>
      </Container>
    </header>
  )
}
