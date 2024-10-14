import { Link } from 'react-router-dom'

import convertDataTime from './Hooks/convertDataTime'
import teamLogo from '../images/matchesPage/krasnodar-logo.png'
import play from '../images/matchesPage/play.svg'
import '../css/matches/matchesCard.css'

const MatchesCard = ({ match }) => {
  let completed = new Date(match.play_time) <= new Date() ? true: false
  const getMatchResult = (one, two) => {
    if(!completed) return ''
    if (one > two) {
      return 'win'
    } else if (one < two) {
      return 'lose'
    } else {
      return 'draw'
    }
  }

  return (
    <div className='matches__card'>
      <div
        className={`matches__card-content ${getMatchResult(match.team_one_score, match.team_two_score)}`}
        key={match.id}
      >
        <img className='matches__card-img' src={teamLogo} alt='team logo' />
        <div className='matches__card-items'>
          <h4 className='matches__card-tournament'>{match.tournament.title}</h4>
          <h3 className='matches__card-item matches__card-time'>
            {convertDataTime(match.play_time)}
          </h3>
          {completed && (
            <span className='matches__score'>{match.team_one_score}:{match.team_two_score}</span>
          )}
          <h3 className='matches__card-item matches__card-place'>
            {match.place.location}
          </h3>
        </div>
        <Link
          to={match.url}
          className={`matches__card-link ${
            completed ? 'card__link-white' : 'card__link-red'
          }`}
        >
          {completed ? (
            <div className='mathes__card-play'>
              <img src={play} alt='play' />
              Репортаж
            </div>
          ) : (
            'КУПИТЬ БИЛЕТ'
          )}
        </Link>
      </div>
    </div>
  )
}

export default MatchesCard
