/* eslint-disable camelcase */
import chart_bullet_qualitative_range_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_100';
import chart_bullet_qualitative_range_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_200';
import chart_bullet_qualitative_range_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_300';
import chart_bullet_qualitative_range_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_400';
import chart_bullet_qualitative_range_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_500';
import { ColorTheme } from '../skeleton-theme';
import { getComputedStyleValue } from '../../utils/styles';

/**
 * Skeleton color theme
 *
 * @private Not intended as public API and subject to change
 */
export const getSkeletonColorTheme = () =>
  ColorTheme({
    COLOR_SCALE: [
      getComputedStyleValue(chart_bullet_qualitative_range_ColorScale_100),
      getComputedStyleValue(chart_bullet_qualitative_range_ColorScale_200),
      getComputedStyleValue(chart_bullet_qualitative_range_ColorScale_300),
      getComputedStyleValue(chart_bullet_qualitative_range_ColorScale_400),
      getComputedStyleValue(chart_bullet_qualitative_range_ColorScale_500)
    ]
  });
