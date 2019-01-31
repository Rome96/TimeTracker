import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'
import InputField from './InputField'

class TimerForm extends Component {
  constructor(props){
    super(props)
    const { title, project } = props

    this.state = {
      title: title ? title : '',
      project: project ? project : ''
    }
  }

  _handleFormSubmit = () => {
    const { onFormSubmit, id } = this.props
    const { title, project } = this.state
    onFormSubmit({ id, title, project })
  }

  render () {
    const { title, project } = this.state
    const { id, onFormClose } = this.props
    const submitText = id ? "Update" : "Create"

    return (
      <View style={styles.container}>
        <InputField 
          label="Title"
          placeholder="Type task title"
          handleChange={( title ) => this.setState({ title })}
          value={ title }
        />
        <InputField 
          label="Project"
          placeholder="Type project name"
          handleChange={( project ) => this.setState({ project }) }
          value={ project }
        />
        <View style={styles.buttonsView}>
          <View style={[styles.flex, styles.createButtonView]}>
            <Button 
              text={ submitText }
              textStyles={styles.createButtonStyle}
              containerStyles={styles.createButtonStyle}
              onPress={ this._handleFormSubmit }
            />
          </View>
          <View style={[styles.flex, styles.cancelButtonView]}>
            <Button 
              text="Cancel"
              textStyles={styles.cancelButtonStyle}
              containerStyles={styles.cancelButtonStyle}
              onPress={ onFormClose }
            />
          </View>
        </View>
      </View>
    )
  }
}

TimerForm.propTypes = {
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdc3c7'
  },
  buttonsView: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10
  },
  flex: {
    flex: 1
  },
  createButtonView: {
    paddingRight: 50,
  },
  cancelButtonView: {
    paddingLeft: 50
  },
  createButtonStyle: {
    color: '#2ecc71',
    borderColor: '#2ecc71'
  },
  cancelButtonStyle: {
    color: '#e74c3c',
    borderColor: '#e74c3c'
  }
})

export default TimerForm

