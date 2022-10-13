import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Formulario from './scr/formulario/Formulario';

const App = () => {


  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Formulario/>
    </View>
  );
};
export default App;