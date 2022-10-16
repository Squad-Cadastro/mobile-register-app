import React, { useEffect } from 'react'
import { Alert, Text, TextInput, View,Button } from 'react-native'
import styles from './Formulario.style'
// import Button from '../Components/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const fieldValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('O email não pode ser vazio')
    .email('Digite um email válido'),
  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(6, 'A senha deve conter pelo menos 6 dígitos')
})

const Formulario = () => {
  const { register, setValue, handleSubmit, errors } = useForm({ validationSchema: fieldValidationSchema })
	const onSubmit = (data) => Alert.alert("Confirm",`Nome:${data.nome} CPF:${data.cpf} Celular:${data.celular}, Email:${data.email}, EmailConf:${data.email2}`,[
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ])
  
	useEffect(() => {
    register('nome')
    register('cpf')
    register('celular')
    register('email')
    register('email2')
  }, [register])

  return (
    <View style={styles.mainContainer}>
      <Text>Preencha as informações abaixo para criar sua conta pessoal</Text>
      <TextField
        label={'Nome'}
        error={errors?.nome}
        placeholder={'Nome completo'}
        onChangeText={text => setValue('nome', text)}
      />
      <TextField
        label={'Cpf'}
        error={errors?.Cpf}
        placeholder={'CPF'}
        onChangeText={text => setValue('cpf', text)}
      />
      <TextField
        label={'Celular'}
        error={errors?.Celular}
        placeholder={'Celular'}
        onChangeText={text => setValue('celular', text)}
      />
      <TextField
        label={'Email'}
        error={errors?.email}
        placeholder={'E-mail'}
        onChangeText={text => setValue('email', text)}
      />
      <TextField
        label={'Email2'}
        error={errors?.email2}
        placeholder={'Confirmar e-mail'}
        onChangeText={text => setValue('email2', text)}
      />
      <Button onPress={handleSubmit(onSubmit)} title={'Continuar'} />
    </View>
  )
}

const TextField = ({ error, label, ...inputProps }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
			style={[styles.input, !!error && styles.borderError]}
			{...inputProps}
		/>
    {!!error && <Text style={styles.errorMessage}>{error.message}</Text>}
  </View>
)

export default Formulario