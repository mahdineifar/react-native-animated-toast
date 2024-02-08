import type { FlexStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export type ToastContextType = {
  show: (toastInfos: ToastInfos) => void;
};

export type ToastInfos = {
  text: string;
  type: ToastType;
  title?: string;
  onClick?: () => void;
};

export type ToastInfosWithId = { id: string } & ToastInfos;

export enum ToastPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type ConfigType = {
  position: ToastPosition;
  width?: FlexStyle['width'];
  height?: FlexStyle['height'];
  duration?: number | null;
  showCloseIcon?: boolean;
  hideableByGesture?: boolean;
  colors?: Colors;
  titleMaxLines?: number;
  textMaxLines?: number;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  closeIconStyle?: StyleProp<TextStyle>;
};

export type Colors = {
  background?: string;
  title?: string;
  text?: string;
  closeIcon?: string;
  borderColor?: {
    success: string;
    info: string;
    warning: string;
    error: string;
  };
};
