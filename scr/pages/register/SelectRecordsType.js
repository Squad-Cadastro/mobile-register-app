import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';


function SelectRecordsType({navigation}) {
  return (
    <View style={tw.style('flex flex-col')}>
      <Text style={tw.style('self-center text-black text-4xl my-4')}>Você é um pessoa </Text>
      <View style={tw.style('flex flex-row self-center')}>
        <TouchableOpacity style={tw.style('bg-yellow-500 rounded-3xl p-2 w-44 self-center m-2')} onPress={() => navigation.navigate("Formulário pessoa física")}>
          <Text style={tw.style('text-xs text-black self-center')}>
            Fisica
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw.style('bg-yellow-500 rounded-3xl p-2 w-44 self-center m-2')} onPress={() => navigation.navigate("Formulário pessoa física")}>
          <Text style={tw.style('text-xs text-black self-center')}>
            Juridica
          </Text>
        </TouchableOpacity>
      </View>
    </View>
          
  );
}

export default SelectRecordsType;
