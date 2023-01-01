import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, FilmsItemsTypeFilms} from "../../api/api";
import {setAppStatusAC} from "./appReducer";
import axios from "axios";
import {handleServerNetworkError} from "../../common/utils/errorUtils";

const initialState: FilmsItemsTypeFilms[] = []


export const getFilmsCategories = createAsyncThunk(
  'filmsCategories/getFilmsCategories',
  async (params: string, thunkApi) => {
    thunkApi.dispatch(setAppStatusAC({status: 'loading'}));
    const getFilms = () => {
      if (params === 'Now playing') {
        return api.getFilmsBest();
      }
      if (params === 'Upcoming') {
        return api.getFilmsAwait();
      }

    }

    try {
      const res = await getFilms();

      thunkApi.dispatch(setAppStatusAC({status: 'succeeded'}));

      return res?.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        handleServerNetworkError(err.message, thunkApi.dispatch);

        return thunkApi.rejectWithValue(null);
      }
      return thunkApi.rejectWithValue(null);
    }
  },
);


export const slice = createSlice({
  name: 'filmsCategories',

  initialState: initialState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getFilmsCategories.fulfilled, (state, action) => {
      return action.payload?.films
    });

  },
});
