import React from 'react'
import { Link } from 'react-router-dom'

import matches from '../tempData/matches'
import '../css/main/matches.css'
import imgPng from '../images/mainPage/kokocGroupLogo.png'
import decoreSvg from '../images/mainPage/triangle.svg'
const ThreeMatches = () => {
  return (
    <ul className='matches__box'>
      {matches.map((item) => {
        if (!item.completed) {
          return (
            <li className='match' key={item.id}>
              <h3 className='match_title-light'>МИР Российская премьер-лига</h3>
              <h2 className='match_time'>{item.time}</h2>
              <div className='match__about'>
                <img src={imgPng} alt='Kokos' />
                <span className='match_info-time'>
                  00:00:00
                  <span>
                    <span>дней</span>
                    <span>часов</span>
                    <span>минут</span>
                  </span>
                </span>
                <img src={imgPng} alt='Kokos' />
              </div>
              <Link to='#video' className='match_btn'>
                Купить билеты
              </Link>
              <h3 className='match_btm-text'>ЛУКОЙЛ Арена</h3>
            </li>
          )
        }
        return (
          <li
            key={item.id}
            className={
              item.data[0] > item.data[1] ? 'match green-bg' : 'match red-bg'
            }
          >
            <h3 className='match_title'>МИР Российская премьер-лига</h3>
            <h2 className='match_time'>{item.time}</h2>
            <div className='match__about'>
              <img src={imgPng} alt='Kokos' />
              <span className='match_info'>
                {item.data[0]}:{item.data[1]}
              </span>
              <img src={imgPng} alt='Kokos' />
            </div>
            <Link className='match_video' to='#video'>
              <img src={decoreSvg} alt='Triangle' />
              Репортаж
            </Link>
            <h3 className='match_btm-text'>ЛУКОЙЛ Арена</h3>
          </li>
        )
      })}
    </ul>
  )
}

export default ThreeMatches
