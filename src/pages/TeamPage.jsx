import React from 'react'

import ManList from '../components/Team/ManList'
import Players from '../components/Team/Players'
import '../css/team/team.css'
import bgImg from '../images/teamPage/team-bg.png'
import dotSvg from '../images/teamPage/dot.svg'
import treners from '../tempData/treners'
import supportTeam from '../tempData/supportTeam'

const TeamPage = () => {
  const [teamOpen, setTeamOpen] = React.useState(false)
  const [trenersOpen, setTrenersOpen] = React.useState(false)
  const [adminOpen, setAdminOpen] = React.useState(false)
  return (
    <section className='team'>
      <div className='background-wrapper'>
        <img className='team_bg' src={bgImg} alt='background-image' />
        <h1 className='background_title'>КОМАНДА</h1>
      </div>
      <ul className='team__list'>
        <li className='team_item'>
          <div
            onClick={() => setTeamOpen(!teamOpen)}
            className={
              teamOpen
                ? 'team_item-wrapper'
                : 'team_item-wrapper team_item-withLine'
            }
          >
            <h2 className='team__list_item'>Игроки</h2>
            <img
              className={teamOpen ? 'team__item_dot open' : 'team__item_dot'}
              src={dotSvg}
              alt='dot'
            />
          </div>
          {teamOpen && <Players />}
        </li>
        <li className='team_item'>
          <div
            onClick={() => setTrenersOpen(!trenersOpen)}
            className={
              trenersOpen
                ? 'team_item-wrapper'
                : 'team_item-wrapper team_item-withLine'
            }
          >
            <h2 className='team__list_item'>Тренерский штаб</h2>
            <img
              className={trenersOpen ? 'team__item_dot open' : 'team__item_dot'}
              src={dotSvg}
              alt='dot'
            />
          </div>
          {trenersOpen && <ManList list={treners} />}
        </li>
        <li className='team_item'>
          <div
            onClick={() => setAdminOpen(!adminOpen)}
            className={
              adminOpen
                ? 'team_item-wrapper'
                : 'team_item-wrapper team_item-withLine'
            }
          >
            <h2 className='team__list_item'>Административный персонал</h2>
            <img
              className={adminOpen ? 'team__item_dot open' : 'team__item_dot'}
              src={dotSvg}
              alt='dot'
            />
          </div>
          {adminOpen && <ManList list={supportTeam} />}
        </li>
      </ul>
    </section>
  )
}

export default TeamPage
