import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, TreeRowWrapper, TdProps } from '@patternfly/react-table';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

interface RepositoriesTreeNode {
  name: string;
  branches: string;
  pullRequests: string;
  workspaces: string;
  children?: RepositoriesTreeNode[];
}

export const TableTree: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const data: RepositoriesTreeNode[] = [
    {
      name: 'Repositories one',
      branches: 'Branch one',
      pullRequests: 'Pull request one',
      workspaces: 'Workplace one',
      children: [
        {
          name: 'Repositories two',
          branches: 'Branch two',
          pullRequests: 'Pull request two',
          workspaces: 'Workplace two',
          children: [
            {
              name: 'Repositories three',
              branches: 'Branch three',
              pullRequests: 'Pull request three',
              workspaces: 'Workplace three'
            },
            {
              name: 'Repositories four',
              branches: 'Branch four',
              pullRequests: 'Pull request four',
              workspaces: 'Workplace four'
            }
          ]
        },
        {
          name: 'Repositories five',
          branches: 'Branch five',
          pullRequests: 'Pull request five',
          workspaces: 'Workplace five'
        },
        {
          name: 'Repositories six',
          branches: 'Branch six',
          pullRequests: 'Pull request six',
          workspaces: 'Workplace six'
        }
      ]
    },
    {
      name: 'Repositories seven',
      branches: 'Branch seven',
      pullRequests: 'Pull request seven',
      workspaces: 'Workplace seven',
      children: [
        {
          name: 'Repositories eight',
          branches: 'Branch eight',
          pullRequests: 'Pull request eight',
          workspaces: 'Workplace eight'
        }
      ]
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

  const [expandedNodeNames, setExpandedNodeNames] = React.useState<string[]>(['Repositories one']);
  const [expandedDetailsNodeNames, setExpandedDetailsNodeNames] = React.useState<string[]>([]);
  const [selectedNodeNames, setSelectedNodeNames] = React.useState<string[]>([]);

  const getDescendants = (node: RepositoriesTreeNode): RepositoriesTreeNode[] => {
    if (!node.children || !node.children.length) {
      return [node];
    } else {
      let children: RepositoriesTreeNode[] = [];
      node.children.forEach((child) => {
        children = [...children, ...getDescendants(child)];
      });
      return children;
    }
  };

  const areAllDescendantsSelected = (node: RepositoriesTreeNode) =>
    getDescendants(node).every((n) => selectedNodeNames.includes(n.name));
  const areSomeDescendantsSelected = (node: RepositoriesTreeNode) =>
    getDescendants(node).some((n) => selectedNodeNames.includes(n.name));

  const isNodeChecked = (node: RepositoriesTreeNode) => {
    if (areAllDescendantsSelected(node)) {
      return true;
    }
    if (areSomeDescendantsSelected(node)) {
      return null;
    }
    return false;
  };

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
    const isExpanded = expandedNodeNames.includes(node.name);
    const isDetailsExpanded = expandedDetailsNodeNames.includes(node.name);
    const isChecked = isNodeChecked(node);
    let icon = <LeafIcon />;
    if (node.children) {
      icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;
    }

    const treeRow: TdProps['treeRow'] = {
      onCollapse: () =>
        setExpandedNodeNames((prevExpanded) => {
          const otherExpandedNodeNames = prevExpanded.filter((name) => name !== node.name);
          return isExpanded ? otherExpandedNodeNames : [...otherExpandedNodeNames, node.name];
        }),
      onToggleRowDetails: () =>
        setExpandedDetailsNodeNames((prevDetailsExpanded) => {
          const otherDetailsExpandedNodeNames = prevDetailsExpanded.filter((name) => name !== node.name);
          return isDetailsExpanded ? otherDetailsExpandedNodeNames : [...otherDetailsExpandedNodeNames, node.name];
        }),
      onCheckChange: (_event, isChecking) => {
        const nodeNamesToCheck = getDescendants(node).map((n) => n.name);
        setSelectedNodeNames((prevSelected) => {
          const otherSelectedNodeNames = prevSelected.filter((name) => !nodeNamesToCheck.includes(name));
          return !isChecking ? otherSelectedNodeNames : [...otherSelectedNodeNames, ...nodeNamesToCheck];
        });
      },
      rowIndex,
      props: {
        isExpanded,
        isDetailsExpanded,
        isHidden,
        'aria-level': level,
        'aria-posinset': posinset,
        'aria-setsize': node.children ? node.children.length : 0,
        isChecked,
        checkboxId: `checkbox_id_${node.name.toLowerCase().replace(/\s+/g, '_')}`,
        icon
      }
    };

    const childRows =
      node.children && node.children.length
        ? renderRows(node.children, level + 1, 1, rowIndex + 1, !isExpanded || isHidden)
        : [];

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
    <Table isTreeTable aria-label="Tree table">
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
