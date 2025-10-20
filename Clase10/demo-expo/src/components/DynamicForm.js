import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Nuevo comentario</Text>
        <TextInput style={styles.field} keyboardType="default" placeholder="comentario" onChangeText={(text) => this.setState({ comentario: text })} value={this.state.comentario}/>
        <Pressable onPress={() => this.onSubmit()}>
          <Text>Enviar</Text>
        </Pressable>
        <View>
          <Text>Comentario: {this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  field: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },
});
