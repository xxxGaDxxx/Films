import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {api, FilmsTopTypeFilms} from "../../api/api";
import {NUM_COLUMNS, PADDING} from "../../constants/constants";
import {useAppNavigation} from "../types";
import {InputSearch} from "../../common/components/InputSearch";

export const HomeScreen = () => {
  const [filmsItem, setFilmsItem] = useState<FilmsTopTypeFilms[]>()


  const {navigate} = useAppNavigation()

  useEffect(() => {
    api.getFilmsTop()
      .then((res) => {
        setFilmsItem(res.data.films)
      })
  }, [])

  const renderItem: ListRenderItem<FilmsTopTypeFilms> = ({item}) => {
    // return <TouchableOpacity>
    return <TouchableOpacity onPress={() => {
      navigate('Details', {film:item})
    }
    }>
      <View style={styles.item}>
        <Image
          style={styles.imgPoster}
          source={{uri: item.posterUrl}}
        />
      </View>
    </TouchableOpacity>
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to watch?</Text>
      <InputSearch/>
      <FlatList data={filmsItem} renderItem={renderItem} numColumns={NUM_COLUMNS}
                columnWrapperStyle={{justifyContent: 'space-between'}}/>
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


