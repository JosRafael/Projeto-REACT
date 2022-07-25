import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style/MainStyle";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./scr/telas/Login";
import Principal from "./scr/telas/Principal"
import Cadastro from "./scr/telas/Cadastro";
import Pagina1 from "./scr/telas/Pagina1";
import LavaJato from './scr/telas/LavaJato'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Pagina1" component={Pagina1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="LavaJato" component={LavaJato} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
