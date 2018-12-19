import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator, DropdownToggle } from '@patternfly/react-core';
import Panel from './examples/DropdownPanel';
import Simple from './examples/SimpleDropdown';
import Kebab from './examples/KebabDropdown';
import PositionRight from './examples/PositionRightDropdown';
import DirectionUp from './examples/DirectionUpDropdown';
import ReactLinkDropdown from './examples/ReactLinkDropdown';

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
      component: ReactLinkDropdown,
      title: 'React Router Link usage',
      description: 'A react-router Link may be wrapped by DropdownItem or used directly within Dropdown.',
      live: false
    },
    {
      component: Panel,
      title: 'Dropdown Panel',
      description: 'The Basic Dropdown is provided for flexibility in allowing various content within a dropdown.'
    }
  ]
};
