import { TASKS_REDUCER_ACTION } from '@enums/tasksReducerEnum';
import { TaskType } from '@store/reducers/tasksReducer/types';

type DeleteTaskActionPayloadType = {
  taskId: TaskType['id'];
};

export type DeleteTaskActionReturnType = {
  payload: DeleteTaskActionPayloadType;
  type: TASKS_REDUCER_ACTION.DELETE_TASK;
};

export type DeleteTaskActionType = (
  payload: DeleteTaskActionPayloadType,
) => DeleteTaskActionReturnType;

export const deleteTaskAction: DeleteTaskActionType = (payload) => ({
  payload,
  type: TASKS_REDUCER_ACTION.DELETE_TASK,
});
