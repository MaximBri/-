import React from 'react'

import '../css/main/auth.css'
import bg_img from '../images/NotFoundPage/nf-img.png'
import iconSvg from '../images/mainPage/attention.svg'
import useAuthLogic from './Hooks/authLogic'

const Auth = ({ func }) => {
  const { login, setLogin, pass, setPass, textForUser, sendForm } = useAuthLogic();
  return (
    <section className='entr'>
      <form className='entr-wrapper'>
        <h3 className='ent_title'>Вход</h3>
        {!textForUser && <div className='ent_gap'></div>}
        {textForUser && (
          <div className='ent_mess'>
            <img src={iconSvg} alt='attention' />
            {textForUser}
          </div>
        )}
        <input
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type='email'
          className='entr_input'
          placeholder='Email'
          required
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type='password'
          className='entr_input'
          placeholder='Введите пароль'
          required
        />
        <div className='ent_info'>
          Нет аккаунта? <span onClick={() => func()}>Зарегистрирроваться</span>
        </div>
        <div onClick={() => sendForm()} className='ent_btn'>
          Войти
        </div>
        <h3 className='ent_subtitle'>Забыли пароль?</h3>
      </form>
      <img className='ent_img' src={bg_img} alt='kokos' />
    </section>
  )
}

export default Auth
