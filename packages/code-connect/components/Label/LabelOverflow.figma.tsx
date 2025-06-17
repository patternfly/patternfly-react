import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

/**
 * PatternFly Label integration for Figma Code Connect
 */

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-609',
  {
    props: {
      text: figma.string('Text'),
      variant: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outlined'
      }),
      isCompact: figma.enum('Type', {
        Compact: true
      })
    },
    example: (props) => (
      // Documentation for Label can be found at https://www.patternfly.org/components/label
      <Label
        color={props.color}
        variant={props.variant}
        isCompact={props.isCompact}
        isEditable={props.isEditable}
        isDismissable={props.isDismissable}
        text={props.text}
        hasIcon={props.hasIcon}
      />
    )
  }
);
