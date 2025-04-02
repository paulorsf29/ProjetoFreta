import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function MenuPrincipal({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={[styles.bodySubcontainer, {height: '50%'}]}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, {color: '#b6670a', fontWeight: 'bold', fontSize: '200%'}]}>Entrar como</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroCliente')}>
              <Text style={styles.buttonText}>Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroMotorista')}>
              <Text style={styles.buttonText}>Motorista</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.bodySubcontainer}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('QuemSomos')}>
              <Text style={styles.text}>Quem somos</Text>
            </TouchableOpacity>
            <Text style={styles.text}>...</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcf00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff6e3',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '65%',
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderTopRightRadius: 50
  },
  text: {
    textAlign: 'center'
  },
  textContainer: {
    alignItems: 'center'
  },
  bodySubcontainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '50%'
  },
  button: {
    backgroundColor: '#ffcf00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '70%',
    height: '45%'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: '100%'
  },
});