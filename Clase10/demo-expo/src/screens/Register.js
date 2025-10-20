import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Formulario de registro</Text>
        <TextInput style={styles.field} keyboardType="email-address" placeholder="email" onChangeText={(text) => this.setState({ email: text })} value={this.state.email}/>
        <TextInput style={styles.field} keyboardType="default" placeholder="username" onChangeText={(text) => this.setState({ username: text })} value={this.state.username}/>
        <TextInput style={styles.field} keyboardType="default" placeholder="password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} value={this.state.password}/>
        <Pressable onPress={() => this.onSubmit()}>
          <Text>Registrate</Text>
        </Pressable>
        <View>
          <Text>Email: {this.state.email}</Text>
          <Text>Username: {this.state.username}</Text>
          <Text>Password: {this.state.password}</Text>
        </View>
        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Ya tengo cuenta</Text>
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
