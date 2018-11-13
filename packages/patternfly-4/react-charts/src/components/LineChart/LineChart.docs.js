import { Chart, ChartGroup, ChartLine } from '@patternfly/react-charts';
import SimpleChart from './examples/SimpleChart';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Line Chart',
  components: {
    Chart,
    ChartGroup,
    ChartLine
  },
  examples: [{ component: SimpleChart, title: 'Simple Chart', getContainerProps }]
};
