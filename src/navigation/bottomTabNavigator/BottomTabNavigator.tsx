import React from 'react';

import { BOTTOM_TAB_NAVIGATOR_ROUTE } from '@enums/routesEnum';
import {
  bottomTabNavigatorOptions,
  tasksScreenSettings,
  usersScreenSettings,
} from '@navigation/bottomTabNavigator/settings';
import { BottomTabNavigatorParamListType } from '@navigation/bottomTabNavigator/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TasksScreen } from '@screens/tasksScreen/TasksScreen';
import { UsersScreen } from '@screens/usersScreen/UsersScreen';

const { Navigator, Screen } = createBottomTabNavigator<BottomTabNavigatorParamListType>();

export const BottomTabNavigator = () => {
  return (
    <Navigator
      initialRouteName={BOTTOM_TAB_NAVIGATOR_ROUTE.USERS_SCREEN}
      screenOptions={{ ...bottomTabNavigatorOptions() }}
    >
      <Screen
        component={UsersScreen}
        name={BOTTOM_TAB_NAVIGATOR_ROUTE.USERS_SCREEN}
        options={{ ...usersScreenSettings() }}
      />
      <Screen
        component={TasksScreen}
        name={BOTTOM_TAB_NAVIGATOR_ROUTE.TASKS_SCREEN}
        options={{ ...tasksScreenSettings() }}
      />
    </Navigator>
  );
};
