import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Contador from '../components/Contador';

export default class Home extends Component {
  saludar() {
    console.log('me clickearon');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hola Mundo</Text>
        <Pressable style={styles.boton} onPress={() => this.saludar()}>
          <Text style={styles.textoBoton}>Clickeame</Text>
        </Pressable>

        <Contador />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
  },
  boton: {
    padding: 4,
    backgroundColor: '#ccc',
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: {
    fontWeight: 'bold',
  },
});