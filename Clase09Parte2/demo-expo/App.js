import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}> Probando imagenes </Text>
    <Image style={styles.image}
    source={require('../../Clase09Parte2/demo-expo/assets/zonaMedia.jpeg')}
    resizeMode='contain'/>
    <Image style={styles.image}
    source={require('../../Clase09Parte2/demo-expo/assets/image.png')}
    resizeMode='contain'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    height: 400,
  }
});
