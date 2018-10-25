import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any
};

export default class ChartPie extends VictoryPie {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryPie.defaultProps, {
    labelComponent: <ChartTooltip/>,
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
