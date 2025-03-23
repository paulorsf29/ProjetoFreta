import { StyleSheet, Text, View, Button } from 'react-native';

export default function MenuPrincipal({navigation}) {
  return (
    <View style={styles.container}>

    <View >
      <Text>O Que é Frota</Text>
      <Text>Frota é uma ferramenta de gestão de gestão de fretes com confiabilidade e segurança</Text>

    </View>

    <View>
      <Text></Text>
      <Button title="Entrar como motorista" onPress={() => navigation.navigate('CadastroMotorista')}></Button>
      <Text></Text>
      <Text></Text>
      <Button title="Entrar como cliente" onPress={() => navigation.navigate('CadastroCliente')}></Button>
    </View>

    <View>
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
});
