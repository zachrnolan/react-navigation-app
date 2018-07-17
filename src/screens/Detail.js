import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Detail extends Component {
  componentDidMount() {
    console.log('Detail ComponentDidMount')
  }
  componentWillUnmount() {
    console.log('Detail componentWillUnmount')
  }
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
