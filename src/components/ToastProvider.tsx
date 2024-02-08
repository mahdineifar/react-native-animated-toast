import { LayoutAnimation, StyleSheet, View } from 'react-native';
import React, { useMemo, useState, type ReactNode } from 'react';
import { Toast } from './Toast';
import {
  ToastPosition,
  type ConfigType,
  type ToastInfosWithId,
  type ToastInfos,
} from '../types/ToastType';
import generateId from '../utils/generateId';
import { ToastContext } from '../context/ToastContext';

interface Props {
  config: ConfigType;
  children: ReactNode;
}

export const ToastProvider = ({ config, children }: Props) => {
  const [toasts, setToasts] = useState<ToastInfosWithId[]>([]);

  const show = useMemo(
    () =>
      ({ type, text, title, onClick }: ToastInfos) => {
        LayoutAnimation.linear();
        setToasts((currentToasts) => [
          ...(config.position === ToastPosition.BOTTOM ? currentToasts : []),
          { id: generateId(), type, text, title, onClick },
          ...(config.position === ToastPosition.TOP ? currentToasts : []),
        ]);
      },
    [config.position]
  );

  const hide = (id: string) => {
    LayoutAnimation.linear();
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  const contextValue = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <View
        style={[
          styles.toastContainer,
          config.position === ToastPosition.BOTTOM
            ? styles.positionBottom
            : styles.positionTop,
        ]}
      >
        <View style={{ width: config.width || '90%' }}>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              text={toast.text}
              title={toast.title}
              onClick={toast.onClick}
              hide={() => hide(toast.id)}
              config={config}
            />
          ))}
        </View>
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  positionTop: {
    top: 0,
  },
  positionBottom: {
    bottom: 0,
  },
});
