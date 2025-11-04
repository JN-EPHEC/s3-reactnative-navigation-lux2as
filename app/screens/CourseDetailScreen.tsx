// CourseDetailScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CourseDetailScreen({ route, navigation }: any) {
  const { title, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <Button title="← Retour" color="#d1a21f" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fffaf2' },
  header: { fontSize: 26, fontWeight: '700', color: '#2c2c2c', marginBottom: 10 },
  text: { fontSize: 17, color: '#5a5a5a', marginBottom: 20 },
});
