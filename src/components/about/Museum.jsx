import dotSvg from '../../images/teamPage/dot.svg';
import '../../css/aboutPage/museum.css'
import { useState } from 'react';

export const Museum = () => {
  const [isOpen, setIsOpen] = useState(0)

  const handleClick = (index) => {
    setIsOpen(prev => prev === index ? null : index)
  }
  const months = [
    '2024 Октябрь',
    '2024 Сентябрь',
    '2024 Август',
    '2024 Июль',
  ];
  const results = [
    { id: 1, place: '1 Место', tournament: 'Лига Чемпионов' },
    { id: 2, place: '2 Место', tournament: 'Лига Чемпионов' },
    { id: 3, place: '3 Место', tournament: 'Лига Чемпионов' },
    { id: 4, place: '4 Место', tournament: 'Лига Чемпионов' },
  ];

  return (
    <div className="museum">
      <h3 className="museum__title">Итоги сезонов</h3>
      <ul className="museum__items">
        {months.map((month, index) => (
          <li 
          className="museum__item" 
          key={month}
          onClick={() => handleClick(index)}
          >
            <div className="museum__month">
              <h4 className="museum__month-title">{month}</h4>
              <img 
              src={dotSvg} 
              alt="dot" 
              className={`museum__dot ${isOpen === index ? 'open' : ''}`} />
            </div>
            {isOpen === index && (
            <ul className="museum-card__items">
              {results.map(result => (
                <li className="museum__card__item" key={result.id}>
                  <span className="museum__card-place">{result.place}</span>
                  <span className="museum__card-tournament">{result.tournament}</span>
                </li>
              ))}
            </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};