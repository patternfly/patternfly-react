import figma from '@figma/code-connect';
import {
  Divider,
  DrilldownMenu,
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuItemAction,
  MenuList
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

// Documentation for Menu can be found at https://www.patternfly.org/components/menu

// const drilldownMenuModel = {
//   id: 'drilldown-drilldownMenuStart',
//   children: (
//     <DrilldownMenu id="drilldown-drilldownMenuStart">
//       <MenuItem itemId="group:start_rollout_breadcrumb" direction="up">
//         Start rollout
//       </MenuItem>
//       <Divider component="li" />
//       <MenuItem
//         itemId="group:app_grouping"
//         description="Groups A-C"
//         direction="down"
//         drilldownMenu={
//           <DrilldownMenu id="drilldown-drilldownMenuStartGrouping">
//             <MenuItem itemId="group:app_grouping_breadcrumb" direction="up">
//               Application grouping
//             </MenuItem>
//             <Divider component="li" />
//             <MenuItem itemId="group_a">Group A</MenuItem>
//             <MenuItem itemId="group_b">Group B</MenuItem>
//             <MenuItem itemId="group_c">Group C</MenuItem>
//           </DrilldownMenu>
//         }
//       >
//         Application grouping
//       </MenuItem>
//       <MenuItem itemId="count">Count</MenuItem>
//       <MenuItem
//         itemId="group:labels"
//         direction="down"
//         drilldownMenu={
//           <DrilldownMenu id="drilldown-drilldownMenuStartLabels">
//             <MenuItem itemId="group:labels_breadcrumb" direction="up">
//               Labels
//             </MenuItem>
//             <Divider component="li" />
//             <MenuItem itemId="label_1">Label 1</MenuItem>
//             <MenuItem itemId="label_2">Label 2</MenuItem>
//             <MenuItem itemId="label_3">Label 3</MenuItem>
//           </DrilldownMenu>
//         }
//       >
//         Labels
//       </MenuItem>
//       <MenuItem itemId="annotations">Annotations</MenuItem>
//     </DrilldownMenu>
//   )
// };

figma.connect(
  Menu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585',
  {
    props: {
      isPlain: figma.enum('Menu', { 'Plain Menu': true }),
      menuItems: figma.children('Menu Item')
    },
    example: (props) => (
      <Menu activeItemId={0} onSelect={() => {}} isPlain={props.isPlain}>
        <MenuContent>
          <MenuList>{props.menuItems}</MenuList>
        </MenuContent>
        {/* <MenuGroup label="Menu group label" labelHeadingLevel="h3">
          {props.children}
            <MenuList>{props.children}</MenuList>
          </MenuGroup>
          <Divider />
          <MenuGroup label="Menu group label" labelHeadingLevel="h3">
            <MenuList>{props.children}</MenuList>
          </MenuGroup>
        </MenuContent> */}
      </Menu>
    )
  }
);
// figma.connect(
//   Menu,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585',
//   {
//     variant: { Menu: 'Titled Groups' },
//     props: {
//       children: figma.children('xx')
//     },
//     example: (props) => (
//       <Menu>
//         <MenuContent>
//           {props.children}

//           <MenuGroup label="Menu group label" labelHeadingLevel="h3">
//             <MenuList>{props.children}</MenuList>
//           </MenuGroup>
//           <Divider />
//           <MenuGroup label="Menu group label" labelHeadingLevel="h3">
//             <MenuList>{props.children}</MenuList>
//           </MenuGroup>
//         </MenuContent>
//       </Menu>
//     )
//   }
// );

// figma.connect(
//   Menu,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585',
//   {
//     variant: { Menu: 'Drilldown Start' },
//     props: {
//       ...drilldownMenuModel,

//       // boolean
//       showSearchInput: figma.boolean('Show search input', {
//         true: true,
//         false: undefined
//       }),

//       // enum
//       isPlain: figma.enum('Menu', { 'Plain Menu': true }),
//       actions: figma.enum('Menu', {
//         'With Actions': (
//           <MenuItemAction icon={<CodeBranchIcon />} actionId="code" onClick={() => {}} aria-label="Code" />
//         )
//       }),
//       onSelect: figma.enum('Menu', { 'Option Select': () => {} }),
//       drilldown: figma.enum('Menu', {
//         Basic: {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined
//         },
//         'Plain Menu': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined
//         },
//         'With Actions': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined
//         },
//         'With Separator': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           onGetMenuHeight: undefined
//         },
//         'With Links': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined,
//           onSelect: undefined
//         },
//         'Option Select': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined,
//           onSelect: undefined
//         },
//         'Item Checkbox': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined,
//           onSelect: undefined
//         },
//         'With favorites': {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined,
//           onSelect: undefined
//         },
//         Danger: {
//           containsDrilldown: false,
//           drilldownItemPath: undefined,
//           drilledInMenus: undefined,
//           activeMenu: undefined,
//           onDrillIn: undefined,
//           onDrillOut: undefined,
//           drilldownMenu: undefined,
//           onGetMenuHeight: undefined,
//           onSelect: undefined
//         },
//         'Drill Down Breadcrumbs': {
//           containsDrilldown: true,
//           drilldownItemPath: 'drilldownPath',
//           drilledInMenus: 'menuDrilledIn',
//           activeMenu: 'activeMenu',
//           onDrillIn: () => {},
//           onDrillOut: () => {},
//           drilldownMenu: drilldownMenuModel,
//           onGetMenuHeight: () => {},
//           onSelect: () => {}
//         },
//         'Drill Down Start': {
//           containsDrilldown: true,
//           drilldownItemPath: 'drilldownPath',
//           drilledInMenus: 'menuDrilledIn',
//           activeMenu: 'activeMenu',
//           onDrillIn: () => {},
//           onDrillOut: () => {},
//           drilldownMenu: drilldownMenuModel,
//           onGetMenuHeight: () => {},
//           onSelect: () => {}
//         },
//         'Drill Down Return': {
//           containsDrilldown: true,
//           drilldownItemPath: 'drilldownPath',
//           drilledInMenus: 'menuDrilledIn',
//           activeMenu: 'activeMenu',
//           onDrillIn: () => {},
//           onDrillOut: () => {},
//           drilldownMenu: drilldownMenuModel,
//           onGetMenuHeight: () => {},
//           onSelect: () => {}
//         }
//       }),

//       children: figma.children('*')
//     },

//     example: (props) => (
//       <Menu
//         activeItemId="<activeItemId>"
//         // activeMenu={props.drilldown.activeMenu}
//         onSelect={props.onSelect}
//         isPlain={props.isPlain}
//         actions={props.actions}
//         showSearchInput={props.showSearchInput}
//         role="listbox"
//         containsDrilldown={props.drilldown.containsDrilldown}
//         drilldownItemPath={props.drilldown.drilldownItemPath}
//         drilledInMenus={props.drilldown.drilledInMenus}
//         onDrillIn={props.drilldown.onDrillIn}
//         onDrillOut={props.drilldown.onDrillOut}
//         onGetMenuHeight={props.drilldown.onGetMenuHeight}
//       >
//         <MenuContent>
//           <MenuList>{props.children}</MenuList>
//         </MenuContent>
//       </Menu>
//     )
//   }
// );
