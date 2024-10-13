import newLogo from '../../images/about/about-Logo.png';
import oldLogo from '../../images/about/old-Logo.png';
import '../../css/aboutPage/history.css'

export const History = () => {
  return (
    <div className="history">
      <div className="history__block">
        <h3 className="history__title">Как появился "КОКОС"</h3>
        <p className="history__text">
          В 1922 году был образован «Московский кружок спорта» Краснопресненского района. 18 апреля МКС провел первый товарищеский матч, победив шестикратных чемпионов Москвы, Замоскворецкий Клуб Спорта, со счетом 3:2. Эта дата считается днем рождения нашего клуба. Костяк команды составили игроки Кружка футболистов «Сокольники» (КФС) и «Русского Гимнастического общества» (РГО), в котором начинали играть Николай и Александр Старостины. МКС образовался как поистине «братский» коллектив: братья Старостины, братья Артемьевы, братья Канунниковы…
        </p>
      </div>
      <div className="history__block">
        <h3 className="history__title">История эмблемы</h3>
        <p className="history__text">
          В 1922 году был образован «Московский кружок спорта» Краснопресненского района. 18 апреля МКС провел первый товарищеский матч, победив шестикратных чемпионов Москвы, Замоскворецкий Клуб Спорта, со счетом 3:2. Эта дата считается днем рождения нашего клуба. Костяк команды составили игроки Кружка футболистов «Сокольники» (КФС) и «Русского Гимнастического общества» (РГО), в котором начинали играть Николай и Александр Старостины. МКС образовался как поистине «братский» коллектив: братья Старостины, братья Артемьевы, братья Канунниковы…
        </p>
      </div>
      <h2 className='history__logo-title'>Дата Смены ЛОГОТИПА</h2>
      <div className="history__logos">
        <div className="history__logo">
          <img src={oldLogo} alt="old-logo" className="history__logo-img" />
          <span className="history__logo-text" >01.12.2022</span>
        </div>
        <div className="history__logo">
          <img src={newLogo} alt="new-logo" className="history__logo-img" />
          <span className="history__logo-text">01.12.2022</span>
        </div>
      </div>
    </div>
  );
};