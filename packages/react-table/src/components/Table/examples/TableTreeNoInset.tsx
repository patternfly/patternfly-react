import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, TreeRowWrapper, TdProps } from '@patternfly/react-table';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';

interface RepositoriesTreeNode {
  name: string;
  branches: string;
  pullRequests: string;
  workspaces: string;
  children?: RepositoriesTreeNode[];
}

export const TableTreeNoInset: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const data: RepositoriesTreeNode[] = [
    {
      name: 'Repositories one',
      branches: 'Branch one',
      pullRequests: 'Pull request one',
      workspaces: 'Workplace one',
      children: []
    },
    {
      name: 'Repositories seven',
      branches: 'Branch seven',
      pullRequests: 'Pull request seven',
      workspaces: 'Workplace seven',
      children: []
    },
    {
      name: 'Repositories nine',
      branches: 'Branch nine',
      pullRequests: 'Pull request nine',
      workspaces: 'Workplace nine'
    }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces'
  };

  const [selectedNodeNames, setSelectedNodeNames] = React.useState<string[]>([]);
  const isNodeChecked = (node: RepositoriesTreeNode) => selectedNodeNames.includes(node.name);

  /**
   Recursive function which flattens the data into an array of flattened TreeRowWrapper components
   params:
   - nodes - array of a single level of tree nodes
   - level - number representing how deeply nested the current row is
   - posinset - position of the row relative to this row's siblings
   - currentRowIndex - position of the row relative to the entire table
   - isHidden - defaults to false, true if this row's parent is expanded
   */
  const renderRows = (
    [node, ...remainingNodes]: RepositoriesTreeNode[],
    level = 1,
    posinset = 1,
    rowIndex = 0,
    isHidden = false
  ): React.ReactNode[] => {
    if (!node) {
      return [];
    }
    const isChecked = isNodeChecked(node);
    const icon = <LeafIcon />;

    const treeRow: TdProps['treeRow'] = {
      onCollapse: () => {},
      onToggleRowDetails: () => {},
      onCheckChange: (_event, isChecking) => {
        setSelectedNodeNames((prevSelected) => {
          const otherSelectedNodeNames = prevSelected.filter((name) => name === node.name);
          return !isChecking ? otherSelectedNodeNames : [...otherSelectedNodeNames, node.name];
        });
      },
      rowIndex,
      props: {
        isHidden,
        'aria-level': level,
        'aria-posinset': posinset,
        'aria-setsize': node.children ? node.children.length : 0,
        isChecked,
        checkboxId: `flat_checkbox_id_${node.name.toLowerCase().replace(/\s+/g, '_')}`,
        icon
      }
    };

    const childRows =
      node.children && node.children.length ? renderRows(node.children, level + 1, 1, rowIndex + 1, isHidden) : [];

    return [
      <TreeRowWrapper key={node.name} row={{ props: treeRow.props }}>
        <Td dataLabel={columnNames.name} treeRow={treeRow}>
          {node.name}
        </Td>
        <Td dataLabel={columnNames.branches}>{node.branches}</Td>
        <Td dataLabel={columnNames.prs}>{node.pullRequests}</Td>
        <Td dataLabel={columnNames.workspaces}>{node.workspaces}</Td>
      </TreeRowWrapper>,
      ...childRows,
      ...renderRows(remainingNodes, level, posinset + 1, rowIndex + 1 + childRows.length, isHidden)
    ];
  };

  return (
    <Table isTreeTable aria-label="Tree table" hasNoInset>
      <Thead>
        <Tr>
          <Th width={40}>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
        </Tr>
      </Thead>
      <Tbody>{renderRows(data)}</Tbody>
    </Table>
  );
};
