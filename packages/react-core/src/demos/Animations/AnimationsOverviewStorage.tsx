import { useState } from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Flex,
  Button,
  Dropdown,
  DropdownItem,
  MenuToggle,
  CardHeader,
  DropdownList,
  FlexItem
} from '../..';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/dist/esm/victory/components';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const StorageCard: React.FunctionComponent = () => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);

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
    <Card component="div" isFullHeight>
      <CardHeader
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
            <StorageDomainIcon />
            <span>Storage</span>
          </Flex>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Flex direction={{ default: 'row' }} spaceItems={{ default: 'spaceItemsSm' }}>
          <FlexItem>
            <ChartDonutThreshold
              ariaDesc="Mock storage capacity"
              ariaTitle="Mock donut utilization chart"
              constrainToVisibleArea={true}
              data={[
                { x: 'Warning at 60%', y: 60 },
                { x: 'Danger at 90%', y: 90 }
              ]}
              height={200}
              labels={({ datum }) => (datum.x ? datum.x : null)}
              padding={{
                bottom: 0,
                left: 10,
                right: 10,
                top: 0
              }}
              width={200}
            >
              <ChartDonutUtilization
                data={{ x: 'Storage capacity', y: 80 }}
                labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
                title="80%"
                subTitle="CPU"
                thresholds={[{ value: 60 }, { value: 90 }]}
              />
            </ChartDonutThreshold>
          </FlexItem>
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
StorageCard.displayName = 'StorageCard';

export default StorageCard;
