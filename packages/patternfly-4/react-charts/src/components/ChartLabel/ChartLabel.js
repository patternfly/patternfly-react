import PropTypes from 'prop-types';
import { VictoryLabel } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-label/
   */
  '': PropTypes.any
};

export default class ChartLabel extends VictoryLabel {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryLabel.defaultProps);

  // Required for componentDocs
  render() {
    return super.render();
  }
}
