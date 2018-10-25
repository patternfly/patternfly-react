import {
  Chart,
  ChartBar,
  ChartLegend,
  ChartStack
} from '@patternfly/react-charts';
import HorizontalChart from './examples/HorizontalChart';
import SimpleChart from './examples/SimpleChart';

export default {
  title: 'Stack Chart',
  components: {
    Chart,
    ChartBar,
    ChartLegend,
    ChartStack
  },
  examples: [SimpleChart, HorizontalChart]
};
