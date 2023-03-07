import { COLORS } from '@colors/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type UserItemStylesType = {
  container: ViewStyle;
  leftAlign: ViewStyle;
  text: TextStyle;
};

export const userItemStyles = StyleSheet.create<UserItemStylesType>({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
  },

  leftAlign: {
    alignItems: 'flex-start',
  },

  text: {
    color: COLORS.BLACK,
    fontSize: 14.5,
    padding: 4,
  },
});
