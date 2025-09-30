import figma from '@figma/code-connect';
import { Popover, Tab, TabTitleIcon, TabTitleText } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

// Note: Static eventKey is used for the example, but the component should be used with dynamic eventKey
// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

const shareProps = {
  popover: figma.boolean('Help icon', {
    true: (
      <Popover
        headerContent={<div>Help popover</div>}
        bodyContent={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
        footerContent="Popover footer"
        triggerRef={ref}
      />
    ),
    false: undefined
  }),
  icon: figma.boolean('Icon at start', {
    true: (
      <>
        <TabTitleIcon>
          <HelpIcon />
        </TabTitleIcon>{' '}
      </>
    ),
    false: undefined
  })
};

figma.connect(Tab, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=14327-6407', {
  props: {
    ...shareProps,

    // string
    tabText: figma.string('Text'),

    // enum
    isDisabled: figma.enum('State', { Disabled: true })
  },
  example: (props) => (
    <Tab
      eventKey={0}
      isDisabled={props.isDisabled}
      actions={props.popover}
      title={
        <>
          {props.icon}
          <TabTitleText>{props.tabText}</TabTitleText>
        </>
      }
    >
      {props.tabText}
    </Tab>
  )
});
