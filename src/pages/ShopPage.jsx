import bgShop from '../images/shop/bg-shop.png'
import logoShop from '../images/shop/logo-shop.png'
import { Forms } from '../components/shop/Forms'
import { Accessories } from '../components/shop/Accessories'
import { useDispatch, useSelector } from 'react-redux'
import { setItemCart,deleteItemCart } from '../RTK/slices/cartSlice'
import '../css/shop/shopPage.css'



const ShopPage = () => {
  const dispatch = useDispatch()
  const itemsCart = useSelector(state => state.cart.itemsCart)

  const isInCart = (item) => {
    return itemsCart.some(cartItem => cartItem.id === item.id)
  }

  const handleClick = (item) => {
    if (isInCart(item)) {
      dispatch(deleteItemCart(item.id))
    } else {
      dispatch(setItemCart(item))
    }
  }
  return (
    <div className='container'>
      <div className='shop'>
        <h1 className='shop__title'>Магазин</h1>
        <div className='test'>
          <img className='shop__img-bg' src={bgShop} alt="bg-shop" />
          <img className='shop__img-logo' src={logoShop} alt="logo-shop" />
        </div>
      </div>
      <Forms handleClick={handleClick} isInCart={isInCart} />
      <Accessories handleClick={handleClick} isInCart={isInCart} />
    </div>
  )
}

export default ShopPage