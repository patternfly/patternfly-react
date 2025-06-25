import figma from '@figma/code-connect';
import { FormGroup, FormGroupLabelHelp, Popover } from '@patternfly/react-core';

// Documentation for CheckboxGroup can be found at https://www.patternfly.org/components/forms/checkbox-group

figma.connect(
  FormGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1577-4455',
  {
    props: {
      label: figma.boolean('Label', {
        true: figma.nestedProps('Input Label', {
          isRequired: figma.boolean('Required', {
            true: true,
            false: undefined
          }),
          hasHelperText: figma.boolean('Help Icon', {
            true: (
              <Popover headerContent={'Popover header content'} bodyContent={'Popover body content'}>
                <FormGroupLabelHelp aria-label="More info for name field" />
              </Popover>
            ),
            false: undefined
          }),
          text: figma.string('✏️ Label text')
        }),
        false: undefined
      }),
      helperText: figma.boolean('Helper text', {
        true: figma.children('HelperText'),
        false: undefined
      }),
      isInline: figma.enum('Layout', {
        Horizontal: true,
        'Default (vertical)': false
      }),

      checkboxes: figma.children('Checkbox')
    },
    example: (props) => (
      <FormGroup
        fieldId="form-checkbox-group"
        isInline={props.isInline}
        isRequired={props.label?.isRequired}
        label={props.label?.text}
        labelInfo="Additional label info"
        role="group"
        labelHelp={props.label?.hasHelperText}
      >
        {props.checkboxes}
      </FormGroup>
    )
  }
);
