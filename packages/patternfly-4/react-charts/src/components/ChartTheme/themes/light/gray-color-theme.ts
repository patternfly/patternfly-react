/* eslint-disable camelcase */
import {
  chart_color_black_100,
  chart_color_black_200,
  chart_color_black_300,
  chart_color_black_400,
  chart_color_black_500
} from '@patternfly/react-tokens';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_black_300.value,
  chart_color_black_100.value,
  chart_color_black_500.value,
  chart_color_black_200.value,
  chart_color_black_400.value
];

export const LightGrayColorTheme = ColorTheme({
  COLOR_SCALE
});
