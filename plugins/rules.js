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
        return email === '' || pattern.test(email) || 'E-mail inválido'
      }
    },
  })
}
