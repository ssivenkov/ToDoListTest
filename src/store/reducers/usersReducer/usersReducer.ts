import { USER_REDUCER_ACTION } from '@enums/userReducerEnum';
import {
  UserReducerActionsType,
  UserReducerStateType,
} from '@store/reducers/usersReducer/types';

const userReducerState: UserReducerStateType = {
  users: [],
};

export const usersReducer = (
  state = userReducerState,
  action: UserReducerActionsType,
): UserReducerStateType => {
  switch (action.type) {
    case USER_REDUCER_ACTION.SET_USERS:
      return { ...state, users: action.payload.users };

    default:
      return state;
  }
};
