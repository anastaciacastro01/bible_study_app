import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
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
            initialParams = {{ itemId: 42, otherParam: "hello!" }}
          />
          <Stack.Screen
            name = "CreatePost"
            component = { CreatePostScreen }
          />
        </Stack.Navigator>
        <StatusBar style = "auto" />
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation, route }) => {
  var user_name = 'Luke';
  var ex_title = "Go to " + user_name + "'s profile";

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with 'route.params.post'
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style = {styles.generalView} >
    <Button
      title = {ex_title}
      onPress = {() =>
        navigation.navigate('Profile', { name: user_name })
      }
    />
    <Button
      title = "Go to Details"
      onPress = {() => {
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'buddy',
        });
        }}
    />
    <Button
      title = "Create Post"
      onPress = {() =>
        navigation.navigate('CreatePost')}
    />
    <Text style = {{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text> This is {route.params.name}'s profile </Text>;
};

const DetailsScreen = ({ navigation, route }) => {
  var { itemId, otherParam } = route.params;
  return (
    <View style = {styles.generalView}>
      <Text> Details Screen </Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title = "Go to Details... again"
        onPress = {() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title = "Go to Home"
        onPress = {() => navigation.navigate('Home')}
      />
      <Button
        title = "Go back"
        onPress = {() => navigation.goBack()}
      />
    </View>
  );
}

const CreatePostScreen = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder = "What's on your mind?"
        style = {{ height: 200, padding: 10, backgroundColor: 'white' }}
        value = {postText}
        onChangeText = {setPostText}
      />
      <Button
        title = "Done"
        onPress = {() => {
          //Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
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
