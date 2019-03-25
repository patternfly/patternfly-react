import { ChipGroup, ChipGroupToolbarItem, Chip } from '@patternfly/react-core';
import Toolbar from './examples/ToolbarChipGroup';
import MultiSelect from './examples/MultiSelectChipGroup';
import BadgeChip from './examples/BadgeChip';
import SingleChip from './examples/SingleChip';

export default {
  title: 'ChipGroup',
  components: {
    ChipGroup,
    ChipGroupToolbarItem,
    Chip
  },
  variablesRoot: ['pf-c-chip', 'pf-c-chip-group'],
  examples: [
    {
      component: SingleChip,
      title: 'Chip'
    },
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
