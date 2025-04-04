import { StyleSheet, Text, View } from 'react-native';

export default function MenuCliente({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>O que é Freta</Text>
        <Text style={styles.text}>
        A Freta é uma plataforma de gestão de fretes que conecta clientes e caminhoneiros de forma prática e segura. Com tecnologia intuitiva e foco na transparência, agiliza negociações, reduz custos e oferece controle total sobre o transporte.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFD700',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#f2f2f2',
    textAlign: 'justify',
    lineHeight: 26,
  },
});
