import {
  setAppErrorAC,
  SetAppErrorACType,
  setAppStatusAC,
  SetAppStatusACType,
} from '../../bll/reducers/appReducer';
import {Dispatch} from 'redux';

export const handleServerNetworkError = (message: string, dispatch: ErrorUtilsDispatchType) => {
  dispatch(setAppStatusAC({status: 'failed'}));
  dispatch(setAppErrorAC({error: message}));
};

type ErrorUtilsDispatchType = Dispatch<SetAppErrorACType | SetAppStatusACType>;
