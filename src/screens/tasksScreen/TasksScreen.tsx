import React from 'react';

import { TableHeader } from '@screens/tasksScreen/tableHeader/TableHeader';
import TaskItem from '@screens/tasksScreen/taskItem/TaskItem';
import { tasksSelector } from '@store/selectors/tasksSelectors';
import { usersSelector } from '@store/selectors/usersSelectors';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

export const TasksScreen = () => {
  const tasks = useSelector(tasksSelector);
  const users = useSelector(usersSelector);

  if (tasks.length > 0) {
    return (
      <View style={styles.contentContainer}>
        <TableHeader />
        <FlatList
          data={tasks}
          initialNumToRender={14}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              completed={item.completed}
              id={item.id}
              key={item.id}
              owners={item.usersId}
              title={item.title}
              users={users}
            />
          )}
        />
      </View>
    );
  }

  return (
    <View style={styles.nullContentContainer}>
      <Text style={styles.nullContentText}>No tasks found</Text>
    </View>
  );
};
