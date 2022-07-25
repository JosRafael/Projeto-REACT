import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"
import { Button } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "../../style/MainStyle"
import MyButton from "../components/Button";



export default function Login({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  
 
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }],
    });
  }

  return (
<KeyboardAvoidingView style={specificStyles.container}>
           
        
            <View style={specificStyles.textInput}>
                <TextInput
                style={specificStyles.input}
                placeholder="Email"
                autoCorrect={false}
                value={email}
                onChangeText={email => setEmail(email)}>
                </TextInput>
                <TextInput
                style={specificStyles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCorrect={false}
                value={password}
                onChangeText={password => setPassword(password)}>
                </TextInput>
            </View>
            <View>
                <TouchableOpacity style={specificStyles.text}>
                    <Text onPress={() => {
                        navigation.navigate("Home")
                    }}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
            <View style={specificStyles.b}>
                <MyButton text="Entrar"
                    onPress={entrar}/>
            </View>
        </KeyboardAvoidingView>
    )

}
const specificStyles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',

  },
  image: {
      minWidth: 200,
      minHeight: 200,
      resizeMode: "contain"
  },
  input:{
      marginBottom: 20,
      color: '#000000',
      fontSize: 15,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#000000", 
      padding: 8
      
  },
  text: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
  },
  textInput:{
      width: '80%',
  },
  b: {
      width: '50%'
  }
})