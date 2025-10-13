import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductsAll from './src/screens/ProductsAll';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Probando FlatLists</Text>
      <ProductsAll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
