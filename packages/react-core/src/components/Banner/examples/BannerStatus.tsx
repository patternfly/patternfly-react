import React from 'react';
import { Banner, Flex, FlexItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const BannerStatus: React.FunctionComponent = () => (
  <>
    <Banner screenReaderText="Default banner">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <BellIcon />
        </FlexItem>
        <FlexItem>Default banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Info banner" variant="info">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <InfoCircleIcon />
        </FlexItem>
        <FlexItem>Info banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Danger banner" variant="danger">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <ExclamationCircleIcon />
        </FlexItem>
        <FlexItem>Danger banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Success banner" variant="success">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <CheckCircleIcon />
        </FlexItem>
        <FlexItem>Success banner</FlexItem>
      </Flex>
    </Banner>
    <br />
    <Banner screenReaderText="Warning banner" variant="warning">
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>
          <ExclamationTriangleIcon />
        </FlexItem>
        <FlexItem>Warning banner</FlexItem>
      </Flex>
    </Banner>
  </>
);
