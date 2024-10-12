import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/user/goods.css'

const Goods = ({ tickets = [], goods = [] }) => {
  const [active, setActive] = React.useState(1)
  const ticket = tickets.filter((item) => !item.completed)
  const matches = ticket.filter((item) => item.completed)
  return (
    <div className='user_container user_inner'>
      <nav className='goods_btns'>
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? 'goods_btn goods_btn-active' : 'goods_btn'}
        >
          Билеты
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? 'goods_btn goods_btn-active' : 'goods_btn'}
        >
          Товары
        </button>
      </nav>
      {active === 2 ? (
        <>
          <ul className='goods_list'>
            {goods.length > 0 && (
              <ul className='goods__list_col'>
                <li>Название</li>
                <li>Дата заказа</li>
                <li>Стоимость</li>
                <li>Статус</li>
              </ul>
            )}
            {goods.length ? (
              goods.map((item, i) => {
                return (
                  <li key={i} className='goods_list_item'>
                    <h3 className='good_characteristic'>{item.name}</h3>
                    <h3 className='good_characteristic'>{item.time}</h3>
                    <h3 className='good_characteristic'>{item.cost}</h3>
                    <h3 className='good_characteristic'>
                      {item.status ? (
                        'Оплачено'
                      ) : (
                        <span onClick={() => (item.status = true)}>
                          Оплатить
                        </span>
                      )}
                    </h3>
                  </li>
                )
              })
            ) : (
              <>
                <h2 className='goods_list_empty'>Заказы товаров отсутствуют</h2>
                <h3 className='goods_info'>
                  Приобрести можно в разделе <Link to='../shop'>“Магазин”</Link>
                </h3>
              </>
            )}
          </ul>
        </>
      ) : (
        <>
          <ul className='goods_list'>
            {ticket.length > 0 && (
              <ul className='goods__list_col'>
                <li>Название</li>
                <li>Дата заказа</li>
                <li>Стоимость</li>
                <li>Статус</li>
              </ul>
            )}
            {ticket.length ? (
              ticket.map((item, i) => {
                return (
                  <li key={i} className='goods_list_item'>
                    <h3 className='good_characteristic'>{item.name}</h3>
                    <h3 className='good_characteristic'>{item.time}</h3>
                    <h3 className='good_characteristic'>{item.cost}</h3>
                    <h3 className='good_characteristic'>
                      {item.status ? (
                        'Оплачено'
                      ) : (
                        <span onClick={() => (item.status = true)}>
                          Оплатить
                        </span>
                      )}
                    </h3>
                  </li>
                )
              })
            ) : (
              <>
                <h2 className='goods_list_empty'>Заказы билетов отсутствуют</h2>
                <h3 className='goods_info'>
                  Приобрести можно в разделе{' '}
                  <Link to='../matches'>“Матчи”</Link>
                </h3>
              </>
            )}
          </ul>
        </>
      )}
    </div>
  )
}

export default Goods
