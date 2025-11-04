// CourseListScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const courses = [
  { id: '1', title: 'Introduction à React Native', description: 'Apprenez à créer vos premières apps mobiles.' },
  { id: '2', title: 'JavaScript avancé', description: 'Approfondissez vos connaissances modernes du JS.' },
  { id: '3', title: 'UI/UX pour développeurs', description: 'Créez des interfaces plus intuitives et harmonieuses.' },
];

export default function CourseListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('CourseDetail', {
                courseId: item.id,
                title: item.title,
                description: item.description,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fffaf2', padding: 16 },
  card: {
    padding: 18,
    marginBottom: 12,
    backgroundColor: '#fff7e0',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#2c2c2c', marginBottom: 4 },
  description: { fontSize: 15, color: '#5c5c5c' },
});
