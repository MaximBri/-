import React from 'react'
import { useDispatch } from 'react-redux'

import { setItemCart, deleteItemCart } from '../../RTK/slices/cartSlice'
import '../../css/shop/forms.css'

export const Forms = ({ item, inArr }) => {
  const dispatch = useDispatch()
  const [size, setSize] = React.useState(0)
  const [inCart, setInCart] = React.useState(inArr ? true : false)
  const sendItem = () => {
    if (!inCart) {
      dispatch(setItemCart({ ...item, size, type: 'form' }))
    } else {
      dispatch(deleteItemCart({ ...item, size, type: 'form' }))
    }
    setInCart(!inCart)
  }
  return (
    <div className='forms__card' key={item.id}>
      <img className='forms__card-img' src={item.img} alt='' />
      <span className='forms__card-name'>{item.name}</span>
      <span className='forms__card-sizes'>
        {item.sizes.map((oneSize, index) => {
          return (
            <span
              className={`forms__card-size ${size === index ? 'active' : ''}`}
              key={index}
              onClick={() => setSize(index)}
            >
              {oneSize}
            </span>
          )
        })}
      </span>
      <div className='forms__card-info'>
        <span className='forms__card-price'>{item.price} ₽</span>
        <button className='forms__card-btn' onClick={() => sendItem()}>
          {inCart ? 'Удалить' : 'В корзину'}
        </button>
      </div>
    </div>
  )
}
