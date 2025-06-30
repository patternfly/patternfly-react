import figma from '@figma/code-connect';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Timestamp
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

// Documentation for NotificationDrawerListItem can be found at https://www.patternfly.org/components/notification-drawer

figma.connect(
  NotificationDrawerListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3164-16861',
  {
    props: {
      timestamp: <Timestamp date={new Date()} />,

      // enum
      isRead: figma.enum('Type', { Read: true }),
      isHoverable: figma.enum('State', { Hover: true }),
      variant: figma.enum('Status', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger'
      }),

      // boolean
      listItemDropdown: {
        dropdown: (
          <Dropdown
            onSelect={() => {}}
            isOpen={false}
            onOpenChange={() => {}}
            popperProps={{ position: 'right' }}
            toggle={() => (
              <MenuToggle
                ref={() => {}}
                isExpanded={false}
                onClick={() => {}}
                variant="plain"
                aria-label={`Basic example header kebab toggle`}
                icon={<EllipsisVIcon />}
              />
            )}
          >
            <DropdownList>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
              <DropdownItem>Item 3</DropdownItem>
            </DropdownList>
          </Dropdown>
        ),
        onClose: () => {}
      },

      // TODO: DESIGN: Make alert description retrievable via unique layer name or adding a prop to Noficiation Drawer Item
      alertDescription: 'Description',

      // TODO: DESIGN: Make alert title retrievable via unique layer name or adding a prop to Noficiation Drawer Item
      alertTitle: 'Notification title'
    },
    example: (props) => (
      <NotificationDrawerListItem
        isHoverable={props.isHoverable}
        isRead={props.isRead}
        onClose={() => {}}
        variant={props.variant}
      >
        <NotificationDrawerListItemHeader
          srTitle="Notification drawer item"
          title={props.alertTitle}
          variant={props.variant}
        >
          {props.listItemDropdown.dropdown}
        </NotificationDrawerListItemHeader>
        <NotificationDrawerListItemBody timestamp={props.timestamp}>
          {props.alertDescription}
        </NotificationDrawerListItemBody>
      </NotificationDrawerListItem>
    )
  }
);
