/* eslint-disable camelcase */
import chart_color_black_100 from '@patternfly/react-tokens/dist/esm/chart_color_black_100';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_black_300 from '@patternfly/react-tokens/dist/esm/chart_color_black_300';
import chart_color_black_400 from '@patternfly/react-tokens/dist/esm/chart_color_black_400';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_black_300.var,
  chart_color_black_100.var,
  chart_color_black_500.var,
  chart_color_black_200.var,
  chart_color_black_400.var
];

export const LightGrayColorTheme = ColorTheme({
  COLOR_SCALE
});
