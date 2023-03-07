import { COLORS } from '@colors/colors';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type TaskItemStylesType = {
  container: ViewStyle;
  icon: FontAwesomeIconStyle;
  leftAlign: ViewStyle;
  text: TextStyle;
  userIconContainer: ViewStyle;
};

export const taskItemStyles = StyleSheet.create<TaskItemStylesType>({
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
    fontSize: 14,
    padding: 4,
  },

  icon: {
    color: COLORS.BLACK,
  },

  userIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
