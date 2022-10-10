import React from 'react'
import ReactCodeInput from 'react-code-input'
import { FiDelete } from 'react-icons/fi'
import cls from './Auth.module.scss'

const Auth = () => {
  const [ code, setCode ] = React.useState('')

  return (
    <div 
      className={
        code === '0000'
        ? 
        cls.auth 
        :
        cls.auth_animation 
      }
    >
      <img 
        src="/img/logo.png" 
        alt="logo" 
      />
      <div className={cls.dots}>
        <ReactCodeInput 
          fields={4}
          value={code}
        />
      </div>
      <div className={cls.password_btns}>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          9
        </button>
        <button className={cls.delete}>
          Удалить
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setCode('1')
          }}
        >
          <FiDelete />
        </button>
      </div>
    </div>
  )
}

export default Auth