import { USER_REDUCER_ACTION } from '@enums/userReducerEnum';
import { UserReducerStateType } from '@store/reducers/usersReducer/types';

type SetUsersActionPayloadType = {
  users: UserReducerStateType['users'];
};

export type SetUsersActionReturnType = {
  payload: SetUsersActionPayloadType;
  type: USER_REDUCER_ACTION.SET_USERS;
};

export type SetUsersActionType = (
  payload: SetUsersActionPayloadType,
) => SetUsersActionReturnType;

export const setUsersAction: SetUsersActionType = (payload) => ({
  payload,
  type: USER_REDUCER_ACTION.SET_USERS,
});
