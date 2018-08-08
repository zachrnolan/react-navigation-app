import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setTitle } from './DetailState'

class Detail extends Component {
  componentDidMount() {
    console.log('Detail ComponentDidMount')
    const { navigation } = this.props
    this.props.dispatch(setTitle(navigation.state.params.user.username, navigation.state.params.uuid))
  }
  componentWillUnmount() {
    console.log('Detail componentWillUnmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail Screen - {this.props.title}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    title: state.detail.detailLookupTable[ownProps.navigation.state.params.uuid] ? state.detail.detailLookupTable[ownProps.navigation.state.params.uuid].title : '',
  })
)(Detail)
