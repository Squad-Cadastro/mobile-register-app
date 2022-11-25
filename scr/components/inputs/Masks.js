export function cep(e) {
    e.currentTarget.maxLength = 9
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{5})(\d)/, "$1-$2")
    e.currentTarget.value = value
    return e
  }
  
  export function cpf(e) {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
      value = value.replace(/\D/g, "")
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1-$2")
      e.currentTarget.value = value
    }
    return e
  }
  
  export function telefone(e) {
    e.currentTarget.maxLength = 13
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{2})(\d{5})(\d{2})/, "$1 $2-$3")
    e.currentTarget.value = value
    return e
  }