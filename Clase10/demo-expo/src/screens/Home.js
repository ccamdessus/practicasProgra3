import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DynamicForm from '../components/DynamicForm';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Pantalla Home</Text>
        <DynamicForm />
      </View>
    );
  }
}
