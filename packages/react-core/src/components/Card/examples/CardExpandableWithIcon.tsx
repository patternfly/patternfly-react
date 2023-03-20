import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardExpandableContent, Checkbox } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core/deprecated';
import pfLogoSmall from './pf-logo-small.svg';

export const CardExpandableWithIcon: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const onExpand = (event: React.MouseEvent, id: string) => {
    // eslint-disable-next-line no-console
    console.log(id);
    setIsExpanded(!isExpanded);
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

  const headerActions = (
    <>
      <DropdownDeprecated
        onSelect={onSelect}
        toggle={<KebabToggle onToggle={(_event: any, isOpen: boolean) => setIsOpen(isOpen)} />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
        position={'right'}
      />
      <Checkbox
        isChecked={isChecked}
        onChange={(_event, checked) => onClick(checked)}
        aria-label="card checkbox example"
        id="check-5"
        name="check5"
      />
    </>
  );

  return (
    <Card id="expandable-card-icon" isExpanded={isExpanded}>
      <CardHeader
        actions={{ actions: headerActions }}
        onExpand={onExpand}
        toggleButtonProps={{
          id: 'toggle-button2',
          'aria-label': 'Patternfly Details',
          'aria-expanded': isExpanded
        }}
      >
        <img src={pfLogoSmall} alt="PatternFly logo" width="27px" />
      </CardHeader>
      <CardExpandableContent>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </CardExpandableContent>
    </Card>
  );
};
