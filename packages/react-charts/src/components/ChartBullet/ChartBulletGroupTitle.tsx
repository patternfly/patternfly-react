import * as React from 'react';
import { PaddingProps, Line, StringOrNumberOrCallback } from 'victory-core';
import { ChartContainer } from '../ChartContainer';
import { ChartLabel } from '../ChartLabel';
import { ChartBulletStyles, ChartThemeDefinition } from '../ChartTheme';
import {
  getBulletGroupTitleTheme,
  getLabelTextSize,
  getBulletLabelX,
  getBulletLabelY,
  getPaddingForSide
} from '../ChartUtils';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 */
export interface ChartBulletGroupTitleProps {
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
   * The capHeight prop defines a text metric for the font being used: the expected height of capital letters.
   * This is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of
   * line height. The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a
   * unitless number, it is assumed to be ems.
   */
  capHeight?: StringOrNumberOrCallback;
  /**
   * The divider component to render with the chart
   */
  dividerComponent?: React.ReactElement<any>;
  /**
   * The height props specifies the height the svg viewBox of the chart container.
   * This value should be given as a number of pixels
   */
  height?: number;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   *
   * Note: The bottom padding property is unused
   */
  padding?: PaddingProps;
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartLine with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The subtitle to render for grouped bullets
   */
  subTitle?: string;
  /**
   * The label component to render the chart subTitle.
   *
   * Note: Default label properties may be applied
   */
  subTitleComponent?: React.ReactElement<any>;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartLine as a solo component, implement the theme directly on
   * ChartLine. If you are wrapping ChartLine in ChartChart or ChartGroup,
   * please call the theme on the outermost wrapper component instead.
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
   * The title to render for grouped bullets
   */
  title?: string;
  /**
   * The label component to render the chart title.
   *
   * Note: Default label properties may be applied
   */
  titleComponent?: React.ReactElement<any>;
  /**
   * The width props specifies the width of the svg viewBox of the chart container
   * This value should be given as a number of pixels
   */
  width?: number;
}

export const ChartBulletGroupTitle: React.FunctionComponent<ChartBulletGroupTitleProps> = ({
  ariaDesc,
  ariaTitle,
  capHeight = 1.1,
  dividerComponent = <Line />,
  padding,
  standalone = true,
  subTitle,
  themeColor,
  themeVariant,
  title,
  titleComponent = <ChartLabel />,

  // destructure last
  theme = getBulletGroupTitleTheme(themeColor, themeVariant),
  height = theme.chart.height,
  width = theme.chart.width
}: ChartBulletGroupTitleProps) => {
  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding)
  };

  const labelPadding = {
    bottom: getPaddingForSide('bottom', padding, Number(theme.legend.style.labels.padding)),
    left: getPaddingForSide('left', padding, Number(theme.legend.style.labels.padding)),
    right: getPaddingForSide('right', padding, Number(theme.legend.style.labels.padding)),
    top: getPaddingForSide('top', padding, Number(theme.legend.style.labels.padding))
  };

  // Horizontal divider to render under the group title
  const getDivider = () => {
    const titleSize = getLabelTextSize({ text: title, theme });
    const subTitleSize = getLabelTextSize({ text: subTitle, theme });
    const dy =
      title && subTitle
        ? titleSize.height + subTitleSize.height + labelPadding.top + labelPadding.bottom
        : titleSize.height + labelPadding.top + labelPadding.bottom;

    return React.cloneElement(dividerComponent, {
      x1: defaultPadding.left,
      x2: width - defaultPadding.right,
      y1: defaultPadding.top + dy,
      y2: defaultPadding.top + dy,
      style: theme.line.style.data,
      ...dividerComponent.props
    });
  };

  // Returns title
  const getTitle = () => {
    const titleProps = titleComponent ? titleComponent.props : {};
    const showBoth = title && subTitle;
    return React.cloneElement(titleComponent, {
      ...(showBoth && { capHeight }),
      style: [ChartBulletStyles.label.groupTitle, ChartBulletStyles.label.subTitle],
      text: showBoth ? [title, subTitle] : title,
      textAnchor: 'middle',
      verticalAnchor: 'middle',
      x: getBulletLabelX({
        chartWidth: width,
        labelPosition: 'top'
      }),
      y: getBulletLabelY({
        chartHeight: height,
        dy: defaultPadding.top,
        labelPosition: 'top'
      }),
      ...titleProps
    });
  };

  const groupTitle = Boolean(title) && (
    <React.Fragment>
      {getTitle()}
      {getDivider()}
    </React.Fragment>
  );

  return standalone ? (
    <ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {groupTitle}
    </ChartContainer>
  ) : (
    <React.Fragment>{groupTitle}</React.Fragment>
  );
};
