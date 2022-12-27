import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {DetailsScreenProps} from "../types";

export const DetailsScreen = ({route}: DetailsScreenProps) => {
  const {film} = route.params

  return (
    <View>
      <Text>{film.nameEn}</Text>
      <Image
        style={styles.imgPoster}
        source={{uri: film.posterUrlPreview}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    fontSize: 20,
    color: '#fdfdfd',
  },
  item: {
    marginVertical: 10,
  },
  imgPoster: {
    width: 100,
    height: 145,
    borderRadius: 16,
  }
})
