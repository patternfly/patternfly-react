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
import { getComputedStyleValue } from '../../utils/styles';

/**
 * Multi-color ordered theme -- see https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
 *
 * @private Not intended as public API and subject to change
 */
export const getMultiColorOrderedTheme = () =>
  ColorTheme({
    // The color order below (minus the purple color family) improves the color contrast in ordered charts; donut, pie, bar, & stack
    COLOR_SCALE: [
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_100),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_200),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_300),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_400),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_500),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_600),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_700),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_800),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_900),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1000),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1100),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1200),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1300),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1400),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1500),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1600),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1700),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1800),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_1900),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_2000),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_2100),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_2200),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_2300),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_2400),
      getComputedStyleValue(chart_theme_multi_color_ordered_ColorScale_2500)
    ]
  });
