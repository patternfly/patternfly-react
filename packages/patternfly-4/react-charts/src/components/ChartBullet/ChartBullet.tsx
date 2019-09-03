import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  DataGetterPropType,
  DomainPropType,
  PaddingProps,
  VictoryChart,
} from 'victory';
import { ChartAxis } from '../ChartAxis';
import {
  ChartBulletComparativeErrorMeasure,
  getComparativeErrorMeasureData
} from './ChartBulletComparativeErrorMeasure';
import {
  ChartBulletComparativeWarningMeasure,
  getComparativeWarningMeasureData
} from './ChartBulletComparativeWarningMeasure';
import { ChartBulletGroupTitle } from './ChartBulletGroupTitle';
import { ChartBulletPrimaryDotMeasure, getPrimaryDotMeasureData } from './ChartBulletPrimaryDotMeasure';
import {
  ChartBulletPrimarySegmentedMeasure,
  getPrimarySegmentedMeasureData
} from './ChartBulletPrimarySegmentedMeasure';
import { ChartBulletQualitativeRange, getQualitativeRangeData } from './ChartBulletQualitativeRange';
import { ChartBulletTitle } from './ChartBulletTitle';
import { ChartContainer } from '../ChartContainer';
import { ChartLegend, ChartLegendOrientation, ChartLegendPosition, ChartLegendWrapper } from '../ChartLegend';
import { ChartBulletStyles, ChartThemeDefinition } from '../ChartTheme';
import { ChartDomain, getBulletTheme, getDomains, getPaddingForSide } from '../ChartUtils';

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartBulletProps {
  /**
   * The ariaDesc prop specifies the description of the chart/SVG to assist with
   * accessibility for screen readers.
   *
   * Note: Overridden by the desc prop of containerComponent
   */
  ariaDesc?: string;
  /**
   * The ariaTitle prop specifies the title to be applied to the SVG to assist
   * accessibility for screen readers.
   *
   * Note: Overridden by the title prop of containerComponent
   */
  ariaTitle?: string;
  /**
   * The axis component to render with the chart
   */
  axisComponent?: React.ReactElement<any>;
  /**
   * Specifies the height of the bullet chart. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than bulletHeight (the bullet size)
   * in order to accommodate the extra legend.
   *
   * By default, bulletHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, bulletHeight (not height) may need to be set in order to adjust the bullet
   * height.
   */
  bulletHeight?: number;
  /**
   * Specifies the width of the bullet chart. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, width (the overall SVG width) may need to be larger than bulletWidth (the bullet size)
   * in order to accommodate the extra legend.
   *
   * By default, bulletWidth is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, bulletWidth (not width) may need to be set in order to adjust the bullet width.
   */
  bulletWidth?: number;
  /**
   * The comparative measure error component to render with the chart
   */
  comparativeErrorMeasureComponent?: React.ReactElement<any>;
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),
   * but by default, an object with y properties is expected.
   *
   * @example comparativeErrorMeasureData={[{ y: 50 }]}
   */
  comparativeErrorMeasureData?: any[];
  /**
   * The comparativeErrorMeasureDataY prop specifies how to access the Y value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  comparativeErrorMeasureDataY?: DataGetterPropType;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  comparativeErrorMeasureLegendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The comparative measure warning component to render with the chart
   */
  comparativeWarningMeasureComponent?: React.ReactElement<any>;
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),
   * but by default, an object with y properties is expected.
   *
   * @example comparativeWarningMeasureData={[{ y: 50 }]}
   */
  comparativeWarningMeasureData?: any[];
  /**
   * The comparativeWarningMeasureDataY prop specifies how to access the Y value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  comparativeWarningMeasureDataY?: DataGetterPropType;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  comparativeWarningMeasureLegendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The domain prop describes the range of values your chart will include. This prop can be
   * given as a array of the minimum and maximum expected values for your chart,
   * or as an object that specifies separate arrays for x and y.
   * If this prop is not provided, a domain will be calculated from data, or other
   * available information.
   * @example: {x: [0, 2], y: [0, 100]}
   *
   * Note: The x domain is expected to be `x: [0, 2]` in order to position all measures properly
   */
  domain?: DomainPropType;
  /**
   * The group title component to render for grouped bullets
   */
  groupTitleComponent?: React.ReactElement<any>;
  /**
   * The subtitle to render for grouped bullets
   */
  groupSubTitle?: string;
  /**
   * The title to render for grouped bullets
   */
  groupTitle?: string;
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than bulletHeight (the bullet
   * size) in order to accommodate the extra legend.
   *
   * By default, bulletHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, bulletHeight (not height) may need to be set in order to adjust the bullet height.
   *
   * Typically, the parent container is set to the same width in order to maintain the aspect ratio.
   */
  height?: number;
  /**
   * The horizontal prop determines whether data will be plotted horizontally. When this prop is set to true, the
   * independent variable will be plotted on the y axis and the dependent variable will be plotted on the x axis.
   */
  horizontal?: boolean;
  /**
   * Invert the color scales used to represent primary measures and qualitative ranges.
   */
  invert?: boolean;
  /**
   * When a labels prop is provided to ChartVoronoiContainer it will render a label component
   * rather than activating labels on the child components it renders. This is useful for
   * creating multi- point tooltips. This prop should be given as a function which will be called
   * once for each active point. The labels function will be called with the arguments point,
   * index, and points, where point refers to a single active point, index refers to the position
   * of that point in the array of active points, and points is an array of all active points.
   */
  labels?: (point: any, index: number, points: any[]) => string;
  /**
   * The legend component to render with chart.
   *
   * Note: Use legend*Data so the legend width can be calculated and positioned properly.
   * Default legend properties may be applied
   */
  legendComponent?: React.ReactElement<any>;
  /**
   * The legendItemsPerRow prop determines how many items to render in each row
   * of a horizontal legend, or in each column of a vertical legend. This
   * prop should be given as an integer. When this prop is not given,
   * legend items will be rendered in a single row or column.
   */
  legendItemsPerRow?: number;
  /**
   * The orientation prop takes a string that defines whether legend data
   * are displayed in a row or column. When orientation is "horizontal",
   * legend items will be displayed in a single row. When orientation is
   * "vertical", legend items will be displayed in a single column. Line
   * and text-wrapping is not currently supported, so "vertical"
   * orientation is both the default setting and recommended for
   * displaying many series of data.
   */
  legendOrientation?: 'horizontal' | 'vertical';
  /**
   * The legend position relation to the chart. Valid values are 'bottom', 'bottom-left', and 'right'
   */
  legendPosition?: 'bottom' | 'bottom-left' | 'right';
  /**
   * The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum
   * domain of a chart is static, while the minimum value depends on data or other variable information. If the domain
   * prop is set in addition to maximumDomain, domain will be used.
   *
   * note: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the
   * dependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to
   * the y axis.
   *
   * examples:
   *
   * maxDomain={0}
   * maxDomain={{ y: 0 }}
   *
   * Note: The x domain is expected to be `x: 2` in order to position all measures properly
   */
  maxDomain?: number | { x?: number, y?: number };
  /**
   * The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum
   * domain of a chart is static, while the maximum value depends on data or other variable information. If the domain
   * prop is set in addition to minimumDomain, domain will be used.
   *
   * note: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the
   * dependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to
   * the y axis.
   *
   * examples:
   *
   * minDomain={0}
   * minDomain={{ y: 0 }}
   *
   * Note: The x domain is expected to be `x: 0` in order to position all measures properly
   */
  minDomain?: number | { x?: number, y?: number };
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   *
   * Note: The underlying bullet chart is a different size than height and width. For a horizontal chart, left and right
   * padding may need to be applied at (approx) 2 to 1 scale.
   */
  padding?: PaddingProps;
  /**
   * The primary dot measure component to render with the chart
   */
  primaryDotMeasureComponent?: React.ReactElement<any>;
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),
   * but by default, an object with y properties is expected.
   *
   * @example primaryDotMeasureData={[{ y: 50 }]}
   */
  primaryDotMeasureData?: any[];
  /**
   * The primaryDotMeasureDataY prop specifies how to access the Y value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  primaryDotMeasureDataY?: DataGetterPropType;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  primaryDotMeasureLegendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The primary segmented measure component to render with the chart
   */
  primarySegmentedMeasureComponent?: React.ReactElement<any>;
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),
   * but by default, an object with y properties is expected.
   *
   * @example primarySegmentedMeasureData={[{ y: 50 }]}
   */
  primarySegmentedMeasureData?: any[];
  /**
   * The primarySegmentedMeasureDataY prop specifies how to access the Y value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  primarySegmentedMeasureDataY?: DataGetterPropType;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  primarySegmentedMeasureLegendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The qualitative range component to render with the chart
   */
  qualitativeRangeComponent?: React.ReactElement<any>;
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),
   * but by default, an object with y properties is expected.
   *
   * @example qualitativeRangeData={[{ y: 50 }]}
   */
  qualitativeRangeData?: any[];
  /**
   * The qualitativeRangeDataY prop specifies how to access the Y value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  qualitativeRangeDataY?: DataGetterPropType;
  /**
   * Use qualitativeRangeDataY0 data accessor prop to determine how the component defines the baseline y0 data.
   * This prop is useful for defining custom baselines for components like ChartBar.
   * This prop may be given in a variety of formats.
   * @example 'last_quarter_profit', () => 10, 1, 'employees.salary', ["employees", "salary"]
   */
  qualitativeRangeDataY0?: DataGetterPropType;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  qualitativeRangeLegendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose Chart with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The subtitle for the chart
   */
  subTitle?: string;
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
   */
  theme?: ChartThemeDefinition;
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor?: string;
  /**
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant?: string;
  /**
   * The title for the chart
   */
  title?: string;
  /**
   * The label component to render the chart title.
   */
  titleComponent?: React.ReactElement<any>;
  /**
   * The title position relation to the chart. Valid values are 'left', and 'top-left'
   *
   * Note: These properties are only valid for horizontal layouts
   */
  titlePosition?: 'left' | 'top-left';
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Typically, the parent container is set to the same width in order to maintain the aspect ratio.
   */
  width?: number;
}

