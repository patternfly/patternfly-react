import figma from '@figma/code-connect';
import { ProgressBar, ProgressMeasureLocation } from '@patternfly/react-core';

// Documentation for ProgressBar can be found at https://www.patternfly.org/components/progress-bar
const sharedProps = {
  helperText: figma.boolean('Show helper text', {
    true: 'This is a helper text',
    false: undefined
  }),
  size: figma.enum('Size', {
    Default: 'md',
    Small: 'sm',
    Large: 'lg'
  }),
  title: figma.string('Title'),
  measureLocation: {
    outside: figma.boolean('Show outside percentage', {
      true: 'outside',
      false: undefined
    }),
    inside: figma.boolean('Show main percentage', {
      true: 'inside',
      false: undefined
    })
  },
  variant: figma.enum('State', {
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger'
  })
};

figma.connect(
  ProgressBar,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7644-38395',
  {
    variant: { 'Show outside percentage': true },
    props: {
      ...sharedProps
    },
    example: (props) => (
      <ProgressBar
        aria-describedby="progress-bar-example-helper-text"
        helperText={props.helperText}
        id="progress-bar-example"
        measureLocation={ProgressMeasureLocation.outside}
        size={props.size}
        title={props.title}
        value={50}
        variant={props.variant}
      />
    )
  }
);

figma.connect(
  ProgressBar,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7644-38395',
  {
    variant: { 'Show main percentage': true },
    props: {
      ...sharedProps
    },
    example: (props) => (
      <ProgressBar
        aria-describedby="progress-bar-example-helper-text"
        helperText={props.helperText}
        id="progress-bar-example"
        measureLocation={ProgressMeasureLocation.inside}
        size={props.size}
        title={props.title}
        value={50}
        variant={props.variant}
      />
    )
  }
);

// Base ProgressBar
figma.connect(
  ProgressBar,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7644-38395',
  {
    props: {
      ...sharedProps
    },
    example: (props) => (
      <ProgressBar
        aria-describedby="progress-bar-example-helper-text"
        helperText={props.helperText}
        id="progress-bar-example"
        measureLocation={ProgressMeasureLocation.none}
        size={props.size}
        title={props.title}
        value={50}
        variant={props.variant}
      />
    )
  }
);
