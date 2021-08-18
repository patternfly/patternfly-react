/* eslint-disable camelcase */
import chart_color_green_100 from '@patternfly/react-tokens/dist/esm/chart_color_green_100';
import chart_color_green_200 from '@patternfly/react-tokens/dist/esm/chart_color_green_200';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_green_400 from '@patternfly/react-tokens/dist/esm/chart_color_green_400';
import chart_color_green_500 from '@patternfly/react-tokens/dist/esm/chart_color_green_500';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_green_300.value,
  chart_color_green_100.value,
  chart_color_green_500.value,
  chart_color_green_200.value,
  chart_color_green_400.value
];

export const DarkGreenColorTheme = ColorTheme({
  COLOR_SCALE
});
