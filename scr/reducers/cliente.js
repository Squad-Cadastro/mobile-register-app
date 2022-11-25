import { createSlice } from '@reduxjs/toolkit'
import api from '../service/api'

export const clienteReducer = createSlice({
  name: 'cliente',
  initialState: {
    form: [],
    res: {}
  },
  reducers: {
    ADD_CLIENTE: (state, action) => {
      state.form = [...state.form, action.payload]
    },
    ADD_ENDERECO: (state, action) => {
      state.res = action.payload
    },
  },
})

export const { ADD_CLIENTE } = clienteReducer.actions
export const addCliente = (form) => async (dispatch) => {
  console.log("Cliente_informacoes", form);
  dispatch(ADD_CLIENTE(form));
}

export const { ADD_ENDERECO } = clienteReducer.actions
export const addEndereco = (form, callback) => async (dispatch) => {
  console.log("form...............", form)
  let response = await api.post('/clientes', form)
  if (response.status === 201) {
    console.log("response.data",response.data)
    dispatch(ADD_ENDERECO(response.data))
    if(callback){
      callback(response.data)
    }
  }
  // alert(JSON.stringify(response.data, null, 2));
}

export default clienteReducer.reducer
