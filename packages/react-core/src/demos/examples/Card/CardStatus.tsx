/* eslint-disable camelcase */
import * as React from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Label,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerGroup,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Popover,
  Title,
  Icon
} from '@patternfly/react-core';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import t_global_text_color_subtle from '@patternfly/react-tokens/dist/esm/t_global_text_color_subtle';

export const CardStatus: React.FunctionComponent = () => {
  const [drawerExpanded, setDrawerExpanded] = React.useState(false);
  const handleDrawerToggleClick = () => {
    setDrawerExpanded(!drawerExpanded);
  };

  const [rowsExpanded, setRowsExpanded] = React.useState([false, false, false]);
  const handleToggleExpand = (_: any, rowIndex: number) => {
    const newRowsExpanded = [...rowsExpanded];
    newRowsExpanded[rowIndex] = !rowsExpanded[rowIndex];
    setRowsExpanded(newRowsExpanded);
  };

  const header = (
    <CardHeader>
      <Title headingLevel="h4" size="lg">
        Status
      </Title>
    </CardHeader>
  );

  const columns = ['Components', 'Response Rate'];

  const rows = [
    {
      content: ['API Servers', '20%'],
      child: (
        <Alert
          title="This is a critical alert that can be associated with the control panel."
          variant="danger"
          isInline
        ></Alert>
      )
    },
    {
      content: ['Controller Managers', '100%'],
      child: (
        <Alert
          title="This is a critical alert that can be associated with the control panel."
          variant="danger"
          isInline
        ></Alert>
      )
    },
    {
      content: ['etcd', '91%'],
      child: (
        <Alert
          title="This is a critical alert that can be associated with the control panel."
          variant="danger"
          isInline
        ></Alert>
      )
    }
  ];

  const popoverBodyContent = (
    <>
      <div>
        Components of the Control Panel are responsible for maintaining and reconciling the state of the cluster.
      </div>
      <Table variant="compact">
        <Thead>
          <Tr>
            <Th screenReaderText="Row expansion" />
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex} modifier="fitContent">
                {column}
              </Th>
            ))}
          </Tr>
        </Thead>
        {rows.map((row, rowIndex) => {
          const parentRow = (
            <Tr key={rowIndex}>
              <Td
                key={`${rowIndex}_0`}
                expand={row.child && { isExpanded: rowsExpanded[rowIndex], rowIndex, onToggle: handleToggleExpand }}
              />
              {row.content.map((cell, cellIndex) => (
                <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]} modifier="fitContent">
                  {cell}
                </Td>
              ))}
            </Tr>
          );
          const childRow = row.child ? (
            <Tr key={`${rowIndex}_child`} isExpanded={rowsExpanded[rowIndex]}>
              <Td key={`${rowIndex}_1`} colSpan={3} dataLabel={`${rowIndex}_child`}>
                <ExpandableRowContent>{row.child}</ExpandableRowContent>
              </Td>
            </Tr>
          ) : null;
          return (
            <Tbody key={rowIndex} isExpanded={rowsExpanded[rowIndex]}>
              {parentRow}
              {childRow}
            </Tbody>
          );
        })}
      </Table>
    </>
  );

  const body = (
    <CardBody>
      <Grid hasGutter sm={6} lg={3}>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="success">
                <CheckCircleIcon />
              </Icon>
            </FlexItem>
            <FlexItem>
              <span>Cluster</span>
            </FlexItem>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="danger">
                <ExclamationCircleIcon />
              </Icon>
            </FlexItem>
            <FlexItem>
              <Popover headerContent="Control Panel Status" bodyContent={popoverBodyContent} minWidth="400px">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Control Panel
                </a>
              </Popover>
            </FlexItem>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="danger">
                <ExclamationCircleIcon />
              </Icon>
            </FlexItem>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <a href="#">Operators</a>
              </FlexItem>
              <FlexItem>
                <span style={{ color: t_global_text_color_subtle.var }}>1 degraded</span>
              </FlexItem>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <Icon status="success">
                <CheckCircleIcon />
              </Icon>
            </FlexItem>
            <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
              <FlexItem>
                <a href="#">Image Vulnerabilities</a>
              </FlexItem>
              <FlexItem>
                <span style={{ color: t_global_text_color_subtle.var }}>0 vulnerabilities</span>
              </FlexItem>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </CardBody>
  );

  const drawerTitle = (
    <Flex spaceItems={{ default: 'spaceItemsSm' }}>
      <FlexItem spacer={{ default: 'spacerMd' }}>
        <span>Notifications</span>
      </FlexItem>
      <Label color="red" icon={<ExclamationCircleIcon />}>
        1
      </Label>
      <Label color="orange" icon={<ExclamationTriangleIcon />}>
        3
      </Label>
      <Label color="green" icon={<CheckCircleIcon />}>
        3
      </Label>
      <Label color="blue" icon={<ExclamationCircleIcon />}>
        3
      </Label>
      <Label color="green" icon={<BellIcon />}>
        3
      </Label>
    </Flex>
  );

  const drawer = (
    <NotificationDrawer>
      <NotificationDrawerBody>
        <NotificationDrawerGroup
          count={0}
          onExpand={handleDrawerToggleClick}
          isExpanded={drawerExpanded}
          title={drawerTitle}
          headingLevel="h4"
        >
          <NotificationDrawerList isHidden={!drawerExpanded}>
            <NotificationDrawerListItem variant="danger">
              <NotificationDrawerListItemHeader
                variant="danger"
                headingLevel="h5"
                title="Critical alert regarding control plane"
              />
              <NotificationDrawerListItemBody>
                This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="warning">
              <NotificationDrawerListItemHeader variant="warning" headingLevel="h5" title="Warning alert" />
              <NotificationDrawerListItemBody>
                This is a warning notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        </NotificationDrawerGroup>
      </NotificationDrawerBody>
    </NotificationDrawer>
  );

  return (
    <Card>
      {header}
      {body}
      <Divider />
      {drawer}
    </Card>
  );
};
