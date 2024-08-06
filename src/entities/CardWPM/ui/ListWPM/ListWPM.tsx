import React, { FC } from 'react'
import style from './ListWPM.module.scss'
import { CardWPM } from '../CardWPM/CardWPM'
import { InfoWPM } from '../../../../features/CalculateWPM/model/slice/calculateWPMSlice'
import { useAppSelector } from '../../../../shared/lib/hooks'

interface ListWPMProps {
  arrayListWPM: InfoWPM[]
}

export const ListWPM: FC<ListWPMProps> = (props) => {
  const { arrayListWPM } = props

  return (
    <div className={style.ListWPM}>
      {arrayListWPM.map((item, i) => (
        <CardWPM
          WPM={item.WPM}
          date={item.date}
          time={item.time}
          errors={item.errors}
          key={`${item.WPM}-${i}`}
        />
      ))}
    </div>
  )
}
