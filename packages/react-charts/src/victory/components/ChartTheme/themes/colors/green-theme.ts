import chart_theme_green_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_green_ColorScale_100';
import chart_theme_green_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_green_ColorScale_200';
import chart_theme_green_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_green_ColorScale_300';
import chart_theme_green_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_green_ColorScale_400';
import chart_theme_green_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_green_ColorScale_500';
import { ColorTheme, ColorComponentTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_theme_green_ColorScale_100.var,
  chart_theme_green_ColorScale_200.var,
  chart_theme_green_ColorScale_300.var,
  chart_theme_green_ColorScale_400.var,
  chart_theme_green_ColorScale_500.var
];

/**
 * Green color theme
 *
 * @private Not intended as public API and subject to change
 */
export const GreenColorTheme = ColorTheme({
  COLOR_SCALE
});

/**
 * Green color component theme
 *
 * @private Not intended as public API and subject to change
 */
export const GreenColorComponentTheme = ColorComponentTheme({
  COLOR_SCALE
});
