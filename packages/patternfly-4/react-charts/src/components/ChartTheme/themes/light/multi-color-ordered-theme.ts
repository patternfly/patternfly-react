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
  chart_color_gold_100,
  chart_color_gold_200,
  chart_color_gold_300,
  chart_color_gold_400,
  chart_color_gold_500,
  chart_color_orange_100,
  chart_color_orange_200,
  chart_color_orange_300,
  chart_color_orange_400,
  chart_color_orange_500
} from '@patternfly/react-tokens';
import { ColorTheme } from '../color-theme';

// The color order below (minus the purple color family) improves the color contrast in ordered charts; donut, pie, bar, & stack
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_blue_300.value,
  chart_color_green_300.value,
  chart_color_cyan_300.value,
  chart_color_gold_300.value,
  chart_color_orange_300.value,
  chart_color_blue_100.value,
  chart_color_green_500.value,
  chart_color_cyan_100.value,
  chart_color_gold_100.value,
  chart_color_orange_500.value,
  chart_color_blue_500.value,
  chart_color_green_100.value,
  chart_color_cyan_500.value,
  chart_color_gold_500.value,
  chart_color_orange_100.value,
  chart_color_blue_200.value,
  chart_color_green_400.value,
  chart_color_cyan_200.value,
  chart_color_gold_200.value,
  chart_color_orange_400.value,
  chart_color_blue_400.value,
  chart_color_green_200.value,
  chart_color_cyan_400.value,
  chart_color_gold_400.value,
  chart_color_orange_200.value
];

export const LightMultiColorOrderedTheme = ColorTheme({
  COLOR_SCALE
});
