/* eslint-disable camelcase */
import chart_color_blue_100 from '@patternfly/react-tokens/dist/esm/chart_color_blue_100';
import chart_color_blue_200 from '@patternfly/react-tokens/dist/esm/chart_color_blue_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_blue_400 from '@patternfly/react-tokens/dist/esm/chart_color_blue_400';
import chart_color_blue_500 from '@patternfly/react-tokens/dist/esm/chart_color_blue_500';
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

export const DarkBlueColorTheme = ColorTheme({
  COLOR_SCALE
});
