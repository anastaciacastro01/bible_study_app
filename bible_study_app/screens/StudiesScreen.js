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
  studyTitle: 15,
  recentStudyTitle: 18,
  pageHeader: 30,
  iconSize: 25,
  buttonTitle: 18,
}

/**
 * Study frame - creates the design of a study to be used in the studies main page
 *
 * @params: pic - the picture related to the study
 *          nav - nav for the StudiesStackScreen
 *          title - the title of the study
 *          blurb - short blurb about the study
 *          verses - verses that the study will go over (optional)
 */
const Study = ({ pic, nav, title, group, blurb, verses, }) => {
  const thisWindow = useWindowDimensions();
  
  return (
    <View>
      <Pressable 
        style = {{ 
          flex: 1, 
          width: thisWindow.width / 3, 
          height: thisWindow.width / 2, 
          marginHorizontal: 10,
          borderRadius: 10,
          overflow: 'hidden',
        }}
        onPress = {() => {
          nav.navigate("Study", {
            name: title,
            imgSrc: pic,
            studyTitle: title,
            studyBlurb: blurb,
            studyVerses: verses,
            studyGroup: group,
          });
        }}
      >
        <Image source = { pic } style = { styles.image }/>
        <Text style = { styles.caption }> { title } </Text>
      </Pressable>
    </View>
  );
};

/**
 * RecentStudy frame - creates the design for the most recent study to be used 
 * in the studies main page
 *
 * @params: pic - the picture related to the study
 *          nav - nav for the StudiesStackScreen
 *          title - the title of the study
 *          blurb - short blurb about the study
 *          verses - verses that the study will go over (optional)
 */
const RecentStudy = ({ pic, nav, title, blurb, verses }) => {
  const thisWindow = useWindowDimensions();

  const sideText = blurb + "\n" + verses;

  return (
    <View>
      <Pressable
        style = {{
          flex: 1,
          borderRadius: 10,
          height: thisWindow.width / 2,
          width: thisWindow.width - 20,
          overflow: 'hidden',
          flexDirection: 'row',
          alignSelf: 'center',
        }}
        onPress = {() => {
          nav.navigate("Study", {
            name: title,
            imgSrc: pic,
            studyTitle: title,
            studyBlurb: blurb,
            studyVerses: verses,
          });
        }}
      >
        <Image source = { pic } style = { styles.image }/>
        <View style = {{
          textAlign: 'left',
          backgroundColor: '#e2e7d6',
          padding: 5,
          fontSize: FONT_SIZES.studyTitle,
          maxWidth: (thisWindow.width - 20) * .33,
        }}>
          <Text style = { styles.recentStudyTitle }> { title } </Text>
          <Text style = { styles.caption }> { sideText } </Text>
        </View>
      </Pressable>
    </View>
  );
}

/**
 * Data about each section (including the pictures and titles of each study)
 * **** might be moved to another file once there is more of a database *****
 */
const SECTION_DATA = [
  {
    id: 2,
    title: 'Past Studies',
    contents: [
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
        title: "Study 1",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FFree-HD-Solid-Color-Wallpaper-Download.jpg&f=1&nofb=1',
        title: "Study 2",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.IS48BbWXFH_gieoBLf7ABQHaEo%26pid%3DApi&f=1',
        title: "Study 3",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
    ]
  },
  {
    id: 3,
    title: 'Recommended',
    contents: [
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FlVsBD3A.jpg&f=1&nofb=1',
        title: "Study 4",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
     {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YbBfulf4LKlPt2DXhzg49wHaFj%26pid%3DApi&f=1',
        title: "Study 5",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cVSGkVTO5RMIKe9RIgIYJgHaEo%26pid%3DApi&f=1',
        title: "Study 6",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
    ]
  },
  {
    id: 4,
    title: 'Popular',
    contents: [
     {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MGfeO_1WhfRoqaVuu9hW9gHaEo%26pid%3DApi&f=1',
        title: "Study 7",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._mMsTvVECB0oIWIZRLyXXgHaEo%26pid%3DApi&f=1',
        title: "Study 8",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.IS48BbWXFH_gieoBLf7ABQHaEo%26pid%3DApi&f=1',
        title: "Study 9",
        blurb: "Blurb about this study",
        verses: "Some verses this study goes over",
        group: "Group name",
      },
    ]
  },
  {
    id: 5,
    title: 'Browse by Theme',
    contents: [
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lrkPsPieG3IbpWBelNncnwHaF7%26pid%3DApi&f=1',
        title: "Theme 1"
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VI51i8bwgzTnByzjIk_OngHaEo%26pid%3DApi&f=1',
        title: "Theme 2"
      },
      {
        pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9znt-x7nSxInwXpgAv7klAHaFj%26pid%3DApi&f=1',
        title: "Theme 3"
      },
    ]
  },
];

