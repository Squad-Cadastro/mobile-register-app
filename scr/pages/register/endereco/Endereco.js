import React, { useState, useRef } from "react";
import { Alert, Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import api from '../../../service/api';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from "react-redux";
import {addEndereco} from '../../../reducers/cliente';
import * as Clipboard from 'expo-clipboard';
import tw from 'tailwind-react-native-classnames';


const Endereco = ({navigation}) => {

  const {form, res}  = useSelector (state => state.clienteReducer)
  const dispatch = useDispatch();
  const [endereco, setEndereco] = useState({})
  const [copiedText, setCopiedText] = useState('');
  const ref = useRef();

  function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  }

  const mergeIntoEndereco = (values) => {
    var ultimoClienteForm = form[form.length - 1];
    let mergedForm = {
      nome: ultimoClienteForm.nome,
      documento: ultimoClienteForm.documento,
      email: ultimoClienteForm.email,
      telefone: ultimoClienteForm.telefone,
      tipoPessoa: ultimoClienteForm.tipoPessoa,
      dataNascimento: FormataStringData(ultimoClienteForm.dataNascimento),
      endereco: [values]
    };
    return mergedForm;
  }


  const findCEP = async(value) => {
    let response = await api.get(`/cep/${value}`)
    if (response.status === 200){
      setEndereco(response.data)
    }
  }

  const copyToClipboard = async (response) => {
    await Clipboard.setStringAsync(`${response}`);
  };

  const AlertId = (response) =>
    Alert.alert(
      "Cadastrado com sucesso",
      `Id: ${response.id}`,
      [
        {
          text: "Copiar Id",
          onPress: async () => await Clipboard.setStringAsync(`${response.id}`)
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return(
      <View className="flex flex-col">
        <Text style={tw.style('text-black text-2xl mt-7 mx-5 ')}>Preencha as informações para criar sua conta pessoal</Text>
        <View className="grid justify-items-center">
          <Formik 
            initialValues={endereco || {logradouro:"", numero:"", cep:"", bairro:"", localidade:"", uf:""}}
            enableReinitialize
            validate={values => {
              const errors = {};
              if (!values.cep) {
                errors.cep = 'Required';
              }
              if (!values.uf) {
                errors.uf = 'Required';
              }
              if (!values.localidade) {
                errors.localidade = 'Required';
              }
              if (!values.bairro) {
                errors.bairro = 'Required';
              }
              if (!values.logradouro) {
                errors.logradouro = 'Required';
              }
              if (!values.numero) {
                errors.numero = 'Required';
              }
              return errors;
            }}
            
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                // console.log(mergeIntoEndereco(values))
                dispatch(addEndereco(mergeIntoEndereco(values), AlertId));
                if(res){
                  console.log(res)
                }
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              
            }) => (
              <View style={tw.style('flex flex-col self-center w-5/6')}>
                <TextInput 
                  style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                  type="text"
                  name="cep"
                  placeholder = "CEP"
                  onChangeText={handleChange('cep')}
                  onEndEditing={(e) => {findCEP(e.nativeEvent.text)}}
                  value={values.cep}
                  required
                />
                {errors.cep && (<Text style={styles.errorTxt}>{errors.cep}</Text>)}
                {/* {errors.name && touched.name && errors.name} */}
                {/* <div className="flex flex-wrap space-x-4 justify-between w-full self-center mt-2"> */}
                {/* className="flex w-auto grow  border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4" item*/}
                <TextInput
                  style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                  type="text"
                  name="uf"
                  placeholder = "Estado"
                  onChangeText={handleChange('uf')}
                  onBlur={handleBlur('uf')}
                  value={values.uf}
                  required
                />
                {errors.uf && (<Text style={styles.errorTxt}>{errors.uf}</Text>)}
                <TextInput
                  style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                  ref={ref}
                  type="text"
                  name="localidade"
                  placeholder = "Cidade"
                  onChangeText={handleChange('localidade')}
                  onBlur={handleBlur('localidade')}
                  value={values.localidade}
                  required
                />
                {errors.localidade && (<Text style={styles.errorTxt}>{errors.localidade}</Text>)}
                <TextInput
                  style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                  type="text"
                  name="bairro"
                  placeholder = "Bairro"
                  onChangeText={handleChange('bairro')}
                  onBlur={handleBlur('bairro')}
                  value={values.bairro}
                  required
                />
                {errors.bairro && (<Text style={styles.errorTxt}>{errors.bairro}</Text>)}
                {/* </div> */}
                <TextInput 
                  style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                  type="text"
                  name="logradouro"
                  placeholder = "Logradouro"
                  onChangeText={handleChange('logradouro')}
                  onBlur={handleBlur('logradouro')}
                  value={values.logradouro}
                  required
                />
                {errors.logradouro && (<Text style={styles.errorTxt}>{errors.logradouro}</Text>)}
                <TextInput 
                  style={tw.style('self-center  border-b border-gray-500  px-2 my-5 w-full')}
                  type="text"
                  name="numero"
                  placeholder = "Número"
                  onChangeText={handleChange('numero')}
                  onBlur={handleBlur('numero')}
                  value={values.numero}
                  required
                />
                {errors.numero && (<Text style={styles.errorTxt}>{errors.numero}</Text>)}
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
};
 
const styles = StyleSheet.create({
  errorTxt:{
    fontSize: 12,
    color: '#FF0D10'
  }
})



export default Endereco;