/* eslint-disable camelcase */
import chart_color_purple_100 from '@patternfly/react-tokens/dist/js/chart_color_purple_100';
import chart_color_purple_200 from '@patternfly/react-tokens/dist/js/chart_color_purple_200';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/js/chart_color_purple_300';
import chart_color_purple_400 from '@patternfly/react-tokens/dist/js/chart_color_purple_400';
import chart_color_purple_500 from '@patternfly/react-tokens/dist/js/chart_color_purple_500';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_purple_300.value,
  chart_color_purple_100.value,
  chart_color_purple_500.value,
  chart_color_purple_200.value,
  chart_color_purple_400.value
];

export const DarkPurpleColorTheme = ColorTheme({
  COLOR_SCALE
});
