import { TASKS_REDUCER_ACTION } from '@enums/tasksReducerEnum';
import {
  TasksReducerActionsType,
  TasksReducerStateType,
  TaskType,
} from '@store/reducers/tasksReducer/types';

const tasksReducerState: TasksReducerStateType = {
  tasks: [],
};

export const tasksReducer = (
  state = tasksReducerState,
  action: TasksReducerActionsType,
): TasksReducerStateType => {
  switch (action.type) {
    case TASKS_REDUCER_ACTION.SET_TASKS:
      return { ...state, tasks: action.payload.tasks };

    case TASKS_REDUCER_ACTION.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload.taskId;
        }),
      };

    case TASKS_REDUCER_ACTION.SET_IS_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id === action.payload.taskId) {
            const modifiedTask = Object.assign(task);

            modifiedTask.completed = action.payload.isCompleted;

            return modifiedTask;
          } else {
            return task;
          }
        }),
      };

    case TASKS_REDUCER_ACTION.SET_TASK_OWNERS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id === action.payload.taskId) {
            const modifiedTask: TaskType = Object.assign(task);

            modifiedTask.usersId = action.payload.userId;

            return modifiedTask;
          } else {
            return task;
          }
        }),
      };

    default:
      return state;
  }
};
