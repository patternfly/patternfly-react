import { FeltButton } from '@patternfly/react-core/components/ButtonNext';
import { Flex } from '@patternfly/react-core';
import RhMicronsCloseIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-close-icon';
import RhUiExternalLinkFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-external-link-fill-icon';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import RhUiCopyFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-copy-fill-icon';

export const FeltButtonVariations: React.FunctionComponent = () => (
  <>
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <FeltButton variant="primary">Primary</FeltButton>
      <FeltButton variant="secondary">Secondary</FeltButton>
      <FeltButton variant="secondary" isDanger>
        Danger Secondary
      </FeltButton>
      <FeltButton variant="tertiary">Tertiary</FeltButton>
      <FeltButton variant="danger">Danger</FeltButton>
      <FeltButton variant="warning">Warning</FeltButton>
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <FeltButton variant="link" icon={<RhUiAddCircleFillIcon />}>
        Link
      </FeltButton>
      <FeltButton variant="link" icon={<RhUiExternalLinkFillIcon />} iconPosition="end">
        Link
      </FeltButton>
      <FeltButton variant="link" isInline>
        Inline link
      </FeltButton>
      <FeltButton variant="link" isDanger>
        Danger link
      </FeltButton>
      <FeltButton variant="plain" aria-label="Action" icon={<RhMicronsCloseIcon />} />
    </Flex>
    <br />
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <FeltButton variant="control">Control</FeltButton>
      <FeltButton variant="control" aria-label="Copy" icon={<RhUiCopyFillIcon />} />
    </Flex>
  </>
);
