import React, { FC, useEffect } from 'react'
import { CardWPM } from '../../../entities/CardWPM'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks'
import { CalculateWPMActions } from '../model/slice/calculateWPMSlice'
import style from './CalculateWpm.module.scss'

export const CalculateWPM: FC = () => {
  const dispatch = useAppDispatch()
  const { infoTask, Wpm, errors, finishTime } = useAppSelector(
    (state) => state.calculateWPM
  )
  console.log(errors)
  useEffect(() => {
    if (finishTime !== 0) {
      dispatch(
        CalculateWPMActions.initialTaskInfo({
          WPM: Wpm,
          errors: errors,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        })
      )
    }
  }, [Wpm])

  return (
    <section className={style.CalculateWpm}>
      <CardWPM
        WPM={infoTask.WPM}
        date={infoTask.date || "So far it's empty"}
        time={infoTask.time || "So far it's empty"}
        errors={infoTask.errors}
      />
    </section>
  )
}
