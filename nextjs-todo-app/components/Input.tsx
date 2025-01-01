import { InputProps } from '@/types'
import React from 'react'

const Input = ({type,placeholder,id,name,onChanges}:InputProps) => {
  return (
    <label forhtml={id}>
        <p>{name}</p>
        <input type={type} placeholder={placeholder} id={id} onChange={onChanges} />
    </label>
  )
}

export default Input