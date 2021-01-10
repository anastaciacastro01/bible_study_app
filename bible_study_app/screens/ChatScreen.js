import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const ChatScreen = ({ navigation, route }) => {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text> This is the chat screen </Text>
    </View>
  );
};
