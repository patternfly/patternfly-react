import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator, DropdownToggle } from '@patternfly/react-core';
import Panel from './examples/DropdownPanel';
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
    { component: Simple, title: 'Dropdown' },
    { component: PositionRight, title: 'Dropdown - position right' },
    { component: DirectionUp, title: 'Dropdown - direction up' },
    { component: Kebab, title: 'Kebab' },
    {
      component: Panel,
      title: 'Dropdown Panel',
      description: 'The Basic Dropdown is provided for flexibility in allowing various content within a dropdown.'
    }
  ]
};
