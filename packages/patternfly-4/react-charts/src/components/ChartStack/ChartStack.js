import PropTypes from 'prop-types';
import { VictoryStack } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-stack/
   */
  '': PropTypes.any
};

export default class ChartStack extends VictoryStack {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryStack.defaultProps, {
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
