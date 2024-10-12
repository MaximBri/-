import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserData } from '../../RTK/slices/personSlice'
import { setAllFields } from '../../RTK/slices/personSlice'
import { hashData } from '../Hooks/hesh'
import '../../css/user/userInfo.css'

const UserInfo = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  console.log(userData)
  const [name, setName] = React.useState(userData.name)
  const [surName, setSurName] = React.useState(userData.surname)
  const [patronymic, setPatronymic] = React.useState(userData.patronymic)
  const [mail, setMail] = React.useState(userData.email)
  const [tel, setTel] = React.useState(userData.phone)
  const [birthday, setBirthday] = React.useState(userData.birthday)
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
      console.log('Отправка')
      let obj = {
        name,
        surname: surName,
        patronymic,
        email: mail,
        phone: tel,
        birthday,
        inRf: true,
        gender: 'male'
      }
      console.log(obj)
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
      {/* <fieldset className='user__info_checkbox'>
        <span className='user__checkbox'>
          <input type='radio' checked name='country' />
          <span className='radio-custom'></span>
          Да
        </span>
        <span className='user__checkbox'>
          <input type='radio' name='country' />
          <span className='radio-custom'></span>
          Нет
        </span>
      </fieldset>
      <h2 className='user__info_title'>Пол</h2>
      <fieldset className='user__info_checkbox'>
        <span className='user__checkbox'>
          <input type='radio' checked name='gender' />
          Мужской
        </span>
        <span className='user__checkbox'>
          <input type='radio' name='gender' />
          Женский
        </span>
      </fieldset> */}
      <button onClick={() => saveChanges()} className='user__info_btn'>
        Сохранить изменения
      </button>
    </div>
  )
}

export default UserInfo
