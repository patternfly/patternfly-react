import {
  ChartArea,
  ChartGroup,
  ChartLegend,
  ChartVoronoiContainer
} from '@patternfly/react-charts';
import CustomColorsChart from './examples/CustomColorsChart';
import SimpleChart from './examples/SimpleChart';
import DarkGreenThemeChart from './examples/DarkGreenThemeChart';

export default {
  title: 'Area Chart',
  components: {
    ChartArea,
    ChartGroup,
    ChartLegend,
    ChartVoronoiContainer
  },
  examples: [SimpleChart, CustomColorsChart, DarkGreenThemeChart]
};
