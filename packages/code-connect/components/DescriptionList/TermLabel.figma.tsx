import figma from '@figma/code-connect';
import {
  DescriptionListTerm,
  DescriptionListTermHelpText,
  DescriptionListTermHelpTextButton,
  Popover
} from '@patternfly/react-core';

/*
  Note: I added a boolean prop to Description List Term to serve as an example for how to properly use booleans and render alternative component configurations.
  This provides several advantages:
  * Unlike variants, we can use booleans to render different component configurations without having to create more variants within the Figma component.
  * Reduces maintainance overhead.
  * Allows for more flexibility in the component's usage.
  * Reduces overall file size and, as a result, improves the overall performance of the component.

  This approach is documented here: <include link>
*/
figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=36279-2532',
  {
    props: {
      label: figma.string('✏️ Label')
    },
    example: (props) => <DescriptionListTerm>{props.label}</DescriptionListTerm>
  }
);

figma.connect(
  DescriptionListTermHelpText,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=36279-2532',
  {
    variant: { 'Has help text': true },
    props: {
      label: figma.string('✏️ Label')
    },
    example: (props) => (
      <DescriptionListTermHelpText>
        <Popover headerContent={<div>{props.label}</div>} bodyContent={<div>This is the help text</div>}>
          <DescriptionListTermHelpTextButton>{props.label}</DescriptionListTermHelpTextButton>
        </Popover>
      </DescriptionListTermHelpText>
    )
  }
);
