import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const uuid = require('uuid-js')

export default class Profile extends Component {
  componentDidMount() {
    console.log('Profile ComponentDidMount')
  }
  componentWillUnmount() {
    console.log('Profile componentWillUnmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail', { user: { username: 'Olivia' }, uuid: uuid.create(4).toString() })}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
