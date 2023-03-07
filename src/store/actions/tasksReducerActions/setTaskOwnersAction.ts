import { TASKS_REDUCER_ACTION } from '@enums/tasksReducerEnum';
import { TaskType } from '@store/reducers/tasksReducer/types';

type SetTaskOwnersPayloadType = {
  taskId: TaskType['id'];
  userId: TaskType['usersId'];
};

export type SetTaskOwnersReturnType = {
  payload: SetTaskOwnersPayloadType;
  type: TASKS_REDUCER_ACTION.SET_TASK_OWNERS;
};

export type SetTaskOwnersType = (
  payload: SetTaskOwnersPayloadType,
) => SetTaskOwnersReturnType;

export const setTaskOwnersAction: SetTaskOwnersType = (payload) => ({
  payload,
  type: TASKS_REDUCER_ACTION.SET_TASK_OWNERS,
});
