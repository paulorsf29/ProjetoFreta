import { StyleSheet, Text, View } from 'react-native';

export default function MenuCliente({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>O que é Freta</Text>
        <Text style={styles.text}>Freta é uma ferramenta de gestão de fretes com confiabilidade e segurança</Text>
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
  text: {
    textAlign: 'center'
  },
  textContainer: {
    alignItems: 'center'
  }
});