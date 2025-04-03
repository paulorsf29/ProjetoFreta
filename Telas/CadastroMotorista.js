import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';

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

  const [erroNome, setErroNome] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmacaoSenha, setErroConfirmacaoSenha] = useState("");

  const [erroNacionalidade, setErroNacionalidade] = useState("");
  const [erroCnhCategoria, setErroCnhCategoria] = useState("");
  const [erroCnhEmissao, setErroCnhEmissao] = useState("");
  const [erroCnhValidade, setErroCnhValidade] = useState("");
  const [erroRg, setErroRg] = useState("");
  const [erroCpf, setErroCpf] = useState("");

  const [erroEmailLogin, setErroEmailLogin] = useState("");
  const [erroSenhaLogin, setErroSenhaLogin] = useState("");

  function CategoriaCnh(texto) {
    
    if (texto.length <= 2) {
      setCnhCategoria(texto);
    }
  }
  
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
    <ScrollView contentContainerStyle={styles.container}>
      {exibirCadastro ? (
        <>
          <Text style={styles.titulo}>Cadastro de Motorista</Text>

          <TextInput 
          placeholder="Nome"
           style={styles.input} 
           onChangeText={setNome} 
           />
          <Text style={styles.erro}>{erroNome}</Text>

          <TextInput 
          placeholder="Telefone"
           keyboardType="phone-pad" 
           style={styles.input} 
           onChangeText={setTelefone} 
           />
          <Text style={styles.erro}>{erroTelefone}</Text>

          <TextInput
           placeholder="Email"
            keyboardType="email-address"
             style={styles.input} 
             onChangeText={setEmail} 
             />
          <Text style={styles.erro}>{erroEmail}</Text>

          <TextInput 
          placeholder="Senha"
           secureTextEntry style={styles.input} 
           onChangeText={setSenha} 
           />
          <Text style={styles.erro}>{erroSenha}</Text>

          <TextInput 
          placeholder="Confirmar Senha"
           secureTextEntry style={styles.input} 
           onChangeText={setConfirmacaoSenha} 
           />
          <Text style={styles.erro}>{erroConfirmacaoSenha}</Text>

          <TextInput
           placeholder="Nacionalidade"
           style={styles.input}
           onChangeText={setNacionalidade} 
           />
          <Text style={styles.erro}>{erroNacionalidade}</Text>

          <TextInput 
            placeholder="Categoria CNH" 
            style={styles.input} 
            onChangeText={CategoriaCnh} 
          />
          <Text style={styles.erro}>{erroCnhCategoria}</Text>


          <TextInput 
          placeholder="Data de Emissão CNH"
           keyboardType="numeric"
          style={styles.input} onChangeText={setCnhEmissao} 
          />
          <Text style={styles.erro}>{erroCnhEmissao}</Text>

          <TextInput 
          placeholder="Data de Validade CNH"
           keyboardType="numeric" style={styles.input}
            onChangeText={setCnhValidade} 
            />
          <Text style={styles.erro}>{erroCnhValidade}</Text>

          <TextInput 
          placeholder="RG" 
          keyboardType="numeric"
           style={styles.input}
            onChangeText={setRg} />
          <Text style={styles.erro}>{erroRg}</Text>

          <TextInput 
          placeholder="CPF"
           keyboardType="numeric" 
           style={styles.input} onChangeText={setCpf} />
          <Text style={styles.erro}>{erroCpf}</Text>

          <Button title="Próximos passos" onPress={continuarCadastro} />

          <TouchableOpacity onPress={() => setExibirCadastro(false)}>
            <Text style={styles.link}>Voltar para login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.titulo}>Entrar na sua conta</Text>

          <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} onChangeText={setEmailLogin} />
          <Text style={styles.erro}>{erroEmailLogin}</Text>

          <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenhaLogin} />
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
  container: { flexGrow: 1, alignItems: "center", padding: 20 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginVertical: 5, borderRadius: 5 },
  link: { color: "blue", marginTop: 10 },
  erro: { color: "red", fontSize: 12, marginBottom: 10 },
});