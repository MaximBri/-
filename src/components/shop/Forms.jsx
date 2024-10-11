import { shopForms } from '../../tempData/shop'
import { Link } from 'react-router-dom'
import '../../css/shop/forms.css'

export const Forms = () => {
  return (
    <div className='forms'>
      <h1 className='forms__title'>Футболки</h1>
      <div className='forms__cards'>
        {shopForms.map(item => (
          <div className='forms__card' key={item.id}>
            <img className='forms__card-img' src={item.img} alt="" />
            <span className='forms__card-name'>{item.name}</span>
            <span className='forms__card-sizes'>{item.sizes.join(' | ')}</span>
            <div className='forms__card-info'>
              <span className='forms__card-price'>{item.price}  ₽</span>
              <Link className='forms__card-link' to='#' >В корзину</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}