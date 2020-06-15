import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { defaults } from 'lodash';
import {
  Helpers,
  LabelOrientationType,
  OriginType,
  StringOrNumberOrCallback,
  TextAnchorType,
  VerticalAnchorType,
  VictoryLabel,
  VictoryLabelProps
} from 'victory-core';
import { ChartLabel } from '../ChartLabel';
import { ChartLegendTooltipStyles } from '../ChartTheme';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 */
export interface ChartLegendLabelProps extends VictoryLabelProps {
  /**
   * The active prop specifies whether the label is active or not. The active prop is set by defaultEvents in components
   * like ChartTooltip and VictorySelectionContainer. The active prop is used when evaluating functional styles and
   * props.
   */
  active?: boolean;
  /**
   * Specifies the angle to rotate the text by.
   */
  angle?: string | number;
  /**
   * The capHeight prop defines a text metric for the font being used: the expected height of capital letters.
   * This is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of
   * line height. The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a
   * unitless number, it is assumed to be ems.
   */
  capHeight?: StringOrNumberOrCallback;
  /**
   * The children of this component define the content of the label. This makes using the component similar to normal
   * HTML spans or labels. strings, numbers, and functions of data / value are supported.
   */
  children?: StringOrNumberOrCallback;
  /**
   * The className prop specifies a class name that will be applied to the rendered text element.
   */
  className?: string;
  /**
   * Labels that apply to an entire data series will recieve the entire series as `data` instead of an individual datum
   * prop.
   */
  data?: any[];
  /**
   * Victory components can pass a datum prop to their label component. This can be used to calculate functional styles,
   * and determine child text
   */
  datum?: {};
  /**
   * The desc prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more
   * descriptive this title is, the more useful it will be for people using screen readers.
   */
  desc?: string;
  /**
   * The direction prop determines which text direction to apply to the rendered text element
   */
  direction?: 'rtl' | 'ltr' | 'inherit';
  /**
   * The dx prop defines a horizontal shift from the `x` coordinate.
   */
  dx?: StringOrNumberOrCallback;
  /**
   * The dy prop defines a vertical shift from the `y` coordinate. Since this component already accounts for
   * `capHeight`, `lineHeight`, and `verticalAnchor`, this will usually not be necessary.
   */
  dy?: StringOrNumberOrCallback;
  /**
   * The events prop attaches arbitrary event handlers to the label component.
   * Event handlers are currently only called with their corresponding events.
   */
  events?: React.DOMAttributes<any>;
  /**
   * The index prop represents the index of the datum in the data array. This prop should not be set manually.
   */
  index?: string | number;
  /**
   * When the text property contains an array of strings, the inline property lets the <tspan /> elements lay out next
   * to each other. If this property is not specified, the <tspan /> elements will stack vertically instead.
   */
  inline?: boolean;
  /**
   * The labelPlacement prop is used to specify the placement of labels relative to the data point they represent.
   * This prop may be given as “vertical”, “parallel” or “perpendicular”. This props is particularly useful in polar
   * charts, where it may be desireable to position a label either parallel or perpendicular to its corresponding angle.
   * When this prop is not set, perpendicular label placement will be used for polar charts, and vertical label
   * placement will be used for cartesian charts.
   */
  labelPlacement?: LabelOrientationType;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  legendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The valueLabelComponent prop takes a component instance which will be used to render each legend tooltip.
   */
  legendLabelComponent?: React.ReactElement<any>;
  /**
   * The lineHeight prop defines how much space a single line of text should take up.
   * Note that SVG has no notion of line-height, so the positioning may differ slightly from what you would expect with CSS,
   * but the result is similar: a roughly equal amount of extra space is distributed above and below the line of text.
   * The value should ideally use the same units as `capHeight` and `dy`, preferably ems.
   * If given a unitless number, it is assumed to be ems.
   */
  lineHeight?: StringOrNumberOrCallback;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   *
   * **This prop should not be set manually.**
   */
  origin?: OriginType;
  /**
   * Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart.
   *
   * **This prop should not be set manually.**
   */
  polar?: boolean;
  /**
   * The renderInPortal prop specifies whether ChartLabel should render text in place or within a VictoryPortal.
   * Setting renderInPortal to true is equivalent to wrapping ChartLabel in a VictoryPortal. This prop is false by default.
   */
  renderInPortal?: boolean;
  /**
   * Victory components can pass a scale prop to their label component. This can be used to calculate the position of
   * label elements from datum. This prop should not be set manually.
   */
  scale?: { x?: any; y?: any };
  /**
   * The style prop applies CSS properties to the rendered `<text>` element.
   */
  style?: React.CSSProperties | React.CSSProperties[];
  /**
   * The text prop defines the text ChartLabel will render. The text prop may be given as a string, number, a function
   * of datum, or an array of any of these. Strings may include newline characters, which ChartLabel will split into
   * separate <tspan/> elements. When text is given as an array, separate <tspan/> elements will be created for each
   * element in the array.
   */
  text?: string[] | StringOrNumberOrCallback;
  /**
   * The textAnchor prop defines how the text is horizontally positioned relative to the given `x` and `y` coordinates.
   * Options are "start", "middle" and "end". Note that this overrides the style prop.
   */
  textAnchor?: TextAnchorType | (() => TextAnchorType);
  /**
   * The transform prop applies a transform to the rendered `<text>` element.
   * In addition to being a string, it can be an object containing transform definitions for easier authoring.
   */
  transform?: string | {} | (() => string | {});
  /**
   * The verticalAnchor prop defines how the text is vertically positioned relative to the given `x` and `y`
   * coordinates. Options are "start", "middle" and "end".
   */
  verticalAnchor?: VerticalAnchorType | (() => VerticalAnchorType);
  /**
   * This props refers to the width of the svg that VictoryLabel is rendered within. This prop is passed from parents
   * of VictoryLabel.
   *
   * **This prop should not be set manually.**
   */
  width?: number;
  /**
   * The x prop defines the x coordinate to use as a basis for horizontal positioning.
   */
  x?: number;
  /**
   * The y prop defines the y coordinate to use as a basis for vertical positioning.
   */
  y?: number;
}

