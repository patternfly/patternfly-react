import PropTypes from 'prop-types';
import { VictoryArea } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
   */
  '': PropTypes.any
};

export default class ChartArea extends VictoryArea {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryArea.defaultProps, {
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