const renderStudyList = (contents, navigation) => (
  contents.map(
    (study) => {
      return (
        <Study
          pic = {{ uri: study.pic }}
          title = { study.title }
          nav = { navigation }
          blurb = { study.blurb }
          verses = { study.verses }
          group = { study.group }
        />
      )
    }
  )
);

/**
 * Section frame - creates the design for each section (including the title and
 * a ScrollView of all the Studies in that category)
 *
 * @params: title - the title of the section
 *          contents - Studies included in that section
 */
export const Section = ({ title, contents, navigation, renderFunc }) => (
  <View style = { styles.section }>
    <Text style = { styles.sectionHeader }>{title}</Text>
    <ScrollView 
      style = {{ flex: 1, flexDirection: 'row' }}
      horizontal = { true }
    >
    {
      renderFunc(contents, navigation)
    }
    </ScrollView>
  </View>
);

const TextInputAndInfo = ({ inputTitle, inputInfo }) => (
  <View style = {{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  }}>
    <TextInput
      style = {{ flex: 9, padding: 5, height: 40, borderColor: 'gray', borderWidth: 1, fontSize: FONT_SIZES.buttonTitle, }} 
      placeholder = { inputTitle } 
    />
    <Pressable
      onPress = {() => Alert.alert("Info", { inputInfo })}
      style = {{ flex: 1, marginLeft: 10, justifyContent: 'center', }}
    >
      <Ionicons name = "ios-information-circle-outline" size = { FONT_SIZES.iconSize } color = { "black" } />
    </Pressable>
  </View>
);

const SwitchAndInfo = ({ switchTitle, switchInfo }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prevState => !prevState);

  return (
  <View style = {{
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  }}>
    <View style = {{ flex: 9, flexDirection: 'row', alignItems: 'center', paddingRight: 5, }}>
      <Switch
        value = { isEnabled }
        onValueChange = { toggleSwitch }
      />
      <Text style = {{ marginLeft: 5, fontSize: FONT_SIZES.buttonTitle}}> { switchTitle } </Text>
    </View>
    <Pressable
      onPress = {() => Alert.alert("Info", { switchInfo })}
      style = {{ flex: 1, marginLeft: 10, }}
    >
      <Ionicons name = "ios-information-circle-outline" size = { FONT_SIZES.iconSize } color = { "black" } />
    </Pressable>
  </View>
  );
};

