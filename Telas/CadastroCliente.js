import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default function CadastroCliente({ navigation }) {
  const [exibirCadastro, setExibirCadastro] = useState(false);
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [erroEmailLogin, setErroEmailLogin] = useState("\n");
  const [erroSenhaLogin, setErroSenhaLogin] = useState("\n");

  function login() {
    let informacoesValidas = true;

    if (!emailLogin) {
      setErroEmailLogin("Campo obrigatório!");
      informacoesValidas = false;
    } else if (!emailLogin.includes("@")) {
      setErroEmailLogin("Email inválido!");
      informacoesValidas = false;
    } else {
      setErroEmailLogin("\n");
    }

    if (!senhaLogin) {
      setErroSenhaLogin("Campo obrigatório!");
      informacoesValidas = false;
    } else {
      setErroSenhaLogin("\n");
    }

    if (informacoesValidas) {
      navigation.navigate("MenuCliente");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground source={require("../assets/Login_cliente.png")} style={styles.backgroundImage}></ImageBackground>
      <View style={styles.overlay}>
        {!exibirCadastro ? (
          <>
            <Text style={styles.title}>Entrar em minha conta</Text>

            <View style={styles.inputContainer}>
              <TextInput placeholder="EMAIL / CPF / CNPJ" style={styles.input} onChangeText={setEmailLogin} />
              <Text style={styles.erro}>{erroEmailLogin}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenhaLogin} />
              <Text style={styles.erro}>{erroSenhaLogin}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenhaLogin} />
              <Text style={styles.erro}>{erroSenhaLogin}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={login}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setExibirCadastro(true)}>
              <Text style={styles.link}>Não tenho conta</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.title}>Área de cadastro</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%', // ou o tamanho que você quiser para o topo
    resizeMode: 'cover',
    zIndex: 0
  },
  overlay: {
    backgroundColor: "#fff6e3",
    flexGrow: 1,
    marginTop: '55%',
    width: '100%',
    alignItems: "center",
    paddingTop: '5%',
    paddingBottom: '5%',
    borderTopRightRadius: 50,
    zIndex: 1
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
    width: "75%"
  },
  inputContainer: {
    width: "75%",
  },
  input: {
    backgroundColor: '#fff',
    width: "100%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    placeholderTextColor: "#555",
  },
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '70%',
    height: 45,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
  erro: {
    color: "red",
    marginTop: -5,
    marginBottom: 10,
    fontSize: 12,
  },
});
