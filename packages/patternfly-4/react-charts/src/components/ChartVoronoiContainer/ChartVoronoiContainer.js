/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryVoronoiContainer } from 'victory';
import { getTheme } from '../ChartUtils/chart-theme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-voronoi-container/
   */
  '': PropTypes.any,
  /**
   * The labelComponent prop specified the component that will be rendered when labels are defined
   * on VictoryVoronoiContainer. If the labels prop is omitted, no label component will be rendered.
   */
  labelComponent: PropTypes.element,
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
  themeVariant: PropTypes.string
};

const ChartVoronoiContainer = ({
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  labelComponent = <ChartTooltip theme={theme} />,
  ...rest
}) => <VictoryVoronoiContainer labelComponent={labelComponent} theme={theme} {...rest} />;

// Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted
hoistNonReactStatics(ChartVoronoiContainer, VictoryVoronoiContainer);
ChartVoronoiContainer.propTypes = propTypes;

export default ChartVoronoiContainer;
