import { SetUsersActionReturnType } from '@store/actions/usersReducerActions/setUsersAction';

export type UserType = {
  address: {
    city: string;

    geo?: {
      lat?: string;
      lng?: string;
    };
    street?: string;
    suite?: string;
    zipcode?: string;
  };
  email: string;
  id: number;
  name: string;
  username: string;

  company?: {
    bs?: string;
    catchPhrase?: string;
    name?: string;
  };
  phone?: string;
  website?: string;
};

export type UserReducerStateType = {
  users: UserType[];
};

export type UserReducerActionsType = SetUsersActionReturnType;
