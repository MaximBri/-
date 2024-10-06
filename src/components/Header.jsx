import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/globals/logo.png'
import userSvg from '../images/mainPage/ManIcon.svg'
import '../css/main/header.css'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header_logo'>
        <img src={logo} alt='Logo' />
      </Link>
      <nav className='header__list'>
        <Link className='header__list_item' to='/news'>
          Новости
        </Link>
        <Link className='header__list_item' to='/team'>
          Команда
        </Link>
        <Link className='header__list_item' to='/matches'>
          Матчи
        </Link>
        <Link className='header__list_item' to='/shop'>
          Магазин
        </Link>
        <Link className='header__list_item' to='/about'>
          О клубе
        </Link>
        <Link className='header__list_item' to='/contacts'>
          Контакты
        </Link>
      </nav>
      <Link to='/entrance' className='header_btn'>
        Войти
        <img src={userSvg} alt='User' />
      </Link>
    </header>
  )
}

export default Header
