import React from 'react';
import {StyleSheet, View} from "react-native";
import {DetailsScreenProps} from "../types";
import {WIDTH} from "../../constants/constants";
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
  text: {
    marginVertical: 10,
    fontSize: 20,
    color: '#fdfdfd',
    left: 150
  },
  item: {},
  imgPoster: {
    width: WIDTH,
    height: 250,
    marginVertical: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  rating: {
    position: 'relative',
    top: -40,
    justifyContent: 'space-between',
    textAlign: 'right',
    fontSize: 20,
    backgroundColor: '#33363f',
    width: 80
  },
  img: {
    position: "absolute",
    width: 100,
    height: 145,
    borderRadius: 16,
    top: 180,
    left: 30
  }
})
