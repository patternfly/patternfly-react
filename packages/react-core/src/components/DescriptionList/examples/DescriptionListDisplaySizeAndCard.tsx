import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListDescription,
  Card,
  Checkbox
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const DescriptionListDisplaySizeAndCard: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [displaySize, setDisplaySize] = React.useState<'lg' | '2xl'>('lg');

  const toggleDisplaySize = (checked: boolean) => {
    setDisplaySize(checked ? '2xl' : 'lg');
    setIsChecked(checked);
  };

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          label="displaySize 2xl"
          isChecked={isChecked}
          onChange={toggleDisplaySize}
          aria-label="set display size 2xl"
          id="toggle-display-size-with-card"
          name="toggle-display-size-with-card"
        />
      </div>
      <DescriptionList displaySize={displaySize} columnModifier={{ lg: '2Col' }}>
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
    </>
  );
};
