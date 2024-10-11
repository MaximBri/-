import { Link } from 'react-router-dom';

import kokosLogo from '../images/mainPage/kokocGroupLogo.png';
import play from '../images/mainPage/triangle.svg'
import '../css/matches/matchesCardMobile.css';

const MatchesCardMobile = ({ matches }) => {

  const getMatchResult = (score) => {
    if (!score) return '';

    if (score[0] > score[1]) {
      return 'win';
    } else if (score[0] < score[1]) {
      return 'lose';
    } else {
      return 'draw';
    }
  };

  return (
    <div className="matches__card-mobile">
      {matches.map((match) => {
        return (
          <div
            className={`matches__card-content-mobile ${getMatchResult(match.score)}`}
            key={match.id}
          >
            <img className="matches__card-img-mobile" src={kokosLogo} alt="team logo" />
            <div className="matches__card-items-mobile">
              <h4 className="matches__card-tournament-mobile">{match.tournament}</h4>
              <h3 className="matches__card-item-mobile matches__card-time-mobile">{match.time}</h3>
              {match.completed ? (
                <span className="matches__score-mobile">{match.score.join(' : ')}</span>
              ) : (
                <div className='matches__card-clocks-mobile'>
                  <div className='matches__card-clock-mobile'>
                    <span className='clock'>13:</span>
                    <span>дней</span>
                  </div>
                  <div className='matches__card-clock-mobile'>
                    <span className='clock'>10:</span>
                    <span>часов</span>
                  </div>
                  <div className='matches__card-clock-mobile'>
                    <span className='clock'>20</span>
                    <span>минут</span>
                  </div>
                </div>
              )}
              <Link
                to={match.url}
                className={`matches__card-link-mobile ${match.completed ? 'card__link-white-mobile' : 'card__link-red-mobile'}`}>
                {match.completed
                  ? <div className='mathes__card-play-mobile'>
                    <img src={play} alt="play" />
                    Репортаж
                  </div>
                  : 'КУПИТЬ БИЛЕТ'}
              </Link>
                  <h3 className="matches__card-item-mobile matches__card-place-mobile">{match.place}</h3>
            </div>
            <img className="matches__card-img-mobile" src={kokosLogo} alt="team logo" />
          </div>
        );
      })}
    </div>
  );
};

export default MatchesCardMobile;