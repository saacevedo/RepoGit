import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import AddContactScreen from '../screens/AddContactScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Directorio" component={ListScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Ahora si edito
