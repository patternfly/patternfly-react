import { Helpers, OrientationTypes, StringOrNumberOrCallback } from 'victory-core';
import { ChartThemeDefinition } from '../ChartTheme';
import { getLegendDimensions } from './chart-legend';

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
  const offsetX = ({ flyoutWidth, width, x }: any) => {
    const offset = flyoutWidth / 2 + pointerLength;
    return width > flyoutWidth + x ? offset : -offset;
  };
  const offsetY = ({ flyoutHeight, width, y }: any) => {
    const offset = flyoutHeight / 2 + pointerLength;
    return width > flyoutHeight + y ? -offset : offset;
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
  const orientationX = ({ flyoutWidth, width, x }: any): OrientationTypes =>
    width > flyoutWidth + pointerLength + x ? 'left' : 'right';
  const orientationY = ({ flyoutHeight, height, y }: any): OrientationTypes =>
    height > flyoutHeight + pointerLength + y ? 'top' : 'bottom';
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

  // Find max data char length
  let maxDataLength = 0;
  if (legendData) {
    legendData.map((data: any) => {
      if (data.name && data.name.length > maxDataLength) {
        maxDataLength = data.name.length;
      }
    });
  }

  // Find max text char length
  let maxTextLength = 0;
  _text.map((name: string) => {
    if (name && name.length > maxTextLength) {
      maxTextLength = name.length;
    }
  });

  // Adds spacing to help align legend labels and text values
  const maxLength = maxDataLength + maxTextLength;
  const getSpacer = (chars: number) => {
    let spacer = '';
    if (maxLength === 0) {
      return spacer;
    }
    const charsToAppend = (_text && _text.length !== 0 ? 2 : 0) + maxLength - chars;
    while (spacer.length < charsToAppend) {
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
    const hasLegendData = legendData && legendData[index] && legendData[index].name;
    const dataLength = hasLegendData ? legendData[index].name.length : 0;
    const chars = dataLength + label.length;
    return {
      name: `${hasLegendData ? legendData[index].name : ''}${getSpacer(chars)}${label}`
    };
  });

  const legendDimensions = getLegendDimensions({
    legendData: data,
    legendOrientation,
    legendProps,
    theme
  });
  return legendDimensions;
};
