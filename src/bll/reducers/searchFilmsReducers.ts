import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, FilmsItemsTypeFilms} from "../../api/api";
import {setAppStatusAC} from "./appReducer";
import axios from "axios";
import {handleServerNetworkError} from "../../common/utils/errorUtils";

const initialState: FilmsItemsTypeFilms[] = []

export const getSearchFilms = createAsyncThunk(
  'searchFilms/getSearchFilms',
  async (params: string, thunkApi) => {
    thunkApi.dispatch(setAppStatusAC({status: 'loading'}));

    try {
      const res = await api.getFilmsSearch(params);

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
  name: 'searchFilms',

  initialState: initialState,

  reducers: {
    resetStateSearchFilms(state) {
     return  state = []
    },
  },

  extraReducers: builder => {
    builder.addCase(getSearchFilms.fulfilled, (state, action) => {
      return action.payload.films
    });

  },
});

export const {resetStateSearchFilms} = slice.actions;
