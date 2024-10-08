import React from 'react'
import { Link } from 'react-router-dom'

import '../css/notFound/notFound.css'
import image from '../images/NotFoundPage/nf-img.png'
import logo from '../images/NotFoundPage/logo-light.png'

const NotFoundPage = () => {
  return (
    <div className='Nf'>
      <h1 className='Nf_text'>
        <span>404</span> <br />
        Страница не найдена
      </h1>
      <Link to='/'><img className='Nf_logo' src={logo} alt='logo' /></Link>
      <img className='Nf_img' src={image} alt='not found' />
    </div>
  )
}

export default NotFoundPage
