import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../images/globals/logo.png'
import userSvg from '../images/mainPage/ManIcon.svg'
import '../css/main/header.css'

const Header = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <header className='header'>
      <Link to='/' className='header_logo'>
        <img src={logo} alt='Logo' />
      </Link>
      <nav className='header__list'>
        <Link className={location.pathname === '/news'? 'header__list_item header_activePage': 'header__list_item'} to='/news'>
          Новости
        </Link>
        <Link className={location.pathname === '/team'? 'header__list_item header_activePage': 'header__list_item'} to='/team'>
          Команда
        </Link>
        <Link className={location.pathname === '/matches'? 'header__list_item header_activePage': 'header__list_item'} to='/matches'>
          Матчи
        </Link>
        <Link className={location.pathname === '/shop'? 'header__list_item header_activePage': 'header__list_item'} to='/shop'>
          Магазин
        </Link>
        <Link className={location.pathname === '/about'? 'header__list_item header_activePage': 'header__list_item'} to='/about'>
          О клубе
        </Link>
        <Link className={location.pathname === '/contacts'? 'header__list_item header_activePage': 'header__list_item'} to='/contacts'>
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
