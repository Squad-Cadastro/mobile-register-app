import React, { useCallback } from 'react'

// mascaras
import { cpf, cep, telefone } from './Masks'

const Input = ({mask, ...props}) => {

  const handleKeyUp = useCallback((e) => {
    if (mask === 'cep') {
      return cep(e)
    }
    if (mask === 'cpf') {
      return cpf(e)
    }

    if (mask === 'telefone') {
      return telefone(e)
    }
  }, [mask])

  return (
    <input {...props} onKeyUp={handleKeyUp} />
  )
}

export default Input