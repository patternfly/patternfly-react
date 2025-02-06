/* eslint-disable camelcase */
import chart_bullet_qualitative_range_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_100';
import chart_bullet_qualitative_range_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_200';
import chart_bullet_qualitative_range_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_300';
import chart_bullet_qualitative_range_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_400';
import chart_bullet_qualitative_range_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_500';
import { ColorTheme } from '../skeleton-theme';
import { getComputedValue } from '../../utils/styles';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  getComputedValue(chart_bullet_qualitative_range_ColorScale_100),
  getComputedValue(chart_bullet_qualitative_range_ColorScale_200),
  getComputedValue(chart_bullet_qualitative_range_ColorScale_300),
  getComputedValue(chart_bullet_qualitative_range_ColorScale_400),
  getComputedValue(chart_bullet_qualitative_range_ColorScale_500)
];

/**
 * Skeleton color theme
 * @private
 * @beta
 */
export const SkeletonColorTheme = ColorTheme({
  COLOR_SCALE
});
