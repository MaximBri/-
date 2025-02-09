import React from 'react'
import { Link } from 'react-router-dom'

import useAuthLogic from './Hooks/authLogic'
import '../css/main/authMobile.css'
import bg_img from '../images/NotFoundPage/nf-img.png'
import iconSvg from '../images/mainPage/attention.svg'

const Auth = () => {
  const { login, setLogin, pass, setPass, textForUser, sendForm } = useAuthLogic();
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
        <div onClick={() => sendForm()} className='ent_mobile_btn'>
          Войти
        </div>
        <h3 className='ent_mobile_subtitle'>Забыли пароль?</h3>
      </form>
      <img className='ent_mobile_img' src={bg_img} alt='kokos' />
    </section>
  )
}

export default Auth
