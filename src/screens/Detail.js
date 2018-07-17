import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Detail extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
