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
import {NUM_COLUMNS} from "../../../constants/constants";
import {FilmsItemsTypeFilms} from "../../../api/api";
import {useAppNavigation} from "../../types";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/storHooks";
import {getFilmsCategories} from "../../../bll/reducers/categoriesFilmsReducers";


export const CategoriesFilms = () => {
  const filmsCategories = useAppSelector(state => state.filmsCategories)

  const [btnActive, setBtnActive] = useState('btn1')

  const dispatch = useAppDispatch()

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
    dispatch(getFilmsCategories(btnActive))
  }, [btnActive])


  return (
    <View style={{flex: 1, marginTop: -50}}>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}

          onPress={() => {
            setBtnActive('btn1')
          }}
        >

          <Text
            style={btnActive === 'btn1' ? [styles.buttonText, styles.btnActive] : styles.buttonText}>Now
            playing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setBtnActive('btn2')
          }}
        >
          <Text
            style={btnActive === 'btn2' ? [styles.buttonText, styles.btnActive] : styles.buttonText}>Upcoming</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={filmsCategories}
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
    marginBottom: 15,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fdfdfd',
    marginHorizontal: 5,
    marginBottom: 5
  },
  btnActive: {
    paddingBottom: 5,
    borderBottomWidth: 3,
    borderBottomColor: '#3a3f46'
  },
})
