import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setAuth } from '../../RTK/slices/personSlice'

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
        login,
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
          if (!response.ok) {
            throw new Error(
              'Network response was not ok ' + response.statusText
            )
          }
          return response.json()
        })
        .then((responseData) => {
          console.log('Success:', responseData)
          dispatch(setAuth(true))
          navigate('/')
        })
        .catch((error) => {
          console.error('Error:', error)
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
