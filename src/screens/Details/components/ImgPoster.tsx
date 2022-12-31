import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {WIDTH} from "../../../constants/constants";
import {FilmsItemsTypeFilms} from "../../../api/api";
import {StarSvg} from "../../../assets/svg/StarSvg";
import {rating} from "../../../common/utils/rating";

type ImgPosterType = {
  film: FilmsItemsTypeFilms
}

export const ImgPoster = ({film}: ImgPosterType) => {

  return (
    <View style={{position: 'relative', flex: 1}}>
      <Image
        style={styles.imgPoster}
        source={{uri: film.posterUrlPreview}}
        resizeMode={'contain'}
      />
      <View style={styles.rating}>
        <StarSvg/>
        <Text style={styles.textRating}>{rating(film.rating)}</Text>
      </View>
      <Image
        style={styles.img}
        source={{uri: film.posterUrl}}
      />
      <View style ={{alignItems: 'flex-start'}}>
        <Text style={styles.text}>{film.nameEn}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242a32',
    flex: 1
  },
  text: {
    flexGrow:1,
   // borderWidth:1, borderColor: 'red',
   // marginVertical: 10,
    fontSize: 20,
    color: '#fdfdfd',
    //textAlign: 'right',
    //width: 150,
    alignSelf: 'flex-end',
   // top: -50,
    //width: 220,
   // left: 150
  },
  imgPoster: {
    //flex: 1,
    //...StyleSheet.absoluteFillObject,
    width: WIDTH,
    height: 250,
    //objectFit: 'contain',
    //marginVertical: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  rating: {
    backgroundColor: 'rgba(37, 40, 54, 0.9)',
    width: 90,
    position: 'relative',
    top: -60,
    left: 300,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center'
  },
  textRating: {
    color: '#fd8600',
    fontSize: 16,
    marginLeft: 5,
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
