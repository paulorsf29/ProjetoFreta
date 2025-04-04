import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as anex from 'react-native-image-picker';

export default function CadastrarVeiculo({ navigation }) {
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [capacidadeCarga, setCapacidadeCarga] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState('');
  const [Cnh, setCNH] = useState(null);
  const [mensagemErro, setMensagemErro] = useState('');
  const [tipoVeiculo, setTipoVeiculo] = useState(null);

  function cadastrar() {
    if (!tipoVeiculo) {
      setMensagemErro('Para concluir o cadastro, selecione o tipo de Veículo');
      return;
    }

    if (!modelo || !placa || !capacidadeCarga || !cor || !ano || !Cnh) {
      setMensagemErro('Informações inválidas, digite novamente');
    } else {
      setMensagemErro('');
      alert(`Veículo (${placa}) cadastrado com sucesso.`);
    }
  }

  function SelecionarImagem() {
    const opcoes = { mediaType: 'photo' };

    function respostaCallback(resposta) {
      if (resposta.didCancel) {
        console.log('Usuário cancelou a seleção da imagem.');
        return;
      }

      if (resposta.error) {
        console.log('Erro ao selecionar a imagem:', resposta.error);
        return;
      }

      if (resposta.assets && resposta.assets.length > 0) {
        const imagemEscolhida = resposta.assets[0].uri;
        setCNH(imagemEscolhida);
        console.log('Imagem selecionada:', imagemEscolhida);
      } else {
        console.log('Nenhuma imagem foi selecionada.');
      }
    }

    anex.launchImageLibrary(opcoes, respostaCallback);
  }

  function removerImagem() {
    setCNH(null);
  }

  function selecionarTipo(veiculo) {
    setTipoVeiculo(veiculo);
  }

  function formatarPlaca(texto) {
    let placaFormatada = texto.toUpperCase();
    if (placaFormatada.length > 7) {
      placaFormatada = placaFormatada.substring(0, 7);
    }
  
    setPlaca(placaFormatada);
  }

  function formatarAno(texto) {
    let anoFormatado = texto.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (anoFormatado.length > 4) {
      anoFormatado = anoFormatado.substring(0, 4); // Limita a 4 caracteres
    }

    setAno(anoFormatado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Veículo</Text>

      <Text>Escolha o tipo de veículo:</Text>
      <TouchableOpacity onPress={() => selecionarTipo('Carro')}>
        <Text>Carro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selecionarTipo('Caminhão')}>
        <Text>Caminhão</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Modelo"
        style={styles.input}
        onChangeText={setModelo}
        value={modelo}
      />

      <TextInput
        placeholder="Placa do Veículo"
        style={styles.input}
        onChangeText={formatarPlaca}
        value={placa}
        autoCapitalize="characters"
      />

      <TextInput
        placeholder="Cor do Carro"
        style={styles.input}
        onChangeText={setCor}
        value={cor}
      />

      <TextInput
        placeholder="Ano do Veículo"
        style={styles.input}
        onChangeText={formatarAno}
        value={ano}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Capacidade de Carga (kg)"
        style={styles.input}
        onChangeText={setCapacidadeCarga}
        value={capacidadeCarga}
        keyboardType="numeric"
      />

      <Button title="Anexe a sua CNH aqui" onPress={SelecionarImagem} />

      {Cnh && (
        <View>
          <Image source={{ uri: Cnh }} style={styles.image} />
          <Button title="Remover imagem" onPress={removerImagem} />
        </View>
      )}

      {mensagemErro ? <Text style={styles.erro}>{mensagemErro}</Text> : null}
      <Button title="Cadastrar" onPress={cadastrar} />
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});