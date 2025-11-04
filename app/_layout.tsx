// Layout.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CourseListScreen from './screens/CourseListScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import WishlistScreen from './screens/WishlistScreen';
import ProfileScreen from './screens/ProfileScreen';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DrawerHamburger() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <Pressable onPress={() => navigation.openDrawer()} style={{ paddingHorizontal: 16 }}>
      <Ionicons name="menu" size={26} color="#d1a21f" />
    </Pressable>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <DrawerHamburger />,
        headerStyle: { backgroundColor: '#fff7e0' },
        headerTitleStyle: { color: '#2c2c2c', fontWeight: '600' },
      }}
    >
      <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'Tous les cours' }} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

function CoursesTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#fff7e0' },
        headerTitleStyle: { color: '#2c2c2c', fontWeight: '600' },
        tabBarActiveTintColor: '#d1a21f',
        tabBarInactiveTintColor: '#9b9b9b',
        tabBarStyle: { backgroundColor: '#fffaf2', borderTopColor: '#f0e4c2' },
        tabBarIcon: ({ focused, size, color }) => {
          const icons: Record<string, string> = {
            AllCourses: focused ? 'book' : 'book-outline',
            Wishlist: focused ? 'heart' : 'heart-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="AllCourses"
        component={CoursesStack}
        options={{ title: 'Catalogue', headerShown: false }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: 'Favoris',
          headerLeft: () => <DrawerHamburger />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Layout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        drawerActiveTintColor: '#d1a21f',
        drawerLabelStyle: { fontWeight: '600' },
      }}
    >
      <Drawer.Screen
        name="Courses"
        component={CoursesTabs}
        options={{
          title: 'Cours',
          headerShown: false,
          drawerIcon: ({ size, color }) => <Ionicons name="layers-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{
          title: 'Mon Profil',
          drawerIcon: ({ size, color }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
