import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Dropdown, DropdownList, DropdownItem, MenuToggle, Flex } from '../..';

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import ServerAltIcon from '@patternfly/react-icons/dist/esm/icons/server-alt-icon';

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/dist/esm/victory/components';

export const NetworkActivityCard: React.FunctionComponent = () => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  // Data for the chart
  const chartData = [
    { name: 'Network Activity', x: '1', y: 10 },
    { name: 'Network Activity', x: '2', y: 8 },
    { name: 'Network Activity', x: '3', y: 6 },
    { name: 'Network Activity', x: '4', y: 5 },
    { name: 'Network Activity', x: '5', y: 5.5 },
    { name: 'Network Activity', x: '6', y: 5 },
    { name: 'Network Activity', x: '7', y: 4 },
    { name: 'Network Activity', x: '8', y: 4.5 },
    { name: 'Network Activity', x: '9', y: 4.5 },
    { name: 'Network Activity', x: '10', y: 0 }
  ];

  // Items for the kebab dropdown menu
  const dropdownItems = [
    <DropdownItem key="action1">View details</DropdownItem>,
    <DropdownItem key="action2">Refresh data</DropdownItem>,
    <DropdownItem key="action3">Settings</DropdownItem>
  ];

  // The kebab menu toggle button
  const kebabToggle = (toggleRef: React.Ref<any>) => (
    <MenuToggle
      ref={toggleRef}
      variant="plain"
      onClick={() => setIsKebabOpen(!isKebabOpen)}
      isExpanded={isKebabOpen}
      aria-label="Network activity card kebab menu"
    >
      <EllipsisVIcon />
    </MenuToggle>
  );

  return (
    // To match the dark theme, we wrap the card in a div with a dark background.
    // The `isPlain` and `isFlat` props on the Card remove its default styling.
    <div>
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
              <ServerAltIcon />
              <span>Network activity</span>
            </Flex>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            ariaDesc="Network activity chart"
            ariaTitle="Network activity chart"
            containerComponent={
              <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
            }
            height={250}
            padding={{
              bottom: 50,
              left: 50,
              right: 20,
              top: 20
            }}
            themeColor={ChartThemeColor.multi}
            width={400}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              <ChartArea
                data={chartData}
                interpolation="catmullRom" // This creates the smooth curve
                style={{
                  data: {
                    stroke: '#0066CC', // Line color
                    fill: 'rgba(0, 102, 204, 0.4)' // Area fill color with opacity
                  }
                }}
              />
            </ChartGroup>
          </Chart>
        </CardBody>
      </Card>
    </div>
  );
};
NetworkActivityCard.displayName = 'NetworkActivityCard';

export default NetworkActivityCard;
