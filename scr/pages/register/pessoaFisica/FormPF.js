import React, { useState, useRef } from "react";
import { Alert, Text, Form, TextInput, View, Button, TouchableOpacity, StyleSheet} from 'react-native'
// import api from '../../../service/api';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from '../../../actions';
import {addCliente} from '../../../reducers/cliente';
import CheckBox from '../../../components/CheckBox';
import { cpf } from 'cpf-cnpj-validator'; 
import tw from 'tailwind-react-native-classnames';
import { TextInputMask } from 'react-native-masked-text'

const FormPF = ({ navigation }) => {

  const {form}  = useSelector (state => state.clienteReducer)
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false)
  const ref = useRef();
  // const navigate = useNavigate();


  return(
      <View style={tw.style('flex flex-col')}>
          <Text style={tw.style('text-black text-2xl mt-7 mx-5 ')}>Preencha as informações para criar sua conta pessoal</Text>
          <View>
            <Formik 
              initialValues={{ nome:'', documento:'', dataNascimento:'', telefone:'', email:'', tipoPessoa: 'F', endereco:null }}
              validate={values => {
                const errors = {};
                if (!values.nome) {
                  errors.nome = 'Required';
                }
                if (!values.documento) {
                  errors.documento = 'Required';
                }else if(!cpf.isValid(values.documento)){
                  errors.documento = 'cpf inválido';
                }
                if (!values.dataNascimento) {
                  errors.dataNascimento = 'Required';
                }
                if (!values.telefone) {
                  errors.telefone = 'Required';
                }
                if (!values.email) {
                  errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'email inválido';
                }
                return errors;
              }}
              
              onSubmit={async (values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  dispatch(addCliente(values))
                  navigation.navigate("Endereço") 
                }, 400);
              }}
            >
              {({
                values,
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <View style={tw.style('flex flex-col self-center w-5/6')}>
                  <TextInput 
                    style={tw.style('self-center border-b border-gray-500  px-2 my-5 w-full ')}
                    type="text"
                    name="nome"
                    placeholder = "Nome completo"
                    onChangeText={handleChange('nome')}
                    value={values.nome}
                    onBlur={handleBlur('nome')}
                    required
                  />
                  {errors.nome && (<Text style={styles.errorTxt}>{errors.nome}</Text>)}
                  <TextInput
                    style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                    type="text"
                    name="documento"
                    placeholder = "CPF"
                    onChangeText={handleChange('documento')}
                    onBlur={handleBlur('documento')}
                    value={values.documento}
                    required
                  />
                  {errors.documento && (<Text style={styles.errorTxt}>{errors.documento}</Text>)}
                  <TextInputMask
                    style={tw.style('self-center border-b border-gray-500  px-2 my-5 w-full ')}
                    name="dataNascimento"
                    placeholder = "Data nascimento"
                    keyboardType="numeric"
                    onChangeText={handleChange('dataNascimento')}
                    onBlur={handleBlur('dataNascimento')}
                    value={values.dataNascimento}
                    type={'datetime'}
                    options={{
                      format: 'DD/MM/YYYY'
                    }}
                    required
                  />
                  {errors.dataNascimento && <Text style={styles.errorTxt}>{errors.dataNascimento}</Text>}
                  <TextInput
                    style={tw.style('self-center border-b border-gray-500  px-2 my-5 w-full ')}
                    type="cel"
                    name="telefone"
                    placeholder = "Celular"
                    keyboardType="numeric"
                    onBlur={handleBlur('telefone')}
                    onChangeText={handleChange('telefone')}
                    value={values.telefone}
                    required
                  />
                  {errors.telefone && <Text style={styles.errorTxt}>{errors.telefone}</Text>}
                  {/* </div> */}
                  <TextInput 
                    style={tw.style('self-center border-b border-gray-500  w-full px-2 my-5 ')}
                    type="email"
                    name="email"
                    placeholder = "Email"
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    required
                  />
                  {errors.email && <Text style={styles.errorTxt}>{errors.email}</Text>}
                  <View style={tw.style('flex flex-row self-center  w-full w-full px-2 my-5 ')}>
                    <CheckBox isCheck={check} setIsCheck={() => setCheck(!check)} styleSet={'mr-2 self-center'} name="politica"/>
                    <Text style={tw.style('text-left text-xs')}>Eu li, estou ciente das condições de tratamento dos meus dados pessoais, e dou meu consentimento, quando aplicável, conforme descrito nesta <Text style={tw.style('text-blue-500')}> Política de Privacidade</Text>.</Text>
                  </View>
                  {errors.politica && <Text style={styles.errorTxt}>{errors.politica}</Text>}
                  <TouchableOpacity 
                    style={tw.style('bg-yellow-500 rounded-3xl p-2 w-4/5 self-center m-2')}
                    title="Confirmar"
                    // disabled={isSubmitting}
                    onPress={handleSubmit}
                  >
                    <Text style={tw.style('text-lg text-black self-center')}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  errorTxt:{
    fontSize: 12,
    color: '#FF0D10'
  }
})

 
export default FormPF;


