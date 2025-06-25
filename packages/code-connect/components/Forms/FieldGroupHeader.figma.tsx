import figma from '@figma/code-connect';
import { FormFieldGroupExpandable, FormFieldGroupHeader } from '@patternfly/react-core';

// TODO: FIGMA: Separate textTitleText and titleDescription into separate props
// TODO: FIGMA: Separate form field group expandable and non-expandable
// TODO: FIGMA: Separate action buttons
// Documentation for FormGroup can be found at https://www.patternfly.org/components/forms

figma.connect(
  FormFieldGroupExpandable,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21473',
  {
    props: {
      actions: figma.textContent('Action buttons'),
      isExpanded: figma.enum('Type', { 'expandable - open': true }),
      titleDescription: 'Description',
      titleText: {
        // text: figma.string('Title'),
        id: 'field-group-title-id',
        text: 'Title'
      }
      // titleDescription: figma.string('Description'),
    },
    example: (props) => (
      <FormFieldGroupHeader
        actions={props.actions}
        titleDescription={props.titleDescription}
        titleText={props.titleText}
      />
    )
  }
);
