import figma from '@figma/code-connect';
import {
  Button,
  Divider,
  DrilldownMenu,
  MenuItem,
  MenuItemAction,
  MenuFooter,
  MenuBreadcrumb,
  MenuList,
  MenuGroup
} from '@patternfly/react-core';
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
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Separator' },
    props: {},
    example: () => <Divider />
  }
);

// Menu Item Footer
figma.connect(
  MenuFooter,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Footer' },
    props: {
      children: figma.children('Inline link')
    },
    example: (props) => <MenuFooter>{props.children}</MenuFooter>
  }
);

// Base Menu Item
// Menu Item Group Header
figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    props: {
      // string
      menuItemText: figma.string('Menu item Text'),

      // boolean
      icon: figma.boolean('Show Leading Icon', { true: <CodeBranchIcon />, false: undefined }),
      action: figma.boolean('Show action icon', { true: <CogIcon />, false: undefined }),
      description: figma.boolean('Show Description', { true: figma.string('Description Text'), false: undefined }),

      // enum
      hasCheckbox: figma.enum('Menu Item', { 'Checkbox select': true }),
      isSelected: figma.enum('State', { Selected: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      isDanger: figma.enum('State', { Danger: true }),
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
        description={props.description}
        hasCheckbox={props.hasCheckbox}
        isDanger={props.isDanger}
        itemId="<menu-item-id>"
        icon={props.icon}
        isSelected={props.isSelected}
        isDisabled={props.isDisabled}
        isExternalLink={props.isExternalLink}
        to={props.to}
      >
        {props.menuItemText}
      </MenuItem>
    )
  }
);

// figma.connect(
//   MenuItem,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
//   {
//     variant: { 'Menu Item': 'Option Select' },
//     props: {
//       menuItemText: figma.string('Menu item Text'),
//       hasCheckbox: figma.enum('Menu Item', { 'Checkbox select': true }),
//       isSelected: figma.enum('State', { Selected: true }),
//       isDisabled: figma.enum('State', { Disabled: true })
//     },
//     example: (props) => (
//       <MenuItem
//         hasCheckbox={props.hasCheckbox}
//         icon={<CodeBranchIcon />}
//         isSelected={props.isSelected}
//         isDisabled={props.isDisabled}
//         itemId={0}
//         onSelect={() => {}}
//         role="listbox"
//         activeItemId={props.activeItemId}
//         selected={props.selected}
//       >
//         {props.menuItemText}
//       </MenuItem>
//     )
//   }
// );

// figma.connect(
//   MenuItem,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
//   {
//     variant: { 'Menu Item': 'Drill Down - Breadcrumb' },
//     props: {
//       breadcrumb: figma.children('*')
//     },
//     example: (props) => <MenuBreadcrumb>{props.breadcrumb}</MenuBreadcrumb>
//   }
// );

// figma.connect(
//   MenuItem,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
//   {
//     variant: { 'Menu Item': 'Group Header' },
//     props: {
//       children: figma.children('*'),
//       menuItemText: figma.string('Menu item Text')
//     },
//     example: (props) => (
//       <>
//         <MenuGroup label={props.menuItemText} labelHeadingLevel="h3">
//           <MenuList>
//             <MenuItem to="#" itemId={1}>
//               Link 1
//             </MenuItem>
//             <MenuItem itemId={2}>Link 2</MenuItem>
//           </MenuList>
//         </MenuGroup>
//         <Divider />
//         <MenuGroup label={props.menuItemText} labelHeadingLevel="h3">
//           <MenuList>
//             <MenuItem to="#" itemId={3}>
//               Link 1
//             </MenuItem>
//             <MenuItem to="#" itemId={4}>
//               Link 2
//             </MenuItem>
//           </MenuList>
//         </MenuGroup>
//       </>
//     )
//   }
// );

// figma.connect(
//   MenuItem,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
//   {
//     props: {
//       // string
//       menuItemText: figma.string('Menu item Text'),

//       // boolean
//       actions: figma.boolean('Show action icon', {
//         true: <MenuItemAction icon={<BellIcon />} actionId="alert" aria-label="Alert" />,
//         false: undefined
//       }),
//       icon: figma.boolean('Show Leading Icon', {
//         true: <CodeBranchIcon />,
//         false: undefined
//       }),

//       isDrilldown: figma.enum('Menu Item', {
//         'Drill Down - Breadcrumb': <DrilldownMenu />,
//         'Drill Down - Start': <DrilldownMenu />,
//         'Drill Down - Return': <DrilldownMenu />
//       }),

//       hasCheckbox: figma.enum('Menu Item', { 'Checkbox select': true }),
//       isDanger: figma.enum('Menu Item', { Danger: true }),
//       isSelected: figma.enum('State', { Selected: true }),
//       isDisabled: figma.enum('State', { Disabled: true }),
//       withExternalLink: figma.enum('Menu Item', {
//         'With external link on hover': { isExternalLink: true, to: '#', itemId: 0 },

//         // reset conditional values
//         Basic: { isExternalLink: false, to: undefined },
//         'Checkbox select': { isExternalLink: false, to: undefined },
//         'Option Select': { isExternalLink: false, to: undefined },
//         'Drill Down - Breadcrumb': { isExternalLink: false, to: undefined },
//         'Drill Down - Start': { isExternalLink: false, to: undefined },
//         'Drill Down - Return': { isExternalLink: false, to: undefined },
//         Danger: { isExternalLink: false, to: undefined }
//       })
//     },
//     example: (props) => (
//       <MenuItem
//         actions={props.actions}
//         isExternalLink={props.withExternalLink.isExternalLink}
//         to={props.withExternalLink.to}
//         hasCheckbox={props.hasCheckbox}
//         icon={props.icon}
//         isDanger={props.isDanger}
//         isDisabled={props.isDisabled}
//         isSelected={props.isSelected}
//         itemId="<item-id>"
//         drilldownMenu={props.isDrilldown}
//         // description={props.description} // TODO: DESIGN: File bug with Figma CC. The description prop is not working as expected, I assume is due to api, string manipulation.
//         description="This is a description."
//       >
//         {props.menuItemText}
//       </MenuItem>
//     )
//   }
// );
