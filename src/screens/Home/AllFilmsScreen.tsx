import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {FilmsItemsTypeFilms} from "../../api/api";
import {PADDING} from "../../constants/constants";
import {InputSearch} from "../../common/components/InputSearch";
import {CategoriesFilms} from "./components/CategoriesFilms";
import {TopFilms} from "./components/TopFilms";

export const AllFilmsScreen = () => {
  const [categoriesFilmsItem, setCategoriesFilmsItem] = useState<FilmsItemsTypeFilms[]>()

  const [topFilmsItem, setTopFilmsItem] = useState<FilmsItemsTypeFilms[]>()


  const addFilmsItem = (films: FilmsItemsTypeFilms[]) => {
    setCategoriesFilmsItem(films)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to watch?
      </Text>

      <InputSearch setFilmsItem={addFilmsItem}/>

      <TopFilms filmsArr={topFilmsItem} setFilmsItem={setTopFilmsItem}/>

      <CategoriesFilms filmsArr={categoriesFilmsItem} setFilmsItem={addFilmsItem}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING,
    flex: 1,
    backgroundColor: '#242a32',
  },
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


