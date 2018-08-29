import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator, DropdownToggle } from '@patternfly/react-core';
import Simple from './examples/SimpleDropdown';
import Kebab from './examples/KebabDropdown';
import PositionRigh from './examples/PositionRightDropdown';
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
  examples: [Simple, PositionRigh, DirectionUp, Kebab]
};
