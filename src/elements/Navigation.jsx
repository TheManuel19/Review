import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginElement from './LoginElement';

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}
        >
            <Tab.Screen 
                name='Home'
                component={LoginElement}
                options={{title:'Inicio'}}
            />
            <Tab.Screen 
                name='Profile'
                component={LoginElement}
                options={{title: 'Perfil'}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}