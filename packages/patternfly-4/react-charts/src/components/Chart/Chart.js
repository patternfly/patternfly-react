import PropTypes from 'prop-types';
import { VictoryChart } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-chart/
   */
  '': PropTypes.any
};

class Chart extends VictoryChart {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryChart.defaultProps, {
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}

export default Chart;
