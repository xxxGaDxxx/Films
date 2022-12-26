import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {PADDING} from "../../constants/constants";
import {InputSearch} from "../../common/components/InputSearch";

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <InputSearch/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING,
    flex: 1,
    backgroundColor: '#242a32',
  },
})
