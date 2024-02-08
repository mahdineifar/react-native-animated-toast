import * as React from 'react';
import ToastProvider from 'react-native-toast-animated';
import { Buttons } from './Buttons';
import { ToastPosition, type ConfigType } from '../../src/types/ToastType';

const config: ConfigType = {
  position: ToastPosition.TOP,
};

export default function App() {
  return (
    <ToastProvider config={config}>
      <Buttons />
    </ToastProvider>
  );
}
