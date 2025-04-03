import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function CadastroMotorista({navigation}) {
  const [exibirCadastro, setExibirCadastro] = useState(false);

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")

  const [erroNome, setErroNome] = useState("\n")
  const [erroTelefone, setErroTelefone] = useState("\n")
  const [erroEmail, setErroEmail] = useState("\n")
  const [erroSenha, setErroSenha] = useState("\n")
  const [erroConfirmacaoSenha, setErroConfirmacaoSenha] = useState("\n")

  const [emailLogin, setEmailLogin] = useState("")
  const [senhaLogin, setSenhaLogin] = useState("")

  const [erroEmailLogin, setErroEmailLogin] = useState("\n")
  const [erroSenhaLogin, setErroSenhaLogin] = useState("\n")

  function continuarCadastro() {
    let informacoesValidas = true

    if (!nome) {
      setErroNome("Campo obrigatório!")
      informacoesValidas = false
    } else {
      setErroNome("\n")
    }

    if (!telefone) {
      setErroTelefone("Campo obrigatório!")
      informacoesValidas = false
    } else {
      setErroTelefone("\n")
    }

    if (!email) {
      setErroEmail("Campo obrigatório!")
      informacoesValidas = false
    } else if (!email.includes("@")) {
      setErroEmail("Email inválido!")
      informacoesValidas = false
    } else {
      setErroEmail("\n")
    }

    if (!senha) {
      setErroSenha("Campo obrigatório!")
      informacoesValidas = false
    } else {
      setErroSenha("\n")
    }
    
    if (!confirmacaoSenha) {
      setErroConfirmacaoSenha("Campo obrigatório!")
      informacoesValidas = false
    } else if (senha != confirmacaoSenha) {
      setErroConfirmacaoSenha("Confirmação de senha não confere!")
      informacoesValidas = false
    } else {
      setErroConfirmacaoSenha("\n")
    }

    
    if (informacoesValidas) {
      setExibirCadastro(false);
      navigation.navigate('CadastrarVeiculo');
    }
  }

  function login() {
    let informacoesValidas = true

    if (!emailLogin) {
      setErroEmailLogin("Campo obrigatório!")
      informacoesValidas = false
    } else if (!emailLogin.includes("@")) {
      setErroEmailLogin("Email inválido!")
      informacoesValidas = false
    } else {
      setErroEmailLogin("\n")
    }

    if (!senhaLogin) {
      setErroSenhaLogin("Campo obrigatório!")
      informacoesValidas = false
    } else {
      setErroSenhaLogin("\n")
    }

    
    if (informacoesValidas) {
      navigation.navigate('MenuCliente')
    }
  }

  return (
    <View style={styles.container}>
      {exibirCadastro ? (
        <>
          <Text>Área de cadastro de motorista</Text>

          <View style={styles.inputContainer}>
            <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
            <Text style={styles.erro}>{erroNome}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Telefone" style={styles.input} onChangeText={setTelefone} />
            <Text style={styles.erro}>{erroTelefone}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
            <Text style={styles.erro}>{erroEmail}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenha} />
            <Text style={styles.erro}>{erroSenha}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Confirmar Senha" secureTextEntry style={styles.input} onChangeText={setConfirmacaoSenha} />
            <Text style={styles.erro}>{erroConfirmacaoSenha}</Text>
          </View>

          <Button title="Proximos passos" onPress={continuarCadastro} />

          <TouchableOpacity onPress={() => {
            setErroNome("\n")
            setErroTelefone("\n")
            setErroEmail("\n")
            setErroSenha("\n")
            setErroConfirmacaoSenha("\n")
            setExibirCadastro(false)
          }}>
            <Text style={styles.link}>Voltar para login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>Entrar na sua conta</Text>

          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} onChangeText={setEmailLogin} />
            <Text style={styles.erro}>{erroEmailLogin}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenhaLogin} />
            <Text style={styles.erro}>{erroSenhaLogin}</Text>
          </View>

          <Button title="Entrar" onPress={login}/>

          <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setErroEmailLogin("\n")
            setErroSenhaLogin("\n")
            setExibirCadastro(true)
          }}>
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
  inputContainer: {
    width: '75%'
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    placeholderTextColor: '#555'
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
  erro: {
    color: 'red',
    marginTop: -5,
    marginBottom: 10,
    fontSize: '75%'
  },
});