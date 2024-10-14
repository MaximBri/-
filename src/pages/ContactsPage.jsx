import contactLogo from '../images/about/about-Logo.png';
import dotSvg from '../images/teamPage/dot.svg';
import '../css/contacts/contactsPage.css'
import { useState } from 'react';

const ContactsPage = () => {
  const [isOpen, setIsOpen] = useState(0)

  const handleClick = (index) => {
    setIsOpen(prev => prev === index ? null : index)
  }

  const contacts = ['ФК “KOKOC”', 'Фан-клуб', 'Спортивный отдел']

  return (
    <div className="contact-page">
      <div className='container__contact-page'>
        <div className="contact__page-header">
          <img src={contactLogo} alt="contact logo" className="contact__page-logo" />
          <span className="contact__page-title">
            Контакты
          </span>
        </div>
        <div className='contact__content'>
          <ul className='contact__items'>
            {contacts.map((contact, index) => {
              return (
                <li className='contact__item' key={contact}>
                  <div
                    className='contact__header'
                    onClick={() => handleClick(index)}
                  >
                    <h3 className='contact__item-title' >{contact}</h3>
                    <img
                      className={`contact__item-dot ${isOpen === index ? 'open' : ''}`}
                      src={dotSvg}
                      alt="dotSvg"
                    />
                  </div>
                  {isOpen === index && (
                    <address className='contact__item-text'>
                      <p>
                        125424, Москва, Волоколамское ш., д. 69, стр. 2<br />
                        Контакт-центр клуба: <a href="tel:+74951111922">+7 (495) 111-19-22</a><br />
                        Приемная клуба<br />
                        Факс: <a href="tel:+74955309509">+7 (495) 530-95-09</a><br />
                        Телефон: <a href="tel:+74955309508">+7 (495) 530-95-08</a><br />
                        <a href="mailto:kokos@kokos.com">kokos@kokos.com</a><br />
                        Приемная генерального директора<br />
                        тел.: <a href="tel:+74955309507">+7 (495) 530-95-07</a><br />
                      </p>
                    </address>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div >
  )
}

export default ContactsPage