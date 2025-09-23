import figma from '@figma/code-connect';
import { Dropdown, DropdownItem, DropdownList, MenuToggle, NotificationDrawerHeader } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons//ellipsis-v-icon';

figma.connect(
  NotificationDrawerHeader,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3170-17841',
  {
    props: {
      // boolean
      hasActionsMenu: figma.boolean('Has actions menu', {
        true: {
          dropdown: (
            <Dropdown
              onSelect={() => {}}
              isOpen={false}
              onOpenChange={() => {}}
              popperProps={{ position: 'right' }}
              toggle={(refToggle) => (
                <MenuToggle
                  ref={refToggle}
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
      }),

      // string
      headingText: figma.string('Heading text')
    },
    example: (props) => (
      <NotificationDrawerHeader
        count={props.showUnreadCount}
        onClose={props.hasActionsMenu.onClose}
        title={props.headingText}
      >
        {props.hasActionsMenu.dropdown}
      </NotificationDrawerHeader>
    )
  }
);
