/* eslint-disable camelcase */
import {
  chart_color_blue_100,
  chart_color_blue_200,
  chart_color_blue_300,
  chart_color_blue_400,
  chart_color_blue_500,
  chart_color_green_100,
  chart_color_green_200,
  chart_color_green_300,
  chart_color_green_400,
  chart_color_green_500,
  chart_color_cyan_100,
  chart_color_cyan_200,
  chart_color_cyan_300,
  chart_color_cyan_400,
  chart_color_cyan_500,
  chart_color_purple_100,
  chart_color_purple_200,
  chart_color_purple_300,
  chart_color_purple_400,
  chart_color_purple_500,
  chart_color_gold_100,
  chart_color_gold_200,
  chart_color_gold_300,
  chart_color_gold_400,
  chart_color_gold_500,
  chart_color_orange_100,
  chart_color_orange_200,
  chart_color_orange_300,
  chart_color_orange_400,
  chart_color_orange_500,
  chart_color_black_100,
  chart_color_black_200,
  chart_color_black_300,
  chart_color_black_400,
  chart_color_black_500,
  global_active_color_200,
  global_active_color_300,
  global_Color_dark_100,
  global_Color_light_100
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

// The color order below improves the color contrast in unordered charts
// See https://github.com/patternfly/patternfly-next/issues/1551
const COLOR_SCALE = [
  chart_color_blue_300.value,
  chart_color_gold_300.value,
  chart_color_green_300.value,
  chart_color_purple_300.value,
  chart_color_orange_300.value,
  chart_color_cyan_300.value,
  chart_color_black_300.value,
  chart_color_blue_100.value,
  chart_color_gold_500.value,
  chart_color_green_100.value,
  chart_color_purple_500.value,
  chart_color_orange_100.value,
  chart_color_cyan_500.value,
  chart_color_black_100.value,
  chart_color_blue_500.value,
  chart_color_gold_100.value,
  chart_color_green_500.value,
  chart_color_purple_100.value,
  chart_color_orange_500.value,
  chart_color_cyan_100.value,
  chart_color_black_500.value,
  chart_color_blue_200.value,
  chart_color_gold_400.value,
  chart_color_green_200.value,
  chart_color_purple_400.value,
  chart_color_orange_200.value,
  chart_color_cyan_400.value,
  chart_color_black_200.value,
  chart_color_blue_400.value,
  chart_color_gold_200.value,
  chart_color_green_400.value,
  chart_color_purple_200.value,
  chart_color_orange_400.value,
  chart_color_cyan_200.value,
  chart_color_black_400.value
];

export const LightMultiColorTheme = ColorTheme({
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
});
