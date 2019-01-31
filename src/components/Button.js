import React from 'react'
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'
import PropTypes from 'prop-types'

function Button ({ containerStyles, textStyles, children, disabled, text, onPress }) {
  return (
   Platform.select({
     ios: (
      <TouchableOpacity onPress={ onPress } disabled={ disabled } style={[styles.container, containerStyles]}>
        { text ? <Text style={textStyles}>{text}</Text> : children }
      </TouchableOpacity>
     ),
     android: (
      <TouchableNativeFeedback onPress={ onPress } disabled={ disabled }>
        <View style={[styles.container, containerStyles]}>
          { text ? <Text style={textStyles}>{text}</Text> : children }
        </View>
      </TouchableNativeFeedback>
     )
   })
  )
}

Button.propTypes = {
  containerStyles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  textStyles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  text: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2
  }
})

export default Button