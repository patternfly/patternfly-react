import React, { ReactNode } from 'react';
import { Card, Label, PageSection, TextVariants, Text, TextContent } from '@patternfly/react-core';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';

const expandableColumns = ['Servers', 'Threads', 'Applications', 'Workspaces', 'Status'];

interface Server {
  name: string;
  threads: number;
  applications: number;
  workspaces: number;
  status: { title: ReactNode };
  details: ReactNode;
}

const serverData: Server[] = [
  {
    name: 'US-Node 1',
    threads: 18,
    applications: 42,
    workspaces: 7,
    status: { title: <Label color="green">Running</Label> },
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Location<Text component={TextVariants.small}>Boston</Text>
        </Text>
        <Text component={TextVariants.p}>
          Last Modified<Text component={TextVariants.small}>2 hours ago</Text>
        </Text>
        <Text component={TextVariants.p}>
          URL<Text component={TextVariants.small}>http://www.redhat.com/en/office-locations/US-node1</Text>
        </Text>
      </TextContent>
    )
  },
  {
    name: 'US-Node 2',
    threads: 9,
    applications: 24,
    workspaces: 17,
    status: { title: <Label color="red">Down</Label> },
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Location<Text component={TextVariants.small}>Atlanta</Text>
        </Text>
        <Text component={TextVariants.p}>
          Last Modified<Text component={TextVariants.small}>5 hours ago</Text>
        </Text>
        <Text component={TextVariants.p}>
          URL<Text component={TextVariants.small}>http://www.redhat.com/en/office-locations/US-node2</Text>
        </Text>
      </TextContent>
    )
  },
  {
    name: 'US-Node 3',
    threads: 8,
    applications: 47,
    workspaces: 3,
    status: { title: <Label color="green">Running</Label> },
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Location<Text component={TextVariants.small}>San Francisco</Text>
        </Text>
        <Text component={TextVariants.p}>
          Last Modified<Text component={TextVariants.small}>20 minutes ago</Text>
        </Text>
        <Text component={TextVariants.p}>
          URL<Text component={TextVariants.small}>http://www.redhat.com/en/office-locations/US-node3</Text>
        </Text>
      </TextContent>
    )
  },
  {
    name: 'US-Node 4',
    threads: 6,
    applications: 4,
    workspaces: 15,
    status: { title: <Label color="blue">Needs Maintenance</Label> },
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Location<Text component={TextVariants.small}>Raleigh</Text>
        </Text>
        <Text component={TextVariants.p}>
          Last Modified<Text component={TextVariants.small}>10 minutes ago</Text>
        </Text>
        <Text component={TextVariants.p}>
          URL<Text component={TextVariants.small}>http://www.redhat.com/en/office-locations/US-node4</Text>
        </Text>
      </TextContent>
    )
  },
  {
    name: 'US-Node 5',
    threads: 9,
    applications: 24,
    workspaces: 17,
    status: { title: <Label color="orange">Stopped</Label> },
    details: (
      <TextContent>
        <Text component={TextVariants.p}>
          Location<Text component={TextVariants.small}>Atlanta</Text>
        </Text>
        <Text component={TextVariants.p}>
          Last Modified<Text component={TextVariants.small}>15 minutes ago</Text>
        </Text>
        <Text component={TextVariants.p}>
          URL<Text component={TextVariants.small}>http://www.redhat.com/en/office-locations/US-node5</Text>
        </Text>
      </TextContent>
    )
  }
];

const initialExpandedServerNames = ['US-Node 2']; // Default to expanded

export const TableExpandCollapseAll: React.FunctionComponent = () => {
  const [areAllExpanded, setAreAllExpanded] = React.useState(false);
  const [collapseAllAriaLabel, setCollapseAllAriaLabel] = React.useState('Expand all');
  const [expandedServerNames, setExpandedServerNames] = React.useState(initialExpandedServerNames);

  React.useEffect(() => {
    const allExpanded = expandedServerNames.length === serverData.length;
    setAreAllExpanded(allExpanded);
    setCollapseAllAriaLabel(allExpanded ? 'Collapse all' : 'Expand all');
  }, [expandedServerNames]);

  const setServerExpanded = (server: Server, isExpanding: boolean) => {
    const otherExpandedServerNames = expandedServerNames.filter((r) => r !== server.name);
    setExpandedServerNames(isExpanding ? [...otherExpandedServerNames, server.name] : otherExpandedServerNames);
  };

  const isServerExpanded = (server: Server) => expandedServerNames.includes(server.name);

  // We want to be able to reference the original data object based on row index. But because an expanded
  // row takes up two row indexes, servers[rowIndex] will not be accurate like it would in a normal table.
  // One solution to this is to create an array of data objects indexed by the displayed row index.

  const onCollapseAll = (_event: any, _rowIndex: number, isOpen: boolean) => {
    setExpandedServerNames(isOpen ? [...serverData.map((server) => server.name)] : []);
  };

  return (
    <React.Fragment>
      <DashboardWrapper hasPageTemplateTitle>
        <PageSection
          padding={{
            default: 'noPadding',
            xl: 'padding'
          }}
        >
          <Card component="div">
            <Table aria-label="Collapsible table">
              <Thead>
                <Tr>
                  <Th
                    expand={{
                      areAllExpanded: !areAllExpanded,
                      collapseAllAriaLabel,
                      onToggle: onCollapseAll
                    }}
                    aria-label="Row expansion"
                  />
                  {expandableColumns.map((column) => (
                    <Th key={column}>{column}</Th>
                  ))}
                </Tr>
              </Thead>

              {serverData.map((server, serverIndex) => (
                <Tbody key={server.name} isExpanded={isServerExpanded(server)}>
                  <Tr>
                    <Td
                      expand={
                        server.details
                          ? {
                              rowIndex: serverIndex,
                              isExpanded: isServerExpanded(server),
                              onToggle: () => setServerExpanded(server, !isServerExpanded(server))
                            }
                          : undefined
                      }
                    >
                      <ExpandableRowContent>{server.details}</ExpandableRowContent>
                    </Td>
                    <Td>{server?.name}</Td>
                    <Td>{server?.threads}</Td>
                    <Td>{server?.applications}</Td>
                    <Td>{server?.workspaces}</Td>
                    <Td>{server?.status?.title}</Td>
                  </Tr>
                  <Tr isExpanded={isServerExpanded(server)}>
                    <Td></Td>
                    <Td colSpan={expandableColumns.length}>
                      <ExpandableRowContent>{server?.details}</ExpandableRowContent>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
