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
import {NUM_COLUMNS} from "../../../constants/constants";
import {api, FilmsItemsTypeFilms} from "../../../api/api";
import {useAppNavigation} from "../../types";


type CategoriesFilmsType = {
  filmsArr: FilmsItemsTypeFilms[] | undefined
  setFilmsItem: (films: FilmsItemsTypeFilms[]) => void
}

export const CategoriesFilms = ({filmsArr, setFilmsItem}: CategoriesFilmsType) => {
  const {navigate} = useAppNavigation()

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


  useEffect(() => {
    api.getFilmsBest()
      .then((res) => {
        if (res.data.films.length) {
          setFilmsItem(res.data.films)
        }
      })
  }, [])

  return (
    <View style={{flex: 1, marginTop: -50}}>
      <View style={styles.containerButton}>
        <TouchableOpacity

          style={styles.button}
          onPress={() => {
          }}

        >
          <Text style={styles.buttonText}>Best</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
          }}
        >
          <Text style={styles.buttonText}>Await</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={filmsArr}
                renderItem={renderItem} numColumns={NUM_COLUMNS}
                showsHorizontalScrollIndicator={false}
                columnWrapperStyle={{justifyContent: 'space-between'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
  },
  imgPoster: {
    width: 100,
    height: 145,
    borderRadius: 16,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center"

  },

  button: {
    position: "relative",
    marginBottom:15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'500',
    color: '#fdfdfd',
    marginHorizontal: 5
  }
})
