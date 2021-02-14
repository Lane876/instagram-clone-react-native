import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './HomeScreenRoute';
import DiscoveryScreen from '../screen/DiscoveryScreen';
import PostScreen from '../screen/PostScreen';
import NotificationsScreen from '../screen/NotificationsScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Fontisto name="home" />;
          }
          if (route.name === 'Discovery') {
            return <Feather name="search" />;
          }
          if (route.name === 'Post') {
            return <Feather name="plus-square" />;
          }
          if (route.name === 'Notifications') {
            return <ADIcon name="hearto" />;
          }
          if (route.name === 'Profile') {
            return <Ionicons name="person-outline" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
