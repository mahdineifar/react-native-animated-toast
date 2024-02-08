import { createContext } from 'react';
import type { ToastContextType } from '../types/ToastType';

export const ToastContext = createContext<ToastContextType>({
  show: () => {},
});
