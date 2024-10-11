import { useEffect, useState } from 'react'
import '../css/matches/matchesPage.css'
import bgMatches from '../images/matchesPage/matchesMain.jpg'
import { newMatches } from '../tempData/matches'
import MatchesCard from '../components/MatchesCard'
import MatchesCardMobile from '../components/MatchesCardMobile'
import dotSvg from '../images/teamPage/dot.svg'

const MatchesPage = () => {
  const [current, setCurrent] = useState(true)
  const [activeMonth, setActiveMonth] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleClick = (index) => {
    setActiveMonth(activeMonth === index ? null : index)
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const allMonths = [
    { name: 'Октябрь 2024', future: true },
    { name: 'Ноябрь 2024', future: true },
    { name: 'Декабрь 2024', future: true },
    { name: 'Январь 2025', future: true},
    { name: 'Январь 2024', future: false },
    { name: 'Декабрь 2023', future: false },
  ]

  const filteredMonths = allMonths.filter(month => current ? month.future : !month.future)

  const filteredMatches = newMatches.filter(match => {
    if (current && !match.completed) {
      return true
    } else if (!current && match.completed) {
      return true
    } else return false
  })

  return (
    <>
      <div className='container'>
        <div className='matches__img'>
          <img src={bgMatches} alt='bg-image' />
          <h1 className='matches__title'>Матчи</h1>
        </div>
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
          {filteredMonths.map((month, i) => (
            <li key={i} className='matches__info-date-item'>
              <div
                className='matches__info-date-item-title'
                onClick={() => handleClick(i)}
              >
                <h3 className='matches__info-date'>{month.name}</h3>
                <img
                  src={dotSvg}
                  alt='team logo'
                  className={`dot__svg ${activeMonth === i ? 'open' : ''}`}
                  style={{ transition: 'transform 0.3s ease' }}
                />
              </div>
              <div className='matches__info-date-item-content'>
                {activeMonth === i && (
                  screenWidth <= 768 ? (
                    <MatchesCardMobile matches={filteredMatches} />
                  ) : (
                    <MatchesCard matches={filteredMatches} />
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MatchesPage
