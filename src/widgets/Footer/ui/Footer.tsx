import React, { FC } from 'react'
import style from './Header.module.scss'
import { Container } from '../../../shared/ui/Container/Container'

export const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Container>
        <div className={style.wrapper}>
          <h1>FRONTENDTYPE</h1>
          <div className={style.user}>
            // TODO добавить SVG
            <p>Danila Kuzin, TG: @dksspkuz</p>
          </div>
        </div>
      </Container>
    </header>
  )
}
