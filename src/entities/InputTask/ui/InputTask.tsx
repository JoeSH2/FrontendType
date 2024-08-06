import React, { ChangeEvent, FC } from 'react'
import style from './InputTask.module.scss'

interface InputTaskProps {
  value: string
  onChange: (value: string) => void
}

export const InputTask: FC<InputTaskProps> = (props) => {
  const { value, onChange } = props
  return (
    <div className={style.InputTask}>
      <input
        className={style.input}
        placeholder={'Enter the text from the assignment...'}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  )
}
