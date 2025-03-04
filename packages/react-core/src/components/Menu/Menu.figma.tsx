import React from 'react';
import { Menu } from './Menu';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Menu,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2590-18585',
  {
    props: {
      showSearchInput: figma.boolean('Show search input'),
      menu: figma.enum('Menu', {
        Basic: 'basic',
        'Plain Menu': 'plain-menu',
        'With Actions': 'with-actions',
        'With Separator': 'with-separator',
        'With Links': 'with-links',
        'With Icons': 'with-icons',
        'Titled Groups': 'titled-groups',
        'Drill Down Start': 'drill-down-start',
        'Drill Down Return': 'drill-down-return',
        'Option Select': 'option-select',
        'Item Checkbox': 'item-checkbox',
        'With favorites': 'with-favorites',
        Danger: 'danger',
        'Drill Down Breadcrumbs': 'drill-down-breadcrumbs'
      })
    },
    example: (props) => <Menu />
  }
);

figma.connect(
  Menu,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2579-17546',
  {
    props: {
      showLeadingIcon: figma.boolean('Show Leading Icon'),
      showDescr: figma.boolean('Show Descr. '),
      descrText: figma.string('Descr. Text'),
      showActionIcon: figma.boolean('Show action icon'),
      menuItemText: figma.string('Menu item Text'),
      menuItem: figma.enum('Menu Item', {
        Basic: 'basic',
        'Checkbox select': 'checkbox-select',
        'Option Select': 'option-select',
        Danger: 'danger',
        'With external link on hover': 'with-external-link-on-hover',
        'Drill Down - Breadcrumb': 'drill-down---breadcrumb',
        'Drill Down - Start': 'drill-down---start',
        'Drill Down - Return': 'drill-down---return',
        'Group Header': 'group-header',
        Separator: 'separator',
        Footer: 'footer'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        Disabled: 'disabled'
      })
    },
    example: (props) => <Menu />
  }
);

figma.connect(
  Menu,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=3100-80141',
  {
    props: {
      style: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary',
        Disabled: 'disabled'
      })
    },
    example: (props) => <Menu />
  }
);

figma.connect(
  Menu,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=7829-30614',
  {
    props: {
      toggleText: figma.boolean('Toggle text'),
      showBadge: figma.boolean('Show Badge'),
      showCheckbox: figma.boolean('Show Checkbox'),
      showCustomIcon: figma.boolean('Show Custom Icon'),
      showAvatar: figma.boolean('Show Avatar'),
      toggleText: figma.string('✏️ Toggle Text'),
      style: figma.enum('Style', {
        Default: 'default',
        'Plain - Icon': 'plain---icon',
        'Plain text': 'plain-text'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Disabled: 'disabled',
        Selected: 'selected',
        Hover: 'hover',
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success'
      })
    },
    example: (props) => <Menu />
  }
);

figma.connect(
  Menu,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=3466-40444',
  {
    props: {
      toggleText: figma.string('✏️ Toggle Text'),
      showCustomIcon: figma.boolean('Show Custom Icon'),
      showAvatar: figma.boolean('Show Avatar'),
      showBadge: figma.boolean('Show Badge'),
      showCheckbox: figma.boolean('Show Checkbox'),
      toggleText: figma.boolean('Toggle text'),
      style: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disabled: 'disabled',
        Selected: 'selected'
      })
    },
    example: (props) => <Menu />
  }
);

figma.connect(
  Menu,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2689-49976',
  {
    props: {
      showChips: figma.boolean('Show Chips'),
      toggleText: figma.string('✏️ Toggle Text'),
      showAvatar: figma.boolean('Show Avatar'),
      showCheckbox: figma.boolean('Show Checkbox'),
      showBadge: figma.boolean('Show Badge'),
      showCustomIcon: figma.boolean('Show Custom Icon'),
      toggleText: figma.boolean('Toggle text'),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected'
      })
    },
    example: (props) => <Menu />
  }
);
