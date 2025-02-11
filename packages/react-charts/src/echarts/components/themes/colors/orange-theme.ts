/* eslint-disable camelcase */
import chart_theme_orange_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_100';
import chart_theme_orange_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_200';
import chart_theme_orange_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_300';
import chart_theme_orange_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_400';
import chart_theme_orange_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_500';
import { ColorTheme } from '../color-theme';
import { getComputedStyleValue } from '../../utils/styles';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_theme_orange_ColorScale_100.var,
  chart_theme_orange_ColorScale_200.var,
  chart_theme_orange_ColorScale_300.var,
  chart_theme_orange_ColorScale_400.var,
  chart_theme_orange_ColorScale_500.var
];

/**
 * Orange color theme
 * @private
 */
export const OrangeColorTheme = ColorTheme({
  COLOR_SCALE
});

/**
 * Computed orange color theme
 * @private
 */
export const getComputedOrangeColorTheme = () =>
  ColorTheme({
    COLOR_SCALE: [
      getComputedStyleValue(chart_theme_orange_ColorScale_100),
      getComputedStyleValue(chart_theme_orange_ColorScale_200),
      getComputedStyleValue(chart_theme_orange_ColorScale_300),
      getComputedStyleValue(chart_theme_orange_ColorScale_400),
      getComputedStyleValue(chart_theme_orange_ColorScale_500)
    ],
    isComputedTheme: true
  });
