import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
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
        <Stack.Navigator initialRouteName="Studies" headerMode="screen">
          <Stack.Screen
            name = "Studies"
            component = { StudiesScreen }
            options = {{ 
              headerTitle: props => <MainHeader {...props} />,
              headerStyle: {
                backgroundColor: 'green',
                flexDirection: 'row',
              }
            }}
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
    <TouchableOpacity
      onPress = {() => Alert.alert("menu pressed")}
    >
    <Image
      style = { styles.tinyLogo }
      source = {{
        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.designcrowd.com%2Fblog%2F2016%2FMarch%2Ficons-vs-logos%2FHamburger-Icon_300.png&f=1&nofb=1'
      }}
    />
    </TouchableOpacity>
    <TouchableOpacity
      onPress = {() => Alert.alert("home pressed")}
      >
      <Image
      style = { styles.tinyLogo }
      source = {{
        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F26%2FIos-home-outline.svg%2F768px-Ios-home-outline.svg.png&f=1&nofb=1'
      }}
    />
    </TouchableOpacity>
    <TouchableOpacity
      onPress = {() => Alert.alert("chat pressed")}
      >
      <Image
      style = { styles.tinyLogo }
      source = {{
        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_503325.png&f=1&nofb=1' 
      }}
    />
    </TouchableOpacity>
    <TouchableOpacity
      onPress = {() => Alert.alert("prayer pressed")}
      >
      <Image
      style = { styles.tinyLogo }
      source = {{
        uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FaTq%2Fb4g%2FaTqb4gLTM.gif&f=1&nofb=1' 
      }}
    />
    </TouchableOpacity>
    </View>
  );
}

const StudiesScreen = ({ navigation, route }) => {
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
  },
  generalView: {
    flex: 1,
  },
  tinyLogo: {
    flex: 1,
    width: 40,
    height: 40,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
    flexGrow: 1,
  },
});
