import { Helpers, OrientationTypes, StringOrNumberOrCallback } from 'victory-core';
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
    const hasLegendData = legendData && legendData[index] && legendData[index].name;
    const spacer = hasLegendData ? getSpacer(legendData[index].name, label) : '';
    return {
      name: `${hasLegendData ? legendData[index].name : ''}${spacer}${label}`
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
