import { preventInjection, startInjection, getBufferedStyles } from './inject';
import { StyleSheetTestUtils } from 'aphrodite';

export { getBufferedStyles };

export const suppressStyleInjection: () => void;

export const clearBufferAndResumeStyleInjection: () => void;
