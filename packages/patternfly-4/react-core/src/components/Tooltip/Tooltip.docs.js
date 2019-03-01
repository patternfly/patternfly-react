import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import SimpleTooltip from './examples/SimpleTooltip';
import TooltipPositions from './examples/TooltipPositions';

export default {
  title: 'Tooltip',
  components: {
    Tooltip
  },
  enumValues: {
    'Object.keys(TooltipPosition).map(key => TooltipPosition[key])': Object.keys(TooltipPosition).map(
      key => TooltipPosition[key]
    )
  },
  variablesRoot: 'pf-c-tooltip',
  examples: [
    { component: SimpleTooltip, title: 'Simple Tooltip' },
    { component: TooltipPositions, title: 'Tooltip Positions' }
  ]
};
