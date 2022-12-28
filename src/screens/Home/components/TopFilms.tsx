import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {api, FilmsItemsTypeFilms} from "../../../api/api";
import {useAppNavigation} from "../../types";


type TopFilmsType = {
  filmsArr: FilmsItemsTypeFilms[] | undefined
  setFilmsItem: (films: FilmsItemsTypeFilms[]) => void
}

export const TopFilms = ({filmsArr, setFilmsItem}: TopFilmsType) => {
  const {navigate} = useAppNavigation()

  const renderItem: ListRenderItem<FilmsItemsTypeFilms> = ({item, index}) => {
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
        <Text style={styles.togNum}>{++index}</Text>
      </View>
    </TouchableOpacity>
  }


  useEffect(() => {
    api.getFilmsTop()
      .then((res) => {
        if (res.data.films.length) {
          setFilmsItem(res.data.films)
        }
      })
  }, [])

  return (
    <View>
      <FlatList data={filmsArr}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  togNum: {
    fontSize: 60,
    top: -55,
    left: -10,
    fontWeight: '900',
    color: '#242a32',
    textShadowColor: '#0295e3',
    // textShadowOffset: { width: 1, height: 1, },
    textShadowRadius: 5,
  },
  item: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 5,

  },
  imgPoster: {
    width: 145,
    height: 210,
    borderRadius: 16,
  }
})
