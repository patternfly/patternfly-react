import { Data, DataGetterPropType } from 'victory-core';
import { ChartThemeDefinition } from '../../ChartTheme/ChartTheme';
import {
  getBulletComparativeErrorMeasureTheme,
  getBulletComparativeMeasureTheme,
  getBulletComparativeWarningMeasureTheme,
  getBulletPrimaryDotMeasureTheme,
  getBulletPrimaryNegativeMeasureTheme,
  getBulletPrimarySegmentedMeasureTheme,
  getBulletQualitativeRangeTheme
} from '../../ChartUtils/chart-theme-types';

interface ChartBulletDataInterface {
  data?: any[];
  invert?: boolean;
  negativeMeasureTheme?: ChartThemeDefinition;
  theme?: ChartThemeDefinition;
  themeColor?: string;
  y?: DataGetterPropType;
  y0?: DataGetterPropType;
}

/**
 * Returns comparative measure data
 * @private
 */
export const getComparativeMeasureData = ({
  data,
  themeColor,

  // destructure last
  theme = getBulletComparativeMeasureTheme(themeColor),
  y
}: ChartBulletDataInterface) => {
  const datum: any[] = [];

  Data.formatData(data, { y }, ['y']).forEach((dataPoint: any, index: number) => {
    datum.push({
      ...dataPoint,
      _index: index // Save to sync legend color
    });
  });

  const computedData = datum.map((dataPoint: any) => ({
    ...dataPoint,
    x: 1,
    _x: 1,
    y0: dataPoint._y,
    _y0: dataPoint._y,
    _color: theme.bar.style.data.fill // Save to sync legend color
  }));
  return computedData;
};

/**
 * Returns comparative error measure data
 * @private
 */
export const getComparativeErrorMeasureData = ({
  data,
  themeColor,

  // destructure last
  theme = getBulletComparativeErrorMeasureTheme(themeColor),
  y
}: ChartBulletDataInterface) =>
  getComparativeMeasureData({
    data,
    theme,
    themeColor,
    y
  });

/**
 * Returns comparative warning data
 * @private
 */
export const getComparativeWarningMeasureData = ({
  data,
  themeColor,

  // destructure last
  theme = getBulletComparativeWarningMeasureTheme(themeColor),
  y
}: ChartBulletDataInterface) =>
  getComparativeMeasureData({
    data,
    theme,
    themeColor,
    y
  });

/**
 * Returns primary dot measure data
 * @private
 */
export const getPrimaryDotMeasureData = ({
  data,
  invert,
  themeColor,

  // destructure last
  theme = getBulletPrimaryDotMeasureTheme(themeColor),
  y,
  y0
}: ChartBulletDataInterface) =>
  getComparativeMeasureData({
    data,
    invert,
    theme,
    themeColor,
    y,
    y0
  });

/**
 * Returns primary segment measure data
 * @private
 */
export const getPrimarySegmentedMeasureData = ({
  data,
  invert,
  themeColor,

  // destructure last
  theme = getBulletPrimarySegmentedMeasureTheme(themeColor),
  negativeMeasureTheme = getBulletPrimaryNegativeMeasureTheme(themeColor),
  y,
  y0
}: ChartBulletDataInterface) => {
  const negativeDatum: any[] = [];
  const positiveDatum: any[] = [];

  Data.formatData(data, { y, y0 }, ['y', 'y0']).forEach((dataPoint: any, index: number) => {
    if (dataPoint._y < 0) {
      negativeDatum.push({
        ...dataPoint,
        _index: index // Save to sync legend color
      });
    } else {
      positiveDatum.push({
        ...dataPoint,
        _index: index // Save to sync legend color
      });
    }
  });

  // Instead of relying on colorScale, colors must be added to each measure in ascending order
  const negativeComputedData = negativeDatum
    .sort((a: any, b: any) => b._y - a._y)
    .map(
      (dataPoint: any, index: number) => ({
        ...dataPoint,
        x: 1,
        _x: 1,
        _color: invert
          ? theme.group.colorScale[index % theme.group.colorScale.length]
          : negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length]
      })
      // Sort descending so largest bar is appears behind others
    )
    .reverse();

  // Instead of relying on colorScale, colors must be added to each measure in ascending order
  const positiveComputedData = positiveDatum
    .sort((a: any, b: any) => a._y - b._y)
    .map(
      (dataPoint: any, index: number) => ({
        ...dataPoint,
        x: 1,
        _x: 1,
        _color: invert
          ? negativeMeasureTheme.group.colorScale[index % theme.group.colorScale.length]
          : theme.group.colorScale[index % theme.group.colorScale.length]
      })
      // Sort descending so largest bar is appears behind others
    )
    .reverse();

  return [...negativeComputedData, ...positiveComputedData];
};

/**
 * Returns qualitative range data
 * @private
 */
export const getQualitativeRangeData = ({
  data,
  invert,
  themeColor,

  // destructure last
  theme = getBulletQualitativeRangeTheme(themeColor),
  y,
  y0
}: ChartBulletDataInterface) => {
  const datum: any[] = [];

  Data.formatData(data, { y, y0 }, ['y', 'y0']).forEach((dataPoint: any, index: number) => {
    datum.push({
      ...dataPoint,
      _index: index // Save to sync legend color
    });
  });

  const computedData = datum
    .sort((a: any, b: any) => (invert ? b._y - a._y : a._y - b._y))
    .map(
      (dataPoint: any, index: number) => ({
        ...dataPoint,
        x: 1,
        _x: 1,
        // Instead of relying on colorScale, colors must be added to each measure in ascending order
        _color: theme.group.colorScale[index % theme.group.colorScale.length]
      })
      // Sort descending so largest bar is appears behind others
    )
    .reverse();

  return computedData;
};
