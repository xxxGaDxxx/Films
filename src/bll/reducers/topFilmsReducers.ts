import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, FilmsItemsTypeFilms} from "../../api/api";
import {setAppStatusAC} from "./appReducer";
import axios from "axios";
import {handleServerNetworkError} from "../../common/utils/errorUtils";

const initialState: FilmsItemsTypeFilms[] = []

export const getFilmsTop100 = createAsyncThunk(
  'filmsTop/getFilmsTop100',
  async (params, thunkApi) => {
    thunkApi.dispatch(setAppStatusAC({status: 'loading'}));

    try {
      const res = await api.getFilmsTop();

      thunkApi.dispatch(setAppStatusAC({status: 'succeeded'}));

      return res.data;
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
  name: 'filmsTop',

  initialState: initialState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getFilmsTop100.fulfilled, (state, action) => {
      return action.payload.films
    });

  },
});
