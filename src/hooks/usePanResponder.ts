import { useRef } from 'react';
import {
  Animated,
  PanResponder,
  type PanResponderInstance,
} from 'react-native';
import { ToastPosition } from '../types/ToastType';

export default (
  position: ToastPosition,
  onHideToast: () => void
): [Animated.ValueXY, PanResponderInstance] => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (
          (position === ToastPosition.BOTTOM && gesture.dy > 0) ||
          (position === ToastPosition.TOP && gesture.dy < 0)
        ) {
          pan.y.setValue(gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (
          (position === ToastPosition.BOTTOM && gesture.dy > 15) ||
          (position === ToastPosition.TOP && gesture.dy < -15)
        ) {
          onHideToast();
        } else {
          pan.y.setValue(0);
        }
      },
    })
  ).current;

  return [pan, panResponder];
};
