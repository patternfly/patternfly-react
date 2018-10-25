import PropTypes from 'prop-types';
import { VictoryTooltip } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-tooltip/
   */
  '': PropTypes.any
};

export default class ChartTooltip extends VictoryTooltip {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryTooltip.defaultProps, {
    cornerRadius: 0
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
