import PropTypes from 'prop-types';
import { VictoryContainer } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-container/
   */
  '': PropTypes.any
};

export default class ChartContainer extends VictoryContainer {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryContainer.defaultProps, {
    responsive: false // True overrides absolute width and height
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
