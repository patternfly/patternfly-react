import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ThProps } from '@patternfly/react-table';
import { Stack, StackItem } from '@patternfly/react-core';

interface PodConnection {
  source: {
    podName: string;
    port: { num: number; protocol: string };
  };
  destination: {
    podName: string;
    port: { num: number; protocol: string };
  };
  timestamp: string;
  protocol: string;
  flowRate: string;
  traffic: string;
  packets: number;
}

export const ComposableTableNestedHeaders: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const connections: PodConnection[] = [
    {
      source: { podName: 'api-pod-source-name', port: { num: 443, protocol: 'HTTPS' } },
      destination: { podName: 'api-pod-destination-name', port: { num: 24, protocol: 'SMTP' } },
      timestamp: '2021-06-22T19:58:24.000Z',
      protocol: 'TCP',
      flowRate: '1.9 Kbps',
      traffic: '2.1 KB',
      packets: 3
    },
    {
      source: { podName: 'api-pod-source2-name', port: { num: 80, protocol: 'HTTP' } },
      destination: { podName: 'api-pod-destination2-name', port: { num: 24, protocol: 'SMTP' } },
      timestamp: '2021-06-22T21:42:01.000Z',
      protocol: 'UDP',
      flowRate: '3.4 Kbps',
      traffic: '6.1 KB',
      packets: 7
    }
  ];

  const columnNames = {
    pods: 'Pods',
    source: 'Source',
    destination: 'Destination',
    datetime: 'Date & Time',
    ports: 'Ports',
    protocol: 'Protocol',
    flowRate: 'Flow rate',
    traffic: 'Traffic',
    packets: 'Packets'
  };

  // Index of the currently sorted column
  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key
  // as the identifier of the sorted column. See the "Compound expandable" example.
  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);

  // Sort direction of the currently sorted column
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);

  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.
  const getSortableRowValues = (connection: PodConnection): (string | number)[] => {
    const { source, destination, timestamp, protocol, flowRate, traffic, packets } = connection;
    return [
      source.podName,
      destination.podName,
      timestamp,
      source.port.num,
      destination.port.num,
      protocol,
      flowRate,
      traffic,
      packets
    ];
  };

  // Note that we perform the sort as part of the component's render logic and not in onSort.
  // We shouldn't store the list of data in state because we don't want to have to sync that with props.
  let sortedConnections = connections;
  if (activeSortIndex !== null) {
    sortedConnections = connections.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (typeof aValue === 'number') {
        // Numeric sort
        if (activeSortDirection === 'asc') {
          return (aValue as number) - (bValue as number);
        }
        return (bValue as number) - (aValue as number);
      } else {
        // String sort
        if (activeSortDirection === 'asc') {
          return (aValue as string).localeCompare(bValue as string);
        }
        return (bValue as string).localeCompare(aValue as string);
      }
    });
  }

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
    },
    columnIndex
  });

  return (
    <InnerScrollContainer>
      <TableComposable aria-label="Nested column headers table" gridBreakPoint="">
        <Thead hasNestedHeader>
          <Tr>
            <Th hasRightBorder colSpan={3}>
              {columnNames.pods}
            </Th>
            <Th hasRightBorder colSpan={2}>
              {columnNames.ports}
            </Th>
            <Th modifier="fitContent" hasRightBorder rowSpan={2} sort={getSortParams(5)}>
              {columnNames.protocol}
            </Th>
            <Th modifier="fitContent" hasRightBorder rowSpan={2} sort={getSortParams(6)}>
              {columnNames.flowRate}
            </Th>
            <Th modifier="fitContent" hasRightBorder rowSpan={2} sort={getSortParams(7)}>
              {columnNames.traffic}
            </Th>
            <Th modifier="fitContent" rowSpan={2} sort={getSortParams(8)}>
              {columnNames.packets}
            </Th>
          </Tr>
          <Tr>
            <Th isSubheader sort={getSortParams(0)}>
              {columnNames.source}
            </Th>
            <Th isSubheader sort={getSortParams(1)}>
              {columnNames.destination}
            </Th>
            <Th isSubheader modifier="fitContent" hasRightBorder sort={getSortParams(2)}>
              {columnNames.datetime}
            </Th>
            <Th isSubheader modifier="fitContent" sort={getSortParams(3)}>
              {columnNames.source}
            </Th>
            <Th isSubheader modifier="fitContent" hasRightBorder sort={getSortParams(4)}>
              {columnNames.destination}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedConnections.map(connection => (
            <Tr key={connection.source.podName}>
              <Td dataLabel={columnNames.source}>{connection.source.podName}</Td>
              <Td dataLabel={columnNames.destination}>{connection.destination.podName}</Td>\
              <Td dataLabel={columnNames.datetime}>
                <div>
                  <span>{new Date(connection.timestamp).toDateString()}</span>{' '}
                  <span className="pf-u-color-200">{new Date(connection.timestamp).toLocaleTimeString()}</span>
                </div>
              </Td>
              <Td dataLabel={columnNames.source}>
                <Stack>
                  <StackItem>
                    <span>{connection.source.port.num}</span>
                  </StackItem>
                  <StackItem>
                    <span className="pf-u-color-200">({connection.source.port.protocol})</span>
                  </StackItem>
                </Stack>
              </Td>
              <Td dataLabel={columnNames.destination}>
                <Stack>
                  <StackItem>
                    <span>{connection.destination.port.num}</span>
                  </StackItem>
                  <StackItem>
                    <span className="pf-u-color-200">({connection.destination.port.protocol})</span>
                  </StackItem>
                </Stack>
              </Td>
              <Td dataLabel={columnNames.protocol}>{connection.protocol}</Td>
              <Td dataLabel={columnNames.flowRate}>{connection.flowRate}</Td>
              <Td dataLabel={columnNames.traffic}>{connection.traffic}</Td>
              <Td dataLabel={columnNames.packets}>{connection.packets}</Td>
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </InnerScrollContainer>
  );
};
