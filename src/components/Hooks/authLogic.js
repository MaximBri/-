import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setData } from '../../RTK/slices/personSlice'
import { setAuthForm } from '../../RTK/slices/authFormsSlice'
import { hashData } from './hesh'

const useAuthLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, setLogin] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [canSend, setCanSend] = React.useState(false)
  const [textForUser, setTextForUser] = React.useState('')
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }
  React.useEffect(() => {
    if (!login || !validateEmail(login)) {
      setTextForUser('Введите электронную почту')
      setCanSend(false)
    } else if (!pass) {
      setTextForUser('Введите пароль')
      setCanSend(false)
    } else {
      setTextForUser('')
      setCanSend(true)
    }
  }, [login, pass])
  const sendForm = () => {
    if (canSend) {
      const data = {
        email: login,
        password: pass,
      }
      const apiUrl = 'http://127.0.0.1:8000/api/auth/login' // убрать хард код
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json()
        })
        .then((responseData) => {
          if (responseData.error) {
            setTextForUser('Неправильный логин или пароль')
          } else {
            console.log(responseData)
            const temp = responseData.success.user
            let data = {
              email: temp.email,
              name: temp.full_name,
            }
            let tokens = {
              access: responseData.success.access,
              refresh: responseData.success.refresh,
            }
            dispatch(setData({...data, ...tokens}))
            dispatch(setAuthForm(false))
            data = hashData(data)
            localStorage.setItem('User', data)
            tokens = hashData(tokens)
            localStorage.setItem('Tokens', tokens)
            navigate('/')
          }
        })
        .catch((error) => {
          console.log('Error:', error)
          if (error.message === 'Invalid credentials')
            setTextForUser('Неправильный логин или пароль')
          else setTextForUser('Произошла ошибка. Попробуйте снова')
        })
      
    }
  }
  return {
    login,
    setLogin,
    pass,
    setPass,
    canSend,
    textForUser,
    sendForm,
  }
}

export default useAuthLogic
