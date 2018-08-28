import { preventInjection, startInjection, getBufferedStyles } from './inject';
import { StyleSheetTestUtils } from 'aphrodite';

export { getBufferedStyles };

export const suppressStyleInjection = () => {
  preventInjection();
  StyleSheetTestUtils.suppressStyleInjection();
};

export const clearBufferAndResumeStyleInjection = () => {
  startInjection();
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
};
