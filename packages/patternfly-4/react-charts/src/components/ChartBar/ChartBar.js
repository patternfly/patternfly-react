import PropTypes from 'prop-types';
import { VictoryBar } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-bar/
   */
  '': PropTypes.any
};

export default class ChartBar extends VictoryBar {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryBar.defaultProps, {
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
