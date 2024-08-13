import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHeading,
  Badge,
  Dropdown,
  DropdownList,
  DropdownItem,
  Icon,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

const dropdownItems = [
  <DropdownItem
    icon={
      <Icon shouldMirrorRTL>
        <AngleLeftIcon />
      </Icon>
    }
    key="edit"
  >
    Edit
  </DropdownItem>,
  <DropdownItem
    icon={
      <Icon shouldMirrorRTL>
        <AngleLeftIcon />
      </Icon>
    }
    key="action"
  >
    Deployment
  </DropdownItem>,
  <DropdownItem
    icon={
      <Icon shouldMirrorRTL>
        <AngleLeftIcon />
      </Icon>
    }
    key="apps"
  >
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
            <MenuToggle
              size="sm"
              badge={
                <Badge isRead screenReaderText="additional items">
                  {dropdownItems.length}
                </Badge>
              }
              ref={toggleRef}
              onClick={onToggle}
              isExpanded={isOpen}
              variant="plainText"
            />
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
