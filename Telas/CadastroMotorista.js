import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Button } from 'react-native';

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
  const [registro, setRegistro] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");

  const [erros, setErros] = useState({});

  function validarCampo(valor, campo, condicaoExtra = () => true) {
    if (!valor.trim()) {
      return `${campo} é obrigatório!`;
    }
    if (!condicaoExtra(valor)) {
      return `${campo} inválido!`;
    }
    return "";
  }

  function continuarCadastro() {
    const novosErros = {
      nome: validarCampo(nome, "Nome"),
      telefone: validarCampo(telefone, "Telefone"),
      email: validarCampo(email, "Email", (v) => v.includes("@")),
      senha: validarCampo(senha, "Senha"),
      confirmacaoSenha:
        senha === confirmacaoSenha ? "" : "Confirmação de senha não confere!",
      nacionalidade: validarCampo(nacionalidade, "Nacionalidade"),
      cnhCategoria: validarCampo(cnhCategoria, "Categoria CNH"),
      cnhValidade: validarCampo(cnhValidade, "Data de Validade CNH"),
      rg: validarCampo(rg, "RG"),
      cpf: validarCampo(cpf, "CPF")
    };

    setErros(novosErros);

    const possuiErro = Object.values(novosErros).some((erro) => erro);
    if (!possuiErro) {
      setExibirCadastro(false);
      navigation.navigate("CadastrarVeiculo");
    }
  }

  function login() {
    const errosLogin = {
      emailLogin: validarCampo(emailLogin, "Email", (v) => v.includes("@")),
      senhaLogin: validarCampo(senhaLogin, "Senha")
    };

    setErros(errosLogin);

    const possuiErro = Object.values(errosLogin).some((erro) => erro);
    if (!possuiErro) {
      navigation.navigate("MenuMotorista");
    }
  }

  function formatarNumero(texto, limite) {
    return texto.replace(/\D/g, '').slice(0, limite);
  }

  function formatarTelefone(texto) {
    const numeros = formatarNumero(texto, 11);
    const telefoneFormatado = numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setTelefone(telefoneFormatado);
  }

  function formatarCpf(texto) {
    const numeros = formatarNumero(texto, 11);
    const cpfFormatado = numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCpf(cpfFormatado);
  }

  function formatarRegistro(texto) {
    setRegistro(formatarNumero(texto, 11));
  }

  function limitarCategoria(texto) {
    setCnhCategoria(texto.slice(0, 2));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {exibirCadastro ? (
        <>
          <Text style={styles.titulo}>Cadastro de Motorista</Text>

          <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} value={nome} />
          <Text style={styles.erro}>{erros.nome}</Text>

          <TextInput placeholder="Telefone" keyboardType="phone-pad" style={styles.input} onChangeText={formatarTelefone} value={telefone} />
          <Text style={styles.erro}>{erros.telefone}</Text>

          <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} onChangeText={setEmail} value={email} />
          <Text style={styles.erro}>{erros.email}</Text>

          <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenha} value={senha} />
          <Text style={styles.erro}>{erros.senha}</Text>

          <TextInput placeholder="Confirmar Senha" secureTextEntry style={styles.input} onChangeText={setConfirmacaoSenha} value={confirmacaoSenha} />
          <Text style={styles.erro}>{erros.confirmacaoSenha}</Text>

          <TextInput placeholder="Nacionalidade" style={styles.input} onChangeText={setNacionalidade} value={nacionalidade} />
          <Text style={styles.erro}>{erros.nacionalidade}</Text>

          <TextInput placeholder="Categoria CNH" style={styles.input} onChangeText={limitarCategoria} value={cnhCategoria} />
          <Text style={styles.erro}>{erros.cnhCategoria}</Text>

          <TextInput placeholder="Data de Validade CNH" keyboardType="numeric" style={styles.input} onChangeText={setCnhValidade} value={cnhValidade} />
          <Text style={styles.erro}>{erros.cnhValidade}</Text>

          <TextInput placeholder="RG" keyboardType="numeric" style={styles.input} onChangeText={setRg} value={rg} />
          <Text style={styles.erro}>{erros.rg}</Text>

          <TextInput placeholder="CPF" keyboardType="numeric" style={styles.input} onChangeText={formatarCpf} value={cpf} />
          <Text style={styles.erro}>{erros.cpf}</Text>

          <Button title="Próximos passos" onPress={continuarCadastro} />
          <TouchableOpacity onPress={() => setExibirCadastro(false)}>
            <Text style={styles.link}>Voltar para login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.titulo}>Entrar na sua conta</Text>
          <Text style={styles.erro}>{erros.emailLogin}</Text>

          <TextInput placeholder="Número de registro" keyboardType="numeric" style={styles.input} onChangeText={formatarRegistro} value={registro} />

          <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setSenhaLogin} value={senhaLogin} />
          <Text style={styles.erro}>{erros.senhaLogin}</Text>

          <Button title="Entrar" onPress={login} />

          <TouchableOpacity>
            <Text style={styles.link}>Esqueceu a senha?</Text>
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
