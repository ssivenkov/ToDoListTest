import { useWindowDimensions } from 'react-native';

export type ExtendedStylesPropsType = {
  appHeight: number;
  appWidth: number;
};

export const useStyles = <TStyles, ArgType>(
  styleFunction: (props: ExtendedStylesPropsType, ...args: ArgType[]) => TStyles,
): TStyles => {
  const { width, height } = useWindowDimensions();

  const appWidth = Math.floor(width);
  const appHeight = Math.floor(height);

  const props: ExtendedStylesPropsType = {
    appHeight,
    appWidth,
  };

  return styleFunction(props);
};
