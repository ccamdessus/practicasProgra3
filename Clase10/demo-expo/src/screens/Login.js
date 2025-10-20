// /screens/Login.js
import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Formulario de login</Text>
        <TextInput style={styles.field} keyboardType="email-address" placeholder="email" onChangeText={(text) => this.setState({ email: text })} value={this.state.email}/>
        <TextInput style={styles.field} keyboardType="default" placeholder="password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} value={this.state.password}/>
        <Pressable onPress={() => this.onSubmit()}>
          <Text>Login</Text>
        </Pressable>
        <View>
          <Text>Email: {this.state.email}</Text>
          <Text>Password: {this.state.password}</Text>
        </View>
        <Pressable onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Ir al registro</Text>
        </Pressable>
        <Pressable onPress={() => this.props.navigation.navigate('HomeMenu')}>
          <Text>Entrar en la app</Text>
        </Pressable>
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
