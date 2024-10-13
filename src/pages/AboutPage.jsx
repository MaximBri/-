import { useState } from 'react';
import aboutLogo from '../images/about/about-Logo.png';
import { History } from '../components/about/History';
import { Museum } from '../components/about/Museum';
import { Stadium } from '../components/about/Stadium';
import { Partners } from '../components/about/Partners';
import '../css/aboutPage/aboutPage.css'

const AboutPage = () => {
  const [isActiveNav, setIsActiveNav] = useState(0)

  const handleClick = (index) => {
    setIsActiveNav(index)
  }

  const items = ['История', 'Музей', 'Стадион', 'Партнеры']
  const components = [<History />, <Museum />, <Stadium />, <Partners />]
  return (
    <div className="about-page">
      <div className='container__about-page'>
        <div className="about__page-header">
          <img src={aboutLogo} alt="about logo" className="about__page-logo" />
          <span className="about__page-title">
            {items[isActiveNav]}
          </span>
        </div>
        <div className='about__page'>
          <ul className="about__page-items">
            {items.map((item, index) => (
              <li
                key={item}
                className={`about__page-item ${isActiveNav === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="about__page-content">
            {components[isActiveNav]}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPage