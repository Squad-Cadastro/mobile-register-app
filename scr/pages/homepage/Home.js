import React from 'react';
import {  Dimensions, Text, Image, TextInput, View,  Button, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Carousel from 'react-native-reanimated-carousel';


import cardPug from '../../assets/images/cardPug.png'

function Home({navigation}) {
  const width = Dimensions.get('window').width;

  let colorbg ={0:"bg-blue-200",1:"bg-red-200",2:"bg-green-200"}
  return (
    <View style={tw.style('flex flex-col')}>
      <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(3).keys(colorbg)]}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View style={{flex: 1,justifyContent: 'center'}}>
                        <View style={tw.style(`flex flex-col w-full ${colorbg[index]} py-12 px-2`)}>
                            <Text style={tw.style('self-center text-2xl font-bold ')}>Agora com Débito online</Text>
                            <Text style={tw.style('self-center text-2xl font-bold ')}>Agora com Débito online</Text>
                            <Text style={tw.style('self-center text-2xl font-bold ')}>Agora com Débito online</Text>
                            <Text style={tw.style('self-end text-xs mt-5')}>*de acordo com os termos e condiçoes</Text>
                        </View>
                    </View>
                )}
            />
      <View>
        <View style={tw.style('flex flex-col w-full bg-indigo-600')}>
          <View style={tw.style('flex flex-row w-full bg-indigo-600 py-5 px-4')}>
            <View style={tw.style('w-3/6 self-center')}>
              <Image source={cardPug} style={{width:(width/2)*0.8, height:(width/2)*0.70}} resizeMode="contain"/>
            </View>
            <View style={tw.style('w-3/6 self-center ')}>
              <Text style={tw.style('text-lg text-white text-left mb-2')}>
                Cartão de crédito é na Dog Bank
              </Text>
              <Text style={tw.style('text-xs text-white text-left')}>
                Seu cartão Dog possui benefícios incríveis. Mas se o seu cartão é DogFlex, você pode personalizar com os benefícios que quiser. E o melhor, sem custo adicional.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={tw.style('bg-gray-50 rounded-3xl p-2 w-44 self-center m-2')} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={tw.style('text-xs text-black self-center')}>
              Crie uma conta grátis
            </Text>
          </TouchableOpacity>
          <Text style={tw.style('text-white m-4 self-center')}>Já possui uma conta?</Text>
        </View>
      </View>

    </View>
          
  );
}

export default Home;