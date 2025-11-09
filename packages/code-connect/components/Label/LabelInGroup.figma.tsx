import figma from '@figma/code-connect';
import { Badge, Label } from '@patternfly/react-core';

// TODO: DESIGN: Reconfigure how numlabels is set. Currently, the text string "more" is not customizable
// TODO: DESIGN: Label group should contain label components

// NOTE: "Label overflow" doesn't appear to be necessary
// Documentation for Label can be found at https://www.patternfly.org/components/label-group

figma.connect(Label, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2800-1067', {
  props: {
    labelText: figma.string('Label text'),
    isCloseable: figma.boolean('Has Close button', {
      true: `{() => {}}`,
      false: undefined
    }),
    badge: figma.boolean('Has counter', {
      true: <Badge>06</Badge>,
      false: undefined
    })
  },
  example: (props) => (
    <Label onClose={props.isCloseable}>
      {props.labelText}
      {props.badge}
    </Label>
  )
});
