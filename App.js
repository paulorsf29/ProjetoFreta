import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

import MenuPrincipal from './Telas/MenuPrincial';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal">
      <Stack.Screen name='MenuPrincipal' component={MenuPrincipal}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
