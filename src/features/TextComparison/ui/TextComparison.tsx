import React, { FC, useEffect } from 'react'
import { TextTask } from '../../../entities/TextTask'
import { InputTask } from '../../../entities/InputTask'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks'
import { textComparisonActions } from '../model/slice/textComparisonSlice'
import { CalculateWPMActions } from '../../CalculateWPM/model/slice/calculateWPMSlice'
import style from './TextComparison.module.scss'

interface TextComparisonProps {
  arrTasks: string[]
}

export const TextComparison: FC<TextComparisonProps> = ({ arrTasks }) => {
  const dispatch = useAppDispatch()
  const numberTask = useAppSelector((state) => state.generatorTask.numberTask)
  const { textTask, value, wordTask } = useAppSelector(
    (state) => state.textComparison
  )

  const calculate = (value: string) => {
    if (value.length === 1) {
      dispatch(CalculateWPMActions.getStartTime(Math.floor(Date.now() / 1000)))
    } else if (value.length > 1 && value.length < textTask.length) {
    } else if (value.length === textTask.length) {
      dispatch(CalculateWPMActions.getFinishTime(Math.floor(Date.now() / 1000)))
      dispatch(CalculateWPMActions.calculateWPM(wordTask))
    }
  }

  const countErrors = (text: string, userInput: string) => {
    let errors = 0
    const textArr = text.split('')
    const userArr = userInput.split('')

    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] !== userArr[i]) {
        errors++
      }
    }
    dispatch(CalculateWPMActions.getErrors(errors))
  }

  const onChangeValue = (value: string) => {
    dispatch(textComparisonActions.setValue(value))
    calculate(value)
    countErrors(textTask, value)
    if (value.length === textTask.length) {
      dispatch(textComparisonActions.setValue(''))
    }
  }

  useEffect(() => {
    dispatch(textComparisonActions.initialTask(arrTasks[numberTask]))
  }, [dispatch, numberTask, arrTasks])

  return (
    <section className={style.TextComparison}>
      <TextTask isPrint={Boolean(value)} userText={value} task={textTask} />
      <InputTask value={value} onChange={onChangeValue} />
    </section>
  )
}
