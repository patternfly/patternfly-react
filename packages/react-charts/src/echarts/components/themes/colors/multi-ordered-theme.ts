/* eslint-disable camelcase */
import chart_theme_multi_color_ordered_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_100';
import chart_theme_multi_color_ordered_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_200';
import chart_theme_multi_color_ordered_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_300';
import chart_theme_multi_color_ordered_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_400';
import chart_theme_multi_color_ordered_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_500';
import chart_theme_multi_color_ordered_ColorScale_600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_600';
import chart_theme_multi_color_ordered_ColorScale_700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_700';
import chart_theme_multi_color_ordered_ColorScale_800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_800';
import chart_theme_multi_color_ordered_ColorScale_900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_900';
import chart_theme_multi_color_ordered_ColorScale_1000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1000';
import chart_theme_multi_color_ordered_ColorScale_1100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1100';
import chart_theme_multi_color_ordered_ColorScale_1200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1200';
import chart_theme_multi_color_ordered_ColorScale_1300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1300';
import chart_theme_multi_color_ordered_ColorScale_1400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1400';
import chart_theme_multi_color_ordered_ColorScale_1500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1500';
import chart_theme_multi_color_ordered_ColorScale_1600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1600';
import chart_theme_multi_color_ordered_ColorScale_1700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1700';
import chart_theme_multi_color_ordered_ColorScale_1800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1800';
import chart_theme_multi_color_ordered_ColorScale_1900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1900';
import chart_theme_multi_color_ordered_ColorScale_2000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2000';
import chart_theme_multi_color_ordered_ColorScale_2100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2100';
import chart_theme_multi_color_ordered_ColorScale_2200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2200';
import chart_theme_multi_color_ordered_ColorScale_2300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2300';
import chart_theme_multi_color_ordered_ColorScale_2400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2400';
import chart_theme_multi_color_ordered_ColorScale_2500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2500';
import { ColorTheme } from '../color-theme';
import { getComputedValue } from '../../utils/styles';

// The color order below (minus the purple color family) improves the color contrast in ordered charts; donut, pie, bar, & stack
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_100),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_200),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_300),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_400),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_500),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_600),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_700),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_800),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_900),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1000),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1100),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1200),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1300),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1400),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1500),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1600),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1700),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1800),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_1900),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_2000),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_2100),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_2200),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_2300),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_2400),
  getComputedValue(chart_theme_multi_color_ordered_ColorScale_2500)
];

/**
 * Multi-color ordered theme
 * @private
 */
export const MultiColorOrderedTheme = ColorTheme({
  COLOR_SCALE
});
