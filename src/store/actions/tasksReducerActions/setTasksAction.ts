import { TASKS_REDUCER_ACTION } from '@enums/tasksReducerEnum';
import { TasksReducerStateType } from '@store/reducers/tasksReducer/types';

type SetTasksActionPayloadType = {
  tasks: TasksReducerStateType['tasks'];
};

export type SetTasksActionReturnType = {
  payload: SetTasksActionPayloadType;
  type: TASKS_REDUCER_ACTION.SET_TASKS;
};

export type SetTasksActionType = (
  payload: SetTasksActionPayloadType,
) => SetTasksActionReturnType;

export const setTasksAction: SetTasksActionType = (payload) => ({
  payload,
  type: TASKS_REDUCER_ACTION.SET_TASKS,
});
