/* eslint-disable camelcase */
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import { Helpers, OrientationTypes, StringOrNumberOrCallback } from 'victory-core';
import { ChartLegendProps } from '../ChartLegend';
import { ChartLegendTooltipStyles, ChartThemeDefinition } from '../ChartTheme';
import { getLegendDimensions } from './chart-legend';

import merge from 'lodash/merge';

interface ChartCursorTooltipCenterOffsetInterface {
  offsetCursorDimensionX?: boolean; // Adjust the tooltip to appear to the right of the vertical cursor
  offsetCursorDimensionY?: boolean; // Adjust the tooltip to appear above the horizontal cursor
  theme?: ChartThemeDefinition;
}

interface ChartCursorTooltipPoniterOrientationInterface {
  horizontal?: boolean;
  theme?: ChartThemeDefinition;
}

interface ChartLegendTooltipFlyoutInterface {
  legendData: any;
  legendOrientation?: 'horizontal' | 'vertical';
  legendProps?: any;
  text?: StringOrNumberOrCallback | string[] | number[];
  theme: ChartThemeDefinition;
}

interface ChartLegendTooltipVisibleDataInterface {
  activePoints?: any[];
  colorScale?: string[];
  legendData: any;
  patternScale?: string[]; // Legend symbol patterns
  text?: StringOrNumberOrCallback | string[] | number[];
  textAsLegendData?: boolean;
  theme: ChartThemeDefinition;
}

interface ChartLegendTooltipVisibleTextInterface {
  activePoints?: any[];
  legendData: any;
  text: StringOrNumberOrCallback | string[] | number[];
}

/**
 * When using a cursor container, the tooltip can be offset from the cursor point. If offsetCursorDimensionX is true,
 * the tooltip will appear to the right the vertical cursor. If offsetCursorDimensionY is true, the tooltip will appear
 * above the vertical cursor.
 * @private
 */
export const getCursorTooltipCenterOffset = ({
  offsetCursorDimensionX = false,
  offsetCursorDimensionY = false,
  theme
}: ChartCursorTooltipCenterOffsetInterface) => {
  const pointerLength = theme && theme.tooltip ? Helpers.evaluateProp(theme.tooltip.pointerLength) : 10;
  const offsetX = ({ center, flyoutWidth, width }: any) => {
    const offset = flyoutWidth / 2 + pointerLength;
    return width > center.x + flyoutWidth + pointerLength ? offset : -offset;
  };
  const offsetY = ({ center, flyoutHeight, width }: any) => {
    const offset = flyoutHeight / 2 + pointerLength;
    return width > center.y + flyoutHeight + pointerLength ? -offset : offset;
  };
  return {
    x: offsetCursorDimensionX ? offsetX : 0,
    y: offsetCursorDimensionY ? offsetY : 0
  };
};

/**
 * When using a cursor container, the tooltip pointer orientation can be adjusted as the cursor approaches the edge of
 * the chart. If horizontal is true, the tooltip pointer will either be 'left' or 'right'. If horizontal is true, the
 * tooltip pointer will either be 'top' or 'bottom'.
 * @private
 */
export const getCursorTooltipPoniterOrientation = ({
  horizontal = true,
  theme
}: ChartCursorTooltipPoniterOrientationInterface): ((props: any) => OrientationTypes) => {
  const pointerLength = theme && theme.tooltip ? Helpers.evaluateProp(theme.tooltip.pointerLength) : 10;
  const orientationX = ({ center, flyoutWidth, width }: any): OrientationTypes =>
    width > center.x + flyoutWidth + pointerLength ? 'left' : 'right';
  const orientationY = ({ center, flyoutHeight, height }: any): OrientationTypes =>
    height > center.y + flyoutHeight + pointerLength ? 'top' : 'bottom';
  return horizontal ? orientationX : orientationY;
};

/**
 * Returns props associated with legend data
 * @private
 */
export const getLegendTooltipDataProps = (defaultProps: ChartLegendProps) =>
  merge(
    {
      borderPadding: 0,
      gutter: 0,
      orientation: 'vertical',
      padding: 0,
      rowGutter: 0,
      style: {
        labels: {
          fill: ChartLegendTooltipStyles.label.fill,
          lineHeight: 0.275,
          padding: 0
        },
        title: {
          fill: ChartLegendTooltipStyles.label.fill,
          padding: 0
        }
      }
    },
    { ...defaultProps }
  );

/**
 * Returns the legend height and width
 * @private
 */
