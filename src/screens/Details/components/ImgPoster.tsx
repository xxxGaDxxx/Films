import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {WIDTH} from "../../../constants/constants";
import {FilmsTopTypeFilms} from "../../../api/api";
import {StarSvg} from "../../../assets/svg/StarSvg";

type ImgPosterType = {
  film: FilmsTopTypeFilms
}

export const ImgPoster = ({film}: ImgPosterType) => {
  let reting: string | number = film.rating
  console.log('film',film)
  if (film.rating.length > 3) {
    const num = +film.rating.replace('%', '')
    reting = (num / 10).toFixed(1)
  }

  return (
    <View style={{position: 'relative'}}>
      <Image
        style={styles.imgPoster}
        source={{uri: film.posterUrlPreview}}
      />
      <View style={styles.rating}>
        <StarSvg/>
        <Text style={styles.textRating}>{reting}</Text>
      </View>
      <Image
        style={styles.img}
        source={{uri: film.posterUrl}}
      />
      <Text style={styles.text}>{film.nameEn}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242a32',
    flex: 1
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
    color: '#fdfdfd',
    top:-50,
    width:220,
    left: 150
  },
  imgPoster: {
    width: WIDTH,
    height: 250,
    marginVertical: 10,
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
    alignItems:'center'
  },
  textRating:{
    color:'#fd8600',
    fontSize:16,
    marginLeft:5,
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
