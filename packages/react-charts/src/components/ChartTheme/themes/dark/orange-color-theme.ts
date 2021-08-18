/* eslint-disable camelcase */
import chart_color_orange_100 from '@patternfly/react-tokens/dist/esm/chart_color_orange_100';
import chart_color_orange_200 from '@patternfly/react-tokens/dist/esm/chart_color_orange_200';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import chart_color_orange_400 from '@patternfly/react-tokens/dist/esm/chart_color_orange_400';
import chart_color_orange_500 from '@patternfly/react-tokens/dist/esm/chart_color_orange_500';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_orange_300.value,
  chart_color_orange_100.value,
  chart_color_orange_500.value,
  chart_color_orange_200.value,
  chart_color_orange_400.value
];

export const DarkOrangeColorTheme = ColorTheme({
  COLOR_SCALE
});