interface ChartBulletDomainInterface {
  comparativeErrorMeasureComponent?: React.ReactElement<any>;
  comparativeErrorMeasureData?: any[];
  comparativeWarningMeasureComponent?: React.ReactElement<any>;
  comparativeWarningMeasureData?: any[];
  primaryDotMeasureComponent?: React.ReactElement<any>;
  primaryDotMeasureData?: any[];
  primarySegmentedMeasureComponent?: React.ReactElement<any>;
  primarySegmentedMeasureData?: any[];
  maxDomain?: any;
  minDomain?: any;
  qualitativeRangeComponent?: React.ReactElement<any>;
  qualitativeRangeData?: any[];
}

interface ChartBulletThemeInterface {
  comparativeErrorMeasureData?: any[];
  comparativeErrorMeasureLegendData?: any[];
  comparativeWarningMeasureData?: any[];
  comparativeWarningMeasureLegendData?: any[];
  invert?: boolean;
  primaryDotMeasureData?: any[];
  primaryDotMeasureLegendData?: any[];
  primarySegmentedMeasureData?: any[];
  primarySegmentedMeasureLegendData?: any[];
  qualitativeRangeData?: any[];
  qualitativeRangeLegendData?: any[];
  themeColor?: string;
  themeVariant?: string;
}

