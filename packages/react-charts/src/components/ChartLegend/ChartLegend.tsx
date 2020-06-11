import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  BlockProps,
  ColorScalePropType,
  EventCallbackInterface,
  EventPropTypeInterface,
  OrientationTypes,
  PaddingProps,
  StringOrNumberOrCallback,
  StringOrNumberOrList,
  VictoryStyleInterface,
  VictoryStyleObject
} from 'victory-core';
import {
  VictoryLegend,
  VictoryLegendProps,
  VictoryLegendOrientationType,
  VictoryLegendTTargetType
} from 'victory-legend';
import { ChartContainer } from '../ChartContainer';
import { ChartLabel } from '../ChartLabel';
import { ChartPoint } from '../ChartPoint';
import { ChartThemeDefinition } from '../ChartTheme';
import { getTheme } from '../ChartUtils';

export enum ChartLegendOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum ChartLegendPosition {
  bottom = 'bottom',
  bottomLeft = 'bottom-left',
  right = 'right'
}

export enum ChartLegendRowGutter {
  bottom = 'bottom',
  top = 'top'
}

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and See https://github.com/FormidableLabs/victory/blob/master/packages/victory-legend/src/index.d.ts
 */
export interface ChartLegendProps extends VictoryLegendProps {
  /**
   * The borderComponent prop takes a component instance which will be responsible
   * for rendering a border around the legend. The new element created from the passed
   * borderComponent will be provided with the following properties calculated by
   * ChartLegend: x, y, width, height, and style. Any of these props may be
   * overridden by passing in props to the supplied component, or modified or ignored
   * within the custom component itself. If a borderComponent
   * is not provided, ChartLegend will use its default Border component.
   * Please note that the default width and height calculated
   * for the border component is based on approximated
   * text measurements, and may need to be adjusted.
   */
  borderComponent?: React.ReactElement<any>;
  /**
   * The borderPadding specifies the amount of padding that should
   * be added between the legend items and the border. This prop may be given as
   * a number, or asanobject with values specified for top, bottom, left, and right.
   * Please note that the default width and height calculated for the border
   * component is based on approximated text measurements, so padding may need to be adjusted.
   */
  borderPadding?: PaddingProps;
  /**
   * The centerTitle boolean prop specifies whether a legend title should be centered.
   */
  centerTitle?: boolean;
  /**
   * The colorScale prop defines a color scale to be applied to each data
   * symbol in ChartLegend. This prop should be given as an array of CSS
   * colors, or as a string corresponding to one of the built in color
   * scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red",
   * "green", "blue". ChartLegend will assign a color to each symbol by
   * index, unless they are explicitly specified in the data object.
   * Colors will repeat when there are more symbols than colors in the
   * provided colorScale.
   */
  colorScale?: ColorScalePropType;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartLegend: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartLegend will use the default ChartContainer component.
   *
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   */
  data?: {
    name?: string;
    labels?: {
      fill?: string;
    };
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The dataComponent prop takes a component instance which will be
   * responsible for rendering a data element used to associate a symbol
   * or color with each data series. The new element created from the
   * passed dataComponent will be provided with the following properties
   * calculated by ChartLegend: x, y, size, style, and symbol. Any of
   * these props may be overridden by passing in props to the supplied
   * component, or modified or ignored within the custom component itself.
   * If a dataComponent is not provided, ChartLegend will use its
   * default Point component.
   */
  dataComponent?: React.ReactElement<any>;
  /**
   * ChartLegend uses the standard eventKey prop to specify how event targets
   * are addressed. This prop is not commonly used.
   */
  eventKey?: StringOrNumberOrCallback | string[];
  /**
   * ChartLegend uses the standard events prop.
   */
  events?: EventPropTypeInterface<VictoryLegendTTargetType, StringOrNumberOrCallback>[];
  /**
   * ChartLegend uses the standard externalEventMutations prop.
   */
  externalEventMutations?: EventCallbackInterface<string | string[], StringOrNumberOrList>[];
  /**
   * The groupComponent prop takes an entire component which will be used to
   * create group elements for use within container elements. This prop defaults
   * to a <g> tag on web, and a react-native-svg <G> tag on mobile
   */
  groupComponent?: React.ReactElement<any>;
  /**
   * The gutter prop defines the number of pixels between legend rows or
   * columns, depending on orientation. When orientation is horizontal,
   * gutters are between columns. When orientation is vertical, gutters
   * are the space between rows.
   */
  gutter?: number | { left: number; right: number };
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  height?: number;
  /**
   * The itemsPerRow prop determines how many items to render in each row
   * of a horizontal legend, or in each column of a vertical legend. This
   * prop should be given as an integer. When this prop is not given,
   * legend items will be rendered in a single row or column.
   */
  itemsPerRow?: number;
  /**
   * The labelComponent prop takes a component instance which will be used
   * to render each legend label. The new element created from the passed
   * labelComponent will be supplied with the following properties: x, y,
   * style, and text. Any of these props may be overridden by passing in
   * props to the supplied component, or modified or ignored within the
   * custom component itself. If labelComponent is omitted, a new
   * ChartLabel will be created with the props described above.
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * The orientation prop takes a string that defines whether legend data
   * are displayed in a row or column. When orientation is "horizontal",
   * legend items will be displayed in a single row. When orientation is
   * "vertical", legend items will be displayed in a single column. Line
   * and text-wrapping is not currently supported, so "vertical"
   * orientation is both the default setting and recommended for
   * displaying many series of data.
   */
  orientation?: VictoryLegendOrientationType;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   */
  padding?: PaddingProps;
  /**
   * The responsive prop specifies whether the rendered container should be a responsive container with a viewBox
   * attribute, or a static container with absolute width and height.
   *
   * Useful when legend is located inside a chart -- default is false.
   *
   * Note: Not compatible with containerComponent prop
   */
  responsive?: boolean;
  /**
   * The rowGutter prop defines the number of pixels between legend rows.
   * This prop may be given as a number, or as an object with values
   * specified for “top” and “bottom” gutters. To set spacing between columns,
   * use the gutter prop.
   */
  rowGutter?: number | Omit<BlockProps, 'left' | 'right'>;
  /**
   * The sharedEvents prop is used internally to coordinate events between components.
   *
   * **This prop should not be set manually.**
   */
  sharedEvents?: { events: any[]; getEventState: Function };
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartLegend with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The style prop specifies styles for your pie. ChartLegend relies on Radium,
   * so valid Radium style objects should work for this prop. Height, width, and
   * padding should be specified via the height, width, and padding props.
   *
   * @example {data: {stroke: "black"}, label: {fontSize: 10}}
   */
  style?: VictoryStyleInterface & { title?: VictoryStyleObject };
  /**
   * The symbolSpacer prop defines the number of pixels between data
   * components and label components.
   */
  symbolSpacer?: number;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartLegend as a solo component, implement the theme directly on
   * ChartLegend. If you are wrapping ChartLegend in ChartChart or
   * ChartGroup, please call the theme on the outermost wrapper component instead.
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
   * The title prop specifies a title to render with the legend.
   * This prop should be given as a string, or an array of strings for multi-line titles.
   */
  title?: string | string[];
  /**
   * The titleComponent prop takes a component instance which will be used to render
   * a title for the component. The new element created from the passed
   * labelComponent will be supplied with the following properties: x, y, index, data,
   * datum, verticalAnchor, textAnchor, style, text, and events. Any of these props
   * may be overridden by passing in props to the supplied component, or modified
   * or ignored within the custom component itself. If labelComponent is omitted,
   * a new ChartLabel will be created with the props described above.
   */
  titleComponent?: React.ReactElement<any>;
  /**
   * The titleOrientation prop specifies where the a title should be rendered
   * in relation to the rest of the legend. Possible values
   * for this prop are “top”, “bottom”, “left”, and “right”.
   */
  titleOrientation?: OrientationTypes;
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width?: number;
  /**
   * The x and y props define the base position of the legend element.
   */
  x?: number;
  /**
   * The x and y props define the base position of the legend element.
   */
  y?: number;
}

export const ChartLegend: React.FunctionComponent<ChartLegendProps> = ({
  containerComponent = <ChartContainer />,
  dataComponent = <ChartPoint />,
  labelComponent = <ChartLabel />,
  responsive = true,
  themeColor,
  themeVariant,
  titleComponent = <ChartLabel />,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  ...rest
}: ChartLegendProps) => {
  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, {
    responsive,
    theme,
    ...containerComponent.props
  });

  // Note: containerComponent is required for theme
  return (
    <VictoryLegend
      containerComponent={container}
      dataComponent={dataComponent}
      labelComponent={labelComponent}
      theme={theme}
      titleComponent={titleComponent}
      {...rest}
    />
  );
};

// Note: VictoryLegend.role must be hoisted, but getBaseProps causes error with ChartVoronoiContainer
hoistNonReactStatics(ChartLegend, VictoryLegend, { getBaseProps: true });

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
ChartLegend.getBaseProps = props => {
  const theme = getTheme(null, null);
  return (VictoryLegend as any).getBaseProps(
    {
      titleComponent: <ChartLabel />, // Workaround for getBaseProps error
      ...props
    },
    {
      height: theme.chart.height,
      orientation: theme.legend.orientation,
      titleOrientation: theme.legend.titleOrientation,
      x: 0,
      y: 0,
      width: theme.chart.width
    }
  );
};
