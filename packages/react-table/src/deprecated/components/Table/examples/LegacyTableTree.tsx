import React from 'react';
import { treeRow, IRow, OnTreeRowCollapse, OnCheckChange, OnToggleRowDetails } from '@patternfly/react-table';
import { Table, TableHeader, TableBody } from '@patternfly/react-table/deprecated';
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

export const LegacyTableTree: React.FunctionComponent = () => {
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

  const [expandedNodeNames, setExpandedNodeNames] = React.useState<string[]>(['Repositories one']);
  const [expandedDetailsNodeNames, setExpandedDetailsNodeNames] = React.useState<string[]>([]);
  const [selectedNodeNames, setSelectedNodeNames] = React.useState<string[]>([]);

  const getDescendants = (node: RepositoriesTreeNode): RepositoriesTreeNode[] =>
    [node].concat(...(node.children ? node.children.map(getDescendants) : []));
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

  // We index the tree nodes in the order of the table rows, for looking up by rowIndex
  const flattenedNodes: RepositoriesTreeNode[] = [];

  /**
    Recursive function which flattens the data into an array of flattened IRow objects
    params:
      - nodes - array of a single level of tree nodes
      - level - number representing how deeply nested the current row is
      - posinset - position of the row relative to this row's siblings
      - isHidden - defaults to false, true if this row's parent is expanded
      - currentRowIndex - position of the row relative to the entire table
  */
  const buildRows = (
    [node, ...remainingNodes]: RepositoriesTreeNode[],
    level = 1,
    posinset = 1,
    rowIndex = 0,
    isHidden = false
  ): IRow[] => {
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
    flattenedNodes.push(node);

    const childRows =
      node.children && node.children.length
        ? buildRows(node.children, level + 1, 1, rowIndex + 1, !isExpanded || isHidden)
        : [];

    return [
      {
        cells: [node.name, node.branches, node.pullRequests, node.workspaces],
        props: {
          isExpanded,
          isDetailsExpanded,
          isHidden,
          'aria-level': level,
          'aria-posinset': posinset,
          'aria-setsize': node.children ? node.children.length : 0,
          isChecked,
          icon
        }
      },
      ...childRows,
      ...buildRows(remainingNodes, level, posinset + 1, rowIndex + 1 + childRows.length, isHidden)
    ];
  };

  const onCollapse: OnTreeRowCollapse = (_event, rowIndex) => {
    const node = flattenedNodes[rowIndex];
    const isExpanded = expandedNodeNames.includes(node.name);
    setExpandedNodeNames((prevExpanded) => {
      const otherExpandedNodeNames = prevExpanded.filter((name) => name !== node.name);
      return isExpanded ? otherExpandedNodeNames : [...otherExpandedNodeNames, node.name];
    });
  };

  const onCheck: OnCheckChange = (_event, isChecking, rowIndex) => {
    const node = flattenedNodes[rowIndex];
    const nodeNamesToCheck = getDescendants(node).map((n) => n.name);
    setSelectedNodeNames((prevSelected) => {
      const otherSelectedNodeNames = prevSelected.filter((name) => !nodeNamesToCheck.includes(name));
      return !isChecking ? otherSelectedNodeNames : [...otherSelectedNodeNames, ...nodeNamesToCheck];
    });
  };

  const onToggleRowDetails: OnToggleRowDetails = (_event, rowIndex) => {
    const node = flattenedNodes[rowIndex];
    const isDetailsExpanded = expandedDetailsNodeNames.includes(node.name);
    setExpandedDetailsNodeNames((prevDetailsExpanded) => {
      const otherDetailsExpandedNodeNames = prevDetailsExpanded.filter((name) => name !== node.name);
      return isDetailsExpanded ? otherDetailsExpandedNodeNames : [...otherDetailsExpandedNodeNames, node.name];
    });
  };

  return (
    <Table
      isTreeTable
      aria-label="Tree table"
      cells={[
        {
          title: 'Repositories',
          cellTransforms: [treeRow(onCollapse, onCheck, onToggleRowDetails)]
        },
        'Branches',
        'Pull requests',
        'Workspaces'
      ]}
      rows={buildRows(data)}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
