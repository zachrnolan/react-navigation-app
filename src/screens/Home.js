import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const uuid = require('uuid-js')

export default class Home extends Component {
  componentDidMount() {
    console.log('Home ComponentDidMount')
  }
  componentWillUnmount() {
    console.log('Home componentWillUnmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profile')}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail', { user: { username: 'Mindy' }, uuid: uuid.create(4).toString() })}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
