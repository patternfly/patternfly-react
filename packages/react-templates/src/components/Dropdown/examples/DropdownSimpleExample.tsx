import React from 'react';
import { Checkbox, Flex, FlexItem } from '@patternfly/react-core';
import { DropdownSimple, DropdownSimpleItem } from '@patternfly/react-templates';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const DropdownSimpleExample: React.FunctionComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  const items: DropdownSimpleItem[] = [
    // eslint-disable-next-line no-console
    { content: 'Action', value: 1, onClick: () => console.log('Action clicked') },
    // Prevent default click behavior on link for example purposes
    { content: 'Link', value: 2, to: '#', onClick: (event: any) => event.preventDefault() },
    { content: 'Disabled Action', value: 3, isDisabled: true },
    { value: 'separator', isDivider: true },
    // eslint-disable-next-line no-console
    { content: 'Second action', value: 4, onClick: () => console.log('Second action clicked') }
  ];

  return (
    <React.Fragment>
      <Checkbox
        id="simple-example-disabled-toggle"
        label="Disable dropdown simple toggles"
        isChecked={isDisabled}
        onChange={(_event: React.FormEvent<HTMLInputElement>, checked: boolean) => setIsDisabled(checked)}
        style={{ marginBottom: 20 }}
      />
      <Flex gap={{ default: 'gapLg' }}>
        <FlexItem>
          <DropdownSimple initialItems={items} isDisabled={isDisabled} toggleContent="Dropdown" />
        </FlexItem>
        <FlexItem>
          <DropdownSimple
            toggleVariant="plainText"
            initialItems={items}
            isDisabled={isDisabled}
            toggleContent="Dropdown with plainText styling"
          />
        </FlexItem>
        <FlexItem>
          <DropdownSimple
            toggleVariant="plain"
            initialItems={items}
            isDisabled={isDisabled}
            toggleContent={<EllipsisVIcon aria-hidden="true" />}
            toggleAriaLabel="Plain dropdown toggle"
          />
        </FlexItem>
      </Flex>
    </React.Fragment>
  );
};
