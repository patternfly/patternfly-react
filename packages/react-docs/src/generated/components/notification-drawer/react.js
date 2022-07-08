import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
const pageData = {
  "id": "Notification drawer",
  "section": "components",
  "source": "react",
  "slug": "/components/notification-drawer/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/NotificationDrawer/examples/NotificationDrawer.md",
  "propComponents": [
    {
      "name": "NotificationDrawer",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the notification drawer"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the notification drawer"
        }
      ]
    },
    {
      "name": "NotificationDrawerBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the body of the notification drawer"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the notification drawer body",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "NotificationDrawerHeader",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the drawer"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes for notification drawer header.",
          "defaultValue": "''"
        },
        {
          "name": "closeButtonAriaLabel",
          "type": "string",
          "description": "Adds custom accessible text to the notification drawer close button.",
          "defaultValue": "'Close'"
        },
        {
          "name": "count",
          "type": "number",
          "description": "Notification drawer heading count"
        },
        {
          "name": "customText",
          "type": "string",
          "description": "Notification drawer heading custom text which can be used instead of providing count/unreadText"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "Callback for when close button is clicked"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Notification drawer heading title",
          "defaultValue": "'Notifications'"
        },
        {
          "name": "unreadText",
          "type": "string",
          "description": "Notification drawer heading unread text used in combination with a count",
          "defaultValue": "'unread'"
        }
      ]
    },
    {
      "name": "NotificationDrawerGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the group",
          "defaultValue": "''"
        },
        {
          "name": "count",
          "type": "number",
          "description": "Notification drawer group count",
          "required": true
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Adds styling to the group to indicate expanded state",
          "required": true
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Adds styling to the group to indicate whether it has been read",
          "defaultValue": "false"
        },
        {
          "name": "onExpand",
          "type": "(event: any, value: boolean) => void",
          "description": "Callback for when group button is clicked to expand",
          "defaultValue": "(event: any, expanded: boolean) => undefined as any"
        },
        {
          "name": "title",
          "type": "string | React.ReactNode",
          "description": "Notification drawer group title",
          "required": true
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if text is truncated"
        },
        {
          "name": "truncateTitle",
          "type": "number",
          "description": "Truncate title to number of lines",
          "defaultValue": "0"
        }
      ]
    },
    {
      "name": "NotificationDrawerGroupList",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the notification drawer list body"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the notification drawer list body",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "NotificationDrawerList",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the notification drawer list body"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the notification drawer list body",
          "defaultValue": "''"
        },
        {
          "name": "isHidden",
          "type": "boolean",
          "description": "Adds styling to the notification drawer list to indicate expand/hide state",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "NotificationDrawerListItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the list item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the list item",
          "defaultValue": "''"
        },
        {
          "name": "isHoverable",
          "type": "boolean",
          "description": "Modifies the list item to include hover styles on :hover",
          "defaultValue": "true"
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Adds styling to the list item to indicate it has been read",
          "defaultValue": "false"
        },
        {
          "name": "onClick",
          "type": "(event: any) => void",
          "description": "Callback for when a list item is clicked",
          "defaultValue": "(event: React.MouseEvent) => undefined as any"
        },
        {
          "name": "tabIndex",
          "type": "number",
          "description": "Tab index for the list item",
          "defaultValue": "0"
        },
        {
          "name": "variant",
          "type": "'default' | 'success' | 'danger' | 'warning' | 'info'",
          "description": "Variant indicates the severity level",
          "defaultValue": "'default'"
        }
      ]
    },
    {
      "name": "NotificationDrawerListItemBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the list item body"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the list item body",
          "defaultValue": "''"
        },
        {
          "name": "timestamp",
          "type": "React.ReactNode",
          "description": "List item timestamp"
        }
      ]
    },
    {
      "name": "NotificationDrawerListItemHeader",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Actions rendered inside the notification drawer list item header"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes for notification drawer list item header.",
          "defaultValue": "''"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Add custom icon for notification drawer list item header",
          "defaultValue": "null"
        },
        {
          "name": "srTitle",
          "type": "string",
          "description": "Notification drawer list item header screen reader title"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Notification drawer list item title",
          "required": true
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if text is truncated"
        },
        {
          "name": "truncateTitle",
          "type": "number",
          "description": "Truncate title to number of lines",
          "defaultValue": "0"
        },
        {
          "name": "variant",
          "type": "'success' | 'danger' | 'warning' | 'info' | 'default'",
          "description": "Variant indicates the severity level",
          "defaultValue": "'default'"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-notification-drawer"
  ],
  "examples": [
    "Basic",
    "Groups",
    "Lightweight"
  ]
};
pageData.liveContext = {
  SearchIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Dropdown,\n  DropdownItem,\n  DropdownPosition,\n  DropdownDirection,\n  DropdownSeparator,\n  KebabToggle,\n  NotificationDrawer,\n  NotificationDrawerBody,\n  NotificationDrawerHeader,\n  NotificationDrawerList,\n  NotificationDrawerListItem,\n  NotificationDrawerListItemBody,\n  NotificationDrawerListItemHeader,\n  Title\n} from '@patternfly/react-core';\n\nclass BasicNotificationDrawer extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: new Array(6).fill(false),\n      isDrawerOpen: true\n    };\n    this.onDrawerClose = () => {\n      this.setState({\n        isDrawerOpen: false\n      });\n    };\n    this.onToggle = index => isOpen => {\n      newState = [...this.state.isOpen.slice(0, index), isOpen, ...this.state.isOpen.slice(index + 1)];\n      this.setState({ isOpen: newState });\n    };\n    this.onSelect = event => {\n      this.setState({ isOpen: new Array(6).fill(false) });\n    };\n  }\n\n  render() {\n    const [isOpen0, isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6] = this.state.isOpen;\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled link\n      </DropdownItem>\n    ];\n    return (\n      <NotificationDrawer>\n        <NotificationDrawerHeader count={3} onClose={this.onDrawerClose}>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={<KebabToggle onToggle={this.onToggle(0)} id=\"toggle-id-0\" />}\n            isOpen={isOpen0}\n            isPlain\n            dropdownItems={dropdownItems}\n            id=\"notification-0\"\n            position={DropdownPosition.right}\n          />\n        </NotificationDrawerHeader>\n        <NotificationDrawerBody>\n          <NotificationDrawerList>\n            <NotificationDrawerListItem variant=\"info\">\n              <NotificationDrawerListItemHeader\n                variant=\"info\"\n                title=\"Unread info notification title\"\n                srTitle=\"Info notification:\"\n              >\n                <Dropdown\n                  position={DropdownPosition.right}\n                  onSelect={this.onSelect}\n                  toggle={<KebabToggle onToggle={this.onToggle(1)} id=\"toggle-id-1\" />}\n                  isOpen={isOpen1}\n                  isPlain\n                  dropdownItems={dropdownItems}\n                  id=\"notification-1\"\n                />\n              </NotificationDrawerListItemHeader>\n              <NotificationDrawerListItemBody timestamp=\"5 minutes ago\">\n                This is an info notification description.\n              </NotificationDrawerListItemBody>\n            </NotificationDrawerListItem>\n            <NotificationDrawerListItem variant=\"danger\">\n              <NotificationDrawerListItemHeader\n                variant=\"danger\"\n                title=\"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\"\n                srTitle=\"Danger notification:\"\n              >\n                <Dropdown\n                  position={DropdownPosition.right}\n                  onSelect={this.onSelect}\n                  toggle={<KebabToggle onToggle={this.onToggle(2)} id=\"toggle-id-2\" />}\n                  isOpen={isOpen2}\n                  isPlain\n                  dropdownItems={dropdownItems}\n                  id=\"notification-2\"\n                />\n              </NotificationDrawerListItemHeader>\n              <NotificationDrawerListItemBody timestamp=\"10 minutes ago\">\n                This is a danger notification description. This is a long description to show how the title will wrap if\n                it is long and wraps to multiple lines.\n              </NotificationDrawerListItemBody>\n            </NotificationDrawerListItem>\n            <NotificationDrawerListItem variant=\"danger\">\n              <NotificationDrawerListItemHeader\n                truncateTitle={1}\n                variant=\"danger\"\n                title=\"Unread danger notification title. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.\"\n                srTitle=\"Danger notification:\"\n              >\n                <Dropdown\n                  position={DropdownPosition.right}\n                  onSelect={this.onSelect}\n                  toggle={<KebabToggle onToggle={this.onToggle(3)} id=\"toggle-id-3\" />}\n                  isOpen={isOpen3}\n                  isPlain\n                  dropdownItems={dropdownItems}\n                  id=\"notification-3\"\n                />\n              </NotificationDrawerListItemHeader>\n              <NotificationDrawerListItemBody timestamp=\"10 minutes ago\">\n                This is a danger notification description. This is a long description to show how the title will wrap if\n                it is long and wraps to multiple lines.\n              </NotificationDrawerListItemBody>\n            </NotificationDrawerListItem>\n            <NotificationDrawerListItem variant=\"warning\" isRead>\n              <NotificationDrawerListItemHeader\n                variant=\"warning\"\n                title=\"Read warning notification title\"\n                srTitle=\"Warning notification:\"\n              >\n                <Dropdown\n                  position={DropdownPosition.right}\n                  onSelect={this.onSelect}\n                  toggle={<KebabToggle onToggle={this.onToggle(4)} id=\"toggle-id-4\" />}\n                  isOpen={isOpen4}\n                  isPlain\n                  dropdownItems={dropdownItems}\n                  id=\"notification-4\"\n                />\n              </NotificationDrawerListItemHeader>\n              <NotificationDrawerListItemBody timestamp=\"20 minutes ago\">\n                This is a warning notification description.\n              </NotificationDrawerListItemBody>\n            </NotificationDrawerListItem>\n            <NotificationDrawerListItem variant=\"success\" isRead>\n              <NotificationDrawerListItemHeader\n                variant=\"success\"\n                title=\"Read success notification title\"\n                srTitle=\"Success notification:\"\n              >\n                <Dropdown\n                  position={DropdownPosition.right}\n                  direction={DropdownDirection.up}\n                  onSelect={this.onSelect}\n                  toggle={<KebabToggle onToggle={this.onToggle(5)} id=\"toggle-id-5\" />}\n                  isOpen={isOpen5}\n                  isPlain\n                  dropdownItems={dropdownItems}\n                  id=\"notification-5\"\n                />\n              </NotificationDrawerListItemHeader>\n              <NotificationDrawerListItemBody timestamp=\"30 minutes ago\">\n                This is a success notification description.\n              </NotificationDrawerListItemBody>\n            </NotificationDrawerListItem>\n            <NotificationDrawerListItem isRead>\n              <NotificationDrawerListItemHeader title=\"Read (default) notification title\" srTitle=\"notification:\">\n                <Dropdown\n                  position={DropdownPosition.right}\n                  onSelect={this.onSelect}\n                  toggle={<KebabToggle onToggle={this.onToggle(6)} id=\"toggle-id-6\" />}\n                  isOpen={isOpen6}\n                  isPlain\n                  dropdownItems={dropdownItems}\n                  id=\"notification-6\"\n                />\n              </NotificationDrawerListItemHeader>\n              <NotificationDrawerListItemBody timestamp=\"35 minutes ago\">\n                This is a default notification description.\n              </NotificationDrawerListItemBody>\n            </NotificationDrawerListItem>\n          </NotificationDrawerList>\n        </NotificationDrawerBody>\n      </NotificationDrawer>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  Dropdown,\n  DropdownItem,\n  DropdownPosition,\n  DropdownDirection,\n  DropdownSeparator,\n  EmptyState,\n  EmptyStateBody,\n  EmptyStateIcon,\n  EmptyStatePrimary,\n  KebabToggle,\n  NotificationDrawer,\n  NotificationDrawerBody,\n  NotificationDrawerHeader,\n  NotificationDrawerGroup,\n  NotificationDrawerGroupList,\n  NotificationDrawerList,\n  NotificationDrawerListItem,\n  NotificationDrawerListItemBody,\n  NotificationDrawerListItemHeader,\n  Title\n} from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\n\nclass GroupNotificationDrawer extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpenMap: null,\n      firstGroupExpanded: false,\n      secondGroupExpanded: true,\n      thirdGroupExpanded: false\n    };\n    this.onToggle = (id, isOpen) => {\n      this.setState({\n        isOpenMap: { [id]: isOpen }\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpenMap: null\n      });\n    };\n    this.toggleFirstDrawer = (event, value) => {\n      this.setState({\n        firstGroupExpanded: value\n      });\n    };\n    this.toggleSecondDrawer = (event, value) => {\n      this.setState({\n        secondGroupExpanded: value\n      });\n    };\n    this.toggleThirdDrawer = (event, value) => {\n      this.setState({\n        thirdGroupExpanded: value\n      });\n    };\n  }\n  render() {\n    const { isOpenMap, firstGroupExpanded, secondGroupExpanded, thirdGroupExpanded } = this.state;\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled link\n      </DropdownItem>\n    ];\n    return (\n      <NotificationDrawer>\n        <NotificationDrawerHeader count={4}>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={<KebabToggle onToggle={isOpen => this.onToggle('toggle-id-0', isOpen)} id=\"toggle-id-0\" />}\n            isOpen={isOpenMap && isOpenMap['toggle-id-0']}\n            isPlain\n            dropdownItems={dropdownItems}\n            id=\"notification-0\"\n            position={DropdownPosition.right}\n          />\n        </NotificationDrawerHeader>\n        <NotificationDrawerBody>\n          <NotificationDrawerGroupList>\n            <NotificationDrawerGroup\n              title=\"First notification group\"\n              isExpanded={firstGroupExpanded}\n              count={2}\n              onExpand={this.toggleFirstDrawer}\n            >\n              <NotificationDrawerList isHidden={!firstGroupExpanded}>\n                <NotificationDrawerListItem variant=\"info\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"info\"\n                    title=\"Unread info notification title\"\n                    srTitle=\"Info notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-5', isOpen)} id=\"toggle-id-5\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-5']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-5\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"5 minutes ago\">\n                    This is an info notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"danger\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"danger\"\n                    title=\"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\"\n                    srTitle=\"Danger notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-6', isOpen)} id=\"toggle-id-6\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-6']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-6\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"10 minutes ago\">\n                    This is a danger notification description. This is a long description to show how the title will\n                    wrap if it is long and wraps to multiple lines.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"warning\" isRead>\n                  <NotificationDrawerListItemHeader\n                    variant=\"warning\"\n                    title=\"Read warning notification title\"\n                    srTitle=\"Warning notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-7', isOpen)} id=\"toggle-id-7\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-7']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-7\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"20 minutes ago\">\n                    This is a warning notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"success\" isRead>\n                  <NotificationDrawerListItemHeader\n                    variant=\"success\"\n                    title=\"Read success notification title\"\n                    srTitle=\"Success notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      direction={DropdownDirection.up}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-8', isOpen)} id=\"toggle-id-8\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-8']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-8\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"30 minutes ago\">\n                    This is a success notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n              </NotificationDrawerList>\n            </NotificationDrawerGroup>\n            <NotificationDrawerGroup\n              title=\"Second notification group\"\n              isExpanded={secondGroupExpanded}\n              count={2}\n              onExpand={this.toggleSecondDrawer}\n            >\n              <NotificationDrawerList isHidden={!secondGroupExpanded}>\n                <NotificationDrawerListItem variant=\"info\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"info\"\n                    title=\"Unread info notification title\"\n                    srTitle=\"Info notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-9', isOpen)} id=\"toggle-id-9\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-9']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-9\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"5 minutes ago\">\n                    This is an info notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"danger\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"danger\"\n                    title=\"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\"\n                    srTitle=\"Danger notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-10', isOpen)} id=\"toggle-id-10\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-10']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-10\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"10 minutes ago\">\n                    This is a danger notification description. This is a long description to show how the title will\n                    wrap if it is long and wraps to multiple lines.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"warning\" isRead>\n                  <NotificationDrawerListItemHeader\n                    variant=\"warning\"\n                    title=\"Read warning notification title\"\n                    srTitle=\"Warning notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-11', isOpen)} id=\"toggle-id-11\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-11']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-11\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"20 minutes ago\">\n                    This is a warning notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"success\" isRead>\n                  <NotificationDrawerListItemHeader\n                    variant=\"success\"\n                    title=\"Read success notification title\"\n                    srTitle=\"Success notification:\"\n                  >\n                    <Dropdown\n                      position={DropdownPosition.right}\n                      direction={DropdownDirection.up}\n                      onSelect={this.onSelect}\n                      toggle={\n                        <KebabToggle onToggle={isOpen => this.onToggle('toggle-id-12', isOpen)} id=\"toggle-id-12\" />\n                      }\n                      isOpen={isOpenMap && isOpenMap['toggle-id-12']}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                      id=\"notification-12\"\n                    />\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"30 minutes ago\">\n                    This is a success notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n              </NotificationDrawerList>\n            </NotificationDrawerGroup>\n            <NotificationDrawerGroup\n              title=\"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.\"\n              isExpanded={thirdGroupExpanded}\n              count={0}\n              onExpand={this.toggleThirdDrawer}\n              truncateTitle={1}\n            >\n              <NotificationDrawerList isHidden={!thirdGroupExpanded}>\n                <EmptyState variant={EmptyStateVariant.full}>\n                  <EmptyStateIcon icon={SearchIcon} />\n                  <Title headingLevel=\"h2\" size=\"lg\">\n                    No alerts found\n                  </Title>\n                  <EmptyStateBody>\n                    There are currently no critical alerts firing. There may be firing alerts of other severities or\n                    silenced critical alerts however.\n                  </EmptyStateBody>\n                  <EmptyStatePrimary>\n                    <Button variant=\"link\">Action</Button>\n                  </EmptyStatePrimary>\n                </EmptyState>\n              </NotificationDrawerList>\n            </NotificationDrawerGroup>\n          </NotificationDrawerGroupList>\n        </NotificationDrawerBody>\n      </NotificationDrawer>\n    );\n  }\n}","title":"Groups","lang":"js"}}>
      
    </Example>,
  'Lightweight': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  EmptyState,\n  EmptyStateBody,\n  EmptyStateIcon,\n  EmptyStatePrimary,\n  EmptyStateVariant,\n  NotificationDrawer,\n  NotificationDrawerBody,\n  NotificationDrawerHeader,\n  NotificationDrawerGroup,\n  NotificationDrawerGroupList,\n  NotificationDrawerList,\n  NotificationDrawerListItem,\n  NotificationDrawerListItemBody,\n  NotificationDrawerListItemHeader,\n  Title\n} from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\n\nclass LightweightNotificationDrawerDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      firstGroupExpanded: false,\n      secondGroupExpanded: true,\n      thirdGroupExpanded: false\n    };\n\n    this.onFocus = id => {\n      if (id) {\n        const element = document.getElementById(id);\n        element.focus();\n      }\n    };\n\n    this.toggleFirstDrawer = (event, value) => {\n      this.setState({\n        firstGroupExpanded: value\n      });\n    };\n\n    this.toggleSecondDrawer = (event, value) => {\n      this.setState({\n        secondGroupExpanded: value\n      });\n    };\n\n    this.toggleThirdDrawer = (event, value) => {\n      this.setState({\n        thirdGroupExpanded: value\n      });\n    };\n  }\n\n  render() {\n    const { firstGroupExpanded, secondGroupExpanded, thirdGroupExpanded } = this.state;\n\n    return (\n      <NotificationDrawer>\n        <NotificationDrawerHeader customText=\"2 unread alerts\" />\n        <NotificationDrawerBody>\n          <NotificationDrawerGroupList>\n            <NotificationDrawerGroup\n              title=\"First notification group\"\n              isExpanded={firstGroupExpanded}\n              count={4}\n              isRead\n              onExpand={this.toggleFirstDrawer}\n            >\n              <NotificationDrawerList isHidden={!firstGroupExpanded}>\n                <NotificationDrawerListItem variant=\"info\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"info\"\n                    title=\"Info notification title\"\n                    srTitle=\"Info notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"5 minutes ago\">\n                    This is an info notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"danger\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"danger\"\n                    title=\"Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\"\n                    srTitle=\"Danger notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"10 minutes ago\">\n                    This is a danger notification description. This is a long description to show how the title will\n                    wrap if it is long and wraps to multiple lines.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"warning\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"warning\"\n                    title=\"Warning notification title\"\n                    srTitle=\"Warning notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"20 minutes ago\">\n                    This is a warning notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"success\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"success\"\n                    title=\"Success notification title\"\n                    srTitle=\"Success notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"30 minutes ago\">\n                    This is a success notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n              </NotificationDrawerList>\n            </NotificationDrawerGroup>\n            <NotificationDrawerGroup\n              title=\"Second notification group\"\n              isExpanded={secondGroupExpanded}\n              count={4}\n              isRead\n              onExpand={this.toggleSecondDrawer}\n            >\n              <NotificationDrawerList isHidden={!secondGroupExpanded}>\n                <NotificationDrawerListItem variant=\"info\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"info\"\n                    title=\"Info notification title w/action\"\n                    srTitle=\"Info notification:\"\n                  >\n                    <Button variant=\"link\">Action</Button>\n                  </NotificationDrawerListItemHeader>\n                  <NotificationDrawerListItemBody timestamp=\"5 minutes ago\">\n                    This is an info notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"danger\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"danger\"\n                    title=\"Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\"\n                    srTitle=\"Danger notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"10 minutes ago\">\n                    This is a danger notification description. This is a long description to show how the title will\n                    wrap if it is long and wraps to multiple lines.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"warning\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"warning\"\n                    title=\"Warning notification title\"\n                    srTitle=\"Warning notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"20 minutes ago\">\n                    This is a warning notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n                <NotificationDrawerListItem variant=\"success\">\n                  <NotificationDrawerListItemHeader\n                    variant=\"success\"\n                    title=\"Success notification title\"\n                    srTitle=\"Success notification:\"\n                  />\n                  <NotificationDrawerListItemBody timestamp=\"30 minutes ago\">\n                    This is a success notification description.\n                  </NotificationDrawerListItemBody>\n                </NotificationDrawerListItem>\n              </NotificationDrawerList>\n            </NotificationDrawerGroup>\n            <NotificationDrawerGroup\n              title=\"Third notification group\"\n              isExpanded={thirdGroupExpanded}\n              count={0}\n              isRead\n              onExpand={this.toggleThirdDrawer}\n            >\n              <NotificationDrawerList isHidden={!thirdGroupExpanded}>\n                <EmptyState variant={EmptyStateVariant.full}>\n                  <EmptyStateIcon icon={SearchIcon} />\n                  <Title headingLevel=\"h2\" size=\"lg\">\n                    No alerts found\n                  </Title>\n                  <EmptyStateBody>\n                    There are currently no critical alerts firing. There may be firing alerts of other severities or\n                    silenced critical alerts however.\n                  </EmptyStateBody>\n                  <EmptyStatePrimary>\n                    <Button variant=\"link\">Action</Button>\n                  </EmptyStatePrimary>\n                </EmptyState>\n              </NotificationDrawerList>\n            </NotificationDrawerGroup>\n          </NotificationDrawerGroupList>\n        </NotificationDrawerBody>\n      </NotificationDrawer>\n    );\n  }\n}","title":"Lightweight","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Groups"])}
    {React.createElement(pageData.examples["Lightweight"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsNotificationDrawerReactDocs';
Component.pageData = pageData;

export default Component;