export const ChartLegendTooltipLabel: React.FunctionComponent<ChartLegendLabelProps> = ({
  dx = 0,
  index = 0,
  legendData,
  legendLabelComponent = <ChartLabel />,
  style,
  text,
  textAnchor = 'end',
  x,
  y,

  // destructure last
  ...rest
}: ChartLegendLabelProps) => {
  const getStyle = (styles: any) => {
    const applyDefaultStyle = (customStyle: React.CSSProperties) =>
      defaults(
        {
          ...customStyle
        },
        {
          fill: ChartLegendTooltipStyles.label.fill
        }
      );
    return Array.isArray(styles) ? styles.map(applyDefaultStyle) : applyDefaultStyle(styles);
  };

  const getLegendLabelComponent = () => {
    const label = legendData && legendData.length ? legendData[index as any].name : undefined;

    return React.cloneElement(legendLabelComponent, {
      style: getStyle({}),
      text: label,
      textAnchor: 'start',
      x,
      y
    });
  };

  const getValueLabelComponent = () => {
    const _x = x + Helpers.evaluateProp(dx);
    return <ChartLabel style={getStyle(style)} text={text} textAnchor={textAnchor} x={_x} y={y} {...rest} />;
  };

  const legendLabel = getLegendLabelComponent();
  const valueLabel = getValueLabelComponent();
  return (
    <React.Fragment>
      {legendLabel}
      {valueLabel}
    </React.Fragment>
  );
};
ChartLegendTooltipLabel.displayName = 'ChartLegendTooltipLabel';

// Note: VictoryLabel.role must be hoisted
hoistNonReactStatics(ChartLegendTooltipLabel, VictoryLabel);
