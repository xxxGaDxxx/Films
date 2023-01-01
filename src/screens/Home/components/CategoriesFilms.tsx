import React from 'react';
import {FlatList, Image, ListRenderItem, StyleSheet, TouchableOpacity, View} from "react-native";
import {NUM_COLUMNS} from "../../../constants/constants";
import {FilmsItemsTypeFilms} from "../../../api/api";
import {useAppNavigation} from "../../types";
import {useAppSelector} from "../../../common/hooks/storHooks";
import {GroupBtn} from "../../../common/components/GroupBtn";


export const CategoriesFilms = () => {
  const filmsCategories = useAppSelector(state => state.filmsCategories)

  const BtnGroup = ['Now playing', 'Upcoming'] // так можно ?

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


  return (
    <View style={{flex: 1, marginTop: -50}}>
      <GroupBtn titleBtn={BtnGroup}/>

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
    borderBottomWidth: 4,
    borderBottomColor: '#3a3f46'
  },
})
