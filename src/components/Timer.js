import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Buttom from './Button'
import { milisecondsToHuman } from '@/utils'

function Timer ({ 
    id,
    project, 
    title, 
    elapsed, 
    isRunning, 
    onStartPress, 
    onStopPress,
    onRemovePress,
    onEditPress
}) {
  return (
    <View style={styles.container}>
      <View style={styles.fullWidth}>
        <Text style={[styles.textStyle, styles.boldStyle]}>{ title }</Text>
        <Text style={styles.textStyle}>{ project }</Text>
      </View>
      <View style={styles.timerView}>
        <Text style={[styles.textStyle, styles.boldStyle, styles.timerText]}>{milisecondsToHuman(elapsed)}</Text>
      </View>
      <View style={[styles.editAndRemoveButtonsView, styles.fullWidth]}>
        <View style={[styles.editButtonView, styles.flex]}>
          <Buttom 
            text="Edit"
            textStyles={[styles.textStyle, styles.smallButton]}
            containerStyles={styles.smallButton}
            onPress={ onEditPress }
          />
        </View>
        <View style={[styles.removeButtonView, styles.flex]}>
          <Buttom 
            text="Remove"
            textStyles={[styles.textStyle, styles.smallButton]}
            containerStyles={styles.smallButton}
            onPress={() => onRemovePress( id )}
          />
        </View>
      </View>
      <View style={[styles.editAndRemoveButtonsView, { marginTop: 10 }]}>
        {isRunning ? (
          <Buttom 
            text="Stop"
            textStyles={[styles.textStyle, styles.stopButton]}
            containerStyles={styles.stopButton}
            onPress={() => onStopPress( id ) }
          />
        ): (
          <Buttom 
            text="Start"
            textStyles={[styles.textStyle, styles.largeButton]}
            containerStyles={styles.largeButton}
            onPress={() => onStartPress( id ) }
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdc3c7'
  },
  flex: {
    flex: 1
  },
  fullWidth: {
    width: '100%',
  },
  textStyle: {
    fontFamily: 'proxima-nova-semibold',
    color: '#4a4a4a'
  },
  boldStyle: {
    fontSize: 18
  },
  timerView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  timerText: {
    fontSize: 25
  },
  editAndRemoveButtonsView: {
    flexDirection: 'row',
  },
  editButtonView: {
    paddingRight: 50
  },
  removeButtonView: {
    paddingLeft: 50
  },
  smallButton: {
    color: '#2980b9',
    borderColor: '#2980b9'
  },
  largeButton: {
    color: '#2ecc71',
    borderColor: '#2ecc71'
  },
  stopButton: {
    color: '#e74c3c',
    borderColor: '#e74c3c'
  }
})

export default Timer