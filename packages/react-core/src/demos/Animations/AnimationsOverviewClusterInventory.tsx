import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  Flex,
  FlexItem,
  Button,
  Icon
} from '../..';

import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

export const ClusterInventoryCard: React.FunctionComponent = () => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  // Data for the list items in the card body
  const inventoryItems = [
    { icon: <CubesIcon />, text: '15 Deployments' },
    { icon: <CubesIcon />, text: '15 Deployments' },
    { icon: <CubesIcon />, text: '15 Deployments' },
    { icon: <CubesIcon />, text: '15 Deployments' },
    { icon: <CubeIcon />, text: '126 pods' }
  ];

  // Items for the kebab dropdown menu
  const dropdownItems = [
    <DropdownItem key="action1">Action 1</DropdownItem>,
    <DropdownItem key="action2">Action 2</DropdownItem>,
    <DropdownItem key="action3">Action 3</DropdownItem>
  ];

  // The kebab menu toggle button
  const kebabToggle = (toggleRef: React.Ref<any>) => (
    <MenuToggle
      ref={toggleRef}
      variant="plain"
      onClick={() => setIsKebabOpen(!isKebabOpen)}
      isExpanded={isKebabOpen}
      aria-label="Cluster inventory card kebab menu"
    >
      <EllipsisVIcon />
    </MenuToggle>
  );

  return (
    // To match the dark theme in your screenshot, we wrap the card in a div with a dark background.
    // The `isPlain` and `isFlat` props on the Card remove its default background and shadow so it blends in.
    <Card component="div" isFullHeight>
      <CardHeader
        // We use a Flex layout in the header to position the title and actions
        actions={{
          actions: (
            <Dropdown
              isOpen={isKebabOpen}
              onSelect={() => setIsKebabOpen(false)}
              onOpenChange={(isOpen: boolean) => setIsKebabOpen(isOpen)}
              toggle={kebabToggle}
              popperProps={{ position: 'right' }}
            >
              <DropdownList>{dropdownItems}</DropdownList>
            </Dropdown>
          ),
          hasNoOffset: false,
          className: ''
        }}
      >
        <CardTitle>
          <Flex alignItems={{ default: 'alignItemsCenter' }}>
            <ListIcon />
            <span> Cluster inventory</span>
          </Flex>
        </CardTitle>
      </CardHeader>
      <CardBody>
        {/* We use another Flex layout with column direction to stack the inventory items */}
        <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsMd' }}>
          {inventoryItems.map((item, index) => (
            <FlexItem key={index}>
              <Flex alignItems={{ default: 'alignItemsCenter' }} spaceItems={{ default: 'spaceItemsSm' }}>
                <FlexItem>
                  <Icon>{item.icon}</Icon>
                </FlexItem>
                <FlexItem>{item.text}</FlexItem>
              </Flex>
            </FlexItem>
          ))}
        </Flex>
      </CardBody>
      <CardFooter>
        <Button variant="link" isInline icon={<ArrowRightIcon />} iconPosition="end" component="a" href="#">
          Cluster details page
        </Button>
      </CardFooter>
    </Card>
  );
};
ClusterInventoryCard.displayName = 'ClusterInventoryCard';

export default ClusterInventoryCard;
