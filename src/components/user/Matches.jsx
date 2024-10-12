import React from 'react'
import { Link } from 'react-router-dom'

const Matches = ({ matches = [] }) => {
  return (
    <>
      <div className='user_container user_inner goods_list'>
        {matches.length > 0 && (
          <ul className='goods__list_col'>
            <li>Название</li>
            <li>Дата заказа</li>
            <li>Стоимость</li>
            <li>Статус</li>
          </ul>
        )}
        <ul className='matches__match'>
          {matches.length ? (
            matches.map((item, i) => {
              return (
                <li key={i} className='goods_list_item'>
                  <h3 className='good_characteristic'>{item.name}</h3>
                  <h3 className='good_characteristic'>{item.time}</h3>
                  <h3 className='good_characteristic'>{item.cost}</h3>
                  <h3 className='good_characteristic'>
                    {item.status ? (
                      'Посещено'
                    ) : (
                      <span onClick={() => (item.status = true)}>Не посещено</span>
                    )}
                  </h3>
                </li>
              )
            })
          ) : (
            <h2 className='goods_list_empty'>Вы не посетили ни одного <Link to='../matches'>матча</Link></h2>
          )}
        </ul>
      </div>
    </>
  )
}

export default Matches
