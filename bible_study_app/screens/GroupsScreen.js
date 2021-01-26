import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { Section } from './StudiesScreen.js';
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
  groupTitle: 18,
}

const GROUPS = [
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 1",
      isMember: true,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 2",
      isMember: false,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 3",
      isMember: true,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 4",
      isMember: true,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 5",
      isMember: false,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 6",
      isMember: false,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 7",
      isMember: false,
      isPrivate: false,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 8",
      isMember: true,
      isPrivate: false,
    },
];

/**
 * Study frame - creates the design of a study to be used in the studies main page
 *
 * @params: pic - the picture related to the study
 *          nav - nav for the StudiesStackScreen
 *          title - the title of the study
 *          blurb - short blurb about the study
 *          verses - verses that the study will go over (optional)
 */
const Group = ({ pic, nav, title, isMember, isPrivate, }) => {
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
        onPress = {() => 
            Alert.alert({title})
        }
      >
        <Image source = { pic } style = { styles.image }/>
        <Text style = { styles.caption }> { title } </Text>
      </Pressable>
    </View>
  );
};

const renderGroupList = ( contents, navigation ) => {
  contents.map(
    (group) => {
      return (
        <Group
          isMember = { group.isMember }
          pic = {{ uri: group.pic }}
          title = { group.title }
          nav = { navigation }
          isPrivate = { group.isPrivate }
        />
      )
    }
  )
};

const GroupsScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style = { styles.container }>
      <Section
        navigation = { navigation }
        title = "My Groups"
        contents = { GROUPS.filter((group) => group.isMember) }
        renderFunc = { renderGroupList }
      />
      <Section
        navigation = { navigation }
        title = "Browse Groups"
        contents = { GROUPS.filter((group) => group.isMember) }
        renderFunc = { renderGroupList }
      />
    </SafeAreaView>
  );
};

const MemberGroupScreen = () => {
  return(
    <Text> I am a member of this group </Text>
  );
};

const RegGroupScreen = () => {
  return(
    <Text> I am not a member of this group </Text>
  );
};

const GroupScreen = ({ isPrivate, isMember, pic, title, nav }) => {
  if (isMember) {
    return <MemberGroup />;
  }
  return <RegGroup />;
};

/**
 * StackNavigator using React Navigation
 */
const GroupsStack = createStackNavigator();

/**
 * StudiesStackScreen is the stack of all navigation routes in this StackNavigator
 *
 * Currently includes:
 *  HomeScreen - the main page of the StudiesScreen
 *  ...
 */
export const GroupsStackScreen = () => {
  return (
    <GroupsStack.Navigator
      initialRouteName = "Groups"
    >
      <GroupsStack.Screen 
        name = "Groups" 
        component = { GroupsScreen } 
        options = {({ navigation, route }) => ({  
          headerTitle: route.name,
          headerTitleAlign: "left",
          headerTitleStyle: { 
            fontSize: FONT_SIZES.pageHeader, 
          },
        })}
      />
    </GroupsStack.Navigator>
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
  caption: {
    textAlign: 'left',
    backgroundColor: '#e2e7d6',
    padding: 5,
    fontSize: FONT_SIZES.groupTitle,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
