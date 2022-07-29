import React from 'react';
import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, Card } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const DescriptionListDisplaySizeAndCardHorizontalTermWidth: React.FunctionComponent = () => (
  <DescriptionList displaySize="lg" isHorizontal columnModifier={{ lg: '2Col' }} termWidth="10ch">
    <Card>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </Card>
    <Card>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription>
        <a href="#">mary-test</a>
      </DescriptionListDescription>
    </Card>
    <Card>
      <DescriptionListTerm>Labels</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </Card>
    <Card>
      <DescriptionListTerm>Pod selector</DescriptionListTerm>
      <DescriptionListDescription>
        <Button variant="link" isInline icon={<PlusCircleIcon />}>
          app=MyApp
        </Button>
      </DescriptionListDescription>
    </Card>
    <Card>
      <DescriptionListTerm>Annotation</DescriptionListTerm>
      <DescriptionListDescription>2 Annotations</DescriptionListDescription>
    </Card>
  </DescriptionList>
);
