import React, { FC, memo, useEffect, useState } from 'react'
import style from './TextTask.module.scss'
import { useAppDispatch } from '../../../shared/lib/hooks'
import { textComparisonActions } from '../../../features/TextComparison/model/slice/textComparisonSlice'

interface TextTaskProps {
  userText: string
  task: string
}

export const TextTask: FC<TextTaskProps> = memo((props) => {
  const { task, userText } = props
  const dispatch = useAppDispatch()
  const [words, setWords] = useState(0)

  const getClassName = (index: number) => {
    if (index < userText.length) {
      return userText[index] === task[index] ? style.green : style.red
    }
    return ''
  }

  const arraySymbolTask = task.split('').map((item, i, arr) => (
    <span key={item + i} className={getClassName(i)}>
      {item}
    </span>
  ))

  useEffect(() => {
    setWords(task.split(' ').length)
    dispatch(textComparisonActions.getWordTask(words))
  }, [task, setWords, words])
  return <div className={style.TextTask}>{arraySymbolTask}</div>
})
