import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MenuPrincipal from './Telas/MenuPrincipal';
import CadastroMotorista from './Telas/CadastroMotorista';
import CadastroCliente from './Telas/CadastroCliente';
import CadastrarVeiculo from './Telas/CadastrarVeiculo';
import MenuMotorista from './Telas/MenuMotorista';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal">
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="CadastroMotorista" component={CadastroMotorista} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} />
        <Stack.Screen name="MenuMotorista" component={MenuMotorista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
