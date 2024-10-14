import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setAllFields, setAuth } from '../RTK/slices/personSlice'
import Matches from '../components/user/Matches'
import Goods from '../components/user/Goods'
import UserInfo from '../components/user/UserInfo'
import { getAuth } from '../RTK/slices/personSlice'
import '../css/user/user.css'
import tickets from '../tempData/tickets'
import goods from '../tempData/goods'
import { hashData } from '../components/Hooks/hesh'

const UserPage = () => {
  const dispatch = useDispatch()
  const auth = useSelector(getAuth)
  const userData = useSelector((state) => state.person)
  const navigate = useNavigate()
  const [activeSet, setActiveSet] = React.useState(1)
  const matches = tickets.filter((item) => item.completed)
  const apiUrl = 'url'
  const body = {
    token1: '123',
    token2: '123',
  }
  React.useEffect(() => {
    if (!auth) navigate('/')
  }, [])
  const items = [
    <Goods tickets={tickets} goods={goods} />,
    <Matches matches={matches} />,
    <UserInfo />,
  ]
  const exit = () => {
    let data = {
      name: '',
      surname: '',
      patronymic: '',
      email: '',
      phone: '',
      birthday: '',
      inRF: true,
      gender: 'male',
    }
    dispatch(setAuth(false))
    dispatch(setAllFields(data))
    data = hashData(data)
    localStorage.setItem('User', data)
    navigate('/')
  }
  return (
    <section className='user'>
      <div className='user__info'>
        <h1 className='user_name'>{userData.data.name}</h1>
        <h2 className='user_surname'>{userData.data.surname}</h2>
        <button onClick={() => exit()} className='user__exit_btn'>
          Выйти
        </button>
      </div>
      <nav className='user_container user__list'>
        <button
          onClick={() => setActiveSet(1)}
          className={
            activeSet === 1
              ? 'user__list_btn user_btn-active'
              : 'user__list_btn'
          }
        >
          Мои заказы
        </button>
        <button
          onClick={() => setActiveSet(2)}
          className={
            activeSet === 2
              ? 'user__list_btn user_btn-active'
              : 'user__list_btn'
          }
        >
          Матчи
        </button>
        <button
          onClick={() => setActiveSet(3)}
          className={
            activeSet === 3
              ? 'user__list_btn user_btn-active'
              : 'user__list_btn'
          }
        >
          Личный данные
        </button>
      </nav>
      {items[activeSet - 1]}
    </section>
  )
}

export default UserPage
