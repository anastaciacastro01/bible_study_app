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

const PRAYER_DATA = [
  {
    id: 1,
    title: 'Prayer 1',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NPYSYlHJ4kbztWnIjWsXWwHaEK%26pid%3DApi&f=1" 
  },
  {
    id: 2,
    title: 'Prayer 2',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OK4LfKi5qbmJ6yM8i8AVMwHaEK%26pid%3DApi&f=1"
  },
  {
    id: 3,
    title: 'Prayer 3',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MGfeO_1WhfRoqaVuu9hW9gHaEo%26pid%3DApi&f=1" 
  },
  {
    id: 4,
    title: 'Prayer 4',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tLoaDrSkggWXvCa8JoIIqAHaEo%26pid%3DApi&f=1"
  },
  {
    id: 5,
    title: 'Prayer 5',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.uUBmT-1TZKYRMwybILJRlAHaEK%26pid%3DApi&f=1" 
  },
  {
    id: 6,
    title: 'Prayer 6',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._mMsTvVECB0oIWIZRLyXXgHaEo%26pid%3DApi&f=1"
  },
  {
    id: 7,
    title: 'Prayer 7',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VI51i8bwgzTnByzjIk_OngHaEo%26pid%3DApi&f=1"
  },
];

const Prayer = ({ img, title }) => {
  const thisWindow = useWindowDimensions();

  return (
    <View
      style = {{
        flex: 1,
        width: thisWindow.width / 2,
        height: thisWindow.width / 2,
        marginHorizontal: 5, 
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        }}
    >
      <Image source = { img } style = { styles.image } />
      <Text style = { styles.prayerTitle }> { title } </Text>
    </View>
  );
};

const PrayerBoardScreen = ({ navigation, route }) => {
  const renderPrayers = ({ item, index, separators }) => (
    <Prayer
      img = {{ uri: item.img }}
      title = { item.title }
    />
  );

  return (
    <SafeAreaView style = { styles.container }>
      <FlatList
        data = { PRAYER_DATA }
        renderItem = { renderPrayers }
        keyExtractor = { item => item.id }
        horizontal = { false }
        numColumns = { 2 }
        style = {{ marginHorizontal: 5, marginTop: 10,  }}
      />
    </SafeAreaView>
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
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  prayerTitle: {
    textAlign: 'center',
    backgroundColor: '#e2e7d6',
    padding: 5,
    fontSize: FONT_SIZES.prayerTitle,
  }
});
