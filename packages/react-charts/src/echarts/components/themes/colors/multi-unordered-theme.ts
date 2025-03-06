/* eslint-disable camelcase */
import chart_theme_multi_color_unordered_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_100';
import chart_theme_multi_color_unordered_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_200';
import chart_theme_multi_color_unordered_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_300';
import chart_theme_multi_color_unordered_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_400';
import chart_theme_multi_color_unordered_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_500';
import chart_theme_multi_color_unordered_ColorScale_600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_600';
import chart_theme_multi_color_unordered_ColorScale_700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_700';
import chart_theme_multi_color_unordered_ColorScale_800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_800';
import chart_theme_multi_color_unordered_ColorScale_900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_900';
import chart_theme_multi_color_unordered_ColorScale_1000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1000';
import chart_theme_multi_color_unordered_ColorScale_1100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1100';
import chart_theme_multi_color_unordered_ColorScale_1200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1200';
import chart_theme_multi_color_unordered_ColorScale_1300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1300';
import chart_theme_multi_color_unordered_ColorScale_1400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1400';
import chart_theme_multi_color_unordered_ColorScale_1500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1500';
import chart_theme_multi_color_unordered_ColorScale_1600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1600';
import chart_theme_multi_color_unordered_ColorScale_1700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1700';
import chart_theme_multi_color_unordered_ColorScale_1800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1800';
import chart_theme_multi_color_unordered_ColorScale_1900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_1900';
import chart_theme_multi_color_unordered_ColorScale_2000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2000';
import chart_theme_multi_color_unordered_ColorScale_2100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2100';
import chart_theme_multi_color_unordered_ColorScale_2200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2200';
import chart_theme_multi_color_unordered_ColorScale_2300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2300';
import chart_theme_multi_color_unordered_ColorScale_2400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2400';
import chart_theme_multi_color_unordered_ColorScale_2500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2500';
import chart_theme_multi_color_unordered_ColorScale_2600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2600';
import chart_theme_multi_color_unordered_ColorScale_2700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2700';
import chart_theme_multi_color_unordered_ColorScale_2800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2800';
import chart_theme_multi_color_unordered_ColorScale_2900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_2900';
import chart_theme_multi_color_unordered_ColorScale_3000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_3000';
import chart_theme_multi_color_unordered_ColorScale_3100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_3100';
import chart_theme_multi_color_unordered_ColorScale_3200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_3200';
import chart_theme_multi_color_unordered_ColorScale_3300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_3300';
import chart_theme_multi_color_unordered_ColorScale_3400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_3400';
import chart_theme_multi_color_unordered_ColorScale_3500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_unordered_ColorScale_3500';
import { ColorTheme } from '../color-theme';
import { getComputedStyleValue } from '../../utils/styles';

/**
 * Multi-color unordered theme -- see https://github.com/patternfly/patternfly-next/issues/1551
 *
 * @private Not intended as public API and subject to change
 */
export const getMultiColorUnorderedTheme = () =>
  ColorTheme({
    // The color order below improves the color contrast in unordered charts; area & line
    COLOR_SCALE: [
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_100),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_200),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_300),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_400),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_500),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_600),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_700),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_800),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_900),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1000),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1100),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1200),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1300),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1400),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1500),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1600),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1700),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1800),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_1900),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2000),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2100),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2200),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2300),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2400),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2500),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2600),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2700),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2800),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_2900),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_3000),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_3100),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_3200),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_3300),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_3400),
      getComputedStyleValue(chart_theme_multi_color_unordered_ColorScale_3500)
    ]
  });
