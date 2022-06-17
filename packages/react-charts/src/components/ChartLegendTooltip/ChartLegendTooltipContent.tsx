import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Helpers, NumberOrCallback, StringOrNumberOrCallback } from 'victory-core';
import { VictoryLegend } from 'victory-legend';
import { ChartLabel } from '../ChartLabel';
import { ChartLegend } from '../ChartLegend';
import { ChartLegendTooltipLabel } from './ChartLegendTooltipLabel';
import { ChartLegendTooltipStyles, ChartThemeDefinition } from '../ChartTheme';
import {
  getLegendTooltipDataProps,
  getLegendTooltipSize,
  getLegendTooltipVisibleData,
  getLegendTooltipVisibleText,
  getTheme
} from '../ChartUtils';

/**
 * ChartLegendTooltipContent renders a legend tooltip component.
 *
 * See https://github.com/FormidableLabs/victory/blob/main/packages/victory-legend/src/index.d.ts
 */
export interface ChartLegendTooltipContentProps {
  /**
   * The activePoints prop specifies the active data
   *
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  activePoints?: any[];
  /**
   * The center prop determines the position of the center of the tooltip flyout. This prop should be given as an object
   * that describes the desired x and y svg coordinates of the center of the tooltip. This prop is useful for
   * positioning the flyout of a tooltip independent from the pointer. When ChartTooltip is used with
   * ChartVoronoiContainer, the center prop is what enables the mouseFollowTooltips option. When this prop is set,
   * non-zero pointerLength values will no longer be respected.
   */
  center?: { x: number; y: number };
  /**
   * Victory components can pass a datum prop to their label component. This can be used to calculate functional styles,
   * and determine child text
   */
  datum?: {};
  /**
   * The dx prop defines a horizontal shift from the x coordinate.
   *
   * @propType number | Function
   */
  dx?: NumberOrCallback;
  /**
   * The dy prop defines a horizontal shift from the y coordinate.
   *
   * @propType number | Function
   */
  dy?: NumberOrCallback;
  /**
   * The flyoutHeight prop defines the height of the tooltip flyout. This prop may be given as a positive number or a function
   * of datum. If this prop is not set, height will be determined based on an approximate text size calculated from the
   * text and style props provided to ChartTooltip.
   *
   * @propType number | Function
   */
  flyoutHeight?: NumberOrCallback;
  /**
   * The flyoutWidth prop defines the width of the tooltip flyout. This prop may be given as a positive number or a
   * function of datum. If this prop is not set, flyoutWidth will be determined based on an approximate text size
   * calculated from the text and style props provided to VictoryTooltip.
   *
   * @propType number | Function
   */
  flyoutWidth?: NumberOrCallback;
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
   * The legend component to render with chart.
   *
   * Note: Use legendData so the legend width can be calculated and positioned properly.
   * Default legend properties may be applied
   */
  legendComponent?: React.ReactElement<any>;
  /**
   * Specify data via the data prop. ChartLegend expects data as an array of objects with name (required), symbol, and
   * labels properties. The childName is used to sync the data series associated with the given chart child name.
   *
   * The data prop must be given as an array.
   *
   * @example
   *
   * legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   * legendData={[{ childName: `cats`, name: `Total cats` }, { childName: `dogs`, name: 'Total dogs' }]}
   */
  legendData?: {
    childName?: string;
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
   * The patternScale prop is an optional prop that defines patterns to apply, where applicable. This prop should be
   * given as a string array of pattern URLs. Patterns will be assigned to children by index and will repeat when there
   * are more children than patterns in the provided patternScale. Use null to omit the pattern for a given index.
   *
   * Note: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.
   *
   * @example patternScale={[ 'url("#pattern1")', 'url("#pattern2")', null ]}
   * @beta
   */
  patternScale?: string[];
  /**
   * The text prop defines the text ChartTooltip will render. The text prop may be given as a string, number, or
   * function of datum. When ChartLabel is used as the labelComponent, strings may include newline characters, which
   * ChartLabel will split in to separate <tspan/> elements.
   *
   * @propType number | string | Function | string[] | number[]
   */
  text?: StringOrNumberOrCallback | string[] | number[];
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartLegend as a solo component, implement the theme directly on
   * ChartLegend. If you are wrapping ChartLegend in ChartChart or
   * ChartGroup, please call the theme on the outermost wrapper component instead.
   *
   * @propType object
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
   * @deprecated Use PatternFly's pf-theme-dark CSS selector
   */
  themeVariant?: string;
  /**
   * The title prop specifies a title to render with the legend.
   * This prop should be given as a string, or an array of strings for multi-line titles.
   *
   * Valid types are string, string[], or Function
   *
   * Example: title={(datum) => datum.x}
   */
  title?: string | string[] | Function;
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
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width?: number;
}

export const ChartLegendTooltipContent: React.FunctionComponent<ChartLegendTooltipContentProps> = ({
  activePoints,
  center,
  datum,
  dx = 0,
  dy = 0,
  flyoutHeight,
  flyoutWidth,
  height,
  labelComponent = <ChartLegendTooltipLabel />,
  legendComponent = <ChartLegend />,
  legendData,
  patternScale,
  text,
  themeColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  themeVariant,
  title,
  titleComponent = <ChartLabel />,
  width,

  // destructure last
  theme = getTheme(themeColor),
  ...rest
}: ChartLegendTooltipContentProps) => {
  const pointerLength = theme && theme.tooltip ? Helpers.evaluateProp(theme.tooltip.pointerLength) : 10;
  const legendProps = getLegendTooltipDataProps(legendComponent.props);
  const visibleLegendData = getLegendTooltipVisibleData({
    activePoints,
    colorScale: legendProps.colorScale,
    legendData,
    text,
    theme
  });

  // Component offsets
  const legendOffsetX = 0;
  const legendOffsetY = title ? 5 : -10;
  const titleOffsetX = 10;
  const titleOffsetY = 0;

  // Returns x position of flyout
  const getX = () => {
    if (!(center || flyoutWidth || width)) {
      const x = (rest as any).x;
      return x ? x : undefined;
    }
    const _flyoutWidth = Helpers.evaluateProp(flyoutWidth);
    if (width > center.x + _flyoutWidth + pointerLength) {
      return center.x + ChartLegendTooltipStyles.flyout.padding / 2;
    } else if (center.x < _flyoutWidth + pointerLength) {
      return ChartLegendTooltipStyles.flyout.padding / 2 - pointerLength;
    } else {
      return center.x - _flyoutWidth;
    }
  };

  // Returns y position
  const getY = () => {
    if (!(center || flyoutHeight || height)) {
      const y = (rest as any).y;
      return y ? y : undefined;
    }
    const _flyoutHeight = Helpers.evaluateProp(flyoutHeight);
    if (center.y < _flyoutHeight / 2) {
      return ChartLegendTooltipStyles.flyout.padding / 2;
    } else if (center.y > height - _flyoutHeight / 2) {
      return height - _flyoutHeight + ChartLegendTooltipStyles.flyout.padding / 2;
    } else {
      return center.y - _flyoutHeight / 2 + ChartLegendTooltipStyles.flyout.padding / 2;
    }
  };

  // Min & max dimensions do not include flyout padding
  const maxLegendDimensions = getLegendTooltipSize({
    legendData: visibleLegendData,
    legendProps,
    text: getLegendTooltipVisibleText({ activePoints, legendData, text }),
    theme
  });
  const minLegendDimensions = getLegendTooltipSize({
    legendData: [{ name: '' }],
    legendProps,
    theme
  });

  // Returns the label component
  const getLabelComponent = () =>
    React.cloneElement(labelComponent, {
      dx: maxLegendDimensions.width - minLegendDimensions.width,
      legendData: visibleLegendData,
      ...labelComponent.props
    });

  // Returns the title component
  const getTitleComponent = () => {
    const _title = title instanceof Function ? title(datum) : title;

    return React.cloneElement(titleComponent, {
      style: {
        fill: ChartLegendTooltipStyles.label.fill,
        fontWeight: ChartLegendTooltipStyles.label.fontWeight
      },
      text: _title,
      textAnchor: 'start',
      x: getX() + titleOffsetX + Helpers.evaluateProp(dx),
      y: getY() + titleOffsetY + Helpers.evaluateProp(dy),
      ...titleComponent.props
    });
  };

  // Returns the legebd component
  const getLegendComponent = () =>
    React.cloneElement(legendComponent, {
      data: getLegendTooltipVisibleData({
        activePoints,
        colorScale: legendProps.colorScale,
        legendData,
        patternScale,
        text,
        textAsLegendData: true,
        theme
      }),
      labelComponent: getLabelComponent(),
      patternScale,
      standalone: false,
      theme,
      x: getX() + legendOffsetX + Helpers.evaluateProp(dx),
      y: getY() + legendOffsetY + Helpers.evaluateProp(dy),
      ...legendProps
    });

  return (
    <React.Fragment>
      {getTitleComponent()}
      {getLegendComponent()}
    </React.Fragment>
  );
};
ChartLegendTooltipContent.displayName = 'ChartLegendTooltipContent';

// Note: VictoryLegend.role must be hoisted, but getBaseProps causes error with ChartVoronoiContainer
hoistNonReactStatics(ChartLegendTooltipContent, VictoryLegend, { getBaseProps: true });
