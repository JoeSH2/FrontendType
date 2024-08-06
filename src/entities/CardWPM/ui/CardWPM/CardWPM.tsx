import React, { FC } from 'react'
import style from './CardWPM.module.scss'

interface CardWPMProps {
  numberWPM: number
  errors: number
}

export const CardWPM: FC<CardWPMProps> = (props) => {
  const { numberWPM, errors } = props
  return (
    <div className={style.CardWPM}>
      <h3 className={style.title}>Your result</h3>
      <ul className={style.list}>
        <li>Your WPM amounts to: ${numberWPM}</li>
        <li>Number of errors: ${errors}</li>
      </ul>
    </div>
  )
}
