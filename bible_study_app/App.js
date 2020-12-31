import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/** 
 * main app
 */
 /*
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
*/

/**
 * navigation
 */
const Stack = createStackNavigator();

// const MyStack = () => {
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name = "Home"
            component = { HomeScreen }
            options = {{ title: 'Welcome' }}
          />
          <Stack.Screen 
            name = "Profile"
            component = { ProfileScreen }
            options = {{ title: 'Profile' }}
          />
          <Stack.Screen
            name = "Details"
            component = { DetailsScreen}
          />
        </Stack.Navigator>
        <StatusBar style = "auto" />
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title = "Go to my profile"
      onPress = {() =>
        navigation.navigate('Profile', { name: 'Sarah' })
      }
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text> This is {route.params.name}'s profile </Text>;
};

const DetailsScreen = () => {
  return (
    <View style = {styles.generalView}>
      <Text>Details Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
