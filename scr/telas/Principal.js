import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyButton from "../components/Button";
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"





function Feed({navigation}) {
    const LavaJato = () => {
    navigation.navigate("LavaJato")
  }
  
  return (
    
<KeyboardAvoidingView style={specificStyles.container}> 
            <View style={specificStyles.b}>
            <MyButton text="Ir para o lava jato"
                    onPress={() => {
                      navigation.navigate(LavaJato)
                    }}/>
            </View>
        </KeyboardAvoidingView>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="LavaJato"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Tela Inicial"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          
            ),
          
          
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
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
