import React from 'react';

import { modalMenuButtonLightGradient } from '@colors/gradients';
import { modalMenuButtonStyles as styles } from '@components/buttons/modalMenuButton/styles';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ModalMenuButtonPropsType } from './type';

export const ModalMenuButton = (props: ModalMenuButtonPropsType) => {
  const { title, onPress } = props;

  return (
    <LinearGradient
      colors={modalMenuButtonLightGradient}
      style={styles.modalMenuButtonGradientWrapper}
    >
      <TouchableOpacity onPress={onPress} style={styles.modalMenuButton}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
