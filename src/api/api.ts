import axios from "axios";


const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/'
const API_KEY = '92421aeb-8701-46d4-bda6-3f5dd6e7bc1d'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'X-API-KEY': API_KEY
  },
})

export const api = {
  getFilmsTop(){
    return instance.get<FilmsTopType>('films/top?type=TOP_100_POPULAR_FILMS')
  }
}

export type FilmsTopType = {
	pagesCount: number;
	films: FilmsTopTypeFilms[];
}
export type FilmsTopTypeFilmsCountries = {
	country: string;
}
export type FilmsTopTypeFilmsGenres = {
	genre: string;
}
export type FilmsTopTypeFilms = {
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