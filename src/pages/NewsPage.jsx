import React from 'react'
import { Link } from 'react-router-dom'

import news from '../tempData/news'
import '../css/news/news.css'
import imgBg from '../images/newsPage/news-bg.png'
import newsImg from '../images/newsPage/news-img.png'

const NewsPage = () => {
  const [page, setPage] = React.useState(1)
  const API_URL = 'api'
  React.useEffect(() => {
    // для показа новостей при клике на кнопку
    //
  }, [page])
  return (
    <>
      <div className='container'>
        <div className='news_img'>
          <img src={imgBg} alt='Background-image' />
          <h1 className='news_title'>Новости</h1>
        </div>
        <ul className='news__box'>
          {news.map((item) => {
            return (
              <li className='news__new' key={item.id}>
                <div className='news__about'>
                  <h2 className='new_title'>{item.title}</h2>
                  <h3 className='new_subtitle'>{item.description}</h3>
                  <Link className='new_btn' to='#post'>
                    Подробнее
                  </Link>
                </div>
                <img className='new_img' src={newsImg} alt='match' />
                <h4 className='news_time'>{item.time}</h4>
              </li>
            )
          })}
        </ul>
        <div className='news_bottom'>
          <span onClick={() => setPage(page + 1)} className='news_button'>
            Показать ещё
          </span>
        </div>
      </div>
    </>
  )
}

export default NewsPage
