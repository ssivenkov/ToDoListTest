import { AppReducerStateType } from '@store/reducers/appReducer/types';
import { TasksReducerStateType } from '@store/reducers/tasksReducer/types';
import { UserReducerStateType } from '@store/reducers/usersReducer/types';
import { rootReducer } from '@store/store';

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type RootStateType = {
  status: AppReducerStateType;
  tasks: TasksReducerStateType;
  users: UserReducerStateType;
};
