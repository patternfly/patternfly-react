import figma from '@figma/code-connect';
import { FormFieldGroupExpandable, FormFieldGroupHeader } from '@patternfly/react-core';

// TODO: FIGMA: Separate textTitleText and titleDescription into separate props
// TODO: FIGMA: Separate form field group expandable and non-expandable
// TODO: FIGMA: Separate action buttons
// Documentation for FormGroup can be found at https://www.patternfly.org/components/forms

figma.connect(
  FormFieldGroupExpandable,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21536&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string literal
      titleText: {
        // text: figma.string('Title'),
        id: 'field-group-title-id',
        text: 'Title'
      },

      // titleDescription: figma.string('Description'),
      titleDescription: 'Description',

      // enum
      isExpanded: figma.enum('Type', { 'expandable - open': true }),

      // text content
      actions: figma.textContent('Action buttons')
    },
    example: (props) => <FormFieldGroupHeader titleText={props.titleText} titleDescription={props.titleDescription} />
  }
);
