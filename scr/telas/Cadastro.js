import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, CheckBox, Input} from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "../../style/MainStyle"
import MyButton from "../components/Button"



export default function Cadastro({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [senha, setSenha] = useState(null)

  const[errorEmail, setErrorEmail] = useState(null)
  const[errorNome, setErrorNome] = useState(null)
  const[errorCpf, setErrorCpf] = useState(null)
  const[errorTelefone, setErrorTelefone] = useState(null)
  const[errorSenha, setErrorSenha] = useState(null)

  const [isSelected, setSelected] = useState(false)
  

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorSenha(null)
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha com um email válido")
      error = true
    }
    if (cpf==null){
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    }
    if (telefone == null){
      setErrorTelefone("Preencha seu telefone corretamente")
      error = true
    }
    if (senha == null){
      setErrorSenha("Preencha a senha")
      error = true
    }
    return !error
  }

  const Cadastrar = () => {
      if (validar()){
        console.log("Salvou")
        }
}
  return (
    <KeyboardAvoidingView style={SpecificStyles.container}>
            <View style={SpecificStyles.cadastro}>
                <Text style={SpecificStyles.c}> Cadastre-se</Text>
            </View>
            <View style={SpecificStyles.textInput}>
                
                <Input 
              style={SpecificStyles.input}
              placeholder="Nome"
               onChangeText={value => setNome(value)}
               errorMessage={errorNome}
                
                />

                <Input
                style={SpecificStyles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCorrect={false}
                keyboardType = "number-pad"
                returnKeyType = "done"
                onChangeText={value => setPassword(value)}>
        
                </Input>

            <Input
            style={SpecificStyles.input}
            placeholder="E-mail"
            onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
            }}
            keyboardType="email-address"
            errorMessage={errorEmail}        
            />

        <Input style={SpecificStyles.input}
               
               placeholder="CPF"
               onChangeText={value => {
                 setCpf(value)
                 setErrorCpf(null)
               }}
               keyboardType="number-pad"
               returnKeyType="done"  
               errorMessage={errorCpf}                
                />
                            
                <Input
                style={SpecificStyles.input}
                placeholder="Telefone"
                autoCorrect={false}
                value={telefone}
                keyboardType = "phone-pad"
                returnKeyType = "done"
                onChangeText={telefone => setTelefone(telefone)}
                >
                </Input>

            </View>                          
                    <CheckBox                  
                   title = "Ao criar sua conta você concorda com nossos termo de serviços e politicas de privacidade"
                   checkedIcon="check"
                   uncheckedIcon ="square-o"
                   checkedcolor = "green"
                   uncheckedcolor = "red"
                   checked = {isSelected}
                   onPress = {()=>setSelected(!isSelected)}
                    />  
                
          
            <View style={SpecificStyles.b}>
                <MyButton text="Cadastrar"
                    onPress={Cadastrar}/>
            </View>
            
        </KeyboardAvoidingView>
    )
}
const SpecificStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom: 20,
        color: '#000000',
        fontSize: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#000000",
        padding: 8,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
    },
    textInput:{
        width: '80%',
    },
    c: {
        fontSize: 25,
        color:'#4A4A4A',
    },
    b: {
        width: '60%'
    }, 
    cadastro:{
        marginRight: '45%',
        padding: 15
    },
    textofinal:{
        width: '80%',
        padding: 10
    },
    image: {
        height: 57,
        width: 280,
        margin: 50,
        marginTop: 10,
        alignItems: 'center'

    },
})