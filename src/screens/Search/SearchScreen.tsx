import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {PADDING} from "../../constants/constants";
import {InputSearch} from "../../common/components/InputSearch";
import {DataFilm} from "./components/DataFilm";
import {useAppSelector} from "../../common/hooks/storHooks";

export const SearchScreen = () => {
  const searchFilms = useAppSelector(state => state.searchFilms)

  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <InputSearch/>
      <DataFilm filmsArr={searchFilms}/>
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
