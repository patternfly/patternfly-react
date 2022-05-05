/* eslint-disable camelcase */
import chart_theme_blue_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_100';
import chart_theme_blue_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_200';
import chart_theme_blue_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_300';
import chart_theme_blue_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_400';
import chart_theme_blue_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_500';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_theme_blue_ColorScale_100.var2,
  chart_theme_blue_ColorScale_200.var2,
  chart_theme_blue_ColorScale_300.var2,
  chart_theme_blue_ColorScale_400.var2,
  chart_theme_blue_ColorScale_500.var2
];

export const LightBlueColorTheme = ColorTheme({
  COLOR_SCALE
});
