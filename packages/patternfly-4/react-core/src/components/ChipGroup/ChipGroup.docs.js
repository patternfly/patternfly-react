import { ChipGroup, ChipGroupToolbarItem, Chip } from '@patternfly/react-core';
import Toolbar from './examples/ToolbarChipGroup';
import MultiSelect from './examples/MultiSelectChipGroup';
import BadgeChip from './examples/BadgeChip';

export default {
  title: 'ChipGroup',
  components: {
    ChipGroup,
    ChipGroupToolbarItem,
    Chip
  },
  examples: [
    {
      component: Toolbar,
      title: 'Chip Group Toolbar'
    },
    {
      component: MultiSelect,
      title: 'Chip Group Multi-Select'
    },
    {
      component: BadgeChip,
      title: 'Badge Chip Group'
    }
  ]
};
