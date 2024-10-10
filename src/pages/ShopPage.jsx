import React from 'react'
import bgShop from '../images/shop/bg-shop.png'
import logoShop from '../images/shop/logo-shop.png'
import { Forms } from '../components/shop/Forms'
import { Accessories } from '../components/shop/Accessories'
import '../css/shop/shopPage.css'



const ShopPage = () => {
  return (
    <div className='container'>
      <div className='shop'>
        <h1 className='shop__title'>Магазин</h1>
        <div className='test'>
          <img className='shop__img-bg' src={bgShop} alt="bg-shop" />
          <img className='shop__img-logo' src={logoShop} alt="logo-shop" />
        </div>
      </div>
      <Forms />
      <Accessories />
    </div>
  )
}

export default ShopPage