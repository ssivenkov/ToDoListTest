import React from 'react';

import { useStyles } from '@hooks/useStyles';
import { tableHeaderStyles } from '@screens/tasksScreen/tableHeader/styles';
import { Text, View } from 'react-native';

export const TableHeader = () => {
  const styles = useStyles(tableHeaderStyles);

  return (
    <View style={styles.container}>
      <View style={styles.idContainer}>
        <Text style={styles.text}>Id</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Title</Text>
      </View>
      <View style={styles.usersContainer}>
        <Text style={styles.text}>Users</Text>
      </View>
      <View style={styles.completedContainer}>
        <Text style={styles.text}>Completed</Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>Action</Text>
      </View>
    </View>
  );
};
