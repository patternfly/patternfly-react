/* eslint-disable camelcase */
import chart_color_black_500 from '@patternfly/react-tokens/dist/js/chart_color_black_500';
import { ColorScalePropType, Helpers, OrientationTypes, StringOrNumberOrCallback } from 'victory-core';
import { ChartThemeDefinition } from '../ChartTheme';
import { getLegendDimensions, getTextSizeWorkAround } from './chart-legend';

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
  colorScale?: ColorScalePropType;
  legendData: any;
  text?: StringOrNumberOrCallback | string[] | number[];
  textAsLegendData?: boolean;
  theme: ChartThemeDefinition;
}

interface ChartLegendTooltipVisibleTextInterface {
  legendData: any;
  text: StringOrNumberOrCallback | string[] | number[];
}

/**
 * When using a cursor container, the tooltip can be offset from the cursor point. If offsetCursorDimensionX is true,
 * the tooltip will appear to the right the vertical cursor. If offsetCursorDimensionY is true, the tooltip will appear
 * above the vertical cursor.
 */
export const getCursorTooltipCenterOffset = ({
  offsetCursorDimensionX = false,
  offsetCursorDimensionY = false,
  theme
}: ChartCursorTooltipCenterOffsetInterface) => {
  const pointerLength = theme && theme.tooltip ? theme.tooltip.pointerLength : 10;
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
 */
export const getCursorTooltipPoniterOrientation = ({
  horizontal = true,
  theme
}: ChartCursorTooltipPoniterOrientationInterface): ((props: any) => OrientationTypes) => {
  const pointerLength = theme && theme.tooltip ? theme.tooltip.pointerLength : 10;
  const orientationX = ({ center, flyoutWidth, width }: any): OrientationTypes =>
    width > center.x + flyoutWidth + pointerLength ? 'left' : 'right';
  const orientationY = ({ center, flyoutHeight, height }: any): OrientationTypes =>
    height > center.y + flyoutHeight + pointerLength ? 'top' : 'bottom';
  return horizontal ? orientationX : orientationY;
};

// Returns the legend height and width
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

  let maxLength = maxDataLength + maxTextLength;
  maxLength += maxLength > 20 ? 1 : maxLength > 15 ? 2 : 4;

  // Adds spacing to help align legend labels and text values
  const getSpacer = (legendLabel: string, textLabel: string) => {
    let spacer = '';
    if (maxLength === 0) {
      return spacer;
    }
    const legendLabelChars = legendLabel ? legendLabel.length : 0;
    const textLabelChars = textLabel ? textLabel.length : 0;
    const maxChars = legendLabelChars + textLabelChars;

    while (spacer.length < maxLength - maxChars) {
      spacer = ` ${spacer}`;
    }
    return spacer;
  };

  // Format all text (as shown below) to help determine overall legend length.
  //
  // {name: "Cats   no data"}
  // {name: "Dogs         1"}
  // {name: "Birds        4"}
  // {name: "Mice         3"}
  const data = _text.map((label: string, index: number) => {
    const hasData = legendData && legendData[index] && legendData[index].name;
    const spacer = hasData ? getSpacer(legendData[index].name, label) : '';
    return {
      name: `${hasData ? legendData[index].name : ''}${spacer}${label}`
    };
  });

  const legendDimensions = getLegendDimensions({
    legendData: data,
    legendOrientation,
    legendProps,
    theme
  });
  const textSizeWorkAround = getTextSizeWorkAround({
    legendData: data,
    legendOrientation,
    theme
  });
  return {
    height: legendDimensions.height,
    width: legendDimensions.width - textSizeWorkAround > 0 ? legendDimensions.width - textSizeWorkAround : 0
  };
};

// Returns visible legend data, while syncing color scale. If textAsLegendData is true, the text prop is used as
// legend data so y values can be passed individually to the label component
export const getLegendTooltipVisibleData = ({
  colorScale,
  legendData,
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
      if (data.symbol && data.symbol.type === 'eyeSlash' && data.symbol.fill === chart_color_black_500.value) {
        continue; // Skip hidden data
      }
      if (index++ < _text.length - 1) {
        const themeColor =
          theme && theme.legend && theme.legend.colorScale
            ? theme.legend.colorScale[i % theme.legend.colorScale.length]
            : undefined;
        result.push({
          name: textAsLegendData ? _text[index] : data.name,
          symbol: {
            fill: colorScale ? colorScale[i % colorScale.length] : themeColor, // Sync color scale
            ...data.symbol
          }
        });
      }
    }
  }
  return result;
};

// Returns visible text for interactive legends
export const getLegendTooltipVisibleText = ({ legendData, text }: ChartLegendTooltipVisibleTextInterface) => {
  const textEvaluated = Helpers.evaluateProp(text);
  const _text = Array.isArray(textEvaluated) ? textEvaluated : [textEvaluated];
  const result = [];
  if (legendData) {
    let index = -1;
    for (const data of legendData) {
      if (data.symbol && data.symbol.type === 'eyeSlash' && data.symbol.fill === chart_color_black_500.value) {
        continue; // Skip hidden data
      }
      if (index++ < _text.length - 1) {
        result.push(_text[index]);
      }
    }
  }
  return result;
};
