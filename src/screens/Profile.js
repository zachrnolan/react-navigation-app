import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
