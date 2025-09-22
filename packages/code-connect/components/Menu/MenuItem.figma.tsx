import figma from '@figma/code-connect';
import { Divider, MenuItem, MenuItemAction, MenuFooter } from '@patternfly/react-core';
// import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

// TODO: File bug with Figma CC. The description prop is not working as expected. Strings behind boolean props are working in other components, however they
// do not work here. My assumption is that prepending/appending periods to the string is causing the issue and as a matter of consistency, should not be used.
// TODO: DESIGN: "Show Descr.  has a trailing space in the prop. Remove trailing space.
// doesn't but should
// description: figma.boolean('Show Descr. ', {
//   true: 'This is a description',
//   false: undefined
// }),

// Menu Item Separator
figma.connect(
  MenuItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Separator' },
    props: {},
    example: () => <Divider />
  }
);

// Menu Item Footer
figma.connect(
  MenuFooter,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Footer' },
    props: {
      children: figma.children('*')
    },
    example: (props) => <MenuFooter>{props.children}</MenuFooter>
  }
);

// Base Menu Item
// Menu Item Group Header
figma.connect(
  MenuItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/Em2QWrHDxDS4LUxo58Hust/PatternFly-6--Components?node-id=2579-17546',
  {
    props: {
      // string
      menuItemText: figma.string('Menu item Text'),

      // boolean
      icon: figma.boolean('Show Leading Icon', { true: <CodeBranchIcon />, false: undefined }),
      action: figma.boolean('Show action icon', { true: <CogIcon />, false: undefined }),

      // description: figma.boolean('showDescr', { true: figma.string('Descr. Text'), false: undefined }),
      description: 'This is a description', // figma bug, cannot use string directly, needs to be wrapped in an object

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      isDanger: figma.enum('Menu Item', { Danger: true }),
      isExternalLink: figma.enum('Menu Item', { 'With external link on hover': true }),
      actions: figma.boolean('Show action icon', {
        true: (
          <MenuItemAction
            icon={<CodeBranchIcon />}
            actionId="code"
            // eslint-disable-next-line no-console
            onClick={() => console.log('clicked on code icon')}
            aria-label="Code"
          />
        ),
        false: undefined
      }),
      to: figma.enum('Menu Item', { 'With external link on hover': '#to-link' })
    },
    example: (props) => (
      <MenuItem
        actions={props.actions}
        description={props.description} // figma bug, cannot use string directly in boolean props, but should be able to
        isDanger={props.isDanger}
        itemId="<menu-item-id>"
        icon={props.icon}
        isDisabled={props.isDisabled}
        isExternalLink={props.isExternalLink}
        to={props.to}
      >
        {props.menuItemText}
      </MenuItem>
    )
  }
);

figma.connect(
  MenuItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Option Select' },
    props: {
      menuItemText: figma.string('Menu item Text'),
      hasCheckbox: figma.enum('Menu Item', { 'Checkbox select': true }),

      isSelected: figma.enum('State', {
        Default: undefined,
        Hover: undefined,
        Selected: true,
        Disabled: undefined
      }),

      isDisabled: figma.enum('State', { Disabled: true })
    },
    example: (props) => (
      <MenuItem
        hasCheckbox={props.hasCheckbox}
        icon={<CodeBranchIcon />}
        isSelected={props.isSelected}
        isDisabled={props.isDisabled}
        itemId="<item-id>"
        onSelect={() => {}}
        role="listbox"
        activeItemId="<active-item-id>"
      >
        {props.menuItemText}
      </MenuItem>
    )
  }
);
