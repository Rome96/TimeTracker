import React from 'react'
import {
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

function InputField ({ placeholder, handleChange, value, label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        value={ value } 
        placeholder={ placeholder }
        onChangeText={ handleChange }
        style={ styles.textInput }
        underlineColorAndroid="transparent"
        clearButtonMode="while-editing"
      />
    </View>
  )
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  textInput: {
    height: 35,
    backgroundColor: 'white',
    borderRadius: 3,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    paddingHorizontal: 10
  },
  label: {
    fontFamily: 'proxima-nova-semibold',
    marginBottom: 5
  }
})

export default InputField