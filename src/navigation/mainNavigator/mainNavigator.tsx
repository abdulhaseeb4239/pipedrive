import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import {HomeScreen, Params, ProfileScreen} from './helper';
import React from 'react';
import ProfileDetail from '../../screens/profileDetail';

const Stack = createStackNavigator<Params>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={HomeScreen}
        component={Home}
        options={{headerTitle: 'Profiles'}}
      />
      <Stack.Screen name={ProfileScreen} component={ProfileDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
