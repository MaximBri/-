import { shopAccessories } from '../../tempData/shop'
import { Link } from 'react-router-dom'
import '../../css/shop/accessories.css'

export const Accessories = () => {
  return (
    <div className='accessories'>
      <h1 className='accessories__title'>Аксессуары</h1>
      <div className='accessories__cards'>
      {shopAccessories.map((item, i) => (
        <div className='accessories__card' key={i}>
          <img className='accessories__card-img' src={item.img} alt="" />
          <h4 className='accessories__card-name'>{item.name}</h4>
          <div className='accessories__card-info'>
            <span className='accessories__card-price'>{item.price}  ₽</span>
            <Link className='accessories__card-link' to='#' >В корзину</Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}