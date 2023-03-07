import { DeleteTaskActionReturnType } from '@store/actions/tasksReducerActions/deleteTaskAction';
import { SetIsCompletedActionReturnType } from '@store/actions/tasksReducerActions/setIsCompletedAction';
import { SetTaskOwnersReturnType } from '@store/actions/tasksReducerActions/setTaskOwnersAction';
import { SetTasksActionReturnType } from '@store/actions/tasksReducerActions/setTasksAction';

export type TaskBeforeConvertType = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type TaskType = {
  completed: boolean;
  id: number;
  title: string;
  usersId: number[];
};

export type TasksReducerStateType = {
  tasks: TaskType[];
};

export type TasksReducerActionsType =
  | SetTasksActionReturnType
  | DeleteTaskActionReturnType
  | SetIsCompletedActionReturnType
  | SetTaskOwnersReturnType;
