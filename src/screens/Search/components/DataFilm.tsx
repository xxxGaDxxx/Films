import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {FilmsItemsTypeFilms} from "../../../api/api";
import {NoResultsSvg} from "../../../assets/svg/NoResultsSvg";
import {HEIGHT, PADDING, WIDTH} from "../../../constants/constants";
import {useAppNavigation} from "../../types";
import {DateSvg} from "../../../assets/svg/DateSvg";
import {TimeSvg} from "../../../assets/svg/TimeSvg";
import {TicketSvg} from "../../../assets/svg/TicketSvg";
import {timeLength} from "../../../common/utils/timeLength";
import {StarSvg} from "../../../assets/svg/StarSvg";
import {rating} from "../../../common/utils/rating";

type DataFilmType = {
  films: FilmsItemsTypeFilms[]
}

export const DataFilm = ({films}: DataFilmType) => {
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
        <View>
          <Text style={styles.textName}>{item.nameEn}</Text>

          <View style={styles.box}>
            <StarSvg/>
            <Text style={styles.textRating}>{rating(item.rating)}</Text>
          </View>

          <View style={styles.box}>
            <TicketSvg/>
            <Text style={styles.textSvg}>Action</Text>
          </View>


          <View style={styles.box}>
            <TimeSvg/>
            <Text style={styles.textSvg}>{timeLength(item.filmLength)} Minutes</Text>
          </View>

          <View style={styles.box}>
            <DateSvg/>
            <Text style={styles.textSvg}>{item.year}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  }

  return (
    <View style={{flex: 1}}>
      {films.length
        ? <View>
          <FlatList data={films} renderItem={renderItem} numColumns={1}
          />
        </View>
        : <View style={styles.containerNoFilms}>
          <NoResultsSvg/>
          <Text style={styles.textSorry}>we are sorry, we can not find the movie :(</Text>
          <Text style={styles.text}>Find your movie by Type title, categories, years, etc </Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  containerNoFilms: {
    justifyContent: "center",
    alignItems: "center",
    top: HEIGHT / 5,
  },
  textSorry: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 20,
    width: 220,
    color: '#e9e9ed',
    lineHeight: 35,
    marginVertical: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    width: 220,
    color: '#91919c',
    lineHeight: 25,
  },
  item: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  imgPoster: {
    width: 100,
    height: 145,
    borderRadius: 16,
    marginRight: 15,
  },
  box: {
    justifyContent: "flex-start",
    flexDirection: 'row',
    alignItems: 'center'
  },
  textName: {
    fontSize: 18,
    color: '#fdfdfd',
    marginBottom: 7,
    // backgroundColor:'#fff',
    maxWidth: (WIDTH - PADDING * 2 - 105)
  },
  textRating: {
    color: '#fd8600',
    fontSize: 16,
    marginLeft: 10,
  },
  textSvg: {
    fontSize: 16,
    marginVertical: 3,
    marginLeft: 10,
    color: '#91919c',
  }
})
