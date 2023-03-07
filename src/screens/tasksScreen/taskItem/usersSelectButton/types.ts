import { TaskType } from '@store/reducers/tasksReducer/types';
import { UserType } from '@store/reducers/usersReducer/types';

export type UsersSelectButtonPropsType = {
  owners: TaskType['usersId'];
  taskId: TaskType['id'];
  users: UserType[];
};
