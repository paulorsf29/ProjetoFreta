import React, { useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';

export default function TelaInicializacao({ navigation }) {
  const screenWidth = Dimensions.get('window').width; // Pega a largura da tela
  const moveAnim = useRef(new Animated.Value(-screenWidth)).current; // Começa fora da tela (à esquerda)

  useEffect(() => {
    // Animação do movimento da esquerda para a direita
    Animated.timing(moveAnim, {
      toValue: 0, // Posição final (centro da tela)
      duration: 2000, // Duração da animação (2s)
      useNativeDriver: true,
    }).start();

    // Timer para mudar de tela após a animação
    setTimeout(() => {
      navigation.replace('MenuPrincipal');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/FRETA-Logo.png')} // Caminho da logo
        style={[styles.logo, { transform: [{ translateX: moveAnim }] }]} // Aplica animação de movimento
        resizeMode="contain"
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFCF00', // Fundo amarelo
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 450,
    height: 450,
  },
};
