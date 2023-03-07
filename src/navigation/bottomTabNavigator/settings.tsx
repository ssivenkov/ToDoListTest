import React from 'react';

import { COLORS } from '@colors/colors';
import { BOTTOM_TAB_BAR_ICON_SIZE } from '@constants/constants';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from '@navigation/bottomTabNavigator/styles';
import { BottomTabNavigatorScreenSettingsType } from '@navigation/bottomTabNavigator/types';

export const bottomTabNavigatorOptions: BottomTabNavigatorScreenSettingsType = () => {
  return {
    headerShown: false,
    tabBarActiveTintColor: COLORS.DENIM,
    tabBarIconStyle: styles.bottomTabBarIcon,
    tabBarInactiveTintColor: COLORS.BLACK,
    tabBarLabelStyle: styles.bottomTabBarTitle,
    tabBarStyle: styles.bottomTabBarContainer,
  };
};

export const tasksScreenSettings: BottomTabNavigatorScreenSettingsType = () => {
  return {
    headerShown: true,
    headerTitleAlign: 'center',
    headerTitle: 'Tasks',
    tabBarLabel: 'Tasks',
    tabBarIcon: ({ focused }) => (
      <FontAwesomeIcon
        icon={faList}
        size={BOTTOM_TAB_BAR_ICON_SIZE}
        style={focused ? styles.bottomTabIconFocus : styles.bottomTabIcon}
      />
    ),
  };
};

export const usersScreenSettings: BottomTabNavigatorScreenSettingsType = () => {
  return {
    headerShown: true,
    headerTitleAlign: 'center',
    headerTitle: 'Users',
    tabBarLabel: 'Users',
    tabBarIcon: ({ focused }) => (
      <FontAwesomeIcon
        icon={faUser}
        size={BOTTOM_TAB_BAR_ICON_SIZE}
        style={focused ? styles.bottomTabIconFocus : styles.bottomTabIcon}
      />
    ),
  };
};
