import { COLORS } from '@colors/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type ModalMenuButtonStylesType = {
  modalMenuButton: ViewStyle;
  modalMenuButtonDisabled: ViewStyle;
  modalMenuButtonGradientWrapper: ViewStyle;
  separator: ViewStyle;
  text: TextStyle;
};

const { BLACK, WHITE } = COLORS;

export const modalMenuButtonStyles = StyleSheet.create<ModalMenuButtonStylesType>({
  modalMenuButton: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },

  modalMenuButtonDisabled: {
    opacity: 0.2,
  },

  modalMenuButtonGradientWrapper: {
    flex: 1,
  },

  separator: {
    backgroundColor: WHITE,
    width: 1,
  },

  text: {
    color: BLACK,
    fontSize: 20,
    marginBottom: 2,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
