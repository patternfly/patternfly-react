/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { getDonutTheme } from '../ChartUtils/chart-theme';
import ChartContainer from '../ChartContainer/ChartContainer';
import ChartLabel from '../ChartLabel/ChartLabel';
import { default as ChartDonutTheme, styles } from '../ChartTheme/themes/theme-donut';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any,
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  height: PropTypes.number,
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge of a donut. When this prop is set to zero
   * a regular pie chart is rendered.
   */
  innerRadius: PropTypes.number,
  /**
   * The subtitle for the donut chart
   */
  subTitle: PropTypes.string,
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose VictoryAxis with other components within an enclosing <svg> tag.
   * @default true
   */
  standalone: PropTypes.bool,
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'grey' (recomended), 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor: PropTypes.string,
  /**
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant: PropTypes.string,
  /**
   * The title for the donut chart
   */
  title: PropTypes.string,
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  width: PropTypes.number
};

const ChartDonut = ({
  height = ChartDonutTheme.pie.height,
  standalone = true,
  subTitle,
  themeColor,
  themeVariant,
  title,
  width = ChartDonutTheme.pie.width,
  innerRadius = ((height || width) - 34) / 2, // destructure last
  theme = getDonutTheme(themeColor, themeVariant), // destructure last
  ...rest
}) => {
  const chart = (
    <React.Fragment>
      <ChartLabel
        style={[styles.label.title, styles.label.subTitle]}
        text={title && subTitle ? [title, subTitle] : title}
        textAnchor="middle"
        verticalAnchor="middle"
        x={width / 2}
        y={height / 2}
      />
      <VictoryPie
        height={height}
        innerRadius={innerRadius > 0 ? innerRadius : 0}
        labelComponent={<ChartTooltip theme={theme} />}
        standalone={false}
        theme={theme}
        width={width}
        {...rest}
      />
    </React.Fragment>
  );
  return standalone ? (
    <ChartContainer width={width} height={height}>
      {chart}
    </ChartContainer>
  ) : (
    chart
  );
};

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartDonut, VictoryPie);
ChartDonut.propTypes = propTypes;

export default ChartDonut;
