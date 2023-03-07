import { Platform } from 'react-native';

export const iOSTabBarContainerHeight = 82;
export const androidTabBarContainerHeight = 50;

export const tabBarContainerHeight =
  Platform.OS === 'ios' ? iOSTabBarContainerHeight : androidTabBarContainerHeight;
