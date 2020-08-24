import moment from 'moment'

const parseDate = (date) => {
  if (!moment(date, 'DD/MM/YYYY', true).isValid()) return null
  const [d, m, y] = date.split('/')
  date = new Date(`${m}/${d}/${y}`)
  // date = new Date(date.replace(/(\d{2})\/(\d{2})/, '$2/$1'))
  const today = new Date()
  return date > today || today.getUTCFullYear() - parseInt(y) >= 122
    ? null
    : date
}

export default function (_, inject) {
  inject('rules', {
    required(field) {
      return (f) =>
        (f != null && Object.values(f).length > 0) ||
        f === true ||
        f === false ||
        `O campo${field ? ' ' + field : ''} é obrigatório`
    },
    email() {
      return (email) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(email) || 'E-mail inválido'
      }
    },
    date() {
      return (date) => date === '' || !!parseDate(date) || 'Data inválida'
    },
  })
}
