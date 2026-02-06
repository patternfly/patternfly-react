import figma from '@figma/code-connect';
import { InputGroupItem } from '@patternfly/react-core';
import CircleIcon from '@patternfly/react-icons/icons/circle-icon/dist/esm/icons/circle-icon';

// Documentation for InputGroup can be found at https://www.patternfly.org/components/input-group

figma.connect(
  InputGroupItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=176-2806',
  {
    props: {
      inputGroupContent: figma.enum('Type', {
        Text: figma.string('✏️ Input text'),
        Icon: <CircleIcon />,
        Button: figma.children('Button'),
        Dropdown: figma.children('Menu Toggle')
      })
    },
    example: (props) => <InputGroupItem>{props.inputGroupContent}</InputGroupItem>
  }
);
