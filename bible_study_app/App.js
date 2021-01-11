import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, 
         Button, 
         Image, 
         Pressable,
         StyleSheet, 
         Text, 
         TextInput, 
         TouchableOpacity, 
         View, 
       } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudiesStackScreen } from './screens/StudiesScreen.js';
import { ChatScreen } from './screens/ChatScreen.js';
import { PrayerBoardScreen } from './screens/PrayerBoardScreen.js';

/**
 * navigation
 */
const Stack = createStackNavigator(); // currently using tab navigation instead
const Tab = createBottomTabNavigator();

/**
 * main structure for navigation
 */
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Studies" 
          screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if(route.name === 'Studies') {
                iconName = focused
                  ? 'ios-book'
                  : 'ios-book-outline'
              } else if (route.name === 'Chat') {
                iconName = focused
                  ? 'ios-chatbubbles-sharp'
                  : 'ios-chatbubbles-outline'
              } else if (route.name === 'PrayerBoard') {
                iconName = focused
                  ? 'ios-people-sharp'
                  : 'ios-people-outline'
              } else if (route.name === 'Menu') {
                iconName = focused
                  ? 'ios-menu-sharp'
                  : 'ios-menu-outline'
              }
              
              console.log(size);

              return (
                <Ionicons name = {iconName} size = {size} color = {color} />
              );
            },
          })}
          tabBarOptions ={{
            activeTintColor: 'seagreen',
            inactiveTintColor: 'mediumseagreen',
          }}
        >
          <Tab.Screen
            name = "Menu"
            component = { ProfileScreen }
          />
          <Tab.Screen 
            name = "Studies"
            component = { StudiesStackScreen }
            options = {{ title: 'Studies' }}
          />
          <Tab.Screen
            name = "Chat"
            component = { ChatScreen }
            options = {{ title: 'Chat' }}
          />
          <Tab.Screen
            name = "PrayerBoard"
            component = { PrayerBoardScreen }
            options = {{ title: 'Prayer Board' }}
          />
        </Tab.Navigator>
        <StatusBar style = "auto" />
    </NavigationContainer>
  )
}
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style = { styles.generalView } >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  generalView: {
    flex: 1,
  },
});
