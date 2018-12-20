import { Tooltip } from '@patternfly/react-core';
import SimpleTooltip from './examples/SimpleTooltip';
import TooltipPositions from './examples/TooltipPositions';

export default {
  title: 'Tooltip',
  components: {
    Tooltip
  },
  examples: [
    { component: SimpleTooltip, title: 'Simple Tooltip' },
    { component: TooltipPositions, title: 'Tooltip Positions' }
  ]
};
