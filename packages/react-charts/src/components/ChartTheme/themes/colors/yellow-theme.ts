/* eslint-disable camelcase */
import chart_theme_yellow_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_100';
import chart_theme_yellow_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_200';
import chart_theme_yellow_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_300';
import chart_theme_yellow_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_400';
import chart_theme_yellow_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_500';
import { ColorTheme, ColorComponentTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_theme_yellow_ColorScale_100.var,
  chart_theme_yellow_ColorScale_200.var,
  chart_theme_yellow_ColorScale_300.var,
  chart_theme_yellow_ColorScale_400.var,
  chart_theme_yellow_ColorScale_500.var
];

/**
 * Yellow color theme
 * @private
 */
export const YellowColorTheme = ColorTheme({
  COLOR_SCALE
});

/**
 * Yellow color component theme
 * @private
 * @beta
 */
export const YellowColorComponentTheme = ColorComponentTheme({
  COLOR_SCALE
});
