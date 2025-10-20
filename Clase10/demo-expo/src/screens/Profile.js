import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Pantalla de perfil</Text>
        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Desloguearse</Text>
        </Pressable>
      </View>
    );
  }
}
