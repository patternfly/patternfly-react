import React from 'react';
import { Hint, HintTitle, HintBody, HintFooter, Button } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core/deprecated';

export const HintBasicWithTitle: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onToggle = (_event: any, isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="action" component="button">
      Action
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemDeprecated>,
    <DropdownSeparator key="separator" />,
    <DropdownItemDeprecated key="separated link">Separated Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="separated action" component="button">
      Separated Action
    </DropdownItemDeprecated>
  ];
  const actions = (
    <DropdownDeprecated
      onSelect={onSelect}
      toggle={<KebabToggle onToggle={onToggle} id="hint-kebab-toggle" />}
      isOpen={isOpen}
      dropdownItems={dropdownItems}
      position="right"
      isPlain
    />
  );
  return (
    <Hint actions={actions}>
      <HintTitle>Do more with Find it Fix it capabilities</HintTitle>
      <HintBody>
        Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
      </HintBody>
      <HintFooter>
        <Button variant="link" isInline>
          Try it for 90 days
        </Button>
      </HintFooter>
    </Hint>
  );
};
