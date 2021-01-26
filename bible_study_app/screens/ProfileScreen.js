import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { useWindowDimensions, 
         Alert,
         Button,
         FlatList, 
         Image, 
         Pressable, 
         SafeAreaView, 
         ScrollView,
         StatusBar, 
         StyleSheet, 
         Switch,
         Text, 
         TextInput,
         View, 
       } from 'react-native';

/**
 * Font sizes used in the studies main page
 */
const FONT_SIZES = {
  sectionHeader: 25,
  pageHeader: 30,
  iconSize: 25,
  prayerTitle: 18,
}

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style = { styles.container }>
      <Text> Profile Screen </Text>
    </SafeAreaView>
  );
};

/**
 * StackNavigator using React Navigation
 */
const ProfileStack = createStackNavigator();

/**
 * StudiesStackScreen is the stack of all navigation routes in this StackNavigator
 *
 * Currently includes:
 *  HomeScreen - the main page of the StudiesScreen
 *  ...
 */
export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName = "Profile"
    >
      <ProfileStack.Screen 
        name = "Profile" 
        component = { ProfileScreen } 
        options = {({ navigation, route }) => ({  
          headerTitle: route.name,
          headerTitleAlign: "left",
          headerTitleStyle: { 
            fontSize: FONT_SIZES.pageHeader, 
          },
        })}
      />
    </ProfileStack.Navigator>
  );
};

/**
 * All styles in this file that aren't already inline
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
});
