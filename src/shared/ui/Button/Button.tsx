import React, { FC, ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  value?: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  const { type = 'button', onClick, value } = props
  return (
    <button onClick={onClick} type={type} className={style.Button}>
      {value}
    </button>
  )
}
