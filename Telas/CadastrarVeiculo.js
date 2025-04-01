import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastrarCaminhao({ navigation }) {
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [ano, setAno] = useState('');
  const [capacidade, setCapacidade] = useState('');

  const handleCadastro = () => {
    if (!modelo || !placa || !ano || !capacidade) {
      alert('Preencha todos os campos!');
      return;
    }
    alert('Caminhão cadastrado com sucesso!');
    setModelo('');
    setPlaca('');
    setAno('');
    setCapacidade('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Caminhão</Text>
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
      />
      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={placa}
        onChangeText={setPlaca}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        keyboardType="numeric"
        value={ano}
        onChangeText={setAno}
      />
      <TextInput
        style={styles.input}
        placeholder="Capacidade de Carga (kg)"
        keyboardType="numeric"
        value={capacidade}
        onChangeText={setCapacidade}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
