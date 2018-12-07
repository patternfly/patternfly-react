import { ChartArea, ChartGroup, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';
import CustomColorsChart from './examples/CustomColorsChart';
import SimpleChart from './examples/SimpleChart';
import DarkGreenThemeChart from './examples/DarkGreenThemeChart';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Area Chart',
  components: {
    ChartArea,
    ChartGroup,
    ChartLegend,
    ChartVoronoiContainer
  },
  examples: [
    { component: SimpleChart, title: 'Simple Chart', getContainerProps },
    { component: CustomColorsChart, title: 'Custom Colors Chart', getContainerProps },
    { component: DarkGreenThemeChart, title: 'Dark, Green Theme Chart', getContainerProps }
  ]
};
