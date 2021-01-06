import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
            options = {{ headerTitle: props => <MainHeader {...props} /> }}
          />
          <Stack.Screen 
            name = "Profile"
            component = { ProfileScreen }
            options = {({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name = "Chat"
            component = { ChatScreen }
            options = {{ title: 'Chat' }}
          />
          <Stack.Screen
            name = "PrayerBoard"
            component = { PrayerBoardScreen }
            options = {{ title: 'Prayer Board' }}
          />
        </Stack.Navigator>
        <StatusBar style = "auto" />
    </NavigationContainer>
  )
}

function MainHeader() {
  return (
    <View style = {styles.header}>
    <Image
      source = {require('
    />
    </View>
  );
}

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style = { styles.generalView } >
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style = { styles.generalView } >
    </View>
  );
};

const ChatScreen = ({ navigation, route }) => {
  return (
    <View style = { styles.generalView }>
    </View>
  );
}

const PrayerBoardScreen = ({ navigation, route }) => {
  return (
    <View style = { styles.generalView }>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