// Returns the min and max domain for comparative / primary measures and qualitative range data
const getDomain = ({
  comparativeErrorMeasureComponent,
  comparativeErrorMeasureData,
  comparativeWarningMeasureComponent,
  comparativeWarningMeasureData,
  primaryDotMeasureComponent,
  primaryDotMeasureData,
  primarySegmentedMeasureComponent,
  primarySegmentedMeasureData,
  maxDomain,
  minDomain,
  qualitativeRangeComponent,
  qualitativeRangeData
}: ChartBulletDomainInterface): ChartDomain => {
  const domain = getDomains({
    maxDomain,
    minDomain,
    sources: [{
      component: comparativeErrorMeasureComponent,
      data: comparativeErrorMeasureData
    }, {
      component: comparativeWarningMeasureComponent,
      data: comparativeWarningMeasureData
    }, {
      component: primaryDotMeasureComponent,
      data: primaryDotMeasureData
    }, {
      component: primarySegmentedMeasureComponent,
      data: primarySegmentedMeasureData
    }, {
      component: qualitativeRangeComponent,
      data: qualitativeRangeData
    }]
  });
  domain.x = [0, 2];
  return domain;
};

const getTheme = ({
  comparativeErrorMeasureData,
  comparativeErrorMeasureLegendData,
  comparativeWarningMeasureData,
  comparativeWarningMeasureLegendData,
  invert,
  primaryDotMeasureData,
  primaryDotMeasureLegendData,
  primarySegmentedMeasureData,
  primarySegmentedMeasureLegendData,
  qualitativeRangeData,
  qualitativeRangeLegendData,
  themeColor,
  themeVariant
}: ChartBulletThemeInterface): ChartThemeDefinition => {
  const colorScale: any[] = [];
  if (primaryDotMeasureLegendData && primaryDotMeasureLegendData.length) {
    const computedData = getPrimaryDotMeasureData({
      data: primaryDotMeasureData,
      invert
    });
    primaryDotMeasureLegendData.forEach((data: any, index: number) => {
      for (let i = 0; i < computedData.length; i++) {
        if (index === computedData[i]._index) {
          colorScale.push(computedData[i]._color);
        }
      }
    });
  }
  if (primarySegmentedMeasureLegendData && primarySegmentedMeasureLegendData.length) {
    const computedData = getPrimarySegmentedMeasureData({
      data: primarySegmentedMeasureData,
      invert,
      themeColor,
      themeVariant
    });
    primarySegmentedMeasureLegendData.forEach((data: any, index: number) => {
      for (let i = 0; i < computedData.length; i++) {
        if (index === computedData[i]._index) {
          colorScale.push(computedData[i]._color);
        }
      }
    });
  }
  if (comparativeWarningMeasureLegendData && comparativeWarningMeasureLegendData.length) {
    const computedData = getComparativeWarningMeasureData({
      data: comparativeWarningMeasureData,
      invert,
      themeColor,
      themeVariant
    });
    comparativeWarningMeasureLegendData.forEach((data: any, index: number) => {
      for (let i = 0; i < computedData.length; i++) {
        if (index === computedData[i]._index) {
          colorScale.push(computedData[i]._color);
        }
      }
    });
  }
  if (comparativeErrorMeasureLegendData && comparativeErrorMeasureLegendData.length) {
    const computedData = getComparativeErrorMeasureData({
      data: comparativeErrorMeasureData,
      invert,
      themeColor,
      themeVariant
    });
    comparativeErrorMeasureLegendData.forEach((data: any, index: number) => {
      for (let i = 0; i < computedData.length; i++) {
        if (index === computedData[i]._index) {
          colorScale.push(computedData[i]._color);
        }
      }
    });
  }
  if (qualitativeRangeLegendData && qualitativeRangeLegendData.length) {
    const computedData = getQualitativeRangeData({
      data: qualitativeRangeData,
      invert
    });
    qualitativeRangeLegendData.forEach((data: any, index: number) => {
      for (let i = 0; i < computedData.length; i++) {
        if (index === computedData[i]._index) {
          colorScale.push(computedData[i]._color);
        }
      }
    });
  }
  const theme = getBulletTheme(themeColor, themeVariant);
  theme.legend.colorScale = [...colorScale];
  return theme;
};

