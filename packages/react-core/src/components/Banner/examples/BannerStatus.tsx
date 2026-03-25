import { Banner, Flex, FlexItem } from '@patternfly/react-core';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const BannerStatus: React.FunctionComponent = () => (
  <>
    <Banner screenReaderText="Success banner" status="success">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <RhUiCheckCircleFillIcon />
        </FlexItem>
        <FlexItem>Success banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Warning banner" status="warning">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <RhUiWarningFillIcon />
        </FlexItem>
        <FlexItem>Warning banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Danger banner" status="danger">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <RhUiErrorFillIcon />
        </FlexItem>
        <FlexItem>Danger banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Info banner" status="info">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <RhUiInformationFillIcon />
        </FlexItem>
        <FlexItem>Info banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Custom banner" status="custom">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <RhUiNotificationFillIcon />
        </FlexItem>
        <FlexItem>Custom banner</FlexItem>
      </Flex>
    </Banner>
  </>
);
