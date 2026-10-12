import globalBreakpointSm from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_sm';
import globalBreakpointMd from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_md';
import globalBreakpointLg from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_lg';
import globalBreakpointXl from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_xl';
import globalBreakpoint2xl from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_2xl';

import globalHeightBreakpointSm from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_height_sm';
import globalHeightBreakpointMd from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_height_md';
import globalHeightBreakpointLg from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_height_lg';
import globalHeightBreakpointXl from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_height_xl';
import globalHeightBreakpoint2xl from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_height_2xl';

import RhUiCheckCircleFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiErrorFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiInformationFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiNotificationFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

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
  sm: parseInt(globalBreakpointSm.value) * 16,
  md: parseInt(globalBreakpointMd.value) * 16,
  lg: parseInt(globalBreakpointLg.value) * 16,
  xl: parseInt(globalBreakpointXl.value) * 16,
  '2xl': parseInt(globalBreakpoint2xl.value) * 16
};

export const globalHeightBreakpoints = {
  sm: parseInt(globalHeightBreakpointSm.value) * 16,
  md: parseInt(globalHeightBreakpointMd.value) * 16,
  lg: parseInt(globalHeightBreakpointLg.value) * 16,
  xl: parseInt(globalHeightBreakpointXl.value) * 16,
  '2xl': parseInt(globalHeightBreakpoint2xl.value) * 16
};

export const statusIcons = {
  success: RhUiCheckCircleFillIcon,
  danger: RhUiErrorFillIcon,
  warning: RhUiWarningFillIcon,
  info: RhUiInformationFillIcon,
  custom: RhUiNotificationFillIcon
};
