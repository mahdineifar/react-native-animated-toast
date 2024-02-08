import { useRef } from 'react';
import { Animated } from 'react-native';
import { FADE_DURATION } from '../constants/animations';

export default (
  onFadeOutFinish: () => void
): [Animated.Value, () => void, () => void] => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: FADE_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: -2,
      duration: FADE_DURATION,
      useNativeDriver: true,
    }).start(onFadeOutFinish);
  };

  return [fadeAnim, fadeIn, fadeOut];
};
