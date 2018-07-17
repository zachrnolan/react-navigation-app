/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Detail from './screens/Detail'

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail },
})

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  Detail: { screen: Detail },
})

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack },
  },
  {
    // tabBarPosition: 'bottom',
  }
)
