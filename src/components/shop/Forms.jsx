import { shopForms } from '../../tempData/shop'
import '../../css/shop/forms.css'
import { useState } from 'react'

export const Forms = ({ handleClick, isInCart }) => {
  const [isActiveSize, setIsActiveSize] = useState(0)

  const handleClickSize = (itemId, index) => {
    setIsActiveSize(prevSize => ({
      ...prevSize,
      [itemId]: prevSize[itemId] === index ? null : index
    }))
  }

  return (
    <div className='forms'>
      <h1 className='forms__title'>Футболки</h1>
      <div className='forms__cards'>
        {shopForms.map(item => (
          <div className='forms__card' key={item.id}>
            <img className='forms__card-img' src={item.img} alt="" />
            <span className='forms__card-name'>{item.name}</span>
            <span className='forms__card-sizes'>
              {item.sizes.map((size, index) => {
                return (
                  <span
                    className={`forms__card-size ${isActiveSize[item.id] === index ? 'active' : ''}`}
                    key={size}
                    onClick={() => handleClickSize(item.id, index)}
                  >
                    {size}
                  </span>
                )
              })}

            </span>
            <div className='forms__card-info'>
              <span className='forms__card-price'>{item.price}  ₽</span>
              <button
                className='forms__card-btn'
                onClick={() => handleClick(item)}
              >
                {isInCart(item) ? 'Удалить' : 'В корзину'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}