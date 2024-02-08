import React, { useEffect, type FC } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTimeout } from '../utils/useTimeout';
import useFadeAnimation from '../hooks/useFadeAnimation';
import { FADE_DURATION, TOAST_DURATION } from '../constants/animations';
import usePanResponder from '../hooks/usePanResponder';
import {
  ToastPosition,
  type ConfigType,
  type ToastType,
} from '../types/ToastType';
import { colors } from '../constants/colors';

interface Props {
  type: ToastType;
  text: string;
  title?: string;
  onClick?: () => void;
  config: ConfigType;
  hide: () => void;
}

export const Toast: FC<Props> = ({
  config: { showCloseIcon = true, hideableByGesture = true, ...config },
  ...props
}) => {
  const [fadeAnim, fadeIn, fadeOut] = useFadeAnimation(props.hide);
  const [pan, panResponder] = usePanResponder(config.position, fadeOut);

  useTimeout(
    fadeOut,
    config.duration !== null
      ? (config.duration || TOAST_DURATION) - FADE_DURATION
      : null
  );

  useEffect(() => {
    fadeIn();
  }, [fadeIn]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange:
                  config.position === ToastPosition.TOP ? [-50, 50] : [50, -50],
              }),
            },
            { translateY: pan.y },
          ],
        },
      ]}
      {...(hideableByGesture && { ...panResponder.panHandlers })}
    >
      <Pressable
        onPress={props.onClick}
        style={[
          styles.toast,
          { height: config.height },
          {
            borderColor:
              (config.colors?.borderColor &&
                config.colors.borderColor[props.type]) ||
              colors.borderColor[props.type],
          },
          { backgroundColor: config.colors?.background || colors.background },
          config.containerStyle,
        ]}
      >
        <View style={styles.textContainer}>
          {props.title && (
            <Text
              numberOfLines={config.titleMaxLines || 1}
              style={[
                styles.title,
                { color: config.colors?.title || colors.title },
                config.titleStyle,
              ]}
            >
              {props.title}
            </Text>
          )}
          {props.text && (
            <Text
              numberOfLines={config.textMaxLines || 2}
              style={[
                styles.text,
                { color: config.colors?.text || colors.text },
                config.textStyle,
              ]}
            >
              {props.text}
            </Text>
          )}
        </View>
        {showCloseIcon && (
          <Pressable onPress={fadeOut}>
            <Text
              style={[
                styles.closeIcon,
                { color: config.colors?.closeIcon || colors.closeIcon },
                config.closeIconStyle,
              ]}
            >
              X
            </Text>
          </Pressable>
        )}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  toast: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
  },
  textContainer: {
    marginRight: 20,
  },
  title: {
    color: colors.title,
    fontSize: 18,
  },
  text: {
    fontSize: 16,
  },
  closeIcon: {
    fontSize: 18,
  },
});
