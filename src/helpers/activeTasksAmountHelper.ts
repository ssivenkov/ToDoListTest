import { TaskType } from '@store/reducers/tasksReducer/types';

type ActiveTasksAmountHelperParamsType = {
  tasks: TaskType[];
  userId: number;
};

export const activeTasksAmountHelper = (params: ActiveTasksAmountHelperParamsType) => {
  const { tasks, userId } = params;

  return tasks.reduce((amount, task) => {
    if (task.usersId.some((id) => id === userId)) {
      return amount + 1;
    } else return amount;
  }, 0);
};
