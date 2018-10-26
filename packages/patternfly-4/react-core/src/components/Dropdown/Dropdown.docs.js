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
  examples: [Basic, Simple, PositionRight, DirectionUp, Kebab]
};
