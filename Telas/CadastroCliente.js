import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

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
    <ImageBackground source={require("../assets/Login_cliente.png")} style={styles.backgroundImage}>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: "#fff6e3",
    alignItems: "center",
    justifyContent: "center",
    height: '65%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderTopRightRadius: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center'
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
