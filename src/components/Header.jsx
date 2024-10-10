import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { getAuth } from '../RTK/slices/personSlice'
import Register from './Register'
import Auth from './Auth'
import '../css/main/header.css'
import logo from '../images/globals/logo.png'
import { useSelector } from 'react-redux'

const Header = () => {
  // console.log('Header update...')
  const location = useLocation()
  const navigate = useNavigate()
  const authorized = useSelector(getAuth());
  console.log(authorized)
  const [register, setRegister] = React.useState(false)
  const [auth, setAuth] = React.useState(false)
  React.useEffect(() => {
    if (register || auth) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'visible'
  }, [register, auth])
  const openRegister = () => {
    setAuth(false)
    setRegister(true)
  }
  const openAuth = () => {
    setRegister(false)
    setAuth(true)
  }
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const authNavigate = () => {
    if (screenWidth <= 768) {
      navigate('auth')
    } else setAuth(true)
  }
  return (
    <>
      <header className='header'>
        <Link to='/' className='header_logo'>
          <img src={logo} alt='Logo' />
        </Link>
        <nav className='header__list'>
          <Link
            className={
              location.pathname === '/news'
                ? 'header__list_item header_activePage'
                : 'header__list_item'
            }
            to='/news'
          >
            Новости
          </Link>
          <Link
            className={
              location.pathname === '/team'
                ? 'header__list_item header_activePage'
                : 'header__list_item'
            }
            to='/team'
          >
            Команда
          </Link>
          <Link
            className={
              location.pathname === '/matches'
                ? 'header__list_item header_activePage'
                : 'header__list_item'
            }
            to='/matches'
          >
            Матчи
          </Link>
          <Link
            className={
              location.pathname === '/shop'
                ? 'header__list_item header_activePage'
                : 'header__list_item'
            }
            to='/shop'
          >
            Магазин
          </Link>
          <Link
            className={
              location.pathname === '/about'
                ? 'header__list_item header_activePage'
                : 'header__list_item'
            }
            to='/about'
          >
            О клубе
          </Link>
          <Link
            className={
              location.pathname === '/contacts'
                ? 'header__list_item header_activePage'
                : 'header__list_item'
            }
            to='/contacts'
          >
            Контакты
          </Link>
        </nav>
        <span onClick={() => authNavigate()} className='header_btn'>
          Войти
          <svg
            width='36'
            height='40'
            viewBox='0 0 36 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='header_btn-icon'
              d='M34 38V34C34 31.8783 33.1571 29.8434 31.6569 28.3431C30.1566 26.8429 28.1217 26 26 26H10C7.87827 26 5.84344 26.8429 4.34315 28.3431C2.84285 29.8434 2 31.8783 2 34V38M26 10C26 14.4183 22.4183 18 18 18C13.5817 18 10 14.4183 10 10C10 5.58172 13.5817 2 18 2C22.4183 2 26 5.58172 26 10Z'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      </header>
      {auth && (
        <>
          <div onClick={() => setAuth(false)} className='modal_wrapper'></div>
          <Auth func={openRegister} />
        </>
      )}
      {register && (
        <>
          <div
            onClick={() => setRegister(false)}
            className='modal_wrapper'
          ></div>
          <Register func={openAuth} />
        </>
      )}
    </>
  )
}

export default Header
