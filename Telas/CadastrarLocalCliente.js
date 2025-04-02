import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function CadastrarLocalCliente({ navigation }) {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const handleCadastro = () => {
    if (!nomeEmpresa || !endereco || !cidade || !estado || !cep) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
    // Aqui você pode enviar os dados para um backend ou banco de dados
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nomeEmpresa}
        onChangeText={setNomeEmpresa}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
