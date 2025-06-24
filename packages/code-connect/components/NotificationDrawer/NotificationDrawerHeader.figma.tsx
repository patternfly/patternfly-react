import figma from '@figma/code-connect';
import { Dropdown, DropdownItem, DropdownList, MenuToggle, NotificationDrawerHeader } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/icons/ellipsis-v-icon/dist/esm/icons/ellipsis-v-icon';

figma.connect(
  NotificationDrawerHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3170-17841&m=dev',
  {
    props: {
      // string
      headingText: figma.string('Heading text'),

      // boolean
      hasActionsMenu: figma.boolean('Has actions menu', {
        true: {
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
        false: {
          dropdown: undefined,
          onClose: undefined
        }
      }),
      showUnreadCount: figma.boolean('Show unread count', {
        true: 3,
        false: NaN
      })
    },
    example: (props) => (
      <NotificationDrawerHeader
        count={props.showUnreadCount}
        onClose={props.hasActionsMenu.onClose}
        title={props.headingText}
        srTitle="Notification drawer header"
      >
        {props.hasActionsMenu.dropdown}
      </NotificationDrawerHeader>
    )
  }
);
