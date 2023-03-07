import { TaskType } from '@store/reducers/tasksReducer/types';
import { UserType } from '@store/reducers/usersReducer/types';

export type TaskItemPropsType = {
  completed: TaskType['completed'];
  id: TaskType['id'];
  owners: TaskType['usersId'];
  title: TaskType['title'];
  users: UserType[];
};
