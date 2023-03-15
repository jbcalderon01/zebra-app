import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

export const MyTextInput = () => {
  const [text, setText] = useState('');

  const handleTextChange = (newText: any) => {
    setText(newText);
  };

  const handleEnterPress = () => {
    console.log('Enter pressed!');
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        onSubmitEditing={handleEnterPress}
        placeholder="Scan here"
      />
    </View>
  );
};
