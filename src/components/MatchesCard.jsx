import { Link } from 'react-router-dom';
import { newMatches } from '../tempData/matches';
import teamLogo from '../images/matchesPage/krasnodar-logo.png';
import '../css/matches/matchesCard.css';

const Matches = ({ type }) => {
  const matchesData =
    type === 'upcoming'
      ? newMatches.filter((match) => !match.completed)
      : newMatches.filter((match) => match.completed);

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
    <div className="matches__card">
      {matchesData.map((match) => {
        const resultClass = getMatchResult(match.score);

        return (
          <div
            className={`matches__card-content ${resultClass}`}
            key={match.id}
          >
            <img className="matches__card-img" src={teamLogo} alt="team logo" />
            <div className="matches__card-items">
              <h4 className="matches__card-tournament">{match.tournament}</h4>
              <h3 className="matches__card-item matches__card-time">{match.time}</h3>
              {match.completed && (
                <span className="matches__score">{match.score.join(' : ')}</span>
              )}
              <h3 className="matches__card-item matches__card-place">{match.place}</h3>
            </div>
            <Link to={match.url} className="matches__card-link">
              КУПИТЬ БИЛЕТ
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Matches;