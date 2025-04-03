import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {Text, TextInput} from 'react-native'
import {TouchableOpacity} from 'react-native'; 
import {Button} from 'react-native'; 

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
  const [registro, setregistro] = useState("");
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
    let novaCat = "";
    let i = 0;
  
    while (i < texto.length) {
      novaCat += texto[i];
      i++;
    }
  
    if (novaCat.length <= 2) {
      setCnhCategoria(novaCat);
    }
  }
  
  function continuarCadastro() {
    let informacaoVerdade = true;
  
    if (nome.length === 0) {
      setErroNome("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      let nomeSemEspaco = "";
      for (let i = 0; i < nome.length; i++) {
        if (nome[i] !== " ") {
          nomeSemEspaco += nome[i];
        }
      }
      if (nomeSemEspaco.length === 0) {
        setErroNome("Campo obrigatório!");
        informacaoVerdade = false;
      } else {
        setErroNome("");
      }
    }
  
    if (telefone.length === 0) {
      setErroTelefone("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      let telefoneSemEspaco = "";
      for (let i = 0; i < telefone.length; i++) {
        if (telefone[i] !== " ") {
          telefoneSemEspaco += telefone[i];
        }
      }
      if (telefoneSemEspaco.length === 0) {
        setErroTelefone("Campo obrigatório!");
        informacaoVerdade = false;
      } else {
        setErroTelefone("");
      }
    }
  
    if (email.length === 0) {
      setErroEmail("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      let temArroba = false;
      for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
          temArroba = true;
        }
      }
      if (!temArroba) {
        setErroEmail("Email inválido!");
        informacaoVerdade = false;
      } else {
        setErroEmail("");
      }
    }
  
    if (senha.length === 0) {
      setErroSenha("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroSenha("");
    }
  
    if (confirmacaoSenha.length === 0) {
      setErroConfirmacaoSenha("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      let senhaDiferente = false;
      if (senha.length !== confirmacaoSenha.length) {
        senhaDiferente = true;
      } else {
        for (let i = 0; i < senha.length; i++) {
          if (senha[i] !== confirmacaoSenha[i]) {
            senhaDiferente = true;
            break;
          }
        }
      }
      if (senhaDiferente) {
        setErroConfirmacaoSenha("Confirmação de senha não confere!");
        informacaoVerdade = false;
      } else {
        setErroConfirmacaoSenha("");
      }
    }
  
    if (nacionalidade.length === 0) {
      setErroNacionalidade("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroNacionalidade("");
    }
  
    if (cnhCategoria.length === 0) {
      setErroCnhCategoria("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroCnhCategoria("");
    }
  
    if (cnhEmissao.length === 0) {
      setErroCnhEmissao("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroCnhEmissao("");
    }
  
    if (cnhValidade.length === 0) {
      setErroCnhValidade("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroCnhValidade("");
    }
  
    if (rg.length === 0) {
      setErroRg("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroRg("");
    }
  
    if (cpf.length === 0) {
      setErroCpf("Campo obrigatório!");
      informacaoVerdade = false;
    } else {
      setErroCpf("");
    }
  
    if (informacaoVerdade === false) {
      return;
    }
  
    setExibirCadastro(false);
    navigation.navigate("CadastrarVeiculo");
  }

function login() {
  let informacaoVerdade = true;

  if (emailLogin === "" || emailLogin === " ") {
      setErroEmailLogin("Campo obrigatório!");
      informacaoVerdade = false;
  } else {
      if (emailLogin.includes("@")) {
          setErroEmailLogin("");
      } else {
          setErroEmailLogin("Email inválido!");
          informacaoVerdade = false;
      }
  }

  if (senhaLogin === "" || senhaLogin === " ") {
      setErroSenhaLogin("Campo obrigatório!");
      informacaoVerdade = false;
  } else {
      setErroSenhaLogin("");
  }

  if (informacaoVerdade === true) {
      navigation.navigate("MenuMotorista");
  }
}

function NumeroRegistro(texto) {
  let formatacao = texto; 
  if (texto.length > 11) {
    formatacao = texto.substring(0, 11); 
  }
  setregistro(formatacao); 
}

function CategoriaCnh(texto) {
  let fcategoria = "";
  let contador = 0;

  while (contador < texto.length) {
    if (contador < 2) {
      fcategoria += texto[contador];
    }
    contador++;
  }
  if (texto.length > 2) {
    let novaCat = "";
    for (let i = 0; i < 2; i++) {
      novaCat += fcategoria[i];
    }
    fcategoria = novaCat;
  }
  setCnhCategoria(fcategoria);
}


function formatarTelefone(texto) {

  let ncell = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "0" || texto[i] === "1" || texto[i] === "2" || texto[i] === "3" || texto[i] === "4" || texto[i] === "5" || texto[i] === "6" || texto[i] === "7" || texto[i] === "8" || texto[i] === "9") {
      ncell += texto[i];
    }
  }

  let nLimitados = "";
  let contador = 0;
  while (contador < ncell.length && contador < 11) {
    nLimitados += ncell[contador];
    contador++;
  }

  let telefoneFormatado = "";
  let tesao = 0;
  
  if (nLimitados.length > 0) {
    telefoneFormatado += "(";
  }

  while (tesao < nLimitados.length) {
    if (tesao === 2) {
      telefoneFormatado += ") ";
    }
    if (tesao === 6 && nLimitados.length >= 7) {
      telefoneFormatado += "-";
    }
    telefoneFormatado += nLimitados[tesao];
    tesao++;
  }

  setTelefone(telefoneFormatado);
}


function formatarCpf(texto) {
  let NumerosCPf = "";

  for (let i = 0; i < texto.length; i++) {
    let elemento = texto[i];
    if (
      elemento === "0" || elemento === "1" ||elemento === "2" ||elemento === "3" ||elemento === "4" ||elemento === "5" ||elemento === "6" ||elemento === "7" ||elemento === "8" ||elemento === "9") {
      NumerosCPf += elemento;
    }
  }

  let cpfLimitado = "";
  let contador = 0;
  while (contador < NumerosCPf.length && contador < 11) {
    cpfLimitado += NumerosCPf[contador];
    contador++;
  }

  let cpfFormatado = "";
  let tesao = 0;
  while (tesao < cpfLimitado.length) {
    if (tesao === 3) {
      cpfFormatado += ".";
    }
    if (tesao === 6) {
      cpfFormatado += ".";
    }
    if (tesao === 9) {
      cpfFormatado += "-";
    }
    cpfFormatado += cpfLimitado[tesao];
    tesao++;
  }

  setCpf(cpfFormatado);
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
           value={nome}/>
          <Text style={styles.erro}>{erroNome}</Text>

          <TextInput
            placeholder="Telefone"
            keyboardType="phone-pad"
            style={styles.input}
            onChangeText={formatarTelefone}
            value={telefone}/>

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
            onChangeText={formatarCpf}
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
            placeholder="Número de registro"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={NumeroRegistro}
            value={registro}
          />

          <Button title="Entrar" onPress={login} />

          <TouchableOpacity>
            <Text style={styles.link}>Esqueçeu a senha?</Text>
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
  container: { height: 1, flexGrow: 1, alignItems: "center", padding: 20 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: { width: "80%", padding: 10, borderWidth: 1, marginVertical: 5, borderRadius: 5 },
  link: { color: "blue", marginTop: 10 },
  erro: { color: "red", fontSize: 12, marginBottom: 10 },
});