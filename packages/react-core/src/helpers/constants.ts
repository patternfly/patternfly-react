import globalBreakpointSm from '@patternfly/react-tokens/dist/esm/global_breakpoint_sm';
import globalBreakpointMd from '@patternfly/react-tokens/dist/esm/global_breakpoint_md';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_lg';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import globalBreakpoint2xl from '@patternfly/react-tokens/dist/esm/global_breakpoint_2xl';

import globalHeightBreakpointSm from '@patternfly/react-tokens/dist/esm/global_breakpoint_height_sm';
import globalHeightBreakpointMd from '@patternfly/react-tokens/dist/esm/global_breakpoint_height_md';
import globalHeightBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_height_lg';
import globalHeightBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_height_xl';
import globalHeightBreakpoint2xl from '@patternfly/react-tokens/dist/esm/global_breakpoint_height_2xl';

import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

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

export const statusIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  custom: BellIcon
};
