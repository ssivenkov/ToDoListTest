import React from 'react';

import { useStyles } from '@hooks/useStyles';
import { tableHeaderStyles } from '@screens/usersScreen/tableHeader/styles';
import { UserItemPropsType } from '@screens/usersScreen/userItem/types';
import { userItemStyles } from '@screens/usersScreen/userItem/userItemStyles';
import { Text, View } from 'react-native';

export const UserItem = (props: UserItemPropsType) => {
  const { name, userName, email, city, activeTaskAmount } = props;

  const tableHeaderStyle = useStyles(tableHeaderStyles);

  return (
    <View style={userItemStyles.container}>
      <View style={[tableHeaderStyle.nameContainer, userItemStyles.leftAlign]}>
        <Text style={userItemStyles.text}>{name}</Text>
      </View>
      <View style={[tableHeaderStyle.userNameContainer, userItemStyles.leftAlign]}>
        <Text style={userItemStyles.text}>{userName}</Text>
      </View>
      <View style={[tableHeaderStyle.emailContainer, userItemStyles.leftAlign]}>
        <Text style={userItemStyles.text}>{email}</Text>
      </View>
      <View style={[tableHeaderStyle.cityContainer, userItemStyles.leftAlign]}>
        <Text style={userItemStyles.text}>{city}</Text>
      </View>
      <View style={tableHeaderStyle.activeTasksContainer}>
        <Text style={userItemStyles.text}>{activeTaskAmount}</Text>
      </View>
    </View>
  );
};
