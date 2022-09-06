import React from 'react';
import { Card, Label, PageSection, Table, TableHeader, TableBody, expandable } from '@patternfly/react-table';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import { TextVariants } from '@patternfly/react-core';

const expandableColumns = [
  {
    title: 'Servers',
    cellFormatters: [expandable]
  },
  'Threads',
  'Applications',
  'Workspaces',
  'Status'
];

const serverData = [
  {
    name: 'US-Node 1',
    threads: 18,
    applications: 42,
    workspaces: 7,
    status: { title: <Label color="orange">Stopped</Label> },
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

class ExpandCollapseAllTableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      selectedRows: 0,
      expandedRows: 0,
      expandCollapseToggle: 'expand',
      collapseAllAriaLabel: 'Expand all',
      expandedServerNames: initialExpandedServerNames
    };
  }

  setServerExpanded = (server, isExpanding) => {
    this.setState(() => {
      const otherExpandedServerNames = this.state.expandedServerNames.filter(r => r !== server.name);
      return {
        expandedServerNames: isExpanding ? [...otherExpandedServerNames, server.name] : otherExpandedServerNames
      };
    });
  };

  render() {
    const { collapseAllAriaLabel } = this.state;

    const isServerExpanded = server => this.state.expandedServerNames.includes(server.name);
    // We want to be able to reference the original data object based on row index. But because an expanded
    // row takes up two row indexes, servers[rowIndex] will not be accurate like it would in a normal table.
    // One solution to this is to create an array of data objects indexed by the displayed row index.
    const serversByRowIndex = [];

    const rows = [];
    serverData.forEach(server => {
      rows.push({
        ...{ isOpen: isServerExpanded(server) },
        cells: [server.name, server.threads, server.applications, server.workspaces, server.status]
      });
      serversByRowIndex.push(server);
      if (server.details) {
        const cells = [];

        cells.push({
          title: server.details
        });

        rows.push({
          parent: rows.length - 1,
          cells
        });
        serversByRowIndex.push(null);
      }
    });

    const onCollapse = (_e, rowIndex, isOpen) => {
      const collapseAll = rowIndex === undefined;

      if (collapseAll) {
        this.setState(() => {
          return {
            expandedServerNames: isOpen ? [...serverData.map((server) => server.name)] : [] 
          };
        });

      }
      else if (serversByRowIndex[rowIndex]) {
        this.setServerExpanded(serversByRowIndex[rowIndex], isOpen);
      }
    }

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
              <Table
                aria-label="Collapsible table"
                onCollapse={onCollapse}
                rows={rows}
                cells={expandableColumns}
                canCollapseAll={true}
                collapseAllAriaLabel={collapseAllAriaLabel}
                expandId="expand-collapse-all-demo"
              >
                <TableHeader />
                <TableBody />
              </Table>
            </Card>
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
