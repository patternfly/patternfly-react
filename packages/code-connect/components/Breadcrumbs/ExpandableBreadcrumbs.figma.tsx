import figma from '@figma/code-connect';
import { Badge, BreadcrumbItem, Dropdown, DropdownItem, DropdownList, Icon, MenuToggle } from '@patternfly/react-core';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

// Documentation for BreadcrumbItem can be found at https://www.patternfly.org/components/breadcrumb

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=19922-43760',
  {
    props: {},
    example: () => (
      <BreadcrumbItem isDropdown>
        <Dropdown
          onSelect={() => {}}
          onOpenChange={() => {}}
          toggle={() => (
            <MenuToggle
              size="sm"
              badge={
                <Badge isRead screenReaderText="additional items">
                  01
                </Badge>
              }
              onClick={() => {}}
              isExpanded={false}
              variant="plainText"
            />
          )}
          isOpen={false}
        >
          <DropdownList>
            <DropdownItem
              icon={
                <Icon shouldMirrorRTL>
                  <AngleLeftIcon />
                </Icon>
              }
              key="edit"
            >
              Edit
            </DropdownItem>
            ,
            <DropdownItem
              icon={
                <Icon shouldMirrorRTL>
                  <AngleLeftIcon />
                </Icon>
              }
              key="action"
            >
              Deployment
            </DropdownItem>
            ,
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
          </DropdownList>
        </Dropdown>
      </BreadcrumbItem>
    )
  }
);
