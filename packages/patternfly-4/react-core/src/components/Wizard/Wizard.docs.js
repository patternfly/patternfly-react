import { Wizard } from '@patternfly/react-core';
import SimpleWizard from './examples/SimpleWizard';
import ValidationWizard from './examples/ValidationWizard';
import SampleFormOne from './examples/Steps/SampleFormOne';
import SampleFormTwo from './examples/Steps/SampleFormTwo';

export default {
  title: 'Wizard',
  components: {
    Wizard
  },
  types: {
    WizardStepFunctionType: '(step: { id?: string | number; name: string; }) => void'
  },
  examples: [
    { component: SimpleWizard, title: 'Simple Wizard' },
    { component: ValidationWizard, title: 'Validation Wizard', liveScope: { SampleFormOne, SampleFormTwo } }
  ]
};
