import figma from '@figma/code-connect';
import { FormGroup, Popover } from '@patternfly/react-core';

// Documentation for InputField can be found at https://www.patternfly.org/components/form

figma.connect(
  FormGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=157-788&m=dev',
  {
    props: {
      inputField: figma.instance('Input field'),
      minusIcon: figma.boolean('Minus icon'),
      label: figma.boolean('Label', {
        true: 'Input field',
        false: undefined
      }),
      textInput: figma.children('Text inputs'),
      helperText: figma.children('HelperText')
    },
    example: (props) => (
      <FormGroup
        label={props.label}
        labelHelp={
          <Popover
            triggerRef={labelHelpRef}
            headerContent={
              <div>
                The{' '}
                <a href="https://schema.org/name" target="_blank" rel="noreferrer">
                  name
                </a>{' '}
                of a{' '}
                <a href="https://schema.org/Person" target="_blank" rel="noreferrer">
                  Person
                </a>
              </div>
            }
            bodyContent={
              <div>
                Often composed of{' '}
                <a href="https://schema.org/givenName" target="_blank" rel="noreferrer">
                  givenName
                </a>{' '}
                and{' '}
                <a href="https://schema.org/familyName" target="_blank" rel="noreferrer">
                  familyName
                </a>
                .
              </div>
            }
          >
            {/* <FormGroupLabelHelp ref={labelHelpRef} aria-label="More info for name field" /> */}
          </Popover>
        }
        isRequired
        fieldId="simple-form-name-01"
      >
        {props.textInput}
        {props.helperText}
      </FormGroup>
    )
  }
);
