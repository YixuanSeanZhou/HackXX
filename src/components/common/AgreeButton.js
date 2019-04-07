import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AgreeButton = ({ onPress, text }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'flex-start',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 1,
    paddingBottom: 1
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 15,
    marginRight: 300
  }
};

export { AgreeButton };
