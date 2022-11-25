import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import FormPF from './scr/pages/register/pessoaFisica/FormPF';
import SelectRecordsType from './scr/pages/register/SelectRecordsType';
import Endereco from './scr/pages/register/endereco/Endereco';
import Home from './scr/pages/homepage/Home';
import  {Provider} from 'react-redux';
import store from './scr/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Formulário pessoa física" component={FormPF} />
            <Stack.Screen name="Cadastro" component={SelectRecordsType} />
            <Stack.Screen name="Endereço" component={Endereco} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>

  );
};
export default App;