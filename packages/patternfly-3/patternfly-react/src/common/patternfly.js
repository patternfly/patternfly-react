import 'patternfly/dist/js/patternfly-settings';
import 'patternfly/dist/js/patternfly-settings-charts';
import Break from 'breakjs';

const { patternfly } = window;
const c3ChartDefaults = patternfly.c3ChartDefaults();

const mockLayout = {
  is: layout => layout === 'desktop',
  addChangeListener: () => {},
  removeChangeListener: () => {}
};

const layout = process.env.NODE_ENV === 'test' ? mockLayout : Break({ mobile: 0, ...patternfly.pfBreakpoints });

export { patternfly, c3ChartDefaults, layout };
