import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const altura = Dimensions.get('window').height

export default function CadastroMotorista({ navigation }) {

  const [exibirCadastro, setExibirCadastro] = useState(false);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [cnhCategoria, setCnhCategoria] = useState("");
  const [cnhEmissao, setCnhEmissao] = useState("");
  const [cnhValidade, setCnhValidade] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [numeroRegistro, setNumeroRegistro] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");

  const [erroNome, setErroNome] = useState("\n");
  const [erroTelefone, setErroTelefone] = useState("\n");
  const [erroEmail, setErroEmail] = useState("\n");
  const [erroSenha, setErroSenha] = useState("\n");
  const [erroConfirmacaoSenha, setErroConfirmacaoSenha] = useState("\n");

  const [erroNacionalidade, setErroNacionalidade] = useState("\n");
  const [erroCnhCategoria, setErroCnhCategoria] = useState("\n");
  const [erroCnhEmissao, setErroCnhEmissao] = useState("\n");
  const [erroCnhValidade, setErroCnhValidade] = useState("\n");
  const [erroRg, setErroRg] = useState("\n");
  const [erroCpf, setErroCpf] = useState("\n");

  const [erroEmailLogin, setErroEmailLogin] = useState("\n");
  const [erroSenhaLogin, setErroSenhaLogin] = useState("\n");

  function continuarCadastro() {
      let informacoesValidas = true;

      if (nome.trim() === "") {
          setErroNome("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroNome("");
      }

      if (telefone.trim() === "") {
          setErroTelefone("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroTelefone("");
      }

      if (email.trim() === "") {
          setErroEmail("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          if (email.includes("@")) {
              setErroEmail("");
          } else {
              setErroEmail("Email inválido!");
              informacoesValidas = false;
          }
      }

      if (senha.trim() === "") {
          setErroSenha("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroSenha("");
      }

      if (confirmacaoSenha.trim() === "") {
          setErroConfirmacaoSenha("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          if (senha !== confirmacaoSenha) {
              setErroConfirmacaoSenha("Confirmação de senha não confere!");
              informacoesValidas = false;
          } else {
              setErroConfirmacaoSenha("");
          }
      }

      if (nacionalidade.trim() === "") {
          setErroNacionalidade("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroNacionalidade("");
      }

      if (cnhCategoria.trim() === "") {
          setErroCnhCategoria("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroCnhCategoria("");
      }

      if (cnhEmissao.trim() === "") {
          setErroCnhEmissao("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroCnhEmissao("");
      }

      if (cnhValidade.trim() === "") {
          setErroCnhValidade("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroCnhValidade("");
      }

      if (rg.trim() === "") {
          setErroRg("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroRg("");
      }

      if (cpf.trim() === "") {
          setErroCpf("Campo obrigatório!");
          informacoesValidas = false;
      } else {
          setErroCpf("");
      }
      if (!informacoesValidas) {
          return;
      }

      setExibirCadastro(false);
      navigation.navigate("CadastrarVeiculo");
  }


function login() {
  let informacoesValidas = true;

  if (emailLogin === "" || emailLogin === " ") {
      setErroEmailLogin("Campo obrigatório!");
      informacoesValidas = false;
  } else {
      if (emailLogin.includes("@")) {
          setErroEmailLogin("");
      } else {
          setErroEmailLogin("Email inválido!");
          informacoesValidas = false;
      }
  }

  if (senhaLogin === "" || senhaLogin === " ") {
      setErroSenhaLogin("Campo obrigatório!");
      informacoesValidas = false;
  } else {
      setErroSenhaLogin("");
  }

  if (informacoesValidas === true) {
      navigation.navigate("MenuMotorista");
  }
}

function NumeroRegistro(texto) {
  let formatacao = texto;
  if (texto.length > 11) {
    formatacao = texto.substring(0, 11);
  }
  setNumeroRegistro(formatacao);
}

function CategoriaCnh(texto) {
  let categoriaFormatada = texto;
  if (texto.length > 2) {
    categoriaFormatada = texto.substring(0, 2);
  }

  setCnhCategoria(categoriaFormatada);
}

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      {exibirCadastro ? (
        <>
          <Text style={styles.titulo}>Cadastro de Motorista</Text>

          <TextInput
           placeholder="Nome"
           style={styles.input}
           onChangeText={setNome}
           value={nome}/>
          <Text style={styles.erro}>{erroNome}</Text>

          <TextInput
           placeholder="Telefone"
           keyboardType="phone-pad"
           style={styles.input}
           onChangeText={setTelefone}
           value={telefone}/>
          <Text style={styles.erro}>{erroTelefone}</Text>

          <TextInput
           placeholder="Email"
           keyboardType="email-address"
           style={styles.input}
           onChangeText={setEmail}
           value={email}/>
          <Text style={styles.erro}>{erroEmail}</Text>

          <TextInput
           placeholder="Senha" 
           secureTextEntry
           style={styles.input}
           onChangeText={setSenha}
           value={senha}/>
          <Text style={styles.erro}>{erroSenha}</Text>

          <TextInput
           placeholder="Confirmar Senha"
           secureTextEntry
           style={styles.input}
           onChangeText={setConfirmacaoSenha}
           value={confirmacaoSenha}/>
          <Text style={styles.erro}>{erroConfirmacaoSenha}</Text>

          <TextInput
           placeholder="Nacionalidade"
           style={styles.input}
           onChangeText={setNacionalidade}
           value={nacionalidade}/>
          <Text style={styles.erro}>{erroNacionalidade}</Text>

          <TextInput
           placeholder="Categoria CNH"
           style={styles.input}
           onChangeText={CategoriaCnh}
           value={cnhCategoria}/>
          <Text style={styles.erro}>{erroCnhCategoria}</Text>


          <TextInput
           placeholder="Data de Emissão CNH"
           keyboardType="numeric"
           style={styles.input}
           onChangeText={setCnhEmissao}
           value={cnhEmissao}/>
          <Text style={styles.erro}>{erroCnhEmissao}</Text>

          <TextInput
           placeholder="Data de Validade CNH"
           keyboardType="numeric"
           style={styles.input}
           onChangeText={setCnhValidade}
           value={cnhValidade}/>
          <Text style={styles.erro}>{erroCnhValidade}</Text>

          <TextInput
           placeholder="RG"
           keyboardType="numeric"
           style={styles.input}
           onChangeText={setRg}
           value={rg}/>
          <Text style={styles.erro}>{erroRg}</Text>

          <TextInput
           placeholder="CPF"
           keyboardType="numeric"
           style={styles.input}
           onChangeText={setCpf}
           value={cpf}/>
          <Text style={styles.erro}>{erroCpf}</Text>

          <Button title="Próximos passos" onPress={continuarCadastro} />

          <TouchableOpacity onPress={() => setExibirCadastro(false)}>
            <Text style={styles.link}>Voltar para login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.titulo}>Entrar na sua conta</Text>

          <TextInput
           placeholder="Email"
           keyboardType="email-address"
           style={styles.input}
           onChangeText={setEmailLogin}
           value={emailLogin}
          />
          <Text style={styles.erro}>{erroEmailLogin}</Text>

          <TextInput
           placeholder="Senha"
           secureTextEntry
           style={styles.input}
           onChangeText={setSenhaLogin}
           value={senhaLogin}
          />
          <Text style={styles.erro}>{erroSenhaLogin}</Text>

          <TextInput
            placeholder="Número de Registro"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={NumeroRegistro}
            value={numeroRegistro}
          />

          <Button title="Entrar" onPress={login} />

          <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setExibirCadastro(true)}>
            <Text style={styles.link}>Não possui uma conta?</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { height: altura, flexGrow: 1, alignItems: "center", padding: 20 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginVertical: 5, borderRadius: 5 },
  link: { color: "blue", marginTop: 10 },
  erro: { color: "red", fontSize: 12, marginBottom: 10 },
});