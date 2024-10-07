import React from 'react'

import '../../css/team/manList.css'
import player2Png from '../../images/teamPage/player2.png'

const ManList = ({ list }) => {
  return (
    <ul className='man__box'>
      {list.map((item) => {
        return (
          <li className='man'>
            <img src={player2Png} alt='Trener' />
            <h3 className='man_name'>{item.name}</h3>
            <h4 className='man_role'>{item.role}</h4>
          </li>
        )
      })}
    </ul>
  )
}

export default ManList
