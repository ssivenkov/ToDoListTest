import { TASKS_REDUCER_ACTION } from '@enums/tasksReducerEnum';
import { TaskType } from '@store/reducers/tasksReducer/types';

type SetIsCompletedActionPayloadType = {
  isCompleted: TaskType['completed'];
  taskId: TaskType['id'];
};

export type SetIsCompletedActionReturnType = {
  payload: SetIsCompletedActionPayloadType;
  type: TASKS_REDUCER_ACTION.SET_IS_COMPLETED;
};

export type SetIsCompletedActionType = (
  payload: SetIsCompletedActionPayloadType,
) => SetIsCompletedActionReturnType;

export const setIsCompletedAction: SetIsCompletedActionType = (payload) => ({
  payload,
  type: TASKS_REDUCER_ACTION.SET_IS_COMPLETED,
});
