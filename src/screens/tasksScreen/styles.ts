import { COLORS } from '@colors/colors';
import { tableHeaderFullHeight } from '@screens/tasksScreen/tableHeader/styles';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type TasksScreenStylesType = {
  contentContainer: ViewStyle;
  nullContentContainer: ViewStyle;
  nullContentText: TextStyle;
  tasksListContainer: ViewStyle;
};

export const styles = StyleSheet.create<TasksScreenStylesType>({
  contentContainer: {
    marginBottom: tableHeaderFullHeight,
  },

  nullContentContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },

  nullContentText: {
    color: COLORS.BLACK,
    fontSize: 22,
    textAlign: 'center',
  },

  tasksListContainer: {
    marginVertical: 0,
  },
});
