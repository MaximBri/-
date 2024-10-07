import React from 'react'

import players from '../../tempData/players'
import '../../css/team/players.css'
import playerPng from '../../images/teamPage/player.png'

const Players = () => {
  const [current, setCurrent] = React.useState(true)
  const playersActive = players.filter((item) => item.active)
  const playersNotActive = players.filter((item) => !item.active)
  React.useEffect(() => {})
  return (
    <div className='players'>
      <div className='players_btns'>
        <span
          onClick={() => setCurrent(true)}
          className={current ? 'player_btn player_btn-active' : 'player_btn'}
        >
          Текущий состав
        </span>
        <span
          onClick={() => setCurrent(false)}
          className={!current ? 'player_btn player_btn-active' : 'player_btn'}
        >
          Ушедший состав
        </span>
      </div>
      <ul className='players__list'>
        {current
          ? playersActive.map((item, i) => {
              return (
                <div className='player' key={i}>
                  <img src={playerPng} alt='player' />
                  <div className='player__info'>
                    <div className='player__about'>
                      <h3 className='player_name'>{item.name}</h3>
                      <h4 className='player_role'>{item.role}</h4>
                    </div>
                    <span className='palyer_number'>{item.number}</span>
                  </div>
                </div>
              )
            })
          : playersNotActive.map((item, i) => {
              return (
                <div className='player' key={i}>
                  <img src={playerPng} alt='player' />
                  <div className='player__info'>
                    <div className='player__about'>
                      <h3 className='player_name'>{item.name}</h3>
                      <h4 className='player_role'>{item.role}</h4>
                    </div>
                    <span className='palyer_number'>{item.number}</span>
                  </div>
                </div>
              )
            })}
      </ul>
    </div>
  )
}

export default Players
