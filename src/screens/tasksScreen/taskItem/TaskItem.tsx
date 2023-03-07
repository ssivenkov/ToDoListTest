import React, { memo } from 'react';

import { IconButton } from '@components/buttons/iconButton/IconButton';
import { COMPLETED_TASK_ICON_SIZE } from '@constants/constants';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useStyles } from '@hooks/useStyles';
import { tableHeaderStyles } from '@screens/tasksScreen/tableHeader/styles';
import { taskItemStyles } from '@screens/tasksScreen/taskItem/styles';
import { TaskItemPropsType } from '@screens/tasksScreen/taskItem/types';
import { UsersSelectButton } from '@screens/tasksScreen/taskItem/usersSelectButton/UsersSelectButton';
import { deleteTaskAction } from '@store/actions/tasksReducerActions/deleteTaskAction';
import { setIsCompletedAction } from '@store/actions/tasksReducerActions/setIsCompletedAction';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const TaskItem = (props: TaskItemPropsType) => {
  const { title, completed, users, id, owners } = props;

  const dispatch = useDispatch();

  const tableHeaderStyle = useStyles(tableHeaderStyles);

  const setIsTaskCompleted = () => {
    dispatch(setIsCompletedAction({ taskId: id, isCompleted: true }));
  };

  const setIsTaskUnCompleted = () => {
    dispatch(setIsCompletedAction({ taskId: id, isCompleted: false }));
  };

  const deleteTask = () => {
    dispatch(deleteTaskAction({ taskId: id }));
  };

  return (
    <View style={taskItemStyles.container}>
      <View style={tableHeaderStyle.idContainer}>
        <Text style={taskItemStyles.text}>{id}</Text>
      </View>
      <View style={[tableHeaderStyle.titleContainer, taskItemStyles.leftAlign]}>
        <Text style={taskItemStyles.text}>{title}</Text>
      </View>
      <View style={tableHeaderStyle.usersContainer}>
        <UsersSelectButton owners={owners} taskId={id} users={users} />
      </View>
      <View style={tableHeaderStyle.completedContainer}>
        <Text style={taskItemStyles.text}>
          {completed ? (
            <IconButton
              icon={
                <Text style={taskItemStyles.text}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    size={COMPLETED_TASK_ICON_SIZE}
                    style={taskItemStyles.icon}
                  />
                </Text>
              }
              onPress={setIsTaskUnCompleted}
            />
          ) : (
            <IconButton
              icon={
                <Text style={taskItemStyles.text}>
                  <FontAwesomeIcon
                    icon={faSquare}
                    size={COMPLETED_TASK_ICON_SIZE}
                    style={taskItemStyles.icon}
                  />
                </Text>
              }
              onPress={setIsTaskCompleted}
            />
          )}
        </Text>
      </View>
      <View style={tableHeaderStyle.actionContainer}>
        <IconButton
          icon={
            <Text style={taskItemStyles.text}>
              <FontAwesomeIcon
                icon={faTrash}
                size={COMPLETED_TASK_ICON_SIZE}
                style={taskItemStyles.icon}
              />
            </Text>
          }
          onPress={deleteTask}
        />
      </View>
    </View>
  );
};

export default memo(TaskItem);
