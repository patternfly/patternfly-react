import figma from '@figma/code-connect';
import { FormGroup, FormGroupLabelHelp, Popover } from '@patternfly/react-core';

// Documentation for FormGroup can be found at https://www.patternfly.org/components/forms/form-group

figma.connect(
  FormGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=151-1566',
  {
    props: {
      isRequired: figma.boolean('Required'),
      labelText: figma.string('✏️ Label text'),
      labelHelp: figma.boolean('Help Icon', {
        true: (
          <Popover headerContent={'Popover header content'} bodyContent={'Popover body Content'}>
            <FormGroupLabelHelp aria-label="More info for name field" />
          </Popover>
        ),
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => <FormGroup>{props.children}</FormGroup>
  }
);
