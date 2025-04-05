import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MenuCliente({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>O que é a Freta</Text>
        <Text style={styles.text}>
          A Freta é uma plataforma inteligente de gestão de fretes que oferece praticidade, segurança e eficiência. Conectamos clientes a caminhoneiros de forma confiável e transparente, agilizando negociações e garantindo total controle no transporte.
        </Text>

        <Text style={styles.subTitle}>Quem Somos</Text>
        <Text style={styles.text}>
          Somos uma equipe comprometida em transformar o transporte de cargas no Brasil, utilizando tecnologia para facilitar a vida de quem precisa transportar e de quem está na estrada.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuPrincipal')}>
          <Text style={styles.buttonText}>Voltar ao início</Text>
        </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFD700',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#FFD700',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#f2f2f2',
    textAlign: 'justify',
    lineHeight: 26,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
