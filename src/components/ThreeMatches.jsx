import React from 'react'
import { Link } from 'react-router-dom'

import convertDataTime from './Hooks/convertDataTime'
import '../css/main/matches.css'
import imgPng from '../images/mainPage/kokocGroupLogo.png'
import decoreSvg from '../images/mainPage/triangle.svg'
const ThreeMatches = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date())
  const [matches, setMatches] = React.useState([])
  const [match, setMatch] = React.useState([])
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [currentTime])
  React.useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/matches/matches/half-year' // убрать хард код
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((responseData) => {
        const currentTime = new Date()
        setMatch(
          responseData
            .filter((item) => new Date(item.play_time) <= currentTime)
            .sort((a, b) => new Date(b.play_time) - new Date(a.play_time))[0]
        )
        setMatches(
          responseData
            .filter((item) => new Date(item.play_time) > currentTime)
            .sort((b, a) => new Date(b.play_time) - new Date(a.play_time))
            .slice(0, 2)
        )
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [])
  const calcTime = (item) => {
    const difference = +new Date(item.play_time) - +new Date()
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
      {match && (
        <li
          className={
            match.team_one_score > match.team_two_score
              ? 'match green-bg'
              : 'match red-bg'
          }
        >
          <h3 className='match_title'>МИР Российская премьер-лига</h3>
          <h2 className='match_time'>{convertDataTime(match.play_time)}</h2>
          <div className='match__about'>
            <img src={imgPng} alt='Kokos' />
            <span className='match_info'>
              {match.team_one_score}:{match.team_two_score}
            </span>
            <img src={imgPng} alt='Kokos' />
          </div>
          <Link className='match_video' to='#video'>
            <img src={decoreSvg} alt='Triangle' />
            Репортаж
          </Link>
          <h3 className='match_btm-text'>ЛУКОЙЛ Арена</h3>
        </li>
      )}
      {matches.map((item) => {
        const { difference, days, hours, minutes } = calcTime(item)
        return (
          <li className='match' key={item.id}>
            <h3 className='match_title-light'>МИР Российская премьер-лига</h3>
            <h2 className='match_time'>{convertDataTime(item.play_time)}</h2>
            <div className='match__about'>
              <img src={imgPng} alt='Kokos' />
              <span className='match_info-time'>
                {days > 9 ? days : `0${days}`}:{hours > 9 ? hours : `0${hours}`}
                :{minutes > 9 ? minutes : `0${minutes}`}
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
      })}
    </ul>
  )
}

export default ThreeMatches
