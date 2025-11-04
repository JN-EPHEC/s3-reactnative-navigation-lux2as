// ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={90} color="#d1a21f" />
      <Text style={styles.title}>Lucas Gérard</Text>
      <Text style={styles.info}>lu.gerard@students.ephec.be</Text>
      <Text style={styles.signature}>✨ Apprendre, créer et s’améliorer chaque jour ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fffaf2' },
  title: { fontSize: 24, fontWeight: '700', color: '#2c2c2c', marginTop: 8 },
  info: { fontSize: 16, color: '#6a6a6a', marginTop: 4 },
  signature: { fontSize: 14, color: '#a38a3b', marginTop: 20, fontStyle: 'italic' },
});
