import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import { slice as adminLoginReducer } from '../reducers/adminLoginReducer';


export const store = configureStore({
  reducer: {
    // app: appReducer.reducer,

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

///
// @ts-ignore
window.store = store.getState();