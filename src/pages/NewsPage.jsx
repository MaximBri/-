import React from 'react'
import { Link } from 'react-router-dom'

import convertDataTime from '../components/Hooks/convertDataTime'
import '../css/news/news.css'
import imgBg from '../images/newsPage/news-bg.png'

const NewsPage = () => {
  const [news, setNews] = React.useState([])
  let [countNews, setCountNews] = React.useState(1)
  React.useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/news/news' // убрать хард код
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((responseData) => {
        setNews(responseData)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [])
  return (
    <>
      <div className='container'>
        <div className='news_img'>
          <img src={imgBg} alt='Background-image' />
          <h1 className='news_title'>Новости</h1>
        </div>
        <ul className='news__box'>
          {!news?.length && <h2 className='news_empty'>Новостей нет</h2>}
          {news.map((item, i) => {
            if (i < countNews) {
              return (
                <li className='news__new' key={item.id}>
                  <div className='news__about'>
                    <h2 className='new_title'>{item.title}</h2>
                    <h3 className='new_subtitle'>{item.content}</h3>
                    <Link className='new_btn' to='#post'>
                      Подробнее
                    </Link>
                  </div>
                  <img className='new_img' src={item.image} alt='match' />
                  <h4 className='news_time'>
                    {convertDataTime(item.created_at).split(',')[0]}
                  </h4>
                </li>
              )
            }
          })}
        </ul>
        {countNews !== news.length && news.length > 0 && (
          <div className='news_bottom'>
            <span
              onClick={() => setCountNews((countNews += 1))}
              className='news_button'
            >
              Показать ещё
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default NewsPage