let currentId = 0;

// Instead of displaying labels and legends via the Chart component, we're using a fixed bar width. Otherwise, the
// Chart component would change scale when padding is applied, resulting in misaligned components.
export const ChartBullet: React.FunctionComponent<ChartBulletProps> = ({
  ariaDesc,
  ariaTitle,
  axisComponent = <ChartAxis />,
  comparativeErrorMeasureComponent = <ChartBulletComparativeErrorMeasure />,
  comparativeErrorMeasureData,
  comparativeErrorMeasureDataY,
  comparativeErrorMeasureLegendData,
  comparativeWarningMeasureComponent = <ChartBulletComparativeWarningMeasure />,
  comparativeWarningMeasureData,
  comparativeWarningMeasureDataY,
  comparativeWarningMeasureLegendData,
  groupTitleComponent = <ChartBulletGroupTitle />,
  groupSubTitle,
  groupTitle,
  horizontal = true,
  invert = false,
  labels,
  legendComponent = <ChartLegend />,
  legendItemsPerRow,
  legendPosition = 'bottom' as ChartLegendPosition,
  maxDomain,
  minDomain,
  padding,
  primaryDotMeasureComponent = <ChartBulletPrimaryDotMeasure />,
  primaryDotMeasureData,
  primaryDotMeasureDataY,
  primaryDotMeasureLegendData,
  primarySegmentedMeasureComponent = <ChartBulletPrimarySegmentedMeasure />,
  primarySegmentedMeasureData,
  primarySegmentedMeasureDataY,
  primarySegmentedMeasureLegendData,
  qualitativeRangeComponent = <ChartBulletQualitativeRange />,
  qualitativeRangeData,
  qualitativeRangeDataY,
  qualitativeRangeDataY0,
  qualitativeRangeLegendData,
  standalone = true,
  subTitle,
  themeColor,
  themeVariant,
  title,
  titleComponent = <ChartBulletTitle />,
  titlePosition,

  // destructure last
  theme = getTheme({
    comparativeErrorMeasureData,
    comparativeErrorMeasureLegendData,
    comparativeWarningMeasureData,
    comparativeWarningMeasureLegendData,
    invert,
    primaryDotMeasureData,
    primaryDotMeasureLegendData,
    primarySegmentedMeasureData,
    primarySegmentedMeasureLegendData,
    qualitativeRangeData,
    qualitativeRangeLegendData,
    themeColor,
    themeVariant
  }),
  domain = getDomain({
    comparativeErrorMeasureComponent,
    comparativeErrorMeasureData,
    comparativeWarningMeasureComponent,
    comparativeWarningMeasureData,
    maxDomain,
    minDomain,
    primaryDotMeasureComponent,
    primaryDotMeasureData,
    primarySegmentedMeasureComponent,
    primarySegmentedMeasureData,
    qualitativeRangeComponent,
    qualitativeRangeData
  }),
  legendOrientation = theme.legend.orientation as ChartLegendOrientation,
  height = horizontal ? theme.chart.height : theme.chart.width,
  width = horizontal ? theme.chart.width : theme.chart.height,
  bulletHeight = horizontal ? theme.chart.height : height,
  bulletWidth = horizontal ? width : theme.chart.height,
  ...rest
}: ChartBulletProps) => {
  const defaultPadding = {
    bottom: getPaddingForSide('bottom',  padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding),
  };

  // Bullet group title
  const bulletGroupTitle = React.cloneElement(groupTitleComponent, {
    height,
    standalone: false,
    subTitle: groupSubTitle,
    title: groupTitle,
    width,
    ...groupTitleComponent.props
  });

  // Bullet title
  const bulletTitle = React.cloneElement(titleComponent, {
    bulletHeight,
    bulletWidth,
    height,
    horizontal,
    legendPosition,
    padding,
    standalone: false,
    subTitle,
    theme,
    title,
    titlePosition,
    width,
    ...titleComponent.props
  });

  // Comparative error measure
  const comparativeErrorMeasure = React.cloneElement(comparativeErrorMeasureComponent, {
    data: comparativeErrorMeasureData,
    domain,
    height: bulletHeight,
    horizontal,
    labels,
    padding,
    standalone: false,
    width: bulletWidth,
    y: comparativeErrorMeasureDataY,
    ...comparativeErrorMeasureComponent.props
  });

  // Comparative warning measure
  const comparativeWarningMeasure = React.cloneElement(comparativeWarningMeasureComponent, {
    data: comparativeWarningMeasureData,
    domain,
    height: bulletHeight,
    horizontal,
    labels,
    padding,
    standalone: false,
    width: bulletWidth,
    y: comparativeWarningMeasureDataY,
    ...comparativeWarningMeasureComponent.props
  });

  // Legend
  const legend = React.cloneElement(legendComponent, {
    data: [
      ...(primaryDotMeasureLegendData ? primaryDotMeasureLegendData : []),
      ...(primarySegmentedMeasureLegendData ? primarySegmentedMeasureLegendData : []),
      ...(comparativeWarningMeasureLegendData ? comparativeWarningMeasureLegendData : []),
      ...(comparativeErrorMeasureLegendData ? comparativeErrorMeasureLegendData : []),
      ...(qualitativeRangeLegendData ? qualitativeRangeLegendData : [])
    ],
    itemsPerRow: legendItemsPerRow,
    orientation: legendOrientation,
    position: legendPosition,
    theme,
    ...legendComponent.props
  });

  // Primary dot measure
  const primaryDotMeasure = React.cloneElement(primaryDotMeasureComponent, {
    data: primaryDotMeasureData,
    domain,
    height: bulletHeight,
    horizontal,
    invert,
    labels,
    padding,
    standalone: false,
    themeColor,
    themeVariant,
    width: bulletWidth,
    y: primaryDotMeasureDataY,
    ...primaryDotMeasureComponent.props
  });

  // Primary segmented measure
  const primarySegmentedMeasure = React.cloneElement(primarySegmentedMeasureComponent, {
    data: primarySegmentedMeasureData,
    domain,
    height: bulletHeight,
    horizontal,
    invert,
    labels,
    padding,
    standalone: false,
    themeColor,
    themeVariant,
    width: bulletWidth,
    y: primarySegmentedMeasureDataY,
    ...primarySegmentedMeasureComponent.props
  });

  // Qualitative range
  const qualitativeRange = React.cloneElement(qualitativeRangeComponent, {
    data: qualitativeRangeData,
    domain,
    height: bulletHeight,
    horizontal,
    invert,
    labels,
    padding,
    key: `pf-qualitative-range-${currentId++}`,
    standalone: false,
    width: bulletWidth,
    y: qualitativeRangeDataY,
    y0: qualitativeRangeDataY0,
    ...qualitativeRangeComponent.props
  });

  // Returns tick values -- Victory doesn't include min/max domain
  const getTickValues = (minVal: number, maxVal: number) => {
    const tickValues = [minVal, maxVal];
    let range = 0;
    if (minVal < 0 && maxVal < 0) {
      range = Math.abs(minVal - maxVal);
    } else if (minVal < 0) {
      range = Math.abs(minVal) + maxVal;
    } else {
      range = maxVal - minVal;
    }
    const tickInterval = range / (ChartBulletStyles.axisTickCount - 1);
    for (let i = minVal; i < maxVal;) {
      i += tickInterval;
      tickValues.push(Math.ceil(i));
    }
    return tickValues;
  };

  // Returns a wrapped legend
  const getWrappedLegend = () => {
    if (!legend.props.data) {
      return null;
    }
    let dx = 0;
    let dy = 0;

    // Adjust for padding
    if (legendPosition === ChartLegendPosition.bottom) {
      dy = horizontal
        ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - (defaultPadding.bottom)) - 25
        : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
    } else if (legendPosition === ChartLegendPosition.bottomLeft) {
      dx += defaultPadding.left > 10 ? defaultPadding.left - 10 : defaultPadding.left - 10;
      dy = horizontal
        ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - (defaultPadding.bottom)) - 25
        : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
    } else if (legendPosition === ChartLegendPosition.right) {
      dx = defaultPadding.left;
      dy = -15;
    }
    return (
      <ChartLegendWrapper
        chartHeight={bulletHeight}
        chartWidth={Math.abs(bulletWidth - (defaultPadding.left + defaultPadding.right))}
        dx={dx}
        dy={dy}
        orientation={legendOrientation}
        position={legendPosition}
        svgHeight={height}
        svgWidth={width}
        theme={theme}
      >
        {legend}
      </ChartLegendWrapper>
    );
  };

  // Axis component for custom tick values
  const axis = React.cloneElement(axisComponent, {
    dependentAxis: horizontal ? false : true,
    domain: !horizontal ? domain : {
      x: (domain as any).y,
      y: (domain as any).x
    },
    height: bulletHeight,
    // Adjust for padding
    offsetX: !horizontal ? defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 55)) : 0,
    offsetY: horizontal ? 80 - defaultPadding.top * .5 + (defaultPadding.bottom * .5 - 25) : 0,
    padding,
    standalone: false,
    tickCount: ChartBulletStyles.axisTickCount,
    tickValues: getTickValues((domain as any).y[0], (domain as any).y[1]),
    width: bulletWidth,
    ...axisComponent.props
  });

  const bulletChart = (
    <>
      {axis}
      {bulletGroupTitle}
      {bulletTitle}
      {qualitativeRange}
      {primarySegmentedMeasure}
      {primaryDotMeasure}
      {comparativeErrorMeasure}
      {comparativeWarningMeasure}
      {getWrappedLegend()}
    </>
  );

  return standalone ? (
    <ChartContainer
      desc={ariaDesc}
      height={height}
      title={ariaTitle}
      width={width}
    >
      {bulletChart}
    </ChartContainer>
  ) : (
    <React.Fragment>
      {bulletChart}
    </React.Fragment>
  );
};

hoistNonReactStatics(ChartBullet, VictoryChart);
