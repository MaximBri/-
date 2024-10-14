import React from 'react'
import { Link } from 'react-router-dom'

import convertDataTime from './Hooks/convertDataTime'
import matches from '../tempData/matches'
import '../css/main/matches.css'
import imgPng from '../images/mainPage/kokocGroupLogo.png'
import decoreSvg from '../images/mainPage/triangle.svg'
const ThreeMatches = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval); 
  }, [currentTime]);
  const calcTime = (item) => {
    const difference = +new Date(item.time) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60) / 24),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      }
    }
    return { ...timeLeft, difference }
  }
  return (
    <ul className='matches__box'>
      {matches.map((item) => {
        const { difference, days, hours, minutes } = calcTime(item)
        if (difference > 0) {
          return (
            <li className='match' key={item.id}>
              <h3 className='match_title-light'>МИР Российская премьер-лига</h3>
              <h2 className='match_time'>{convertDataTime(item.time)}</h2>
              <div className='match__about'>
                <img src={imgPng} alt='Kokos' />
                <span className='match_info-time'>
                  {days > 9 ? days : `0${days}`}:
                  {hours > 9 ? hours : `0${hours}`}:
                  {minutes > 9 ? minutes : `0${minutes}`}
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
            <h2 className='match_time'>{convertDataTime(item.time)}</h2>
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
