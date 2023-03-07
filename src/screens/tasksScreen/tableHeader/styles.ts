import { COLORS } from '@colors/colors';
import { ExtendedStylesPropsType } from '@hooks/useStyles';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type TableHeaderStylesType = {
  actionContainer: ViewStyle;
  completedContainer: ViewStyle;
  container: ViewStyle;
  idContainer: ViewStyle;
  text: TextStyle;
  titleContainer: ViewStyle;
  usersContainer: ViewStyle;
};

const idContainerProportion = 11;
const titleContainerProportion = 2.63;
const userContainerProportion = 5;
const completedContainerProportion = 5;
const actionContainerProportion = 7.5;

const tableHeaderHeight = 40;

const tableHeaderBorderBottomWidth = 1;

export const tableHeaderFullHeight = tableHeaderHeight + tableHeaderBorderBottomWidth;

export const tableHeaderStyles = (props: ExtendedStylesPropsType) =>
  StyleSheet.create<TableHeaderStylesType>({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: tableHeaderFullHeight,
      borderBottomWidth: tableHeaderBorderBottomWidth,
      backgroundColor: COLORS.ALTO,
    },

    text: {
      color: COLORS.BLACK,
      fontWeight: '600',
      fontSize: 12,
      padding: 4,
    },

    idContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / idContainerProportion,
      borderRightWidth: 1,
    },

    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / titleContainerProportion,
      borderRightWidth: 1,
    },

    usersContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / userContainerProportion,
      borderRightWidth: 1,
    },

    completedContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / completedContainerProportion,
      borderRightWidth: 1,
    },

    actionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / actionContainerProportion,
      borderRightWidth: 1,
    },
  });
