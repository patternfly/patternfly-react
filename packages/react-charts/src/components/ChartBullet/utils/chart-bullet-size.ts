import { ChartThemeDefinition } from '../../ChartTheme';
import { ChartBulletStyles } from '../../ChartTheme';
import {
  getBulletComparativeErrorMeasureTheme,
  getBulletComparativeMeasureTheme,
  getBulletComparativeWarningMeasureTheme,
  getBulletPrimaryDotMeasureTheme,
  getBulletPrimarySegmentedMeasureTheme,
  getBulletQualitativeRangeTheme
} from '../../ChartUtils';

interface ChartBulletScaleInterface {
  defaultSize: number; // The default chart size from the theme
  height: number; // The chart height -- not SVG height
  horizontal?: boolean; // Flag indicating chart is shown horizontally
  scale?: number; // The scale factor to reduce / increase the bar width
  value: number; // The bar height or scatter size from the theme
  width: number; // The chart width -- not SVG width
}

const scaleDimensions = ({
  defaultSize,
  height,
  horizontal = true,
  scale = 1,
  value,
  width
}: ChartBulletScaleInterface) => {
  if (horizontal && height > defaultSize) {
    return value + (height - defaultSize) * scale;
  } else if (horizontal) {
    return value - (defaultSize - height) * scale;
  } else if (width > defaultSize) {
    return value + (width - defaultSize) * scale;
  }
  return value - (defaultSize - width) * scale;
};

// Scale bar width per the given size properties
export const scaleBarWidth = (props: ChartBulletScaleInterface) => Math.max(scaleDimensions(props), 0);

// Scale size per the given size properties
export const scaleSize = ({ value, ...rest }: ChartBulletScaleInterface) =>
  Math.round(
    scaleDimensions({
      scale: 1 / value,
      value,
      ...rest
    })
  );

interface ChartBulletSizeInterface {
  height: number; // The chart height -- not SVG height
  horizontal?: boolean; // Flag indicating chart is shown horizontally
  theme?: ChartThemeDefinition;
  themeColor?: string;
  themeVariant?: string;
  width: number; // The chart width -- not SVG width
}

export const getComparativeMeasureErrorWidth = ({
  height,
  horizontal,
  themeColor,
  width,

  // destructure last
  theme = getBulletComparativeErrorMeasureTheme(themeColor)
}: ChartBulletSizeInterface) =>
  scaleBarWidth({
    defaultSize: theme.bar.height,
    height,
    horizontal,
    value: ChartBulletStyles.comparativeMeasureErrorWidth,
    width
  });

export const getComparativeMeasureWidth = ({
  height,
  horizontal,
  themeColor,
  width,

  // destructure last
  theme = getBulletComparativeMeasureTheme(themeColor)
}: ChartBulletSizeInterface) =>
  scaleBarWidth({
    defaultSize: theme.bar.height,
    height,
    horizontal,
    value: ChartBulletStyles.comparativeMeasureWidth,
    width
  });

export const getComparativeMeasureWarningWidth = ({
  height,
  horizontal,
  themeColor,
  width,

  // destructure last
  theme = getBulletComparativeWarningMeasureTheme(themeColor)
}: ChartBulletSizeInterface) =>
  scaleBarWidth({
    defaultSize: theme.bar.height,
    height,
    horizontal,
    value: ChartBulletStyles.comparativeMeasureWarningWidth,
    width
  });

export const getPrimaryDotMeasureSize = ({
  height,
  horizontal,
  themeColor,
  width,

  // destructure last
  theme = getBulletPrimaryDotMeasureTheme(themeColor)
}: ChartBulletSizeInterface) =>
  scaleSize({
    defaultSize: theme.group.height,
    height,
    horizontal,
    value: ChartBulletStyles.primaryDotMeasureSize,
    width
  });

export const getPrimarySegmentedMeasureWidth = ({
  height,
  horizontal,
  themeColor,
  width,

  // destructure last
  theme = getBulletPrimarySegmentedMeasureTheme(themeColor)
}: ChartBulletSizeInterface) =>
  scaleBarWidth({
    defaultSize: theme.group.height,
    height,
    horizontal,
    scale: 0.3,
    value: ChartBulletStyles.primarySegmentedMeasureWidth,
    width
  });

export const getQualitativeRangeBarWidth = ({
  height,
  horizontal,
  themeColor,
  width,

  // destructure last
  theme = getBulletQualitativeRangeTheme(themeColor)
}: ChartBulletSizeInterface) =>
  scaleBarWidth({
    defaultSize: theme.group.height,
    height,
    horizontal,
    value: ChartBulletStyles.qualitativeRangeWidth,
    width
  });
