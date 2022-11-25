import { configureStore } from '@reduxjs/toolkit'
import clienteReducer from '../reducers/cliente';

// import api from "../services/api";
import { combineReducers } from 'redux'


const reducer = combineReducers({
    clienteReducer
})

const store =  configureStore({
    reducer,
})


export default store;