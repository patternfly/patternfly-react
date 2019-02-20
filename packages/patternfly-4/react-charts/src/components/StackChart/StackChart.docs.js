import { Chart, ChartBar, ChartLegend, ChartStack } from '../index';
import HorizontalChart from './examples/HorizontalChart';
import SimpleChart from './examples/SimpleChart';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Stack Chart',
  components: {
    Chart,
    ChartBar,
    ChartLegend,
    ChartStack
  },
  examples: [
    { component: SimpleChart, title: 'Simple Chart', getContainerProps },
    { component: HorizontalChart, title: 'Horizontal Chart', getContainerProps }
  ]
};
