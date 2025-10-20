import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default class HomeMenu extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" /> }}/>
      </Tab.Navigator>
    );
  }
}
