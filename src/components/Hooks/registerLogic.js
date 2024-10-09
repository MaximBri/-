import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setAuth } from '../../RTK/slices/personSlice'

const useRegisterLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [repeat, setRepeat] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [textForUser, setTextForUser] = React.useState('')
  const [canSend, setCanSend] = React.useState(false)
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }
  React.useEffect(() => {
    if (pass !== repeat) {
      setTextForUser('Пароли не совпадают')
      setCanSend(false)
    } else if (!name) {
      setTextForUser('Введите имя')
      setCanSend(false)
    } else if (!email || !validateEmail(email)) {
      setTextForUser('Введите электронную почту')
      setCanSend(false)
    } else if (pass) {
      setTextForUser('')
      setCanSend(true)
    } else {
      setTextForUser('')
    }
  }, [pass, repeat, name, email])
  const sendForm = () => {
    if (canSend) {
      const data = {
        email,
        password: pass,
        first_name: name,
        last_name: lastName,
      }
      console.log(data)
      const apiUrl = 'http://127.0.0.1:8000/api/auth/register' // убрать хард код
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
          setTextForUser('Произошла ошибка. Попробуйте снова')
        })
    }
  }

  return {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    repeat,
    setRepeat,
    pass,
    setPass,
    textForUser,
    canSend,
    sendForm,
  }
}

export default useRegisterLogic
