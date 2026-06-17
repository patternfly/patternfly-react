import { Button, Flex } from '@patternfly/react-core';
import RhMicronsCloseIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-close-icon';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import RhUiCopyFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-copy-fill-icon';

export const ButtonDisabled: React.FunctionComponent = () => (
  <>
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button isDisabled>Primary</Button>
      <Button variant="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="secondary" isDanger isDisabled>
        Danger secondary
      </Button>
      <Button isDisabled variant="tertiary">
        Tertiary
      </Button>
      <Button isDisabled variant="danger">
        Danger
      </Button>
      <Button isDisabled variant="warning">
        Warning
      </Button>
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button isDisabled variant="link" icon={<RhUiAddCircleFillIcon />}>
        Link
      </Button>
      <Button isDisabled variant="link" isInline>
        Inline link
      </Button>
      <Button variant="link" isDanger isDisabled>
        Danger link
      </Button>
      <Button isDisabled variant="plain" aria-label="Action" icon={<RhMicronsCloseIcon />} />
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button isDisabled variant="control">
        Control
      </Button>
      <Button isDisabled variant="control" aria-label="Copy" icon={<RhUiCopyFillIcon />} />
    </Flex>
  </>
);
