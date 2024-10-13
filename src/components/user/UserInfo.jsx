import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserData } from '../../RTK/slices/personSlice'
import { setAllFields } from '../../RTK/slices/personSlice'
import { hashData } from '../Hooks/hesh'
import '../../css/user/userInfo.css'

const UserInfo = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const [name, setName] = React.useState(userData.name)
  const [surName, setSurName] = React.useState(userData.surname)
  const [patronymic, setPatronymic] = React.useState(userData.patronymic)
  const [mail, setMail] = React.useState(userData.email)
  const [tel, setTel] = React.useState(userData.phone)
  const [birthday, setBirthday] = React.useState(userData.birthday)
  const [rf, setRf] = React.useState(userData.inRF)
  const [gender, setGender] = React.useState(userData.gender)
  const [mess, setMess] = React.useState('')
  const onlyText = (str) => {
    const regex = /^[A-Za-zА-Яа-я]+$/
    return regex.test(str)
  }
  const checkEmail = (str) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(str)
  }
  const checkTel = (str) => {
    const telPattern = /^\+7\d{10}$/
    return telPattern.test(str)
  }
  const checkTime = (str) => {
    const timePattern = /^\d{2}\.\d{2}\.\d{2}$/
    return timePattern.test(str)
  }
  const saveChanges = () => {
    if (!onlyText(name)) {
      setMess('Имя должно содержать только символы А-Я и A-Z!')
    } else if (!onlyText(surName) && surName) {
      setMess('Фамилия должна содержать только символы А-Я и A-Z!')
    } else if (!onlyText(patronymic) && patronymic) {
      setMess('Отчество должно содержать только символы А-Я и A-Z!')
    } else if (!checkEmail(mail) && mail) {
      setMess('Почта не корректна!')
    } else if (!checkTel(tel) && tel) {
      setMess('Номер телефона не корректен. Шаблон: +71234567890')
    } else if (!checkTime(birthday) && birthday) {
      setMess('Дата рождения не корректна. Шаблон: ДД.ММ.ГГ')
    } else {
      setMess('')
      let obj = {
        name,
        surname: surName,
        patronymic,
        email: mail,
        phone: tel,
        birthday,
        inRf: rf,
        gender: gender,
      }
      dispatch(setAllFields(obj))
      obj = hashData(obj)
      localStorage.setItem('User', obj)
    }
  }
  return (
    <div className='user__info_container'>
      {mess && <h2 className='user__info_err'>{mess}</h2>}
      <h2 className='user__info_title'>Имя</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        className='iser__info_input'
      />
      <h2 className='user__info_title'>Фамилия</h2>
      <input
        value={surName}
        onChange={(e) => setSurName(e.target.value)}
        type='text'
        className='iser__info_input'
      />
      <h2 className='user__info_title'>Отчество</h2>
      <input
        value={patronymic}
        onChange={(e) => setPatronymic(e.target.value)}
        type='text'
        className='iser__info_input'
      />
      <h2 className='user__info_title'>e-mail</h2>
      <input
        value={mail}
        type='email'
        onChange={(e) => setMail(e.target.value)}
        className='iser__info_input'
      />
      <h2 className='user__info_title'>Телефон</h2>
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        type='tel'
        className='iser__info_input'
      />
      <h2 className='user__info_title'>Дата рождения</h2>
      <input
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        type='text'
        className='iser__info_input'
      />
      <h2 className='user__info_title'>Гражданство РФ</h2>
      <div className='user__info_radio'>
        <span onClick={() => setRf(true)} className='user__info_radio-btn'>
          {rf ? (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z'
                fill='#BE0000'
              />
            </svg>
          ) : (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='10' cy='10' r='9.5' fill='black' stroke='white' />
            </svg>
          )}
          Да
        </span>
        <span onClick={() => setRf(false)} className='user__info_radio-btn'>
          {rf ? (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='10' cy='10' r='9.5' fill='black' stroke='white' />
            </svg>
          ) : (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z'
                fill='#BE0000'
              />
            </svg>
          )}
          Нет
        </span>
      </div>
      <h2 className='user__info_title'>Пол</h2>
      <div className='user__info_radio'>
        <span
          onClick={() => setGender('male')}
          className='user__info_radio-btn'
        >
          {gender === 'male' ? (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z'
                fill='#BE0000'
              />
            </svg>
          ) : (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='10' cy='10' r='9.5' fill='black' stroke='white' />
            </svg>
          )}
          Мужской
        </span>
        <span
          onClick={() => setGender('female')}
          className='user__info_radio-btn'
        >
          {gender === 'male' ? (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='10' cy='10' r='9.5' fill='black' stroke='white' />
            </svg>
          ) : (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z'
                fill='#BE0000'
              />
            </svg>
          )}
          Женский
        </span>
      </div>
      <button onClick={() => saveChanges()} className='user__info_btn'>
        Сохранить изменения
      </button>
    </div>
  )
}

export default UserInfo
