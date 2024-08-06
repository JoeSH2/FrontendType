import React, { FC, useCallback, useEffect } from 'react'
import style from './GeneratorTask.module.scss'
import { Button } from '../../../shared/ui/Button/Button'
import { useAppDispatch } from '../../../shared/lib/hooks'
import { GeneratorTaskActions } from '../model/slice/generatorTaskSlice'
import { textComparisonActions } from '../../../features/TextComparison/model/slice/textComparisonSlice'

interface GeneratorTaskProps {
  numberOfTasks: number
}

export const GeneratorTask: FC<GeneratorTaskProps> = ({ numberOfTasks }) => {
  const dispatch = useAppDispatch()

  const onGenerateTask = useCallback(() => {
    dispatch(GeneratorTaskActions.generationNumber(numberOfTasks))
    dispatch(textComparisonActions.setValue(''))
  }, [dispatch])

  useEffect(() => {
    dispatch(GeneratorTaskActions.generationNumber(numberOfTasks))
  }, [])

  return (
    <section className={style.GeneratorTask}>
      <h2>Do you want to change the text of the assignment?</h2>
      <Button onClick={onGenerateTask} value={'change'} />
    </section>
  )
}
