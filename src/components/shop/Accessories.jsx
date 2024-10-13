import React from 'react'
import { useDispatch } from 'react-redux'

import { setItemCart, deleteItemCart } from '../../RTK/slices/cartSlice'
import '../../css/shop/accessories.css'

export const Accessories = ({ item, inArr }) => {
  const dispatch = useDispatch()
  const [inCart, setInCart] = React.useState(inArr ? true : false)
  const addItem = () => {
    if (!inCart) {
      dispatch(setItemCart({ ...item, type: 'acc' }))
    } else {
      dispatch(deleteItemCart({ ...item, type: 'acc' }))
    }
    setInCart(!inCart)
  }
  return (
    <div className='accessories__card' key={item.id}>
      <img className='accessories__card-img' src={item.img} alt='' />
      <h4 className='accessories__card-name'>{item.name}</h4>
      <div className='accessories__card-info'>
        <span className='accessories__card-price'>{item.price} ₽</span>
        <button className='accessories__card-btn' onClick={() => addItem()}>
          {inCart ? 'Удалить' : 'В корзину'}
        </button>
      </div>
    </div>
  )
}
