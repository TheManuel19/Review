import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, Header } from '@react-navigation/stack'
import { Tab } from '@rneui/base'
import LoginElement from '../LoginElement'

const Stack = createStackNavigator()
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name='homeStack'
          component={LoginElement}
          options={{title:'inicio ssesion'}}
        />
    </Stack.Navigator>
  )
}