import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { deHashData } from './Hooks/hesh'
import { setAllFields } from '../RTK/slices/personSlice'
import { setAllCart } from '../RTK/slices/cartSlice'
import logo from '../images/globals/logo.png'
import burgerSvg from '../images/mainPage/burger.svg'
import personSvg from '../images/mainPage/person.svg'
import backetSvg from '../images/mainPage/basket.svg'
import '../css/main/headerMobile.css'

const HeaderMobile = () => {
  // console.log('HeaderMobile update')
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    let userData = localStorage.getItem('User')
    let cart = localStorage.getItem('Cart')
    if (userData) {
      const {
        name,
        surname,
        patronymic,
        email,
        phone,
        birthday,
        inRf,
        gender,
      } = deHashData(userData)
      const obj = {
        name,
        surname,
        patronymic,
        email,
        phone,
        birthday,
        inRF: inRf,
        gender,
      }
      dispatch(setAllFields(obj))
    }
    if(cart) {
      cart = deHashData(cart)
      console.log(cart)
      if(cart.length) dispatch(setAllCart(cart))
    }
  }, [dispatch])
  const userData = useSelector((state) => state.person)
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
          {userData.auth ? (
            <Link to='user'>
              <span className='header_mobile_name'>
                {userData.data.name[0]}
              </span>
            </Link>
          ) : (
            <Link to='auth'>
              <img src={personSvg} alt='person' />
            </Link>
          )}
        </nav>
      </header>
      <nav
        className={isOpen ? 'burger_menu burger_menu-active' : 'burger_menu'}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={isOpen ? 'burger_close' : 'hidden'}
        >
          <div></div>
          <div></div>
        </div>
        <Link
          to='news'
          onClick={() => setIsOpen(false)}
          className='burger_menu_item'
        >
          Новости
        </Link>
        <Link
          to='team'
          onClick={() => setIsOpen(false)}
          className='burger_menu_item'
        >
          Команда
        </Link>
        <Link
          to='matches'
          onClick={() => setIsOpen(false)}
          className='burger_menu_item'
        >
          Матчи
        </Link>
        <Link
          to='shop'
          onClick={() => setIsOpen(false)}
          className='burger_menu_item'
        >
          Магазин
        </Link>
        <Link
          to='about'
          onClick={() => setIsOpen(false)}
          className='burger_menu_item'
        >
          О клубе
        </Link>
        <Link
          to='contacts'
          onClick={() => setIsOpen(false)}
          className='burger_menu_item'
        >
          Контакты
        </Link>
      </nav>
    </>
  )
}

export default HeaderMobile
// docker build -t kokos_team_django .
