import React, { FC } from 'react'
import style from './CardWPM.module.scss'
import { cls } from '../../../../shared/lib/cls'
import { InfoWPM } from '../../../../features/CalculateWPM/model/slice/calculateWPMSlice'

export const CardWPM: FC<InfoWPM> = (props) => {
  const { WPM, errors, date, time } = props
  return (
    <div className={style.infoWPM}>
      <h3 className={style.title}>Your result</h3>
      <ul className={cls(style.list, {}, [style.listDate])}>
        <li>
          Date: <b>{date}</b>
        </li>
        <li>
          time: <b>{time}</b>
        </li>
      </ul>
      <ul className={cls(style.list, {}, [style.listInfo])}>
        <li>
          Your WPM: <b>{WPM}</b>
        </li>
        <li>
          Number of errors: <b>{errors}</b>
        </li>
      </ul>
    </div>
  )
}
