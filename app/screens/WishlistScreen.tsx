// WishlistScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={60} color="#d1a21f" />
      <Text style={styles.text}>Ta wishlist est vide pour le moment 💛</Text>
      <Text style={styles.subtext}>Ajoute des cours que tu veux suivre plus tard !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fffaf2' },
  text: { fontSize: 18, fontWeight: '600', color: '#2c2c2c', marginTop: 12 },
  subtext: { fontSize: 15, color: '#6a6a6a', marginTop: 6 },
});
