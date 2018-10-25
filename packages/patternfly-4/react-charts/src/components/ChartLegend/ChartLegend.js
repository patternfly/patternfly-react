import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLegend } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartContainer from '../ChartContainer/ChartContainer';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-legend/
   */
  '': PropTypes.any
};

export default class ChartLegend extends VictoryLegend {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryLegend.defaultProps, {
    containerComponent: <ChartContainer/>,
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
