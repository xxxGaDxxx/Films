import React from 'react';
import {StyleSheet, View} from "react-native";
import {DetailsScreenProps} from "../types";
import {ImgPoster} from "./components/ImgPoster";
import {DateTime} from "./components/DateTime";
import {Description} from "./components/Description";

export const DetailsScreen = ({route}: DetailsScreenProps) => {
  const {film} = route.params

  return (
    <View style={styles.container}>
      <ImgPoster film={film}/>
      <DateTime date={film.year} time={film.filmLength}/>
      <Description/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242a32',
    flex: 1
  },
})
