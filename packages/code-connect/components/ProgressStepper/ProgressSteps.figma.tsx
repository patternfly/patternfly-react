import figma from '@figma/code-connect';
import { ProgressStep } from '@patternfly/react-core';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

// Documentation for ProgressSteps can be found at https://www.patternfly.org/components/progress-steps

figma.connect(
  ProgressStep,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7644-38618',
  {
    props: {
      description: figma.boolean('Description', {
        true: 'Step description',
        false: undefined
      }),
      variant: figma.enum('State', {
        Complete: 'success',
        Info: 'info',
        Pending: 'pending',
        Warning: 'warning',
        Danger: 'danger',
        'Loading/Misc': 'loading'
      }),
      isCurrent: figma.enum('State', {
        'Loading/Misc': true
      }),
      icon: figma.enum('State', {
        'Loading/Misc': <InProgressIcon />,
        false: undefined
      })
    },
    example: (props) => (
      <ProgressStep
        aria-label="Step label"
        description={props.description}
        icon={props.icon}
        id="basic-alignment-step"
        isCurrent={props.isCurrent}
        titleId="basic-alignment-step-title"
        variant="success"
      >
        Title test
      </ProgressStep>
    )
  }
);
