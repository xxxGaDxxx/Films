import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FilmsTopTypeFilms} from "../api/api";

export type RootStackParamsLists = {
  Home: undefined
  Details: {
    film:FilmsTopTypeFilms
  }
  Search: undefined
  WatchList: undefined
}

export type DetailsScreenProps = NativeStackScreenProps<RootStackParamsLists, 'Details'>;

export type NavigationUseType = NavigationProp<RootStackParamsLists>

export const useAppNavigation = () => useNavigation<NavigationUseType>()