import React from 'react';

import { activeTasksAmountHelper } from '@helpers/activeTasksAmountHelper';
import { TableHeader } from '@screens/usersScreen/tableHeader/TableHeader';
import { UserItem } from '@screens/usersScreen/userItem/UserItem';
import { tasksSelector } from '@store/selectors/tasksSelectors';
import { usersSelector } from '@store/selectors/usersSelectors';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

export const UsersScreen = () => {
  const users = useSelector(usersSelector);
  const tasks = useSelector(tasksSelector);

  if (users.length > 0) {
    return (
      <View style={styles.contentContainer}>
        <TableHeader />
        <ScrollView>
          {users.map((user) => {
            const { id, name, username, email, address } = user;

            return (
              <UserItem
                activeTaskAmount={activeTasksAmountHelper({
                  userId: id,
                  tasks,
                })}
                city={address.city}
                email={email}
                key={id}
                name={name}
                userName={username}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.nullContentContainer}>
      <Text style={styles.nullContentText}>No users found</Text>
    </View>
  );
};
