import PropTypes from 'prop-types';
import { VictoryGroup } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-group/
   */
  '': PropTypes.any
};

export default class ChartGroup extends VictoryGroup {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryGroup.defaultProps, {
    theme: ChartTheme.default
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
