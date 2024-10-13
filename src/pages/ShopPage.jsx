import React from 'react'
import { useSelector } from 'react-redux'

import { Forms } from '../components/shop/Forms'
import { Accessories } from '../components/shop/Accessories'
import { hashData, deHashData } from '../components/Hooks/hesh'

import bgShop from '../images/shop/bg-shop.png'
import logoShop from '../images/shop/logo-shop.png'
import { shopForms } from '../tempData/shop'
import { shopAccessories } from '../tempData/shop'
import '../css/shop/shopPage.css'

const ShopPage = () => {
  let itemsCart = useSelector((state) => state.cart.itemsCart)
  const [formsArr, setFormsArr] = React.useState([])
  const [accArr, setAccArr] = React.useState([])
  // let formsArr = []
  // let accArr = []
  // itemsCart.forEach((element) => {
  //   if (element.type === 'form') formsArr[element.id - 1] = true
  //   else accArr[element.id - 1] = true
  // })
  React.useEffect(() => {
    const newFormsArr = []
    const newAccArr = []
    itemsCart.forEach((element) => {
      if (element.type === 'form') newFormsArr[element.id - 1] = true
      else newAccArr[element.id - 1] = true
    })
    setFormsArr(newFormsArr)
    setAccArr(newAccArr)
    const items = hashData(itemsCart)
    localStorage.setItem('Cart', items)
  }, [itemsCart])
  console.log(formsArr)
  return (
    <div className='container'>
      <div className='shop'>
        <h1 className='shop__title'>Магазин</h1>
        <div className='test'>
          <img className='shop__img-bg' src={bgShop} alt='bg-shop' />
          <img className='shop__img-logo' src={logoShop} alt='logo-shop' />
        </div>
      </div>
      <div className='forms'>
        <h1 className='forms__title'>Футболки</h1>
        <div className='forms__cards'>
          {shopForms.map((item, i) => {
            return <Forms key={i} item={item} inArr={formsArr[i]} />
          })}
        </div>
      </div>
      <div className='accessories'>
        <h1 className='accessories__title'>Аксессуары</h1>
        <div className='accessories__cards'>
          {shopAccessories.map((item, i) => {
            return <Accessories item={item} key={i} inArr={accArr[i]} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
