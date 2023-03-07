import React from 'react';

import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { IconButtonPropsType } from './type';

export const IconButton = (props: IconButtonPropsType) => {
  const { icon, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
      {icon}
    </TouchableOpacity>
  );
};
