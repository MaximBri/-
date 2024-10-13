import aboutPartners from '../../tempData/partners';
import dotSvg from '../../images/teamPage/dot.svg';
import '../../css/aboutPage/Partners.css'
import { useState } from 'react';

export const Partners = () => {
  const [isOpen, setIsOpen] = useState(0)

  const handleClick = (index) => {
    setIsOpen(prev => prev === index ? null : index)
  }

  return (
    <div className="partners">
      <ul className="partners__items">
        {aboutPartners.map((partner, index) => (
          <li className="partners__item" key={partner.id}> 
            <div 
            className="partners__header"
            onClick={() => handleClick(index)}
            >
              <span className="partners__name">{partner.name}</span>
              <img 
              src={dotSvg} 
              alt="dot" 
              className={`partners__dot ${isOpen === index ? 'open' : ''}`}
              />
            </div>
            <div className="partners__description">
              {isOpen === index && partner.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};