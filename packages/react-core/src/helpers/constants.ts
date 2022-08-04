import globalBreakpointSm from '@patternfly/react-tokens/dist/esm/global_breakpoint_sm';
import globalBreakpointMd from '@patternfly/react-tokens/dist/esm/global_breakpoint_md';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_lg';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import globalBreakpoint2xl from '@patternfly/react-tokens/dist/esm/global_breakpoint_2xl';

import globalHeightBreakpointSm from '@patternfly/react-tokens/dist/esm/global_height_breakpoint_sm';
import globalHeightBreakpointMd from '@patternfly/react-tokens/dist/esm/global_height_breakpoint_md';
import globalHeightBreakpointLg from '@patternfly/react-tokens/dist/esm/global_height_breakpoint_lg';
import globalHeightBreakpointXl from '@patternfly/react-tokens/dist/esm/global_height_breakpoint_xl';
import globalHeightBreakpoint2xl from '@patternfly/react-tokens/dist/esm/global_height_breakpoint_2xl';

export const KEY_CODES = { ARROW_UP: 38, ARROW_DOWN: 40, ESCAPE_KEY: 27, TAB: 9, ENTER: 13, SPACE: 32 };

export const SIDE = { RIGHT: 'right', LEFT: 'left', BOTH: 'both', NONE: 'none' };

export const KEYHANDLER_DIRECTION = { UP: 'up', DOWN: 'down', RIGHT: 'right', LEFT: 'left' };

export enum ValidatedOptions {
  success = 'success',
  error = 'error',
  warning = 'warning',
  default = 'default'
}

export const KeyTypes = {
  Tab: 'Tab',
  Space: ' ',
  Escape: 'Escape',
  Enter: 'Enter',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight'
};

export const globalWidthBreakpoints = {
  sm: parseInt(globalBreakpointSm.value),
  md: parseInt(globalBreakpointMd.value),
  lg: parseInt(globalBreakpointLg.value),
  xl: parseInt(globalBreakpointXl.value),
  '2xl': parseInt(globalBreakpoint2xl.value)
};

export const globalHeightBreakpoints = {
  sm: parseInt(globalHeightBreakpointSm.value),
  md: parseInt(globalHeightBreakpointMd.value),
  lg: parseInt(globalHeightBreakpointLg.value),
  xl: parseInt(globalHeightBreakpointXl.value),
  '2xl': parseInt(globalHeightBreakpoint2xl.value)
};
