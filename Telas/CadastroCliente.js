import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function CadastroCliente({navigation}) {
  const [exibirCadastro, setExibirCadastro] = useState(false);

  return (
    <View style={styles.container}>
      {exibirCadastro ? (
        <>
          <Text>Área de cadastro de motorista</Text>
          <TextInput placeholder="Nome" style={styles.input} />
          <TextInput placeholder="Telefone" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
          <TextInput placeholder="Confirmar Senha" secureTextEntry style={styles.input} />
          <Button title="Proximos passos" onPress={() => {
            setExibirCadastro(false);
            navigation.navigate('CadastrarVeiculo');
            }} />
          <TouchableOpacity onPress={() => setExibirCadastro(false)}>
            <Text style={styles.link}>Voltar para login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>Entrar na sua conta</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
          <Button title="Entrar" onPress={() => navigation.navigate('MenuCliente')}/>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setExibirCadastro(true)}>
            <Text style={styles.link}>Não possui uma conta?</Text>
          </TouchableOpacity>
        </>
      )}
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
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});
