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
import { PrayerBoardStackScreen } from './screens/PrayerBoardScreen.js';
import { GroupsStackScreen } from './screens/GroupsScreen.js';
import { ProfileStackScreen } from './screens/ProfileScreen.js';

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
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'ios-person-sharp'
                  : 'ios-person-outline'
              } else if (route.name === 'Groups') {
                iconName = focused
                  ? 'ios-people-sharp'
                  : 'ios-people-outline'
              } else if (route.name === 'PrayerBoard') {
                iconName = focused
                  ? 'ios-grid-sharp'
                  : 'ios-grid-outline'
              }
              

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
            name = "Profile"
            component = { ProfileStackScreen }
            options = {{ title: 'Profile' }}
          />
          <Tab.Screen 
            name = "Studies"
            component = { StudiesStackScreen }
            options = {{ title: 'Studies' }}
          />
          <Tab.Screen
            name = "PrayerBoard"
            component = { PrayerBoardStackScreen }
            options = {{ title: 'Prayer Board' }}
          />
          <Tab.Screen
            name = "Groups"
            component = { GroupsStackScreen }
            options = {{ title: 'Groups' }}
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
