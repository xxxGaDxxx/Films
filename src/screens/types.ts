import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FilmsItemsTypeFilms} from "../api/api";

export type RootStackParamsLists = {
  Home: NavigatorScreenParams<RootDetailsParamsList>
  Search: undefined
  WatchList: undefined
}

export type RootDetailsParamsList = {
  AllFilms: undefined
  Details: {
    film: FilmsItemsTypeFilms
  }
}

export type DetailsScreenProps = NativeStackScreenProps<RootDetailsParamsList, 'Details'>;

export type NavigationUseType = NavigationProp<RootStackParamsLists>

export const useAppNavigation = () => useNavigation<NavigationUseType>()