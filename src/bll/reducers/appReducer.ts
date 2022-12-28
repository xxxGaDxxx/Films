import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',

  initialState: {
    status: 'succeeded' as RequestStatusType,
    error: null as string | null,
  },

  reducers: {
    setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },

    setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error;
    },
  },
});

export const { setAppStatusAC, setAppErrorAC } = slice.actions;

// для error-utils
export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorACType = ReturnType<typeof setAppErrorAC>;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
