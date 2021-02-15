import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomHomeNavigator from './BottomHomeNavigator';
import StoryScreen from '../screen/StoryScreen';

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={'Home'}
        component={BottomHomeNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}
