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
  buttonTitle: 18,
}

const GROUPS = [
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 1",
      isMember: true,
      isPrivate: true,
      groupId: 1,
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 2",
      isMember: false,
      isPrivate: false,
      groupId: 2, 
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 3",
      isMember: true,
      isPrivate: false,
      groupId: 3, 
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 4",
      isMember: true,
      isPrivate: false,
      groupId: 4, 
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 5",
      isMember: false,
      isPrivate: false,
      groupId: 5, 
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 6",
      isMember: false,
      isPrivate: false,
      groupId: 6, 
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 7",
      isMember: false,
      isPrivate: false,
      groupId: 7, 
    },
    {
      pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FWVN2cWE.jpg&f=1&nofb=1',
      title: "Group 8",
      isMember: true,
      isPrivate: false,
      groupId: 8, 
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
const Group = ({ pic, nav, title, isMember, isPrivate, groupId, }) => {
  const thisWindow = useWindowDimensions();

  //      <Image source = { pic } style = { styles.image }/>
  return (
    <View>
      <Pressable 
        style = {{ 
          flex: 1, 
          minWidth: thisWindow.width / 3, 
          minHeight: thisWindow.width / 2, 
          marginHorizontal: 10,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'seagreen',
          justifyContent: 'flex-end',
        }}
        onPress = {() => {
          nav.navigate("Group", {
            groupId: groupId,
            isMember: isMember,
            name: title,
          });
        }}
      >
        <Text style = { styles.caption }> { title } </Text>
      </Pressable>
    </View>
  );
};

const renderGroupList = ( contents, navigation ) => (
  contents.map(
    (group) => {
      return (
        <Group
          pic = {{ uri: group.pic }}
          nav = { navigation }
          title = { group.title }
          isMember = { group.isMember }
          groupId = { group.groupId }
        />
      );
    }
  )
);

const GroupsScreen = ({ navigation, route }) => {
  let bool = true;

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
                onPress = {() => Alert.alert('Join Group Pressed')} 
                style = { styles.tinyIcon }
              >
                <Ionicons name = "ios-person-add-outline" size = { FONT_SIZES.iconSize } color = { "mediumseagreen" }/>
              </Pressable>
              <Pressable
                onPress = {() => Alert.alert('Create Group Pressed')} 
                style = { styles.tinyIcon }
              >
                <Ionicons name = "ios-add-circle-outline" size = { FONT_SIZES.iconSize } color = { "mediumseagreen" }/>
              </Pressable>
            </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style = { styles.container }>
    <ScrollView>
      <Section
        title = "My Groups"
        contents = { GROUPS.filter((group) => group.isMember) }
        navigation = { navigation }
        renderFunc = { renderGroupList }
      />
      <Section
        title = "Recommended Groups"
        contents = { GROUPS.filter((group) => !group.isMember) }
        navigation = { navigation }
        renderFunc = { renderGroupList }
      />
      <Section
        title = "Popular Groups"
        contents = { GROUPS.filter((group) => group.isMember) }
        navigation = { navigation }
        renderFunc = { renderGroupList }
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const MemberGroupScreen = ({ groupId }) => {
  const myGroup = GROUPS.filter((group) => group.groupId == groupId)[0];
  const thisWindow = useWindowDimensions();

  return(
    <SafeAreaView style = { styles.container } >
      <ScrollView>
        <Image source = {{ uri: myGroup.pic }} 
               style = {{  
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: thisWindow.height / 3,
               }}
        />
        <View style = { styles.section }>
          <View style = {{ flexDirection: 'row', marginHorizontal: 5, marginTop: 10, }}>
            <Pressable
            style = {{
          flex: 1, 
          height: thisWindow.width / 2, 
          marginHorizontal: 5,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'mediumseagreen',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          }}
            >
              <Ionicons name = "ios-chatbubbles-outline" size = { 40 } color = { "white" }/>
              <Text style = {{
                              fontSize: FONT_SIZES.buttonTitle,
                              color: "white",
                              padding: 5,
                            }}
              >
                Chat
              </Text>
            </Pressable>
            <Pressable
            style = {{
          flex: 1, 
          height: thisWindow.width / 2, 
          marginHorizontal: 5,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'mediumseagreen',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          }}
            >
              <Ionicons name = "ios-book-outline" size = { 40 } color = { "white" }/>
              <Text style = {{
                              fontSize: FONT_SIZES.buttonTitle,
                              color: "white",
                              padding: 5,
                            }}
              >
                Studies
              </Text>
            </Pressable>
            <Pressable
            style = {{
          flex: 1, 
          height: thisWindow.width / 2, 
          marginHorizontal: 5,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'mediumseagreen',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          }}
            >
              <Ionicons name = "ios-grid-outline" size = { 40 } color = { "white" }/>
              <Text style = {{
                              fontSize: FONT_SIZES.buttonTitle,
                              color: "white",
                              padding: 5,
                            }}
              >
                Prayer Board
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>    
    </SafeAreaView>
  );
};

const RegGroupScreen = ({ groupId }) => {
  return(
    <Text> I am not a member of this group </Text>
  );
};

const GroupScreen = ({ navigation, route }) => {
  if (route.params.isMember) {
    return <MemberGroupScreen groupId = { route.params.groupId } />;
  }
  return <RegGroupScreen groupId = { route.params.groupId } />;
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
      <GroupsStack.Screen
        name = "Group"
        component = { GroupScreen }
        options = {({ route }) => ({ 
          title: route.params.name, 
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
  tinyIcon: {
    marginRight: 20,
  },
  pageHeader: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: FONT_SIZES.sectionHeader, 
    margin: 10,
  },
});
