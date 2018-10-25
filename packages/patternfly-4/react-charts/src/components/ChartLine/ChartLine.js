import PropTypes from 'prop-types';
import { VictoryLine } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-line/
   */
  '': PropTypes.any
};

export default class ChartLine extends VictoryLine {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryLine.defaultProps, {
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
