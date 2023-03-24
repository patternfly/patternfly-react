import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  BadgeToggle,
  DropdownItem as DropdownItemDeprecated
} from '@patternfly/react-core/deprecated';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

const dropdownItems: JSX.Element[] = [
  <DropdownItemDeprecated key="edit" component="button" icon={<AngleLeftIcon />}>
    Edit
  </DropdownItemDeprecated>,
  <DropdownItemDeprecated key="action" component="button" icon={<AngleLeftIcon />}>
    Deployment
  </DropdownItemDeprecated>,
  <DropdownItemDeprecated key="apps" component="button" icon={<AngleLeftIcon />}>
    Applications
  </DropdownItemDeprecated>
];

export const BreadcrumbDropdown: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const badgeToggleRef = React.useRef<HTMLButtonElement>();

  const onToggle = (_event: any, isOpen: boolean) => setIsOpen(isOpen);

  const onSelect = () => {
    setIsOpen((prevIsOpen: boolean) => !prevIsOpen);
    badgeToggleRef?.current?.focus();
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem component="button">Section home</BreadcrumbItem>
      <BreadcrumbItem isDropdown>
        <DropdownDeprecated
          onSelect={onSelect}
          toggle={
            <BadgeToggle ref={badgeToggleRef} onToggle={onToggle}>
              {dropdownItems.length}
            </BadgeToggle>
          }
          isOpen={isOpen}
          dropdownItems={dropdownItems}
        />
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Section title</BreadcrumbHeading>
    </Breadcrumb>
  );
};
