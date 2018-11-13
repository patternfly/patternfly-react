import { Progress, ProgressVariant, ProgressSize, ProgressMeasureLocation } from '@patternfly/react-core';
import Simple from './examples/SimpleProgress';
import LargeProgress from './examples/LargeProgress';
import ProgressFailure from './examples/ProgressFailure';
import ProgressFailureWithoutMeasure from './examples/ProgressFailureWithoutMeasure';
import ProgressInside from './examples/ProgressInside';
import ProgressInsideSuccess from './examples/ProgressInsideSuccess';
import ProgressOutside from './examples/ProgressOutside';
import ProgressOutsideFailure from './examples/ProgressOutsideFailure';
import ProgressSuccess from './examples/ProgressSuccess';
import ProgressWithoutMeasure from './examples/ProgressWithoutMeasure';
import SmallProgress from './examples/SmallProgress';
import ProgressWithDynamicDescription from './examples/ProgressWithDynamicDescription';
import LabeledProgress from './examples/LabeledProgress';

export default {
  title: 'Progress',
  components: {
    Progress
  },
  enumValues: {
    'Object.values(ProgressVariant)': Object.values(ProgressVariant),
    'Object.values(ProgressSize)': Object.values(ProgressSize),
    'Object.values(ProgressMeasureLocation)': Object.values(ProgressMeasureLocation)
  },
  examples: [
    { component: Simple, title: 'Simple Progress' },
    { component: LabeledProgress, title: 'Progress with additional label' },
    { component: SmallProgress, title: 'Progress Small' },
    { component: LargeProgress, title: 'Progress Large' },
    { component: ProgressOutside, title: 'Progress Outside' },
    { component: ProgressInside, title: 'Progress Inside' },
    { component: ProgressSuccess, title: 'Progress Success' },
    { component: ProgressFailure, title: 'Progress Failure' },
    { component: ProgressInsideSuccess, title: 'Progress Inside Success' },
    { component: ProgressOutsideFailure, title: 'Progress Outside Failure' },
    { component: ProgressWithoutMeasure, title: 'Progress Without Measure' },
    { component: ProgressFailureWithoutMeasure, title: 'Progress Failure Without Measure' },
    { component: ProgressWithDynamicDescription, title: 'Progress with Dynamic Description' }
  ]
};
