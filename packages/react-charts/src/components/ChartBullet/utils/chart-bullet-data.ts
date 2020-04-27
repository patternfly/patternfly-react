import { Data, DataGetterPropType } from 'victory-core';
import { ChartThemeDefinition } from '../../ChartTheme';
import {
  getBulletComparativeErrorMeasureTheme,
  getBulletComparativeMeasureTheme,
  getBulletComparativeWarningMeasureTheme,
  getBulletPrimaryDotMeasureTheme,
  getBulletPrimaryNegativeMeasureTheme,
  getBulletPrimarySegmentedMeasureTheme,
  getBulletQualitativeRangeTheme
} from '../../ChartUtils';

interface ChartBulletDataInterface {
  data?: any[];
  invert?: boolean;
  negativeMeasureTheme?: ChartThemeDefinition;
  theme?: ChartThemeDefinition;
  themeColor?: string;
  themeVariant?: string;
  y?: DataGetterPropType;
  y0?: DataGetterPropType;
}

export const getComparativeMeasureData = ({
  data,
  themeColor,
  themeVariant,

  // destructure last
  theme = getBulletComparativeMeasureTheme(themeColor, themeVariant),
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

export const getComparativeErrorMeasureData = ({
  data,
  themeColor,
  themeVariant,

  // destructure last
  theme = getBulletComparativeErrorMeasureTheme(themeColor, themeVariant),
  y
}: ChartBulletDataInterface) =>
  getComparativeMeasureData({
    data,
    theme,
    themeColor,
    themeVariant,
    y
  });

export const getComparativeWarningMeasureData = ({
  data,
  themeColor,
  themeVariant,

  // destructure last
  theme = getBulletComparativeWarningMeasureTheme(themeColor, themeVariant),
  y
}: ChartBulletDataInterface) =>
  getComparativeMeasureData({
    data,
    theme,
    themeColor,
    themeVariant,
    y
  });

export const getPrimaryDotMeasureData = ({
  data,
  invert,
  themeColor,
  themeVariant,

  // destructure last
  theme = getBulletPrimaryDotMeasureTheme(themeColor, themeVariant),
  y,
  y0
}: ChartBulletDataInterface) =>
  getComparativeMeasureData({
    data,
    invert,
    theme,
    themeColor,
    themeVariant,
    y,
    y0
  });

export const getPrimarySegmentedMeasureData = ({
  data,
  invert,
  themeColor,
  themeVariant,

  // destructure last
  theme = getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant),
  negativeMeasureTheme = getBulletPrimaryNegativeMeasureTheme(themeColor, themeVariant),
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

export const getQualitativeRangeData = ({
  data,
  invert,
  themeColor,
  themeVariant,

  // destructure last
  theme = getBulletQualitativeRangeTheme(themeColor, themeVariant),
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
