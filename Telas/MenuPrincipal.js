import { StyleSheet, Text, View, Button } from 'react-native';

export default function MenuPrincipal({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text>O que é Frota</Text>
        <Text>Frota é uma ferramenta de gestão de fretes com confiabilidade e segurança</Text>
      </View>

      <View style={styles.textContainer}>
        <Text>{`\n`}</Text>
        <Button title="Entrar como motorista" onPress={() => navigation.navigate('CadastroMotorista')}></Button>
        <Text>{`\n`}</Text>
        <Button title="Entrar como cliente" onPress={() => navigation.navigate('CadastroCliente')}></Button>
      </View>

      <View style={styles.textContainer}>
        <Text>Quem somos</Text>
        <Text>...</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center'
  }
});
