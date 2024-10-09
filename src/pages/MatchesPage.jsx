import { useState } from 'react'
import '../css/matches/matchesPage.css'
import ThreeMatches from '../components/ThreeMatches'
import bgMatches from '../images/matchesPage/matchesMain.jpg'
import Matches from '../components/MatchesCard'
import dotSvg from '../images/teamPage/dot.svg'

const MatchesPage = () => {
  const [current, setCurrent] = useState(true)
  const [activeMonth, setActiveMonth] = useState(0)

  const handleClick = (index) => {
    setActiveMonth(activeMonth === index ? null : index)
  }

  const upcomingMathes = [
    { name: 'Октябрь 2024', matches: <Matches type='upcoming' /> },
    { name: 'Ноябрь 2024', matches: <Matches type='upcoming' /> },
    { name: 'Декабрь 2024', matches: <Matches type='upcoming' /> },
    { name: 'Январь 2025', matches: <Matches type='upcoming' /> },
  ]

  const pastMatches = [
    { name: 'Декабрь 2023', matches: <Matches type='past' /> },
    { name: 'Январь 2024', matches: <Matches type='past' /> },
  ]

  const months = current ? upcomingMathes : pastMatches

  return (
    <>
      <div className='container'>
        <div className='matches__img'>
          <img src={bgMatches} alt='bg-image' />
          <h1 className='matches__title'>Матчи</h1>
        </div>
        <ThreeMatches />
        <div className='matches__info'>
          <div className='matches__info-btns'>
            <span
              onClick={() => setCurrent(true)}
              className={
                current
                  ? 'matches__info-btn-active matches__info-btn'
                  : 'matches__info-btn'
              }
            >
              Предстоящие
            </span>
            <span
              onClick={() => setCurrent(false)}
              className={
                !current
                  ? 'matches__info-btn matches__info-btn-active'
                  : 'matches__info-btn'
              }
            >
              Прошедшие
            </span>
          </div>
          <div className='matches__info-select'>
            <ul className='matches__info-select-items'>
              <li className='matches__info-select-item'>
                <h4 className='matches__info-select-item-title'>Все турниры</h4>
                <img
                  className='matches__info-select-item-img'
                  src={dotSvg}
                  alt='dotSvg'
                />
                {/* <ul>
                <li>Все турниры</li>
                <li>МИР Российская премьер лига</li>
                <li>МИР Российская премьер лига</li>
              </ul> */}
              </li>
            </ul>
            <ul className='matches__info-select-items'>
              <li className='matches__info-select-item'>
                <h4 className='matches__info-select-item-title'>2024-2025</h4>
                <img
                  className='matches__info-select-item-img'
                  src={dotSvg}
                  alt='dotSvg'
                />
              </li>
            </ul>
          </div>
        </div>
        <ul className='matches__info-date-items'>
          {months.map((month, i) => (
            <li key={i} className='matches__info-date-item'>
              <div
                className='matches__info-date-item-title'
                onClick={() => handleClick(i)}
              >
                <h3 className='matches__info-date'>{month.name}</h3>
                <img
                  src={dotSvg}
                  alt='team logo'
                  className={activeMonth === i ? 'open' : ''}
                  style={{ transition: 'transform 0.3s ease' }}
                />
              </div>
              <div className='matches__info-date-item-content'>
                {activeMonth === i && month.matches}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MatchesPage
