import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Contador extends Component {
  state = {
    contar: 0,
  };

  sumar() {
    this.setState({ contar: this.state.contar + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cantidad de clicks: {this.state.contar}</Text>
        <Pressable style={styles.boton} onPress={() => this.sumar()}>
          <Text style={styles.textoBoton}>Click aquí para contar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  boton: {
    padding: 7,
    backgroundColor: "rgba(0, 255, 0, 0.5)",
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: {
    fontWeight: 'bold',
  },
});