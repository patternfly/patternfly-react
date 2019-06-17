/* eslint-disable camelcase */
import {
  chart_color_cyan_100,
  chart_color_cyan_200,
  chart_color_cyan_300,
  chart_color_cyan_400,
  chart_color_cyan_500,
  global_Color_dark_100,
  global_Color_light_100,
  global_active_color_200,
  global_active_color_300,
} from '@patternfly/react-tokens';
import { ColorTheme } from '../color-theme';

// TODO Replace values with PF css variable when available

// Colors
const COLOR_AXIS_FILL = 'transparent';
const COLOR_AXIS_STROKE = '#D2D2D2';
const COLOR_FILL = global_active_color_200.value;
const COLOR_LABEL = global_Color_dark_100.value;
const COLOR_STACK_STROKE = global_Color_light_100.value;
const COLOR_STROKE = global_active_color_300.value;
const COLOR_TOOLTIP_FILL = '#EDEDED';
const COLOR_TOOLTIP_STROKE = '#EDEDED';
const COLOR_TOOLTIP_FLYOUT_FILL = '#151515';
const COLOR_TOOLTIP_FLYOUT_STROKE = '#151515';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_cyan_300.value,
  chart_color_cyan_100.value,
  chart_color_cyan_500.value,
  chart_color_cyan_200.value,
  chart_color_cyan_400.value
];

export const LightCyanColorTheme = ColorTheme({
  COLOR_AXIS_FILL,
  COLOR_AXIS_STROKE,
  COLOR_FILL,
  COLOR_LABEL,
  COLOR_SCALE,
  COLOR_STACK_STROKE,
  COLOR_STROKE,
  COLOR_TOOLTIP_FILL,
  COLOR_TOOLTIP_STROKE,
  COLOR_TOOLTIP_FLYOUT_FILL,
  COLOR_TOOLTIP_FLYOUT_STROKE
}) ;
