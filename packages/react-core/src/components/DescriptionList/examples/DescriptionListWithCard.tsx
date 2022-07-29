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

export const DescriptionListWithCard: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isSelectable, setSelectable] = React.useState<boolean>(false);

  const toggleSelectable = (checked: boolean) => {
    setSelectable(checked ? true : false);
    setIsChecked(checked);
  };
  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          label="isSelectable"
          isChecked={isChecked}
          onChange={toggleSelectable}
          aria-label="set isSelectable"
          id="toggle-isSelectable"
          name="toggle-isSelectable"
        />
      </div>
      <DescriptionList columnModifier={{ lg: '2Col' }}>
        <Card component="div" isSelectable={isSelectable}>
          <DescriptionListTerm>Name</DescriptionListTerm>
          <DescriptionListDescription>Example</DescriptionListDescription>
        </Card>
        <Card component="div" isSelectable={isSelectable}>
          <DescriptionListTerm>Namespace</DescriptionListTerm>
          <DescriptionListDescription>
            <a href="#">mary-test</a>
          </DescriptionListDescription>
        </Card>
        <Card component="div" isSelectable={isSelectable}>
          <DescriptionListTerm>Labels</DescriptionListTerm>
          <DescriptionListDescription>example</DescriptionListDescription>
        </Card>
        <Card component="div" isSelectable={isSelectable}>
          <DescriptionListTerm>Pod selector</DescriptionListTerm>
          <DescriptionListDescription>
            <Button variant="link" isInline icon={<PlusCircleIcon />}>
              app=MyApp
            </Button>
          </DescriptionListDescription>
        </Card>
        <Card component="div" isSelectable={isSelectable}>
          <DescriptionListTerm>Annotation</DescriptionListTerm>
          <DescriptionListDescription>2 Annotations</DescriptionListDescription>
        </Card>
      </DescriptionList>
    </>
  );
};
