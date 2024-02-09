import * as React from 'react';
import {
  ToastProvider,
  ToastPosition,
  type ConfigType,
} from 'react-native-toast-animated';
import { Buttons } from './Buttons';

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
