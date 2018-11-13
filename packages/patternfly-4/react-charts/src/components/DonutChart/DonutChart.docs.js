import { ChartDonut, ChartLabel, ChartLegend } from '@patternfly/react-charts';
import SimpleChart from './examples/SimpleChart';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Donut Chart',
  components: {
    ChartDonut,
    ChartLabel,
    ChartLegend
  },
  examples: [{ component: SimpleChart, title: 'Simple Chart', getContainerProps }]
};
