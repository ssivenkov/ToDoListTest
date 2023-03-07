import { APP_REDUCER_ACTION } from '@enums/statusReducerEnum';
import {
  AppReducerActionsType,
  AppReducerStateType,
} from '@store/reducers/appReducer/types';

const appReducerState: AppReducerStateType = {
  isDataLoaded: false,
};

export const appReducer = (
  state = appReducerState,
  action: AppReducerActionsType,
): AppReducerStateType => {
  switch (action.type) {
    case APP_REDUCER_ACTION.SET_IS_DATA_LOADING:
      return { ...state, isDataLoaded: action.payload.isDataLoaded };

    default:
      return state;
  }
};
