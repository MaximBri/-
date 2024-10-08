import React from 'react'
import { Link } from 'react-router-dom'

import '../css/main/authMobile.css'
import bg_img from '../images/NotFoundPage/nf-img.png'
import iconSvg from '../images/mainPage/attention.svg'

const Auth = () => {
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
    } else if(!pass){
      setTextForUser('Введите пароль')
      setCanSend(false)
    } else {
      setTextForUser('')
      setCanSend(true)
    }
  }, [login, pass])
  const sendForm = () => {
    if (canSend) {
      setPass('')
      const data = {
        login,
        password: pass,
      }
      const apiUrl = '/'
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
    <section className='entr_mobile'>
      <form className='entr_mobile-wrapper'>
        <h3 className='ent_mobile_title'>Вход</h3>
        {!textForUser && <div className='ent_mobile_gap'></div>}
        {textForUser && (
          <div className='ent_mobile_mess'>
            <img src={iconSvg} alt='attention' />
            {textForUser}
          </div>
        )}
        <input
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type='email'
          className='entr_mobile_input'
          placeholder='Email'
          required
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type='password'
          className='entr_mobile_input'
          placeholder='Введите пароль'
          required
        />
        <div className='ent_mobile_info'>
          Нет аккаунта? <Link to='../registration' >Зарегистрирроваться</Link>
        </div>
        <div onClick={() => sendForm()} className='entr_mobile_btn'>
          Войти
        </div>
        <h3 className='ent_mobile_subtitle'>Забыли пароль?</h3>
      </form>
      <img className='ent_mobile_img' src={bg_img} alt='kokos' />
    </section>
  )
}

export default Auth
