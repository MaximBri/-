import { Link } from 'react-router-dom'
import { newMatches } from '../tempData/matches'
import teamLogo from '../images/matchesPage/krasnodar-logo.png'
import '../css/matches/matchesCard.css'

const Mathes = ({type}) => {

  const matchesData = type ==='upcoming' 
  ? newMatches.filter(match => !match.completed)
  : newMatches.filter(match => match.completed)

  return (
    <div className='matches__card'>
      {matchesData.map(match => (
        <div className='matches__card-content' key={match.id}>
            <img className='matches__card-img' src={teamLogo} alt="team logo" />
            <div className='matches__card-items'>
              <h4 className='matches__card-tournament'>{match.tournament}</h4>
              <h3 className='matches__card-item matches__card-time'>{match.time}</h3>
              {match.completed && (
                <span className='matches__score'>Счёт: {match.score.join(':')}</span>
              )}
              <h3 className='matches__card-item matches__card-place'>{match.place}</h3>
            </div>
            <Link to={match.url} className='matches__card-link'> КУПИТЬ БИЛЕТ </Link>
        </div>
      ))}
    </div>
  )
}


export default Mathes