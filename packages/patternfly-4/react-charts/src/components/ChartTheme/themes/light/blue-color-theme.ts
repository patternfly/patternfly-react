/* eslint-disable camelcase */
import {
  chart_color_blue_100,
  chart_color_blue_200,
  chart_color_blue_300,
  chart_color_blue_400,
  chart_color_blue_500
} from '@patternfly/react-tokens';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_blue_300.value,
  chart_color_blue_100.value,
  chart_color_blue_500.value,
  chart_color_blue_200.value,
  chart_color_blue_400.value
];

export const LightBlueColorTheme = ColorTheme({
  COLOR_SCALE
});
