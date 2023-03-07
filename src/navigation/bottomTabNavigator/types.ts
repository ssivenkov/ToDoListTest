import { BOTTOM_TAB_NAVIGATOR_ROUTE } from '@enums/routesEnum';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/src/types';

export type BottomTabNavigatorParamListType = {
  [BOTTOM_TAB_NAVIGATOR_ROUTE.TASKS_SCREEN]: undefined;
  [BOTTOM_TAB_NAVIGATOR_ROUTE.USERS_SCREEN]: undefined;
};

export type BottomTabNavigatorScreenSettingsType = () => BottomTabNavigationOptions;
