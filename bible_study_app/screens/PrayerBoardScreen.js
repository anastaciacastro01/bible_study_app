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
}

const PrayerBoardScreen = ({ navigation, route }) => {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text> This is the prayer board screen </Text>
    </View>
  );
};

/**
 * StackNavigator using React Navigation
 */
const PrayerBoardStack = createStackNavigator();

/**
 * StudiesStackScreen is the stack of all navigation routes in this StackNavigator
 *
 * Currently includes:
 *  HomeScreen - the main page of the StudiesScreen
 *  ...
 */
export const PrayerBoardStackScreen = () => {
  return (
    <PrayerBoardStack.Navigator
      initialRouteName = "Prayer Board"
    >
      <PrayerBoardStack.Screen 
        name = "Prayer Board" 
        component = { PrayerBoardScreen } 
        options = {({ navigation, route }) => ({  
          headerTitle: route.name,
          headerTitleAlign: "left",
          headerTitleStyle: { 
            fontSize: FONT_SIZES.pageHeader, 
          },
        })}
      />
    </PrayerBoardStack.Navigator>
  );
};

/**
 * All styles in this file that aren't already inline
 */
const styles = StyleSheet.create({
});
