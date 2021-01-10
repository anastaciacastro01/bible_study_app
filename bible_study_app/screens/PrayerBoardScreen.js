import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const PrayerBoardScreen = ({ navigation, route }) => {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text> This is the prayer board screen </Text>
    </View>
  );
};
