import { AppReducerStateType } from '@store/reducers/appReducer/types';
import { AppRootStateType } from '@store/types';

export const isDataLoadedSelector = (
  state: AppRootStateType,
): AppReducerStateType['isDataLoaded'] => {
  return state.status.isDataLoaded;
};
