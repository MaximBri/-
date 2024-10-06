import React from 'react'
import { Link } from 'react-router-dom'

import '../css/main/footer.css'
import logo from '../images/globals/logo.png'
import WhatsAppSvg from '../images/Links/whatsapp.svg'
import VkSvg from '../images/Links/vk.svg'
import YTSvg from '../images/Links/yt.svg'
import TGSvg from '../images/Links/tg.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/'>
        <img className='footer_logo' src={logo} alt='Logo' />
      </Link>
      <div className='footer_links'>
        <Link>
          <img src={WhatsAppSvg} alt='What`s App' />
        </Link>
        <Link>
          <img src={VkSvg} alt='Vk' />
        </Link>
        <Link>
          <img src={YTSvg} alt='YouTube' />
        </Link>
        <Link>
          <img src={TGSvg} alt='Telegram' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
