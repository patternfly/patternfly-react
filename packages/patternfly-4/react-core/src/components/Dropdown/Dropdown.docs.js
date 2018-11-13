import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator, DropdownToggle } from '@patternfly/react-core';
import Basic from './examples/BasicDropdown';
import Simple from './examples/SimpleDropdown';
import Kebab from './examples/KebabDropdown';
import PositionRight from './examples/PositionRightDropdown';
import DirectionUp from './examples/DirectionUpDropdown';

export default {
  title: 'Dropdown',
  components: {
    Dropdown,
    KebabToggle,
    DropdownItem,
    DropdownSeparator,
    DropdownToggle
  },
  examples: [
    { component: Basic, title: 'Basic dropdown' },
    { component: Simple, title: 'Simple dropdown' },
    { component: PositionRight, title: 'Dropdown - position right' },
    { component: DirectionUp, title: 'Dropdown - direction up' },
    { component: Kebab, title: 'Kebab' }
  ]
};
