import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ product }) {
  return (
    <View style={styles.card}>
      <Text>{product.title}</Text>
      <Text>{product.price}</Text>
      <Text>{product.category}</Text>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
        resizeMode="contain"
      />
      <Text>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
  },
  image: {
    height: 150,
    width: '100%',
  },
});