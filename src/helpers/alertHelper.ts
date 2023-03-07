import { Alert } from 'react-native';

type AlertParamsType = {
  message: string;

  onOkPress?: () => void;
};

export const messageAlert = (params: AlertParamsType) => {
  const { message, onOkPress } = params;

  Alert.alert('Error', message, [{ text: 'Ok', onPress: onOkPress && onOkPress }]);
};
