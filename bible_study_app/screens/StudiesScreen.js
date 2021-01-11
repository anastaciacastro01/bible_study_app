import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { useWindowDimensions, 
         Alert,
         FlatList, 
         ImageBackground, 
         Pressable, 
         SafeAreaView, 
         ScrollView,
         StatusBar, 
         StyleSheet, 
         Text, 
         View, 
       } from 'react-native';

const Study = ({ pic, caption }) => {
  const thisWindow = useWindowDimensions();
  
  return (
    <View>
      <Pressable style = {{ 
        flex: 1, 
        width: thisWindow.width / 3, 
        height: thisWindow.width / 2, 
        marginHorizontal: 10,
      }}>
        <ImageBackground source = { pic } style = { styles.image }>
          <Text style = { styles.caption }> { caption } </Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const SECTION_DATA = [
  {
    title: 'Most Recent',
    contents: [
      <Pressable>
      </Pressable>
    ]
  },
  {
    title: 'Past Studies',
    contents: [
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1803666.png&f=1&nofb=1' }}
        caption = "Verse 1"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2F8iE%2F67B%2F8iE67BbBT.png&f=1&nofb=1' }}
        caption = "Verse 2"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2FkiMKj8ERT.png&f=1&nofb=1' }}
        caption = "Verse 3"
      />,
    ]
  },
  {
    title: 'Recommended',
    contents: [
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1803666.png&f=1&nofb=1' }}
        caption = "Verse 4"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2F8iE%2F67B%2F8iE67BbBT.png&f=1&nofb=1' }}
        caption = "Verse 5"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2FkiMKj8ERT.png&f=1&nofb=1' }}
        caption = "Verse 6"
      />,
    ]
  },
  {
    title: 'Popular',
    contents: [
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1803666.png&f=1&nofb=1' }}
        caption = "Verse 7"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2F8iE%2F67B%2F8iE67BbBT.png&f=1&nofb=1' }}
        caption = "Verse 8"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2FkiMKj8ERT.png&f=1&nofb=1' }}
        caption = "Verse 9"
      />,
    ]
  },
  {
    title: 'Browse by Theme',
    contents: [
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1803666.png&f=1&nofb=1' }}
        caption = "Theme 1"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2F8iE%2F67B%2F8iE67BbBT.png&f=1&nofb=1' }}
        caption = "Theme 2"
      />,
      <Study
        pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2FkiMKj8ERT.png&f=1&nofb=1' }}
        caption = "Theme 3"
      />,
    ]
  },
];

const Section = ({ title, contents }) => (
  <View style = { styles.section }>
    <Text style = {{ fontSize: 25, }}>{title}</Text>
    <ScrollView 
      style = {{ flex: 1, flexDirection: 'row' }}
      horizontal = { true }
    >
      { contents }
    </ScrollView>
  </View>
);

const HomeScreen = ({ navigation, route }) => {
  const renderSection = ({ item, index, separators }) => (
    <Section 
      title = { item.title }
      contents = { item.contents }
    />
  );

  return (
    <SafeAreaView style = { styles.container } >
      <FlatList
        data = { SECTION_DATA }
        renderItem = { renderSection }
      />
    </SafeAreaView>
  );
};

const StudiesStack = createStackNavigator();

export const StudiesStackScreen = () => {
  return (
    <StudiesStack.Navigator
      initialRouteName = "Home"
    >
      <StudiesStack.Screen 
        name = "Home" 
        component = { HomeScreen } 
        options = {{  
          headerTitle: "Studies",
          headerTitleAlign: "left",
          headerTitleStyle: { 
            fontSize: 30, 
          },
          headerRight: () => (
            <View style = {{ 
              flex: 1, 
              flexDirection: 'row', 
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginBottom: 10,
            }}>
              <Pressable
                onPress = {() => Alert.alert('Search pressed')}
                style = { styles.tinyIcon }
              >
                <Ionicons name = "ios-search-outline" size = { 22 } color = { "seagreen" }/>
              </Pressable>
              <Pressable
                onPress = {() => Alert.alert('Create pressed')}
                style = { styles.tinyIcon }
              >
                <Ionicons name = "ios-create-outline" size = { 22 } color = { "seagreen" }/>
              </Pressable>
            </View>
          ),
        }}
      />
    </StudiesStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10,
  },
  caption: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  study: {
    flex: 1,
  },
  tinyIcon: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'seagreen',
    borderRadius: 25,
    padding: 5,
  },
});
