import React from 'react'
import { Constants } from 'expo'
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

function Header ({ title }) {
  return (
    <View >
      <View style={styles.statusBar}></View>
      <View style={styles.container}>
        <Text style={styles.title}>{ title }</Text>
      </View>
    </View>
  )
} 

Header.propTypes = {
  title: PropTypes.string.isRequired
} 

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 50 : 56,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'proxima-nova-semibold'
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: '#9b59b6'
  }
})

export default Header