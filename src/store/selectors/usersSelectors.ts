import { UserReducerStateType } from '@store/reducers/usersReducer/types';
import { AppRootStateType } from '@store/types';

export const usersSelector = (state: AppRootStateType): UserReducerStateType['users'] => {
  return state.users.users;
};