const AddPictureMenu = ({ picMenuInfo }) => {
  return (
      <View style = {{ flexDirection: 'row' }}>
        <View style = {{ flex: 9, paddingRight: 5, }}>
          <View style = {{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
            <Ionicons name = "camera-outline" size = { FONT_SIZES.iconSize } />
            <Text style = {{ fontSize: FONT_SIZES.buttonTitle }}> Add Picture </Text>
          </View>
          <View style = {{ alignItems: 'flex-start', marginLeft: 10, }}>
          <Pressable
            onPress = {() => Alert.alert("Upload picture menu") }
            style = {{ marginBottom: 10, border: 1, }}
          >
            <Text style = {{ fontSize: FONT_SIZES.buttonTitle, }}> Upload Picture </Text>
          </Pressable>
          <Pressable
            onPress = {() => Alert.alert("create verse picture menu") }
            style = {{ marginBottom: 10, border: 1,  }}
          >
            <Text style = {{ fontSize: FONT_SIZES.buttonTitle, }}> Create Verse Picture </Text>
          </Pressable>
          <Pressable
            onPress = {() => Alert.alert("browse picture menu") }
            style = {{ marginBottom: 10, border: 1, }}
          >
            <Text style = {{ fontSize: FONT_SIZES.buttonTitle, }}> Browse Pictures </Text>
          </Pressable>
          </View>
        </View>
        <Pressable
          onPress = {() => Alert.alert("Info", { picMenuInfo })}
          style = {{ flex: 1, marginLeft: 10, }}
        >
          <Ionicons name = "ios-information-circle-outline" size = { FONT_SIZES.iconSize } color = { "black" } />
        </Pressable>
      </View>
  );
};

/**
 * HomeScreen frame - creates the design for the Home Screen of the StudiesScreen 
 *
 * @params: navigation - param that links to other screens in this navigation tree
 *          route - prop that can be used to read params into screen component
 */
const HomeScreen = ({ navigation, route }) => {
  const renderSection = ({ item, index, separators }) => (
    <Section 
      title = { item.title }
      contents = { item.contents }
      navigation = { navigation }
      renderFunc = { renderStudyList }
    />
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
            <View style = { styles.pageHeader }>
              <Pressable
                onPress = {() => Alert.alert('Search pressed')}
                style = { styles.tinyIcon }
              >
                <Ionicons name = "ios-search-outline" size = { FONT_SIZES.iconSize } color = { "mediumseagreen" }/>
              </Pressable>
              <Pressable
                onPress = {() => {navigation.navigate("Create")}}
                style = { styles.tinyIcon }
              >
                <Ionicons name = "ios-create-outline" size = { FONT_SIZES.iconSize } color = { "mediumseagreen" }/>
              </Pressable>
            </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style = { styles.container } >
      <ScrollView>
      <View style = {{
        flexDirection: 'column',
        marginBottom: 10,
      }}>
        <Text style = { styles.sectionHeader }> Most Recent </Text>
        <RecentStudy
          pic = {{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lrkPsPieG3IbpWBelNncnwHaF7%26pid%3DApi&f=1' }}
          nav = { navigation }
          title = "Title of Study"
          group = "Group Name"
          blurb = "Here is some information about the study"
          verses = ""
        />
      </View>
      <FlatList
        data = { SECTION_DATA }
        renderItem = { renderSection }
        keyExtractor = { item => item.id }
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const StudyScreen = ({ navigation, route }) => {
  const thisWindow = useWindowDimensions();

  return (
    <SafeAreaView style = { styles.container } >
      <ScrollView>
        <Image source = { route.params.imgSrc } 
               style = {{  
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: thisWindow.height / 3,
               }}
        />
        <View style = { styles.section }>
          <Text style = { styles.sectionHeader }> { route.params.studyTitle } </Text>
          <Text style = {{ marginLeft: 10, marginBottom: 10,}}> { route.params.studyGroup } </Text>
          <Text style = {{ marginLeft: 10, marginBottom: 10,}}> { route.params.studyBlurb } </Text>
          <Text style = {{ marginLeft: 10, marginBottom: 10, }}> { route.params.studyVerses } </Text>
          <Pressable
            onPress = {() => Alert.alert('Open Bible')}
            style = {{
              borderRadius: 10,
              overflow: 'hidden',
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3cb371",
              marginHorizontal: 10,
              marginBottom: 10,
            }}
          >
            <Text
              style = { styles.studyButtons }
            > Open Bible </Text>
          </Pressable>
          <Pressable
            onPress = {() => Alert.alert('Open Context')}
            style = {{
              borderRadius: 10,
              overflow: 'hidden',
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3cb371",
              marginHorizontal: 10,
            }}
          >
            <Text
              style = { styles.studyButtons }
            > Reflection Forum </Text>
          </Pressable>
          <Text style = { styles.sectionHeader }> Study Tools </Text>
          <Pressable
            onPress = {() => Alert.alert('Open Context')}
            style = {{
              borderRadius: 10,
              overflow: 'hidden',
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3cb371",
              marginHorizontal: 10,
            }}
          >
            <Text
              style = { styles.studyButtons }
            > Context </Text>
          </Pressable>
          <Pressable
            onPress = {() => Alert.alert('Open Commentaries')}
            style = {{
              borderRadius: 10,
              overflow: 'hidden',
              marginBottom: 10,
              marginHorizontal: 10,
              backgroundColor: "#3cb371",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style = { styles.studyButtons }
            > Commentaries </Text>
          </Pressable>
          <Pressable
            onPress = {() => Alert.alert('Open Guiding Questions')}
            style = {{
              borderRadius: 10,
              overflow: 'hidden',
              marginBottom: 10,
              marginHorizontal: 10,
              backgroundColor: "#3cb371",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style = { styles.studyButtons }
            > Guiding Questions </Text>
          </Pressable>
          <Pressable
            onPress = {() => Alert.alert('Open Maps')}
            style = {{
              borderRadius: 10,
              overflow: 'hidden',
              marginBottom: 10,
              marginHorizontal: 10,
              backgroundColor: "#3cb371",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style = { styles.studyButtons }
            > Maps </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CreateStudyScreen = ({ navigation, route }) => {
  const thisWindow = useWindowDimensions();

  return (
    <SafeAreaView style = { styles.container } >
      <ScrollView style = {{
        marginLeft: 10,
      }}>
        <Text style = {{ fontSize: FONT_SIZES.sectionHeader, marginVertical: 10, }}> Enter Information </Text>
        <TextInputAndInfo
          inputTitle = "Title"
          inputInfo = "Title of the study"
        />
        <TextInputAndInfo
          inputTitle = "About/Key Question"
          inputInfo = "Describe the goals of the study or ask a key question to focus the goal of the study"
        />
        <TextInputAndInfo
          inputTitle = "Verses"
          inputInfo = "Verses used in the study"
        />
        <SwitchAndInfo
          switchTitle = "Make Verses Visible"
          switchInfo = "Make verses visible on the study screen. If you have a long list of separate verses, having them visible on the Studies Screen may make other components hard to see. The verses will still be visible on the screen for the individual study."
        />
        <AddPictureMenu
          picMenuInfo = "Add a picture to represent the study"
        />
        <SwitchAndInfo
          switchTitle = "Make Public"
          switchInfo = "Make this study available to user on this app. No one can directly edit this study, but they do have access to it."
        />
      </ScrollView>
      <Pressable
        onPress = {() => Alert.alert("Finished creating study!")}
        style = {{ 
          borderRadius: 10,
          flex: 1,
          overflow: 'hidden',
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "mediumseagreen",
          maxHeight: 40,
          margin: 10,
        }}
      >
        <Text style = { styles.studyButtons }> Done </Text>
      </Pressable>
    </SafeAreaView>
  );
}

/**
 * StackNavigator using React Navigation
 */
const StudiesStack = createStackNavigator();

/**
 * StudiesStackScreen is the stack of all navigation routes in this StackNavigator
 *
 * Currently includes:
 *  HomeScreen - the main page of the StudiesScreen
 *  ...
 */
export const StudiesStackScreen = () => {
  return (
    <StudiesStack.Navigator
      initialRouteName = "Home"
    >
      <StudiesStack.Screen 
        name = "Home" 
        component = { HomeScreen } 
        options = {({ navigation, route }) => ({  
          headerTitle: "Studies",
          headerTitleAlign: "left",
          headerTitleStyle: { 
            fontSize: FONT_SIZES.pageHeader, 
          },
        })}
      />
      <StudiesStack.Screen
        name = "Study"
        component = { StudyScreen }
        options = {({ route }) => ({ 
          title: route.params.name, 
        })}
      />
      <StudiesStack.Screen
        name = "Create"
        component = { CreateStudyScreen }
        options = {({ route }) => ({ 
          title: "Create", 
        })}
      />
    </StudiesStack.Navigator>
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
  pageHeader: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  caption: {
    textAlign: 'left',
    backgroundColor: '#e2e7d6',
    padding: 5,
    fontSize: FONT_SIZES.studyTitle,
  },
  recentStudyTitle: {
    textAlign: 'left',
    fontSize: FONT_SIZES.recentStudyTitle,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tinyIcon: {
    marginRight: 20,
  },
  studyButtons: {
    fontSize: FONT_SIZES.buttonTitle,
    color: "white",
    padding: 5,
  },
  sectionHeader: {
    fontSize: FONT_SIZES.sectionHeader, 
    margin: 10,
  },
});
