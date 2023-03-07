import { COLORS } from '@colors/colors';
import { ExtendedStylesPropsType } from '@hooks/useStyles';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type TableHeaderStylesType = {
  activeTasksContainer: ViewStyle;
  cityContainer: ViewStyle;
  container: ViewStyle;
  emailContainer: ViewStyle;
  nameContainer: ViewStyle;
  text: TextStyle;
  userNameContainer: ViewStyle;
};

const nameContainerProportion = 5.5;
const userNameContainerProportion = 5.5;
const emailContainerProportion = 3.5;
const cityContainerProportion = 4.5;
const activeTasksContainerProportion = 7.5;

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

    nameContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / nameContainerProportion,
      borderRightWidth: 1,
    },

    userNameContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / userNameContainerProportion,
      borderRightWidth: 1,
    },

    emailContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / emailContainerProportion,
      borderRightWidth: 1,
    },

    cityContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / cityContainerProportion,
      borderRightWidth: 1,
    },

    activeTasksContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: props.appWidth / activeTasksContainerProportion,
      borderRightWidth: 1,
    },
  });
