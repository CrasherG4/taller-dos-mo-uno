import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Login } from '../Screens/Login';
import { Productos } from '../Screens/Productos';
import { Registro } from '../Screens/Registro';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' options={{headerShown: false}} component={Login}/>
      <Stack.Screen name='Registro' options={{headerShown: false}} component={Registro}/>
      <Stack.Screen name='Productos' options={{headerShown: false}} component={Productos}/>
    </Stack.Navigator>
  )
}
