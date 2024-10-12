import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setAuthForm, setRegisterForm } from '../RTK/slices/authFormsSlice'
import { deHashData } from './Hooks/hesh'
import { setData, setAllFields } from '../RTK/slices/personSlice'
import Register from './Register'
import Auth from './Auth'
import '../css/main/header.css'
import logo from '../images/globals/logo.png'

const Header = () => {
  // console.log('Header update...')
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  React.useEffect(() => {
    let userData = localStorage.getItem('User')
    console.log(userData)
    if (userData) {
      const {name, surname, patronymic, email, phone, birthday, inRF, gender} = deHashData(userData)
      const obj = {
        name,
        surname,
        patronymic,
        email,
        phone,
        birthday,
        inRF,
        gender
      }
      console.log(obj)
      dispatch(setAllFields(obj))
      // dispatch(setData(userData))
    }
  }, [dispatch])

  const userData = useSelector((state) => state.person)
  const { auth, register } = useSelector((state) => state.auth)
  React.useEffect(() => {
    if (register || auth) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'visible'
  }, [register, auth])
  const openRegister = () => {
    dispatch(setAuthForm(false))
    dispatch(setRegisterForm(true))
  }
  const openAuth = () => {
    dispatch(setRegisterForm(false))
    dispatch(setAuthForm(true))
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
    } else dispatch(setAuthForm(true))
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
        {!userData.auth ? (
          <span
            onClick={() => authNavigate()}
            className={
              location.pathname === '/user'
                ? 'header_btn header_btn-active'
                : 'header_btn'
            }
          >
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
        ) : (
          <span onClick={() => navigate('user')} className='header_btn'>
            {userData.data.name}
            <svg
              width='48'
              height='48'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='48' height='48' rx='24' fill='white' />
              <path
                d='M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H16C13.8783 30 11.8434 30.8429 10.3431 32.3431C8.84285 33.8434 8 35.8783 8 38V42M32 14C32 18.4183 28.4183 22 24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14Z'
                stroke='black'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        )}
      </header>
      {auth && (
        <>
          <div
            onClick={() => dispatch(setAuthForm(false))}
            className='modal_wrapper'
          ></div>
          <Auth func={openRegister} />
        </>
      )}
      {register && (
        <>
          <div
            onClick={() => dispatch(setRegisterForm(false))}
            className='modal_wrapper'
          ></div>
          <Register func={openAuth} />
        </>
      )}
    </>
  )
}

export default Header
