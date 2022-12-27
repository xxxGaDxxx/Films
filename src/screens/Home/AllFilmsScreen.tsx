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
import {api, FilmsItemsTypeFilms} from "../../api/api";
import {NUM_COLUMNS, PADDING} from "../../constants/constants";
import {useAppNavigation} from "../types";
import {InputSearch} from "../../common/components/InputSearch";

export const AllFilmsScreen = () => {
  const [filmsItem, setFilmsItem] = useState<FilmsItemsTypeFilms[]>()

  const {navigate} = useAppNavigation()

  const addFilmsItem = (films: FilmsItemsTypeFilms[]) => {
    setFilmsItem(films)
  }

  useEffect(() => {
    api.getFilmsTop()
      .then((res) => {
        if (res.data.films.length) {
          setFilmsItem(res.data.films)
        }
      })
  }, [])

  const renderItem: ListRenderItem<FilmsItemsTypeFilms> = ({item}) => {
    return <TouchableOpacity onPress={() => {
      navigate('Home', {
        screen: 'Details', params: {
          film: item
        }
      })
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
      <InputSearch setFilmsItem={addFilmsItem}/>
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


