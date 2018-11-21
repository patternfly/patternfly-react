import { ChartLegend, ChartPie } from '@patternfly/react-charts';
import SimpleChart from './examples/SimpleChart';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Pie Chart',
  components: {
    ChartLegend,
    ChartPie
  },
  examples: [{ component: SimpleChart, title: 'Simple Chart', getContainerProps }]
};
