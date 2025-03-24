import { StyleSheet, Text, View } from 'react-native';

export default function AnuncioDeCarga({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appsss!</Text>
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
