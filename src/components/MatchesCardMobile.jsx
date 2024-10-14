import React from 'react'
import { Link } from 'react-router-dom'

import convertDataTime from './Hooks/convertDataTime'
import kokosLogo from '../images/mainPage/kokocGroupLogo.png'
import play from '../images/mainPage/triangle.svg'
import '../css/matches/matchesCardMobile.css'

const MatchesCardMobile = ({ match }) => {
  const [currentTime, setCurrentTime] = React.useState(new Date())
  let completed = new Date(match.play_time) <= new Date() ? true : false
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
  const getMatchResult = (one, two) => {
    if (!completed) return ''
    if (one > two) {
      return 'win'
    } else if (one < two) {
      return 'lose'
    } else {
      return 'draw'
    }
  }
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [currentTime])
  const { difference, days, hours, minutes } = calcTime(match)
  console.log(days, hours, minutes)
  return (
    <div className='matches__card-mobile'>
      <div
        className={`matches__card-content-mobile ${getMatchResult(
          match.team_one_score,
          match.team_two_score
        )}`}
        key={match.id}
      >
        <img
          className='matches__card-img-mobile'
          src={kokosLogo}
          alt='team logo'
        />
        <div className='matches__card-items-mobile'>
          <h4 className='matches__card-tournament-mobile'>
            {match.tournament.title}
          </h4>
          <h3 className='matches__card-item-mobile matches__card-time-mobile'>
            {convertDataTime(match.play_time)}
          </h3>
          {completed ? (
            <span className='matches__score-mobile'>
              {match.team_one_score}:{match.team_two_score}
            </span>
          ) : (
            <div className='matches__card-clocks-mobile'>
              <div className='matches__card-clock-mobile'>
                <span className='clock'>{days > 9 ? days : `0${days}`}:</span>
                <span className='clock'>{hours > 9 ? hours : `0${hours}`}:</span>
                <span className='clock'>{minutes > 9 ? minutes : `0${minutes}`}</span>
              </div>
              <div className='matches__card_clock_info'>
                <span>дней</span>
                <span>часов</span>
                <span>минут</span>
              </div>
            </div>
          )}
          <Link
            to={match.url}
            className={`matches__card-link-mobile ${
              completed ? 'card__link-white-mobile' : 'card__link-red-mobile'
            }`}
          >
            {completed ? (
              <div className='mathes__card-play-mobile'>
                <img src={play} alt='play' />
                Репортаж
              </div>
            ) : (
              'КУПИТЬ БИЛЕТ'
            )}
          </Link>
          <h3 className='matches__card-item-mobile matches__card-place-mobile'>
            {match.place.location}
          </h3>
        </div>
        <img
          className='matches__card-img-mobile'
          src={kokosLogo}
          alt='team logo'
        />
      </div>
    </div>
  )
}

export default MatchesCardMobile
