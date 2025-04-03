import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function DadosEmpresariais({ navigation }) {
  const [cnpj, setCnpj] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [telefone, setTelefone] = useState('');
  const [codigoArea, setCodigoArea] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const validarCampos = () => {
    if (!cnpj.trim()) {
      Alert.alert('Erro', 'O CNPJ é obrigatório!');
      return;
    }
    if (!inscricaoEstadual.trim()) {
      Alert.alert('Erro', 'A Inscrição Estadual é obrigatória!');
      return;
    }
    if (!razaoSocial.trim()) {
      Alert.alert('Erro', 'A Razão Social é obrigatória!');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Erro', 'O E-mail de Cobrança é obrigatório!');
      return;
    }
    if (!endereco.trim()) {
      Alert.alert('Erro', 'O Endereço é obrigatório!');
      return;
    }
    
    navigation.navigate('ProximaTela');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Empresariais</Text>
      <TextInput placeholder="CNPJ" style={styles.input} onChangeText={setCnpj} value={cnpj} />
      <TextInput placeholder="Inscrição Estadual *" style={styles.input} onChangeText={setInscricaoEstadual} value={inscricaoEstadual} />
      <TextInput placeholder="Razão Social" style={styles.input} onChangeText={setRazaoSocial} value={razaoSocial} />
      <TextInput placeholder="Nome Fantasia" style={styles.input} onChangeText={setNomeFantasia} value={nomeFantasia} />
      <View style={styles.row}>
        <TextInput placeholder="Código de área" style={[styles.input, styles.smallInput]} onChangeText={setCodigoArea} value={codigoArea} />
        <TextInput placeholder="Telefone" style={[styles.input, styles.mediumInput]} onChangeText={setTelefone} value={telefone} />
      </View>
      <TextInput placeholder="E-mail de Cobrança *" style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput placeholder="Endereço" style={styles.input} onChangeText={setEndereco} value={endereco} />
      <View style={styles.row}>
        <TextInput placeholder="Cidade" style={[styles.input, styles.mediumInput]} onChangeText={setCidade} value={cidade} />
        <TextInput placeholder="Estado" style={[styles.input, styles.smallInput]} onChangeText={setEstado} value={estado} />
      </View>
      <TextInput placeholder="CEP / Código Postal" style={styles.input} onChangeText={setCep} value={cep} />
      <Button title="Próximo" onPress={validarCampos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '30%',
  },
  mediumInput: {
    width: '65%',
  },
});
