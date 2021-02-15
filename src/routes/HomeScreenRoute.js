import React from 'react';
import { Image } from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/images/logo.png'
import Feather from 'react-native-vector-icons/Feather';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={{
        title: 'Instagram',
        headerLeftContainerStyle: {
          marginLeft: 15
        },
        headerRightContainerStyle: {
          marginRight: 15
        },
        headerLeft: ()=> (
          <Feather name='camera' size={25}/>
        ),
        headerTitle: () => (
          <Image source={logo} resizeMode='contain' style={{width:135, height: 50}} />
        ),
        headerRight: () => (
          <Feather name='send' size={25}/>
        )
      }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen