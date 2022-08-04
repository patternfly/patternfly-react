import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  Checkbox
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const DescriptionListWithDisplaySize: React.FunctionComponent = () => {
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
          id="toggle-display-size"
          name="toggle-display-size"
        />
      </div>
      <DescriptionList displaySize={displaySize} columnModifier={{ lg: '2Col' }}>
        <DescriptionListGroup>
          <DescriptionListTerm>Name</DescriptionListTerm>
          <DescriptionListDescription>Example</DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Namespace</DescriptionListTerm>
          <DescriptionListDescription>
            <a href="#">mary-test</a>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Labels</DescriptionListTerm>
          <DescriptionListDescription>example</DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Pod selector</DescriptionListTerm>
          <DescriptionListDescription>
            <Button variant="link" isInline icon={<PlusCircleIcon />}>
              app=MyApp
            </Button>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Annotation</DescriptionListTerm>
          <DescriptionListDescription>2 Annotations</DescriptionListDescription>
        </DescriptionListGroup>
      </DescriptionList>
    </>
  );
};
