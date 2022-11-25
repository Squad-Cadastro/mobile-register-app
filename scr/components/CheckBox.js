import React, { useState } from "react";
import { Alert, Text, Form, TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';

const CheckBox = ({isCheck, setIsCheck, styleSet}) => {
//   const [isCheck, setIsCheck] = useState(false);
  return (
    <TouchableOpacity style={tw.style(`${styleSet}`)} onPress={setIsCheck}>
        {isCheck ?
            <Icon name="check-square" size={23} color="#03adfc"/> : <Icon name="square-o" size={23} color="#000" />
        }
    </TouchableOpacity>
  )
}
export default CheckBox