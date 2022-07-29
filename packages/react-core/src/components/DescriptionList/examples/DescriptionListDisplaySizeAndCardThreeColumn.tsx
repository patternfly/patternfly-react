import React from 'react';
import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, Card } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const DescriptionListDisplayLgAndCardThreeColumn: React.FunctionComponent = () => (
  <DescriptionList displaySize="lg" columnModifier={{ lg: '3Col' }}>
    <Card component="div">
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription>
        <a href="#">mary-test</a>
      </DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Labels</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Pod selector</DescriptionListTerm>
      <DescriptionListDescription>
        <Button variant="link" isInline icon={<PlusCircleIcon />}>
          app=MyApp
        </Button>
      </DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Annotation</DescriptionListTerm>
      <DescriptionListDescription>2 Annotations</DescriptionListDescription>
    </Card>
  </DescriptionList>
);
