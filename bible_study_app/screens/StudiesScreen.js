import 'react-native-gesture-handler';
import React from 'react';
import { useWindowDimensions, 
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
    <Text>{title}</Text>
    <ScrollView 
      style = {{ flex: 1, flexDirection: 'row' }}
      horizontal = { true }
    >
      { contents }
    </ScrollView>
  </View>
);

export const StudiesScreen = ({ navigation, route }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  section: {
    flex: 1,
    flexDirection: 'column',
  },
  caption: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  study: {
    flex: 1,
  },
});
