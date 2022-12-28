import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {slice as appReducer} from '../reducers/appReducer';
import {slice as topFilmsReducers} from '../reducers/topFilmsReducers';
import {slice as categoriesFilmsReducers} from '../reducers/categoriesFilmsReducers';
import {slice as searchFilmsReducers} from '../reducers/searchFilmsReducers';


export const store = configureStore({
  reducer: {
    app: appReducer.reducer,
    filmsTop: topFilmsReducers.reducer,
    filmsCategories: categoriesFilmsReducers.reducer,
    searchFilms: searchFilmsReducers.reducer,

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

///
// @ts-ignore
window.store = store.getState();