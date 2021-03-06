import React from 'react';
import {View, TextInput} from 'react-native';

import {input} from './styles';

const Input = (props) => {
  return (
    <View style={[input.container, props.newBorder]}>
      <TextInput
        ref={props.reference}
        style={input.textInput}
        {...props.inputProps}
        onChangeText={props.onType}
      />
    </View>
  );
};

export {Input};
