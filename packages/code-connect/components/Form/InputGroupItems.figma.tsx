import figma from '@figma/code-connect';
import { InputGroupItem, InputGroupText, TextInput } from '@patternfly/react-core';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';
// Documentation for InputGroupItem can be found at https://www.patternfly.org/components/input-group

figma.connect(
  InputGroupItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=176-2806',
  {
    props: {
      type: figma.enum('Type', {
        Icon: (
          <InputGroupText id="username">
            <OutlinedClockIcon />
          </InputGroupText>
        ),
        Text: (
          <TextInput
            validated={validated}
            id="textInput-basic-2"
            type="email"
            aria-label="Error state username example"
          />
        ),
        Dropdown: figma.children('*'),
        Button: figma.children('*')
      }),
      state: figma.enum('State', {
        Disabled: 'disabled',
        ReadOnly: 'readOnly',
        Success: 'success',
        Warning: 'warning',
        Error: 'error',
        Selected: 'selected'
      }),
      textInput: figma.enum('Type', {
        Text: (
          <TextInput
            validated={props.state}
            id="textInput-basic-2"
            type="email"
            aria-label="Error state username example"
          />
        )
      })
    },
    example: (props) => <InputGroupItem>{props.type}</InputGroupItem>
  }
);
