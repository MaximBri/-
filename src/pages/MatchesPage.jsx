import { useEffect, useState } from 'react'
import convertDataTime from '../components/Hooks/convertDataTime'
import MatchesCardMobile from '../components/MatchesCardMobile'
import MatchesCard from '../components/MatchesCard'

import '../css/matches/matchesPage.css'
// import { newMatches } from '../tempData/matches'
import bgMatches from '../images/matchesPage/matchesMain.jpg'
import dotSvg from '../images/teamPage/dot.svg'

const MatchesPage = () => {
  const [current, setCurrent] = useState(true)
  const [activeMonth, setActiveMonth] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [futureMatches, setFutureMatches] = useState([])
  const [pastMatches, setPastMatches] = useState([])
  const handleClick = (index) => {
    setActiveMonth(activeMonth === index ? null : index)
  }
  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/matches/matches/half-year' // убрать хард код
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((responseData) => {
        console.log(responseData)
        const currentTime = new Date()
        setPastMatches(
          responseData
            .filter((item) => new Date(item.play_time) <= currentTime)
            .sort((a, b) => new Date(b.play_time) - new Date(a.play_time))
        )
        setFutureMatches(
          responseData
            .filter((item) => new Date(item.play_time) > currentTime)
            .sort((b, a) => new Date(b.play_time) - new Date(a.play_time))
        )
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [])
  console.log(futureMatches)
  console.log(pastMatches)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const allMonths = [
    { name: 'октябрь 2024', future: true },
    { name: 'ноябрь 2024', future: true },
    { name: 'декабрь 2024', future: true },
    { name: 'октябрь 2024', future: false },
    { name: 'сентябрь 2024', future: false },
    { name: 'август 2024', future: false },
  ]
  function convertToMonthYear(dateString) {
    const date = new Date(dateString)
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    return `${month} ${year}`
  }
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
          {current
            ? allMonths
                .filter((month) => month.future)
                .map((item, i) => {
                  return (
                    <li key={i} className='matches__info-date-item'>
                      <div
                        className='matches__info-date-item-title'
                        onClick={() => handleClick(i)}
                      >
                        <h3 className='matches__info-date'>
                          {allMonths[i].name}
                        </h3>
                        <img
                          src={dotSvg}
                          alt='team logo'
                          className={`dot__svg ${
                            activeMonth === i ? 'open' : ''
                          }`}
                          style={{ transition: 'transform 0.3s ease' }}
                        />
                      </div>
                      <div className='matches__info-date-item-content'>
                        {activeMonth === i &&
                          futureMatches.map((item, j) => {
                            if (
                              convertToMonthYear(
                                item.play_time
                              ).toLocaleLowerCase() ===
                              allMonths[i].name.toLocaleLowerCase()
                            ) {
                              return screenWidth <= 768 ? (
                                <MatchesCardMobile key={j} match={item} />
                              ) : (
                                <MatchesCard key={j} match={item} />
                              )
                            }
                          })}
                      </div>
                    </li>
                  )
                })
            : allMonths
                .filter((month) => !month.future)
                .map((item, i) => {
                  return (
                    <li key={i} className='matches__info-date-item'>
                      <div
                        className='matches__info-date-item-title'
                        onClick={() => handleClick(i)}
                      >
                        <h3 className='matches__info-date'>{item.name}</h3>
                        <img
                          src={dotSvg}
                          alt='team logo'
                          className={`dot__svg ${
                            activeMonth === i ? 'open' : ''
                          }`}
                          style={{ transition: 'transform 0.3s ease' }}
                        />
                      </div>
                      <div className='matches__info-date-item-content'>
                        {activeMonth === i &&
                          pastMatches.map((item, j) => {
                            console.log(convertToMonthYear(item.play_time))
                            console.log(allMonths[i].name.toLocaleLowerCase())
                            if (
                              convertToMonthYear(
                                item.play_time
                              ).toLocaleLowerCase() ===
                              allMonths[i+3].name.toLocaleLowerCase()
                            ) {
                              return screenWidth <= 768 ? (
                                <MatchesCardMobile key={j} match={item} />
                              ) : (
                                <MatchesCard key={j} match={item} />
                              )
                            }
                          })}
                      </div>
                    </li>
                  )
                })}
        </ul>
      </div>
    </>
  )
}

export default MatchesPage
