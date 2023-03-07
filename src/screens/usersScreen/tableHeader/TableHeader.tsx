import React from 'react';

import { useStyles } from '@hooks/useStyles';
import { tableHeaderStyles } from '@screens/usersScreen/tableHeader/styles';
import { Text, View } from 'react-native';

export const TableHeader = () => {
  const styles = useStyles(tableHeaderStyles);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.text}>User name</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.text}>Email</Text>
      </View>
      <View style={styles.cityContainer}>
        <Text style={styles.text}>City</Text>
      </View>
      <View style={styles.activeTasksContainer}>
        <Text style={styles.text}>Active tasks</Text>
      </View>
    </View>
  );
};
