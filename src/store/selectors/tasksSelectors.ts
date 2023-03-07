import { TasksReducerStateType } from '@store/reducers/tasksReducer/types';
import { AppRootStateType } from '@store/types';

export const tasksSelector = (
  state: AppRootStateType,
): TasksReducerStateType['tasks'] => {
  return state.tasks.tasks;
};
