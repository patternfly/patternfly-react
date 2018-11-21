import { Chart, ChartBar, ChartGroup } from '@patternfly/react-charts';
import SimpleChart from './examples/SimpleChart';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Bar Chart',
  components: {
    Chart,
    ChartBar,
    ChartGroup
  },
  examples: [{ component: SimpleChart, title: 'Simple Chart', getContainerProps }]
};
