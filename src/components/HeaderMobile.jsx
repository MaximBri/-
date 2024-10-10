import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/globals/logo.png'
import burgerSvg from '../images/mainPage/burger.svg'
import personSvg from '../images/mainPage/person.svg'
import backetSvg from '../images/mainPage/basket.svg'
import '../css/main/headerMobile.css'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <header className='header_mobile'>
        <span onClick={() => setIsOpen(true)} className='header_burger'>
          <img src={burgerSvg} alt='burger' />
        </span>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <nav className='header_mobile_nav'>
          <Link to='shop'>
            <img src={backetSvg} alt='basket' />
          </Link>
          <Link to='auth'>
            <img src={personSvg} alt='person' />
          </Link>
        </nav>
      </header>

      <nav
        className={isOpen ? 'burger_menu burger_menu-active' : 'burger_menu'}
      >
        <div onClick={() => setIsOpen(false)} className={isOpen?'burger_close': 'hidden'}>
          <div></div>
          <div></div>
        </div>
        <Link to='news' onClick={() => setIsOpen(false)} className='burger_menu_item'>
          Новости
        </Link>
        <Link to='team' onClick={() => setIsOpen(false)} className='burger_menu_item'>
          Команда
        </Link>
        <Link to='matches' onClick={() => setIsOpen(false)} className='burger_menu_item'>
          Матчи
        </Link>
        <Link to='shop' onClick={() => setIsOpen(false)} className='burger_menu_item'>
          Магазин
        </Link>
        <Link to='about' onClick={() => setIsOpen(false)} className='burger_menu_item'>
          О клубе
        </Link>
        <Link to='contacts' onClick={() => setIsOpen(false)} className='burger_menu_item'>
          Контакты
        </Link>
      </nav>
    </>
  )
}

export default HeaderMobile
// docker build -t kokos_team_django .
