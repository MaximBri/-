const convertDataTime = (dateString) => {
  const date = new Date(dateString)
  const options = {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }
  const formattedDate = date.toLocaleString('ru-RU', options)
  const time = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  })
  const [day, month] = formattedDate.split(' ')
  const capitalizedMonth = month.toUpperCase()
  return `${day} ${capitalizedMonth}, ${time}`
}
export default convertDataTime;