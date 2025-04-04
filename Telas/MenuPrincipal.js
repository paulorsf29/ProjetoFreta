import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function MenuPrincipal({ navigation }) {
  return (
    <SafeAreaProvider>
      <ImageBackground source={require('../assets/FRETA.png')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
          
          {/* FUNDO CLARO QUE COBRE A IMAGEM SEM TRANSPARÊNCIA */}
          <View style={styles.body}>
            <View style={[styles.bodySubcontainer, { height: '50%' }]}>
              <View style={styles.textContainer}>
                <Text style={[styles.text, { color: '#000', fontFamily: 'Arial' ,fontWeight: 'bold', fontSize: 35, textAlign:'center' }]}>
                  Entrar como
                </Text>
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
                  <Text style={styles.textqs}>Quem somos?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Faz a imagem cobrir toda a tela
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff6e3', // Fundo claro SEM transparência
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '65%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderTopRightRadius: 50,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  textqs: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Arial'
  },
  textContainer: {
    alignItems: 'center',
  },
  bodySubcontainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '50%',
  },
  button: {
    backgroundColor: '#ffcf00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '70%',
    height: '45%',
    fontFamily: 'Arial'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial'
  },
});
