import React from 'react';
import { Icon, Text, TextContent } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconInline: React.FunctionComponent = () => (
  <React.Fragment>
    <TextContent>
      <Text component="h1">
        Heading
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
      </Text>
      <Text component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
      </Text>
      <Text component="h2">
        Second level
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
      </Text>
      <Text component="p">
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
        Curabitur accumsan turpis pharetra
        <strong>
          augue tincidunt
          <Icon isInline>
            <PlusCircleIcon />
          </Icon>
        </strong>
        blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
        venenatis. Suspendisse potenti.
      </Text>
      <small>
        Sometimes you need small text
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
      </small>
      Inline with size specified:
      <Icon size="sm" isInline>
        <PlusCircleIcon />
      </Icon>
      small,
      <Icon size="md" isInline>
        <PlusCircleIcon />
      </Icon>
      medium,
      <Icon size="lg" isInline>
        <PlusCircleIcon />
      </Icon>
      large,
      <Icon size="xl" isInline>
        <PlusCircleIcon />
      </Icon>
      extra large
    </TextContent>
  </React.Fragment>
);
