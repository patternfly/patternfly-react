import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  Badge,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

const dropdownItems = [
  <DropdownItem icon={<AngleLeftIcon />} key="edit">
    Edit
  </DropdownItem>,
  <DropdownItem icon={<AngleLeftIcon />} key="action">
    Deployment
  </DropdownItem>,
  <DropdownItem icon={<AngleLeftIcon />} key="apps">
    Applications
  </DropdownItem>
];

export const BreadcrumbDropdown: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const badgeToggleRef = React.useRef<HTMLButtonElement>();

  const onToggle = () => setIsOpen(!isOpen);

  const onSelect = () => {
    setIsOpen((prevIsOpen: boolean) => !prevIsOpen);
    badgeToggleRef?.current?.focus();
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem component="button">Section home</BreadcrumbItem>
      <BreadcrumbItem isDropdown>
        <Dropdown
          onSelect={onSelect}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle ref={toggleRef} onClick={onToggle} isExpanded={isOpen} variant="plain">
              <Badge isRead screenReaderText="additional items">
                {dropdownItems.length}{' '}
                <span>
                  <CaretDownIcon />
                </span>
              </Badge>
            </MenuToggle>
          )}
          isOpen={isOpen}
        >
          <DropdownList>{dropdownItems.map((dropdownItem) => dropdownItem)}</DropdownList>
        </Dropdown>
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Section title</BreadcrumbHeading>
    </Breadcrumb>
  );
};
