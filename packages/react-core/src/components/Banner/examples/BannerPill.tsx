import { Banner, Flex, FlexItem } from '@patternfly/react-core';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';

export const BannerPill: React.FunctionComponent = () => (
  <>
    <Banner isPill>Default pill banner</Banner>
    <br />
    <Banner color="red" isPill>
      Red pill banner
    </Banner>
    <br />
    <Banner isPill screenReaderText="Success pill banner" status="success">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <RhUiCheckCircleFillIcon />
        </FlexItem>
        <FlexItem>Success pill banner</FlexItem>
      </Flex>
    </Banner>
  </>
);
