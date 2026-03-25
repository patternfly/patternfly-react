import { Button, Flex } from '@patternfly/react-core';
import RhMicronsCloseIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-close-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const ButtonVariations: React.FunctionComponent = () => (
  <>
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button variant="primary" ouiaId="Primary">
        Primary
      </Button>
      <Button variant="secondary" ouiaId="Secondary">
        Secondary
      </Button>
      <Button variant="secondary" ouiaId="DangerSecondary" isDanger>
        Danger Secondary
      </Button>
      <Button variant="tertiary" ouiaId="Tertiary">
        Tertiary
      </Button>
      <Button variant="danger" ouiaId="Danger">
        Danger
      </Button>
      <Button variant="warning" ouiaId="Warning">
        Warning
      </Button>
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button variant="link" icon={<PlusCircleIcon />}>
        Link
      </Button>
      <Button variant="link" icon={<ExternalLinkSquareAltIcon />} iconPosition="end">
        Link
      </Button>
      <Button variant="link" isInline>
        Inline link
      </Button>
      <Button variant="link" isDanger>
        Danger link
      </Button>
      <Button variant="plain" aria-label="Action" icon={<RhMicronsCloseIcon />} />
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button variant="control">Control</Button>
      <Button variant="control" aria-label="Copy" icon={<CopyIcon />} />
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button variant="stateful" icon={<RhUiNotificationFillIcon />} state="read">
        Stateful read
      </Button>
      <Button variant="stateful" icon={<RhUiNotificationFillIcon />} state="unread">
        Stateful unread
      </Button>
      <Button variant="stateful" icon={<RhUiNotificationFillIcon />} state="attention">
        Stateful attention
      </Button>
    </Flex>
  </>
);
