/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import NavigationService from './NavigationService'
import store from './redux/store'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Detail from './screens/detail/Detail'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home'
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.user.username}'s Detail`
    })
  },
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile'
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.user.username}'s Detail`
    })
  },
})

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Profile: { screen: ProfileStack },
})

const App = () => (
  <Provider store={store}>
    <TabNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  </Provider>
)

export default App
