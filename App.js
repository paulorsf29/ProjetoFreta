import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaInicializacao from './Telas/TelaInicializacao'; // Importação da tela de inicialização
import MenuPrincipal from './Telas/MenuPrincipal';
import CadastroMotorista from './Telas/CadastroMotorista';
import CadastroCliente from './Telas/CadastroCliente';
import CadastrarVeiculo from './Telas/CadastrarVeiculo';
import MenuMotorista from './Telas/MenuMotorista';
import MenuCliente from './Telas/MenuCliente';
import AnunciarCarga from './Telas/AnunciarCarga';
import AnuncioDeCarga from './Telas/AnuncioDeCarga';
import AcompanharCarga from './Telas/AcompanharCarga';
import DadosEmpresariais from './Telas/DadosEmpresariais';
import QuemSomos from './Telas/QuemSomos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="TelaInicializacao" // Define a tela de inicialização como a primeira tela
        screenOptions={{ headerShown: false }} // Oculta os headers
      >
        <Stack.Screen name="TelaInicializacao" component={TelaInicializacao} />
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="CadastroMotorista" component={CadastroMotorista} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} />
        <Stack.Screen name="MenuMotorista" component={MenuMotorista} />
        <Stack.Screen name="MenuCliente" component={MenuCliente} />
        <Stack.Screen name="AnunciarCarga" component={AnunciarCarga} />
        <Stack.Screen name="AnuncioDeCarga" component={AnuncioDeCarga} />
        <Stack.Screen name="AcompanharCarga" component={AcompanharCarga} />
        <Stack.Screen name="DadosEmpresariais" component={DadosEmpresariais} />
        <Stack.Screen name="QuemSomos" component={QuemSomos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
