import React from 'react'

import '../css/main/auth.css'
import bg_img from '../images/NotFoundPage/nf-img.png'
import iconSvg from '../images/mainPage/attention.svg'

const Register = ({ func }) => {
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
    } else setTextForUser('')
  }, [pass, repeat, name, email])
  const sendForm = () => {
    if (canSend) {
      const data = {
        email,
        password: pass,
        name,
        lastName,
      }
      console.log(data)
      const apiUrl = 'https://your-api-endpoint.com/register'
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
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }
  return (
    <section className='entr'>
      <form className='entr-wrapper'>
        <h3 className='ent_title'>Регистрация</h3>
        {!textForUser && <div className='ent_gap'></div>}
        {textForUser && (
          <div className='ent_mess'>
            <img src={iconSvg} alt='attention' />
            {textForUser}
          </div>
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          className='entr_input'
          placeholder='Email'
          required
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          className='entr_input'
          placeholder='Имя'
          required
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type='text'
          className='entr_input'
          placeholder='Фамилия'
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type='password'
          className='entr_input'
          placeholder='Введите пароль'
          required
        />
        <input
          onChange={(e) => setRepeat(e.target.value)}
          value={repeat}
          type='password'
          className='entr_input'
          placeholder='Повторите пароль'
          required
        />
        <div className='ent_info'>
          Уже есть аккаунт? <span onClick={() => func()}>Войти</span>
        </div>
        <div onClick={() => sendForm()} className='ent_btn'>
          Зарегистрироваться
        </div>
      </form>
      <img className='ent_img' src={bg_img} alt='kokos' />
    </section>
  )
}

export default Register
