import { APP_REDUCER_ACTION } from '@enums/statusReducerEnum';
import { AppReducerStateType } from '@store/reducers/appReducer/types';

type SetIsDataLoadedActionPayloadType = {
  isDataLoaded: AppReducerStateType['isDataLoaded'];
};

export type SetIsDataLoadedActionReturnType = {
  payload: SetIsDataLoadedActionPayloadType;
  type: APP_REDUCER_ACTION.SET_IS_DATA_LOADING;
};

export type SetIsDataLoadedActionType = (
  payload: SetIsDataLoadedActionPayloadType,
) => SetIsDataLoadedActionReturnType;

export const setIsDataLoadedAction: SetIsDataLoadedActionType = (payload) => ({
  payload,
  type: APP_REDUCER_ACTION.SET_IS_DATA_LOADING,
});
