import { COLORS } from '@colors/colors';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import { tabBarContainerHeight } from '@navigation/commonNavigationStyles';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type BottomTabNavigatorStylesType = {
  bottomTabBarContainer: ViewStyle;
  bottomTabBarIcon: TextStyle;
  bottomTabBarTitle: TextStyle;
  bottomTabIcon: FontAwesomeIconStyle;
  bottomTabIconFocus: FontAwesomeIconStyle;
};

const { WHITE, BLACK, DENIM } = COLORS;

export const styles = StyleSheet.create<BottomTabNavigatorStylesType>({
  bottomTabBarContainer: {
    backgroundColor: WHITE,
    borderTopWidth: 0,
    height: tabBarContainerHeight,
    zIndex: 50,
  },

  bottomTabBarIcon: {
    marginTop: 5,
  },

  bottomTabBarTitle: {
    fontSize: 14,
    marginBottom: 1,
  },

  bottomTabIcon: {
    color: BLACK,
  },

  bottomTabIconFocus: {
    color: DENIM,
  },
});
