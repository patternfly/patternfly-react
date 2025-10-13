import figma from '@figma/code-connect';
import { ProgressStepper } from '@patternfly/react-core';

// Documentation for ProgressStepper can be found at https://www.patternfly.org/components/progress-stepper

figma.connect(
  ProgressStepper,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7644-38563',
  {
    props: {
      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isVertical: figma.enum('Direction', { Vertical: true }),

      children: figma.children('Progress steps')
    },
    example: (props) => (
      <ProgressStepper isVertical={props.isVertical} isCompact={props.isCompact} aria-label="Progress stepper">
        {props.children}
      </ProgressStepper>
    )
  }
);
