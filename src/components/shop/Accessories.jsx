import { shopAccessories } from '../../tempData/shop'
import '../../css/shop/accessories.css'

export const Accessories = ({ handleClick, isInCart }) => {
  return (
    <div className='accessories'>
      <h1 className='accessories__title'>Аксессуары</h1>
      <div className='accessories__cards'>
        {shopAccessories.map(item => (
          <div className='accessories__card' key={item.id}>
            <img className='accessories__card-img' src={item.img} alt="" />
            <h4 className='accessories__card-name'>{item.name}</h4>
            <div className='accessories__card-info'>
              <span className='accessories__card-price'>{item.price}  ₽</span>
              <button
                className='accessories__card-btn'
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