import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import Button from '@/components/Button'
import TimerForm from '@/components/TimerForm'

class ToggleableTimerForm extends Component {
  state = { isOpen: false }

  _toggleForm = () => this.setState({ isOpen: !this.state.isOpen })

  _handleFormSubmit = (timer) => {
    const { onFormSubmit } = this.props
    onFormSubmit(timer)
    this._toggleForm()
  }

  render () {
    const { isOpen } = this.state
    return (
      <React.Fragment>
        {isOpen ? (
          <View style={styles.timerContainer}>
            <TimerForm 
              onFormClose={ this._toggleForm }
              onFormSubmit={ this._handleFormSubmit }
            />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button 
              textStyles={ styles.buttonTextStyles }
              containerStyles={ styles.buttonContainerStyles }
              onPress={ this._toggleForm }
            >
              <MaterialIcons name="add" size={25} color="#4a4a4a" />
            </Button>
          </View>
        )}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  buttonTextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a4a4a'
  },
  buttonContainerStyles: {
    backgroundColor: 'white',
    borderColor: '#4a4a4a'
  },
  timerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15
  }
})

export default ToggleableTimerForm