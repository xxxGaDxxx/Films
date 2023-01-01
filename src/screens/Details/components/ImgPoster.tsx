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
    <View style={styles.container}>
      <Image
        style={styles.imgPoster}
        source={{uri: film.posterUrlPreview}}
        resizeMode={'contain'}
      />

      <View style={styles.containerRating}>
        <View style={styles.rating}>
          <StarSvg/>
          <Text style={styles.textRating}>{rating(film.rating)}</Text>
        </View>
      </View>

      <Image
        style={styles.img}
        source={{uri: film.posterUrl}}
      />

      <View style={styles.containerText}>
        <Text style={styles.text}>{film.nameEn}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    // borderWidth: 1, borderColor: 'red',
  },
  containerText: {
    alignItems: 'flex-end',
    // borderWidth: 1, borderColor: 'red',
    top: -30
  },
  text: {
    flexGrow: 1,
    fontSize: 20,
    color: '#fdfdfd',
    alignSelf: 'flex-end',
    width: 230,
  },
  imgPoster: {
    width: WIDTH,
    height: 250,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  containerRating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    top: -60
  },
  rating: {
    backgroundColor: 'rgba(37, 40, 54, 0.9)',
    // borderWidth: 1, borderColor: 'red',
    width: 90,
    position: 'relative',
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
