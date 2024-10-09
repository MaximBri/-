import React from 'react'
import { Link } from 'react-router-dom'

import useRegisterLogic from './Hooks/registerLogic'
import '../css/main/authMobile.css'
import bg_img from '../images/NotFoundPage/nf-img.png'
import iconSvg from '../images/mainPage/attention.svg'

const Register = () => {
  const {
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
    sendForm,
  } = useRegisterLogic()
  return (
    <section className='entr_mobile'>
      <form className='entr_mobile-wrapper'>
        <h3 className='ent_mobile_title'>Регистрация</h3>
        {!textForUser && <div className='ent_mobile_gap'></div>}
        {textForUser && (
          <div className='ent_mobile_mess'>
            <img src={iconSvg} alt='attention' />
            {textForUser}
          </div>
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          className='entr_mobile_input'
          placeholder='Email'
          required
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          className='entr_mobile_input'
          placeholder='Имя'
          required
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type='text'
          className='entr_mobile_input'
          placeholder='Фамилия'
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type='password'
          className='entr_mobile_input'
          placeholder='Введите пароль'
          required
        />
        <input
          onChange={(e) => setRepeat(e.target.value)}
          value={repeat}
          type='password'
          className='entr_mobile_input'
          placeholder='Повторите пароль'
          required
        />
        <div className='ent_mobile_info'>
          Уже есть аккаунт? <Link to='../auth'>Войти</Link>
        </div>
        <div onClick={() => sendForm()} className='ent_mobile_btn'>
          Зарегистрироваться
        </div>
      </form>
      <img className='ent_mobile_img' src={bg_img} alt='kokos' />
    </section>
  )
}

export default Register
