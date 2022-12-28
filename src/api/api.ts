import axios from "axios";


const BASE_URL_1 = 'https://kinopoiskapiunofficial.tech/api/v2.1/'
const BASE_URL_2 = 'https://kinopoiskapiunofficial.tech/api/v2.2/'
const API_KEY = '92421aeb-8701-46d4-bda6-3f5dd6e7bc1d'

const instance = axios.create({
  // baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'X-API-KEY': API_KEY
  },
})

export const api = {
  getFilmsTop() {
    return instance.get<FilmsTopType>(`${BASE_URL_2}films/top?type=TOP_100_POPULAR_FILMS`)
  },
  getFilmsBest() {
    return instance.get<FilmsTopType>(`${BASE_URL_2}films/top?type=TOP_250_BEST_FILMS`)
  },
  getFilmsAwait() {
    return instance.get<FilmsTopType>(`${BASE_URL_2}films/top?type=TOP_AWAIT_FILMS`)
  },
  getFilmsSearch(title: string) {
    return instance.get<FilmsSearchType>(`${BASE_URL_1}films/search-by-keyword?keyword=${title}`)
  }
}


export type FilmsSearchType = {
  keyword: string;
  pagesCount: number;
  films: FilmsItemsTypeFilms[];
  searchFilmsCountResult: number;
}

export type FilmsTopType = {
  pagesCount: number;
  films: FilmsItemsTypeFilms[];
}

export type FilmsTopTypeFilmsCountries = {
  country: string;
}

export type FilmsTopTypeFilmsGenres = {
  genre: string;
}

export type FilmsItemsTypeFilms = {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: FilmsTopTypeFilmsCountries[];
  genres: FilmsTopTypeFilmsGenres[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange?: any;
}
