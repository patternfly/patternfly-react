import chart_skeleton_ColorScale_100 from '@rh-felt/react-tokens/dist/esm/chart_skeleton_ColorScale_100';
import chart_skeleton_ColorScale_200 from '@rh-felt/react-tokens/dist/esm/chart_skeleton_ColorScale_200';
import chart_skeleton_ColorScale_300 from '@rh-felt/react-tokens/dist/esm/chart_skeleton_ColorScale_300';
import chart_skeleton_ColorScale_400 from '@rh-felt/react-tokens/dist/esm/chart_skeleton_ColorScale_400';
import chart_skeleton_ColorScale_500 from '@rh-felt/react-tokens/dist/esm/chart_skeleton_ColorScale_500';
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
      getComputedStyleValue(chart_skeleton_ColorScale_100),
      getComputedStyleValue(chart_skeleton_ColorScale_200),
      getComputedStyleValue(chart_skeleton_ColorScale_300),
      getComputedStyleValue(chart_skeleton_ColorScale_400),
      getComputedStyleValue(chart_skeleton_ColorScale_500)
    ]
  });
