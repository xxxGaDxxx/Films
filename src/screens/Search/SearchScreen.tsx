import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {PADDING} from "../../constants/constants";
import {InputSearch} from "../../common/components/InputSearch";
import {FilmsItemsTypeFilms} from "../../api/api";
import {DataFilm} from "./components/DataFilm";

export const SearchScreen = () => {
  const [filmsItem, setFilmsItem] = useState<FilmsItemsTypeFilms[]>([])

  const addFilmsItem =(films:FilmsItemsTypeFilms[])=>{
    setFilmsItem(films)
  }

  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <InputSearch setFilmsItem={addFilmsItem}/>
     <DataFilm filmsArr={filmsItem}/>
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
