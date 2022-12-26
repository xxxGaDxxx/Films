import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from "react-native";

export const InputSearch = () => {
  const [text, onChangeText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#66676c'}
        onChangeText={onChangeText}
        placeholder="Search"
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    height: 42,
    borderRadius: 15,
    color: '#fdfdfd',
    paddingLeft: 25,
    backgroundColor: '#3a3f46',
    marginVertical: 10,
  },

})
