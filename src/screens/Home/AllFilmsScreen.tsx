import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {PADDING} from "../../constants/constants";
import {InputSearch} from "../../common/components/InputSearch";
import {CategoriesFilms} from "./components/CategoriesFilms";
import {TopFilms} from "./components/TopFilms";
import {useAppSelector} from "../../common/hooks/storHooks";
import {DataFilm} from "../Search/components/DataFilm";

export const AllFilmsScreen = () => {
  const searchFilms = useAppSelector(state => state.searchFilms)

  // const dispatch = useAppDispatch()
  //
  // useEffect(() => {
  //   if (searchFilms.length) {
  //     dispatch(resetStateSearchFilms())
  //   }
  // }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to watch?
      </Text>

      <InputSearch/>
      {!searchFilms.length
        ? <ScrollView>
          <TopFilms/>

          <CategoriesFilms/>
        </ScrollView>

        : <View style={{flex: 1}}>
          <DataFilm filmsArr={searchFilms}/>
        </View>
      }

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


