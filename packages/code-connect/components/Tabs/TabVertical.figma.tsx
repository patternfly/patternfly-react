import figma from '@figma/code-connect';
import { Tab, TabAction, TabTitleIcon, TabTitleText } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';

// Note: Static eventKey is used for the example, but the component should be used with dynamic eventKey
// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(
  Tab,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6407',
  {
    props: {
      // string
      tabText: figma.string('Text'),

      // boolean
      actions: figma.boolean('Help icon', {
        true: (ref: React.RefObject<HTMLDivElement>) => (
          <>
            <TabAction aria-label="Help action for tab" ref={ref}>
              <HelpIcon />
            </TabAction>
            {helpPopover(`Help popover for tab`)}
          </>
        ),
        false: undefined
      }),
      onClose: figma.boolean('Close Icon', {
        true: () => {},
        false: undefined
      }),
      hasIcon: figma.boolean('Has icon', {
        true: (
          <TabTitleIcon>
            <UsersIcon />
          </TabTitleIcon>
        ),
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('State', { Disabled: true })
      // eventKey: figma.string('Event key'), // TODO: FIGMA: Add event key
    },
    example: (props) => (
      <Tab
        eventKey={0}
        isDisabled={props.isDisabled}
        onClose={props.onClose}
        title={
          <>
            <TabTitleText>{props.tabText}</TabTitleText>
            {props.hasIcon}
          </>
        }
      >
        {props.tabText} Content
      </Tab>
    )
  }
);
