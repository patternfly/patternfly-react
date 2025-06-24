import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

// TODO: FIGMA: Reconfigure how numlabels is set. Currently, the text string "more" is not customizable
// TODO: FIGMA: Label group should contain label components

// NOTE: "Label overflow" doesn't appear to be necessary
// Documentation for Label can be found at https://www.patternfly.org/components/label-group

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1067',
  {
    props: {
      labelText: figma.string('Label text'),
      isCloseable: figma.boolean('Has Close button', {
        true: `{() => {}}`,
        false: undefined
      })
    },
    example: (props) => <Label onClose={props.isCloseable}>{props.labelText}</Label>
  }
);
