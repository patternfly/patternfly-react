import figma from '@figma/code-connect';
import { TextInput } from '@patternfly/react-core';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';

// Documentation for TextInputs can be found at https://www.patternfly.org/components/form

figma.connect(
  TextInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=154-71',
  {
    props: {
      // string
      placeholder: figma.string('Input text'),

      // boolean
      customIcon: figma.boolean('Custom icon', {
        true: <ClockIcon />,
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      isRequired: figma.enum('State', { Error: true }),
      readOnlyVariant: figma.enum('State', {
        'Read only': 'default',
        'Read only plain': 'plain'
      }),
      state: figma.enum('State', {
        Active: 'active',
        Complete: 'complete',
        Success: 'success',
        Warning: 'warning',
        Error: 'error'
      }),
      type: figma.enum('Type', {
        'Text box': 'input',
        'Text area': 'textarea'
      }),

      children: figma.children([''])
    },
    example: (props) => (
      <TextInput
        customIcon={props.customIcon}
        isDisabled={props.isDisabled}
        isRequired={props.isRequired}
        name="input-name"
        onChange={() => {}}
        placeholder={props.placeholder}
        readOnlyVariant={props.readOnlyVariant}
        type={props.type}
        validated={props.state}
        value="Value"
      />
    )
  }
);
