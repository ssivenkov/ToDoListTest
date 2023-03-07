import { COLORS } from '@colors/colors';
import {
  defaultModalIndentBottom,
  defaultModalPaddingHorizontal,
  modalContentMaxWidth,
} from '@constants/constants';
import { ExtendedStylesPropsType } from '@hooks/useStyles';
import {
  androidTabBarContainerHeight,
  iOSTabBarContainerHeight,
} from '@navigation/commonNavigationStyles';
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type ModalStylesType = {
  buttonsContainer: ViewStyle;
  centeredView: ViewStyle;
  contentContainer: ViewStyle;
  descriptionContainer: ViewStyle;
  modalView: ViewStyle;
  text: TextStyle;
  userContainer: ViewStyle;
};

const { MEDIUM_DARK_TRANSPARENCY, BLACK, GALLERY } = COLORS;

export const modalStyles = (props: ExtendedStylesPropsType) =>
  StyleSheet.create<ModalStylesType>({
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
    },

    centeredView: {
      alignItems: 'center',
      backgroundColor: MEDIUM_DARK_TRANSPARENCY,
      flex: 1,
      justifyContent: 'center',
    },

    contentContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: modalContentMaxWidth,
      paddingBottom: 10,
    },

    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      maxWidth: modalContentMaxWidth,
      paddingBottom: 10,
    },

    descriptionContainer: {
      alignItems: 'center',
      marginBottom: defaultModalIndentBottom,
      marginHorizontal: defaultModalPaddingHorizontal,
      maxWidth: modalContentMaxWidth,
    },

    modalView: {
      backgroundColor: GALLERY,
      borderRadius: 20,
      justifyContent: 'space-between',
      maxHeight:
        props.appHeight -
        (Platform.OS === 'ios' ? iOSTabBarContainerHeight : androidTabBarContainerHeight),
      maxWidth: '90%',
      overflow: 'hidden',
      paddingTop: 20,
      width: modalContentMaxWidth,
    },

    text: {
      color: BLACK,
      fontSize: 18,
    },
  });