export const getLegendTooltipSize = ({
  legendData,
  legendOrientation = 'vertical',
  legendProps,
  text = '',
  theme
}: ChartLegendTooltipFlyoutInterface) => {
  const textEvaluated = Helpers.evaluateProp(text);
  const _text = Array.isArray(textEvaluated) ? textEvaluated : [textEvaluated];

  // Find max char lengths
  let maxDataLength = 0;
  let maxTextLength = 0;
  _text.map((name: string, index: number) => {
    if (name) {
      if (name.length > maxTextLength) {
        maxTextLength = name.length;
      }
      const hasData = legendData && legendData[index] && legendData[index].name;
      if (hasData) {
        if (legendData[index].name.length > maxDataLength) {
          maxDataLength = legendData[index].name.length;
        }
      }
    }
  });

  // Set length to ensure minimum spacing between label and value
  let maxLength = maxDataLength + maxTextLength;
  if (maxDataLength < 20) {
    maxLength += 2;
  }

  // Get spacing to help align legend labels and text values
  const spacer = 'x';
  const getSpacing = (legendLabel: string, textLabel: string) => {
    let spacing = '';
    if (maxLength === 0) {
      return spacing;
    }
    const legendLabelChars = legendLabel ? legendLabel.length : 0;
    const textLabelChars = textLabel ? textLabel.length : 0;
    const maxChars = legendLabelChars + textLabelChars;

    // Add spacer
    while (spacing.length < maxLength - maxChars) {
      spacing += spacer;
    }
    return spacing;
  };

  // Format all text (similar to below) to help determine overall width.
  //
  // {name: "Cats   no data"}
  // {name: "Dogs         1"}
  // {name: "Birds        4"}
  // {name: "Mice         3"}
  const data = _text.map((label: string, index: number) => {
    const hasData = legendData && legendData[index] && legendData[index].name;
    const spacing = hasData ? getSpacing(legendData[index].name, label) : '';

    return {
      name: `${hasData ? legendData[index].name : ''}${spacing}${label}`
    };
  });

  // Replace whitespace with spacer char for consistency in width
  const formattedData = data.map(val => ({
    name: val.name.replace(/ /g, spacer)
  }));

  // This should include both legend data and text
  const widthDimensions = getLegendDimensions({
    legendData: formattedData,
    legendOrientation,
    legendProps,
    theme
  });
  // This should only use text. The row gutter changes when displaying all "no data" messages
  const heightDimensions = getLegendDimensions({
    legendData: _text.map((name: string) => ({ name })),
    legendOrientation,
    legendProps,
    theme
  });
  return {
    height: heightDimensions.height,
    width: widthDimensions.width > 0 ? widthDimensions.width : 0
  };
};

/**
 * Returns visible legend data, while syncing color scale. If textAsLegendData is true, the text prop is used as
 * legend data so y values can be passed individually to the label component
 * @private
 */
export const getLegendTooltipVisibleData = ({
  activePoints,
  colorScale,
  legendData,
  patternScale,
  text,
  textAsLegendData = false,
  theme
}: ChartLegendTooltipVisibleDataInterface) => {
  const textEvaluated = Helpers.evaluateProp(text);
  const _text = Array.isArray(textEvaluated) ? textEvaluated : [textEvaluated];
  const result = [];

  // Sync data with interactive legends
  if (legendData) {
    let index = -1;
    for (let i = 0; i < legendData.length; i++) {
      const data = legendData[i];
      const activePoint = activePoints ? activePoints.find(item => item.childName === data.childName) : '';
      if (
        !activePoint ||
        (data.symbol && data.symbol.type === 'eyeSlash' && data.symbol.fill === chart_color_black_500.var)
      ) {
        continue; // Skip hidden data
      }
      if (index++ < _text.length - 1) {
        const themeColor =
          theme && theme.legend && theme.legend.colorScale
            ? theme.legend.colorScale[i % theme.legend.colorScale.length]
            : undefined;
        const color = colorScale ? colorScale[i % colorScale.length] : themeColor; // Sync color scale
        const pattern = patternScale ? patternScale[i % patternScale.length] : undefined;
        result.push({
          name: textAsLegendData ? _text[index] : data.name,
          symbol: {
            fill: pattern ? pattern : color,
            ...data.symbol
          }
        });
      }
    }
  }
  return result;
};

/**
 * Returns visible text for interactive legends
 * @private
 */
export const getLegendTooltipVisibleText = ({
  activePoints,
  legendData,
  text
}: ChartLegendTooltipVisibleTextInterface) => {
  const textEvaluated = Helpers.evaluateProp(text);
  const _text = Array.isArray(textEvaluated) ? textEvaluated : [textEvaluated];
  const result = [];
  if (legendData) {
    let index = -1;
    for (const data of legendData) {
      const activePoint = activePoints ? activePoints.find(item => item.childName === data.childName) : '';
      if (
        !activePoint ||
        (data.symbol && data.symbol.type === 'eyeSlash' && data.symbol.fill === chart_color_black_500.var)
      ) {
        continue; // Skip hidden data
      }
      if (index++ < _text.length - 1) {
        result.push(_text[index]);
      }
    }
  }
  return result;
};
