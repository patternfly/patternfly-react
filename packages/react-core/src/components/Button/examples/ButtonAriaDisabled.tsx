import { Button, Flex, Tooltip } from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const ButtonAriaDisabled: React.FunctionComponent = () => (
  <>
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button isAriaDisabled>Primary aria disabled</Button>
      <Button isAriaDisabled variant="link" icon={<RhUiAddCircleFillIcon />}>
        Link aria disabled
      </Button>
      <Button isAriaDisabled variant="link" isInline>
        Inline link aria disabled
      </Button>
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Tooltip content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.">
        <Button isAriaDisabled>Primary button with tooltip</Button>
      </Tooltip>
      <Tooltip content="Aria-disabled link as button with tooltip">
        <Button component="a" isAriaDisabled href="https://www.patternfly.org/" target="_blank" variant="secondary">
          Secondary link as button to PatternFly home
        </Button>
      </Tooltip>
    </Flex>
  </>
);
